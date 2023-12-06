const footerDiv = document.getElementById("footer-div")
if(footerDiv !== null && footerDiv !== undefined){

footerDiv.innerHTML=`
<footer class="main-footer">
<div class="container">
  <div id="footer">
  <div class="row">
    <div class="col-lg-3">
      <h4 class="footer-heading">Deluxe Printing</h4>
      <p>
      <i class="fa fa-location-arrow"></i> <strong>Sales Office</strong> <br>Al-Murar, Deira, Dubai - UAE<br>
            </p>
        <a href="https://goo.gl/maps/cuR6qUgpFU5S4CYp7" target="_blank" class="btn btn-template-main"><i class="fa fa-map-marker"></i> Sales Office Location</a><br>
      <h4 class="footer-heading">Deluxe Advertising</h4>
      <p>
      <i class="fa fa-location-arrow"></i> <strong>Factory</strong> <br>Al Qusais Industrial Area 2, Dubai - UAE<br>
        <a href="https://goo.gl/maps/WK1QCAEaXS7BHknr9" target="_blank" class="btn btn-template-main"><i class="fa fa-map-marker"></i> Factory Location</a>
            </p>
    </div>
    <div class="col-lg-3">
      <h4 class="footer-heading">Contact Us</h4>
      <i class="fa fa-phone"></i> +971 4 272 5202<br>
      <a href="mailto:print@dlxprint.com"><i class="fa fa-envelope"></i>  print@dlxprint.com</a> <br><br>
      <h4 class="footer-heading">Working Hours</h4>
      <p>9:00 am to 1:00 pm
      <br>
      2:00 pm to 7:00 pm
      <br>
      1:00 pm to 2:00 pm (Lunch Break)
      <br>
      Monday to Saturday
      </p>
      <hr class="d-block d-lg-none">
    </div>
    <div class="col-lg-3">
      <h4 class="footer-heading">Quick Links</h4>
        <ul class="list-inline">
          <li><a href="index.html"><i class="fa fa-caret-right"></i> Home</a></li>
          <li><a href="#"><i class="fa fa-caret-right"></i> About Us</a></li>
          <li><a href="#"><i class="fa fa-caret-right"></i> Printing Services</a></li>
          <li><a href="#"><i class="fa fa-caret-right"></i> Blogs</a></li>
          <li><a href="#"><i class="fa fa-caret-right"></i> Careers</a></li>
          <li><a href="#"><i class="fa fa-caret-right"></i> Terms</a></li>
          <li><a href="#"><i class="fa fa-caret-right"></i> Privacy</a></li>
          <li><a href="#"><i class="fa fa-caret-right"></i> Contact Us</a></li>
        </ul>
    </div>
    <div class="col-lg-3">				
      <img src="images/delivery-van.webp" alt="Printing in DubaiPrinting Services Delivery in Dubai" style="width: 230px; height: auto;" class="img-responsive" id="inquiry-form" loading="lazy"><br>
      <h4 class="footer-heading">Follow Us</h4>
        <div class="social-custom" style="font-size: 18pt">
          <div class="d-inline-block mr-2"><a href="https://www.facebook.com/deluxeprintingllc" target="_blank"><i class="fa fa-facebook-square"></i></a></div>
          <div class="d-inline-block mr-2"><a href="https://www.instagram.com/dlxprint/" target="_blank"><i class="fa fa-instagram"></i></a></div>
          <div class="d-inline-block mr-2"><a href="https://twitter.com/dlxprint" target="_blank"><i class="fa fa-twitter-square"></i></a></div>
          <div class="d-inline-block mr-2"><a href="https://www.linkedin.com/company/deluxe-printing-dubai" target="_blank"><i class="fa fa-linkedin-square"></i></a></div>
          <div class="d-inline-block mr-2"><a href="https://youtube.com/@deluxeprinting6429" target="_blank"><i class="fa fa-youtube-play"></i></a></div>
        </div>
    </div>
  </div>
  </div>
</div>
<div class="copyrights">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 text-center-md">
        <p>Copyright © Deluxe Digital Advertising LLC 2023 | All Rights Reserved</p>
        <p>Rights to the information contained in this site are held by Deluxe Digital Advertising, Dubai. Copying any or part(s) of our site, will result in a court case against you and you will be prosecuted according to the Federal Law No. (7) of 2002 of the UAE on Copyrights Infringement and related rights.</p>
      </div>
      <div class="col-lg-4 text-center">
        <p>Website developed by <a style="color:#d93800;" href="https://www.dlxprint.com">Deluxe</a></p>
        <!-- Please do not remove the backlink to us unless you purchase the Attribution-free License at https://bootstrapious.com/donate. Thank you. -->
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel" style="color: black;">Inquiry Form</h1>
        <button type="button" class="btn btn-close" data-bs-dismiss="modal" aria-label="Close">
          <i class="fa-solid fa-x"></i>
        </button>
      </div>
      <div class="modal-body">
        <form role="form" method="post" id="reused_form" style="width: 100%; padding: 0px;">
        <div class="style5">
          <div class="form-group">
            <input type="text" required name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            <div class="validation"></div>
          </div>
          <div class="form-group">
            <input type="email" class="form-control" required name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
            <div class="validation"></div>
          </div>
          <div class="form-group">
            <input type="mobile" class="form-control" required name="mobile" id="mobile" placeholder="Your Contact Number" data-rule="minlen:4" data-msg="Please enter your contact number" />
            <div class="validation"></div>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" required name="requirement" id="requirement" placeholder="Required Item" data-rule="minlen:4" data-msg="Regarding Item" />
            <div class="validation"></div>
          </div>
          <div class="form-group">
            <textarea class="form-control" required name="message" rows="4" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
            <div class="validation"></div>
          </div>
          <div class="row">
            <div class="col-sm-12" style="left: 0px; top: 0px; width: 200px; height: auto;">
              <div style="width: 120px"><img src="captcha.php" id="captcha_image"/></div>
              <span><a id="captcha_reload" href="#" ><font size="2">Refresh</font></a></span>
              <div class="form-group">
                <span><font size="2">Enter above text here:</font></span>
                <input type="text" class="form-control" required id="captcha" name="captcha" style="width: 200px">
              </div>
            </div>
          </div>
          <div>
            <button type="submit" class="btn btn-template-main">Send Message</button></div>
          </div>
          </form>

      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
    </div>
  </div>
</div>
</footer>


<button onclick="topFunction()" id="back-to-top" title="Go to top">
  <i class="fa-solid fa-chevron-up"></i>
</button>

<a href="https://api.whatsapp.com/send?phone=+971552314573&text=Hello!" target="_blank"  id="fixed-whatsapp-icon" >
<i class="fa-brands fa-whatsapp"></i>
</a>
`
}

let bottomSlider = document.getElementById("bottumDiv")
if(bottomSlider !== null && bottomSlider !== undefined){
  bottomSlider.innerHTML=`
<div class="bottumContent">
    <div >
      <!-- <strong >
        <i class="fa-solid fa-headset"></i>
        Need Assistance?
      </strong>
      <br> -->
      <p style="display: flex; margin-right: -5px; align-items: center;">
        <i class="fa fa-phone" >
        </i> +971 4 272 5202 <br>
      </p>
      <a style="color: black; display: flex; align-items: center;" href="mailto:print@dlxprint.com"><i class="fa fa-envelope" ></i>print@dlxprint.com</a> 
    </div>
    <a href="#" class="btn btn-template-main inquiry-btn"  data-bs-toggle="modal" data-bs-target="#exampleModal">Quick Inquiry</a>

    <span class="social-media-section">				
      <h6 style="margin-right: 10px; font-weight: 600;"> Follow Us</h6>
      <div  style="font-size: 23px">
          <div class="d-inline-block mr-2"><a href="https://www.facebook.com/deluxeprintingllc" target="_blank"><i class="fa fa-facebook-square"></i></a></div>
          <div class="d-inline-block mr-2"><a href="https://www.instagram.com/dlxprint/" target="_blank"><i class="fa fa-instagram"></i></a></div>
          <div class="d-inline-block mr-2"><a href="https://twitter.com/dlxprint" target="_blank"><i class="fa fa-twitter-square"></i></a></div>
          <div class="d-inline-block mr-2"><a href="https://www.linkedin.com/company/deluxe-printing-dubai" target="_blank"><i class="fa fa-linkedin-square"></i></a></div>
          <div class="d-inline-block mr-2"><a href="https://youtube.com/@deluxeprinting6429" target="_blank"><i class="fa fa-youtube-play"></i></a></div>
      </div>
    </span>
</div>
`
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.body.style.transition=" all .5s"
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  document.documentElement.style.transition=" all .5s"
}
// Get the button:
let mybutton = document.getElementById("back-to-top");
// mybutton.style.color ="cyan"
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}