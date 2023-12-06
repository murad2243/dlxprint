<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
/*
Tested working with PHP5.4 and above (including PHP 7 )

 */
require_once './vendor/autoload.php';

use FormGuide\Handlx\FormHandler;


$pp = new FormHandler(); 

$validator = $pp->getValidator();
$validator->fields(['name','email'])->areRequired()->maxLength(50);
$validator->field('email')->isEmail();
$validator->field('message')->maxLength(6000);

 
$pp->requireCaptcha();

$pp->sendEmailTo('print@dlxprint.com'); // ← Your email here

$mailer = $pp->getMailer();

 $mailer->SMTPDebug = 2;                                 // Enable verbose debug output
    $mailer->isSMTP();                                      // Set mailer to use SMTP
    $mailer->Host = 'mail.belgaumonline.org';  // Specify main and backup SMTP servers
    $mailer->SMTPAuth = true;                               // Enable SMTP authentication
    $mailer->Username = 'noreply@belgaumonline.org';                 // SMTP username
    //$mailer->Password = '*Ttf%mah99#';                        // SMTP password !dlxvat22%    *mah%tyb40#
    $mailer->Password = 'Noreply123$$';                        // SMTP password
    $mailer->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mailer->Port = 587;   
    $mailer->isHTML(true); 


$mailer->setFrom('noreply@belgaumonline.org','Deluxe Printing',false);
//$mailer->setFrom('belgaumonline@gmail.com','Deluxe Printing',false);
 $mailer->addReplyTo($_POST['email'], $_POST['name']);
 $mailer->addBCC('sales@belgaumit.com');
 
  //$mailer->addAddress('belgaumonline@gmail.com','inquiry@dlxprint.com'); 
 
 $mailer->Subject = 'Printing Inquiry : ' .$_POST['name'];

echo $pp->process($_POST);
//echo "Success";