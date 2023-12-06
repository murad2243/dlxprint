<?php
namespace FormGuide\Handlx;
use FormGuide\PHPFormValidator\FormValidator;
use PHPMailer;
use FormGuide\Handlx\Microtemplate;
use Gregwar\Captcha\CaptchaBuilder;

/**
 * FormHandler 
 *  A wrapper class that handles common form handling tasks
 *  	- handles Form validations using PHPFormValidator class
 *  	- sends email using PHPMailer 
 *  	- can handle captcha validation
 *  	- can handle file uploads and attaching the upload to email
 *  	
 *  ==== Sample usage ====
 *   $fh = FormHandler::create()->validate(function($validator)
 *   		{
 *   	 		$validator->fields(['name','email'])
 *   	 				  ->areRequired()->maxLength(50);
 *   	       	$validator->field('email')->isEmail();
 *   	       	
 *           })->useMailTemplate(__DIR__.'/templ/email.php')
 *           ->sendEmailTo('you@website.com');
 *           
 *   $fh->process($_POST);
 */
class FormHandler
{
	private $emails;
	public $validator;
	private $mailer;
	private $mail_template;
	private $captcha;
	private $attachments;
	private $recaptcha;

	public function __construct()
	{
		$this->emails = array();
		$this->validator = FormValidator::create();
		$this->mailer = new PHPMailer;
		$this->mail_template='';

		$this->mailer->Subject = "Contact Form Submission ";

		$host = isset($_SERVER['SERVER_NAME'])?$_SERVER['SERVER_NAME']:'localhost';
        $from_email ='forms@'.$host;
   		$this->mailer->setFrom($from_email,'Contact Form',false);  

   		$this->captcha = false;   

   		$this->attachments = [];

   		$this->recaptcha =null;


	}

	/**
	 * sendEmailTo: add a recipient email address
	 * @param  string/array $email_s one or more emails. If more than one emails, pass the emails as array
	 * @return The form handler object itself so that the methods can be chained
	 */
	public function sendEmailTo($email_s)
	{
		if(is_array($email_s))
		{
			$this->emails =array_merge($this->emails, $email_s);
		}
		else
		{
			$this->emails[] = $email_s;	
		}
		
		return $this;
	}

	public function useMailTemplate($templ_path)
	{
		$this->mail_template = $templ_path;
		return $this;
	}

	/**
	 * [attachFiles find the file uplods and attach to the email]
	 * @param  array $fields The array of field names
	  */
	public function attachFiles($fields)
	{
		$this->attachments = array_merge($this->attachments, $fields);
		return $this;
	}

	public function getRecipients()
	{
		return $this->emails;
	}

	/**
	 * [validate add Validations. This function takes a call back function which receives the PHPFormValidator object]
	 * @param  function $validator_fn The funtion gets a validator parameter using which, you can add validations 
	 */
	public function validate($validator_fn)
	{
		$validator_fn($this->validator);
		return $this;
	}

	public function requireReCaptcha($config_fn=null)
	{
		$this->recaptcha = new ReCaptchaValidator();
		$this->recaptcha->enable(true);
		if($config_fn)
		{
			$config_fn($this->recaptcha);	
		}
		return $this;
	}
	public function getReCaptcha()
	{
		return $this->recaptcha;
	}

	public function requireCaptcha($enable=true)
	{
		$this->captcha = $enable;
		return $this;
	}

	public function getValidator()
	{
		return $this->validator;
	}

	public function configMailer($mailconfig_fn)
	{
		$mailconfig_fn($this->mailer);
		return $this;
	}

	public function getMailer()
	{
		return $this->mailer;
	}

	public static function create()
	{
		return new FormHandler();
	}

	public function process($post_data)
	{
		if($this->captcha === true)
		{
			$res = $this->validate_captcha($post_data);
			if($res !== true)
			{
				return $res;
			}
		}
		if($this->recaptcha !== null &&
		   $this->recaptcha->isEnabled())
		{
			if($this->recaptcha->validate() !== true)
			{
				return json_encode([
				'result'=>'recaptcha_validation_failed',
				'errors'=>['captcha'=>'ReCaptcha Validation Failed.']
				]);
			}
		}

		$this->validator->test($post_data);

		//if(false == $this->validator->test($post_data))
		if($this->validator->hasErrors())
		{
			return json_encode([
				'result'=>'validation_failed',
				'errors'=>$this->validator->getErrors(/*associative*/ true)
				]);
		}

		if(!empty($this->emails))
		{
			foreach($this->emails as $email)
			{
				$this->mailer->addAddress($email);
			}
			$this->compose_mail($post_data);

			if(!empty($this->attachments))
			{
				$this->attach_files();
			}

			if(!$this->mailer->send())
			{
				return json_encode([
					'result'=>'error_sending_email',
					'errors'=> ['mail'=> $this->mailer->ErrorInfo]
					]);			
			}
		}
		
		return json_encode(['result'=>'success']);
	}

	private function validate_captcha($post)
	{
		@session_start();
		if(empty($post['captcha']))
		{
			return json_encode([
						'result'=>'captcha_error',
						'errors'=>['captcha'=>'Captcha code not entered']
						]);
		}
		else
		{
			$usercaptcha = trim($post['captcha']);

			if($_SESSION['user_phrase'] !== $usercaptcha)
			{
				return json_encode([
						'result'=>'captcha_error',
						'errors'=>['captcha'=>'Captcha code does not match']
						]);		
			}
		}
		return true;
	}


	private function attach_files()
	{
		
		foreach($this->attachments as $file_field)
		{
			if (!array_key_exists($file_field, $_FILES))
			{
				continue;
			}
			$filename = $_FILES[$file_field]['name'];

    		$uploadfile = tempnam(sys_get_temp_dir(), sha1($filename));

    		if (!move_uploaded_file($_FILES[$file_field]['tmp_name'], 
    			$uploadfile))
    		{
    			continue;
    		}

    		$this->mailer->addAttachment($uploadfile, $filename);
		}
	}

	private function compose_mail($post)
	{
		$content = "Form submission: \n\n";
		foreach($post as $name=>$value)
		{
			$content .= ucwords($name).":\n";
			$content .= "$value\n\n";
		}
		
		$content="<table width=90% border=1 bordercolor=#dbdbdb cellpadding=0.5 cellspacing=0.5 align=center><tr><td><table cellspacing=0 cellpadding=0 border=0 marginwidth=0 width = 100%><tr><td width=80%><img style=display:block  src=http://www.dlxprint.com/dlxlogo.jpg alt=Dlxprint border=0 width=323 height=123></a></td></tr></table><blockquote> The following inquiry is received from the Signage page.</blockquote><BR>&nbsp;&nbsp;&nbsp;<table border=1 width=568 style=border-collapse: collapse bordercolor=#A8D1FB cellpadding=7 height=32 align=center>
<tr>
<td bgcolor=#FFFFFF width=25%><font face=verdana size=2 color=#0B3E71><b>Customer Name </b></font></td>
<td bgcolor=#FFFFFF width=75%>".$_POST['name']."</td>
</tr>
<tr>
<td bgcolor=#FFFFFF><font face=verdana size=2 color=#0B3E71><b>Email</b></font></td>
<td bgcolor=#FFFFFF><a href=mailto:".$_POST['email'].">".$_POST['email']."</a></td>
</tr><tr>
<td bgcolor=#FFFFFF><font face=verdana size=2 color=#0B3E71><b>Telephone</b></font></td>
<td bgcolor=#FFFFFF>".$_POST['mobile']."</td>
</tr>
<tr>
<td bgcolor=#FFFFFF><font face=verdana size=2 color=#0B3E71><b>Required Item</b></font></td>
<td bgcolor=#FFFFFF>".$_POST['requirement']."</td>
</tr>
<td bgcolor=#FFFFFF><font face=verdana size=2 color=#0B3E71><b>Message</b></font></td>
<td bgcolor=#FFFFFF>".$_POST['message']."</td>
</tr></table><br><br>
</table><br> Regards,<br><font color = #0B3E71><b>DLXPRINT.COM</b></font> <br><br></td></tr></table>";
		$this->mailer->Body  = $content;
	}
}