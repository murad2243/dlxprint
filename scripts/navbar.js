
function navbar(){
    let navbarDiv = document.getElementById("navbar-div")
    if(navbarDiv){
    navbarDiv.innerHTML+=`
    <div class="nav-contact desktop-view">
    <a href="index.html" aria-label="dlxprint">
      <img src="images/black_logo.png" class="logo" alt="Deluxe Printing Dubai">
    </a>
    <!-- <div style="display: flex;">
      <div class="contact-div">
        <a class="contact-info" href="mailto:print@dlxprint.com">
          <i class="fa fa-envelope"></i> 
           Print@dlxprint.com
        </a>
        <div class="contact-info" >
          <i class="fa-solid fa-phone"></i>
          +971 4 272 5202
        </div>
      </div>
      <a href="#" class="btn btn-template-main desktop-view" style="margin: 5px; height: fit-content; ">Quick Inquiry</a>
    </div> -->
    <form class="form-inline">
      <input  id="searchright" onkeyup="handleSearch(this.value)" class="form-control mr-sm-2" type="search" style="width: 400px; border-radius: 25px;" placeholder="Search" aria-label="Search">
      <button class="btn  my-2 my-sm-0 btn-template-main" style="margin-left: -50px;" type="submit">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  </div>
  <div class="navbar-container">
    <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
            <button class="navbar-toggler " type="button"  style="color: black; padding: 5px; " data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon" >
                  <i class="fa-solid fa-bars"></i>
              </span>
            </button>
            <a class="mobile-view"  href="index.html" aria-label="dlxprint" style="width: fit-content; margin: auto;">
              <img src="images/black_logo.png" style=" margin-left: -20px;" class="logo" alt="Deluxe Printing Dubai">
            </a>
        <div class="collapse navbar-collapse " id="main_nav">
          <div class="nav-opt">
            <ul style="display: flex; justify-content: space-between; width: 100%;" class="navbar-nav">
              <!-- <div class="form-inline mobile-view mobile-search-bar " style="display: flex;">
                <input  id="searchright" onkeyup="handleSearch(this.value)" class="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-dark my-2 my-sm-0"  type="submit">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div> -->
              <div class="mobile-view">
                <div class="form-inline"  style="display: flex; width: 95%; margin: auto;" >
                  <input style="border-radius: 25px;"  id="searchright" onkeyup="handleSearch(this.value)" class="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search">
                  <button class="btn    btn-template-main" style="margin-left: -43px;"  type="submit">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
               <li class="home-btn">
                <div style="display: flex; justify-content: space-between; margin:0px auto; width: 95%;">
                  <a href="index.html" style="display: flex; gap: 10px; align-items: center; " class="nav-link home-link">
                    <i class="fa-solid fa-house" ></i>
                      Home
                  </a>
                  
                  <!-- <button class="navbar-toggler" type="button"  style="color: black; padding: 5px; " data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" >
                      <i class="fa-solid fa-xmark"></i>
                    </span>
                  </button> -->
                </div>
               </li>
               <li class="nav-item dropdown">
                 <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> Print & Marketing   </a>
                 <div class="dropdown-menu  ">
                     <div class="submenu ">
                      <div class="submenu-info">
                        <div class="mobile-view dropdown-class">
                          <!-- <a href="digital-printing-services-dubai.html" class="nav-opt-heading">Print & Marketing</a> -->
                          <!-- <br> -->
                          <a href="digital-printing-services-dubai.html" class="nav-sub-heading" >Stationery & Corporate Identity</a>

                          <div class=" navbar-option-product  ">
                            <a href="#">
                              <img src="images/navbarImages/business_cards.webp" alt="">
                              <p>Business Cards</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/letterheads.webp" alt="">
                              <p>Letterheads </p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/envelopes.webp" alt="">
                              <p>envelopes</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/folders.webp" alt="">
                              <p>Folders</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/notepads.webp" alt="">
                              <p>Notepads</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/nootbooks.jpg" alt="">
                              <p>Notebook & Journal </p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/binding.webp" alt="">
                              <p>Bindind </p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/thank_you_card.jpg" alt="">
                              <p>Thank You Card </p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/certificates_printing_dubai.webp" alt="">
                              <p>Certificates </p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/invoice_books_printing_dubai.webp" alt="">
                              <p>Voucher Books </p>
                            </a>
                          </div>

                          <p class="nav-sub-heading" >Seals</p>
                          <div class=" navbar-option-product  ">
                            <a href="#">
                              <img src="images/navbarImages/self_ink_stamps_dubai (1).webp" alt="">
                              <p>Self Ink Stamps</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/wax_seal_dubai_03.webp" alt="">
                              <p>Wax Seal</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/embossing_seal_dubai.webp" alt="">
                              <p>Embossing seal </p>
                              </a>
                            </div>
                            <p class="nav-sub-heading" >Brochures & Flyers</p>
                          <div class=" navbar-option-product">
                            <a href="#">
                              <img src="images/navbarImages/brochures_printing_dubai.webp" alt="">
                              <p>Brochures</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/flyers_printing_dubai.webp" alt="">
                              <p>Flyers</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/catalogue_printing_dubai_banner.webp" alt="">
                              <p>Booklets & Catalogues</p>
                            </a>
                          </div>
                          <p class="nav-sub-heading" >CD / DVD</p>
                          <div class=" navbar-option-product">
                            <a href="#">
                              <img src="images/navbarImages/cd_printing_dubai.webp" alt="">
                              <p>CD / DVD printing</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/cd_cover_printing_dubai.webp" alt="">
                              <p>CD / DVD Covers</p>
                            </a>
                          </div>
                          <p class="nav-sub-heading" >Crowd Promations</p>
                          <div class=" navbar-option-product">
                            <a href="#">
                              <img src="images/navbarImages/square_hang_tag_printing_dubai_2.webp" alt="">
                              <p>Hang Tags </p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/compliment_slips_printing_dubai.webp" alt="">
                              <p>Compliment Slips</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/coupons_printing_dubai.webp" alt="">
                              <p>Tickets & Coupons</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/scratch_and_win_card_printing_dubai.jpg" alt="">
                              <p>Scratch & Win Coupons</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/tent_cards_printing_dubai.jpg" alt="">
                              <p>Tent Cards</p>
                            </a>
                          </div>
                          <p class="nav-sub-heading" >Stickers</p>
                          <div class=" navbar-option-product">
                            <a href="#">
                              <img src="images/navbarImages/die_cut_bottle_stickers_dubai.jpg" alt="">
                              <p>Die Cut Sticker</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/print_and_cut_stickers_dubai.webp" alt="">
                              <p>Print & Cut Sticker</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/paper_sticker_printing_dubai.webp" alt="">
                              <p>Paper Sticker Gloss / Matt</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/pvc_transparent_stickers_printing_dubai.webp" alt="">
                              <p>Transparent Sticker</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/pvc_stickers_dubai.webp" alt="">
                              <p>PVC White Sticker</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/white_ink_stickers.webp" alt="">
                              <p>White Ink Sticker</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/epoxy_stickers.webp" alt="">
                              <p>Epoxy Sticker</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/windshield_stickers_printing_dubai.webp" alt="">
                              <p>Windshield Sticker</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/stencil_stickers_dubai.webp" alt="">
                              <p>Stencil Sticker</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/foil_stickers_dubai.jpg" alt="">
                              <p>Foil Sticker</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/metal_stickers_dubai_07.jpg" alt="">
                              <p>Metal Sticker</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/embossing_seal_dubai.webp" alt="">
                              <p>Embossing Seal Sticker</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/helmet_stickers_dubai.webp" alt="">
                              <p>Helmet Sticker</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/hologram_sticker_printing_dubai_1.jpg" alt="">
                              <p>Windshield Sticker</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/windshield_stickers_printing_dubai.webp" alt="">
                              <p>Hologram Sticker</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/kraft_stickers_printing_dubai.jpg" alt="">
                              <p>Kraft Paper Sticker</p>
                            </a>
                            <a href="#">
                              <img src="images/navbarImages/yacht_stickers_dubai.webp" alt="">
                              <p>Boat / Yachts Sticker</p>
                            </a>
                          </div>




                        </div>
                        <div class="dropdown-class desktop-view">
                          <a href="digital-printing-services-dubai.html" class="nav-opt-heading">Print & Marketing</a>
                          <a href="digital-printing-services-dubai.html" class="nav-sub-heading" >Stationery & Corporate Identity</a>
                          <a onmouseenter="handleNavImage(event,'images/navbarImages/business_cards.webp','BUSSINESS CARDS')" href="digital-business-cards.html"> Bussiness Cards</a>
                          <a onmouseenter="handleNavImage(event,'images/navbarImages/letterheads.webp')" href="letter-heads-printing-dubai.html"> letterheads</a>
                          <a onmouseenter="handleNavImage(event,'images/navbarImages/envelopes.webp')" href="envelopes-printing-dubai.html">Envelopes</a>
                          <a onmouseenter="handleNavImage(event,'images/navbarImages/folders.webp')" href="folders-printing-dubai.html">Folders</a>
                          <a onmouseenter="handleNavImage(event,'images/navbarImages/letterheads.webp')" href="notepads-printing-dubai.html"> Notepads</a>
                          <a href="customized-notebooks-dubai.html">Notebook & Journal</a>
                          <a onmouseenter="handleNavImage(event,'images/navbarImages/binding.webp')" href="binding.html">Binding</a>
                          <a onmouseenter="handleNavImage(event,'images/navbarImages/notepads.webp')" href="thank-you-cards-printing-dubai.html">Thank You Card</a>
                          <a onmouseenter="handleNavImage(event,'images/navbarImages/thank_you_card.jpg')" href="certificates-printing-dubai.html">Certificates</a>
                          <a href="calendars-printing-dubai.html">Calendars </a>
                          <a href="digital-printing-services-dubai.html#voucherbooks">Voucher Books</a>
                          <a href="digital-printing-services-dubai.html#seals" class="nav-sub-heading">Seals</a>
                          <a href="stamps-dubai.html">Self Ink Stamps</a>
                          <a href="wax-seal-dubai.html">Wax Seal</a>
                          <a href="embossing-seal-dubai.html">Embossing Seal </a>
                        </div>
                        <div class="dropdown-class desktop-view">
                          <a href="digital-printing-services-dubai.html#brouchersandflyers" class="nav-sub-heading" >Brochures & Flyers </a>
                          <a href="brochures-printing-dubai.html">Brochures</a>
                          <a href="flyers-printing-dubai.html">Flyers</a>
                          <a href="catalogues-printing-dubai.html">Booklets & Catalogues</a>
                          <a href="digital-printing-services-dubai.html#cd_dvd" class="nav-sub-heading">CD / DVD</a>
                          <a href="cd-printing-dubai.html">CD / DVD Printing</a>
                          <a href="cd-covers-printing-dubai.html">CD / DVD Covers</a>
                          <a href="digital-printing-services-dubai.html#hangtags" class="nav-sub-heading">Hang Tangs</a>
                          <a href="digital-printing-services-dubai.html#crowd_promotions" >Crowd Promations</a>
                          <a href="compliment-slips-dubai.html">Compliment Slips</a>
                          <a href="coupons-printing-dubai.html">Tickets & Coupons</a>
                          <a href="scratch-win-cards-dubai.html">Scratch & Win Coupons</a>
                          <a href="tent-cards-dubai.html">Tent Cards </a>
                        </div>
                        <div class="dropdown-class desktop-view">
                        <a href="stickers-printing-dubai.html" class="nav-sub-heading">Stickers </a>
                        <a href="stickers-prices.html">Die Cut Sticker</a>
                        <a href="print-and-cut-stickers-dubai.html">Print & Cut Stickers/a>
                        <a href="paper-stickers-dubai.html">Paper Sticker Gloss / Matt</a>
                        <a href="transparent-stickers-dubai.html">Transparent Sticker</a>
                        <a href="pvc-stickers-dubai.html">PVC White Sticker</a>
                        <a href="white-ink-stickers-dubai.html">White Ink Sticker</a>
                        <a href="epoxy-stickers-dubai.html">Epoxy Sticker</a>
                        <a href="windshield-stickers-dubai.html">Windshield Sticker</a>
                        <a href="stencil-stickers-dubai.html">Stencil Sticker</a>
                        <a href="foil-stickers-dubai.html">Foils Sticker</a>
                        <a href="metal-stickers-dubai.html">Metal Sticker</a>
                        <a href="embossing-seal-dubai.html#seal-stickers">Embossing Seal Sticker</a>
                        <a href="helmet-stickers-dubai.html">Helmet Sticker</a>
                        <a href="hologram-stickers-printing-dubai.html">Halogram Sticker</a>
                        <a href="kraft-paper-stickers-dubai.html">Kraft Paper Sticker</a>
                        <a href="boat-yacht-sticker-dubai.html">Boat / Yachts Sticker</a>
                        </div>
                      </div>
                        <div class="dropdown-class">
                          <div class="nav-img-container">
                            <img class="navbar-img" id="nav-img" src="images/navbarImages/business_cards.webp" alt="Printing in Dubai">
                            <h6 class="navbar-img-text" id="nav-img-text">Bussiness Cards</h6>
                          </div>
                          <h6>Most Popular</h6>
                          <div class="nav-products">
                            <a href="digital-business-cards.html">
                            <div>

                                <img src="images/navbarImages/business_cards.webp" alt="Business Cards Printing in Dubai">
                                <p>Bussiness Cards </p>
                              </div>
                            </a>
                            <a href="stickers-printing-dubai.html">
                              <div>
                                <img src="images/print&marketing/stickers-printing-dubai.webp" alt="Catalogues Printing in Dubai">
                                <p>Stickers</p>
                              </div>
                            </a>
                            <a href="flyers-printing-dubai.html">
                              <div>
                                <img src="images/print&marketing/flyers_printing_dubai.webp" alt="Self Ink Stamps Dubai">
                                <p>Stamps</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                 </div>
               </li>
               <li class="nav-item dropdown">
               <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  Fabric & Fashion</a>
               <div class="dropdown-menu">
                 <div class="submenu">
                  <div class="submenu-info">
                    <div class="dropdown-class">
                      <a href="fabric-and-fashion-printing-dubai.html" class="nav-opt-heading" >Textile Printing </a>
                      <a href="fabric-and-fashion-printing-dubai.html#fashion" class="nav-sub-heading">Fashion</a>
                      <a href="scarf-fashion-dubai.html">Scarf</a>
                      <a href="sheila-fashion-dubai.html">Sheila</a>
                      <a href="bandana-fashion-dubai.html">Bandana</a>
                      <a href="hair-scarf-printing-dubai.html">Hair Scarf</a>
                      <a href="abaya-fashion-dubai.html">Abaya</a>
                      <a href="sarong-fashion-dubai.html">Sarong</a>
                      <a href="beach-shorts-fashion-dubai.html">Beach Shorts</a>
                      <a href="pocket-handkerchief-fashion-dubai.html">Pocket Handkerchief</a>
                      <a href="scrunchies-fashion-dubai.html">Scrunchie</a>
                      <a href="bag-scraf-fashion-dubai.html">Bag Scarf</a>
                    </div>
                    <div class="dropdown-class">
                    <a href="fabric-and-fashion-printing-dubai.html#softfurnishing" class="nav-sub-heading" >Soft Furnishing </a>
                    <a href="soft-furnish-pillow-cushion-printing-dubai.html">Decarative Pillows</a>
                    <a href="soft-furnish-pillow-cushion-printing-dubai.html#floor_cushion">Floor Cushion</a>
                    <a href="soft-furnish-pillow-cushion-printing-dubai.html#floor_cushion">Tiny Cushion</a>
                    <a href="soft-furnish-pillow-cushion-printing-dubai.html#bolster_pillow">Bolster Pillow</a>
                    <a href="soft-furnish-bean-bag-dubai.html">Bean Bags</a>
                    <a href="blanket-soft-furnish-dubai.html">Blanket</a>
                    <a href="fabric-wrap-dubai.html">Fabric Wrap</a>
                    <a href="fabric-and-fashion-printing-dubai.html#dining" class="nav-sub-heading">Dining</a>
                    <a href="dining-table-placemat-dubai.html">Placemat</a>
                    <a href="table-napkin-dubai.html">Table Napkin</a>
                    <a href="dining-table-cloth-dubai.html">Dinning Table Cloth</a>
                    </div>
                    <div class="dropdown-class">
                    <a href="fabric-and-fashion-printing-dubai.html#lifestyle" class="nav-sub-heading" >Lifestyle </a>
                    <a href="armband-printing-dubai.html">Armband</a>
                    <a href="sash-fashion-dubai.html">Sash</a>
                    <a href="hand-umbrella-printing-dubai.html">Umbrella</a>
                    <a href="custom-face-mask-dubai.html#smartfit">Face Masks</a>
                    <a href="dining-apron-dubai.html">Apron</a>
                    <a href="fabric-and-fashion-printing-dubai.html#pouches" class="nav-sub-heading">Pouches</a>
                    <a href="adraw-string-pouches-dubai.html">Drawstring Pouches</a>
                    <a href="all-fabrics-printing-dubai.html" class="nav-sub-heading">Fabric Range</a>
                    <a href="all-pattern-templates.html" class="nav-sub-heading">Patterns</a>
                    </div>
                  </div>
                  <div class="dropdown-class">
                    <div class="nav-img-container">
                      <img class="navbar-img" id="nav-img" src="images/navbarImages/business_cards.webp" alt="Printing in Dubai">
                      <h6 class="navbar-img-text" id="nav-img-text">Bussiness Cards</h6>
                    </div>
                    <h6>Most Popular</h6>
                    <div class="nav-products">
                      <div>
                        <img src="images/navbarImages/binding.webp" alt="Binding in Dubai">
                        <p>Binding</p>
                      </div>
                      <div>
                        <img src="images/navbarImages/business_cards.webp" alt="Business Cards Printing in Dubai">
                        <p>Business Cards</p>
                      </div>
                      <div>
                        <img src="images/navbarImages/envelopes.webp" alt="Business Cards in DubaiEnvelopes Printing in Dubai">
                        <p>Envelopes</p>
                      </div>
                    </div>
                  </div>
                  </div>
               </div>
             </li>
               <li class="nav-item dropdown">
                 <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">Office & Store Branding </a>
                 <div class="dropdown-menu" style="margin-left: -100px;">
                  <div class="submenu">
                   
                  <div class="submenu-info">
                  <div class="dropdown-class">
                    <a href="office-store-branding-printing-dubai.html" class="nav-opt-heading" >Office & Store Branding </a>
                    <a href="office-store-branding-printing-dubai.html" class="nav-sub-heading">Frosted Sticker</a>
                    <a href="frosted-glass-sticker.html#reverse_cut">Reserse Cut Frosted Sticker</a>
                    <a href="frosted-glass-sticker.html#standard_cut">Standard Cut Frosted Sticker</a>
                    <a href="frosted-glass-sticker.html#printed">Printed Frosted Sticker</a>
                    <a href="frosted-glass-sticker.html#blank">Blank Frosted Sticker</a>
                    <a href="office-store-branding-printing-dubai.html#window_branding" class="nav-sub-heading">Window Branding</a>
                    <a href="window-vinyl-lettering-dubai.html">Window Vinyl Letterning</a>
                    <a href="window-graphics-dubai.html">Window Graphics</a>
                    <a href="one-way-vision-sticker-dubai.html">One Way Vision Sticker</a>
                    <a href="decorative-window-film-dubai.html">Window Films</a>
                    <a href="office-store-branding-printing-dubai.html#floor_sticker" class="nav-sub-heading">Floor Sticekr</a>
                </div>
                <div class="dropdown-class">
                  <a href="office-store-branding-printing-dubai.html#wallbranding" class="nav-sub-heading" >Wall Branding </a>
                  <a href="wall-vinyl-lettering-dubai.html">Wall Vinyl Lettering</a>
                  <a href="wall-graphics-dubai.html">Wall Graphics</a>
                  <a href="office-store-branding-printing-dubai.html#walldecor" class="nav-sub-heading">Wall Décor</a>
                  <a href="wallpaper-printing-dubai.html">Home Wallpaper</a>
                  <a href="office-store-branding-printing-dubai.html#canvas" class="nav-sub-heading">Wall frames</a>
                  <a href="canvas-printing-dubai.html">Canvas</a>
                  <a href="wooden-frames-printing-dubai.html">Wooden</a>
                  <a href="acrylic-frames-printing-dubai.html">Acrylic</a>
                  <a href="metal-frames-printing-dubai.html">Metal Art</a>
                  <a href="office-store-branding-printing-dubai.html#posters" class="nav-sub-heading">Posters</a>
                  <a href="office-store-branding-printing-dubai.html#repositionable_cling">Repositionable Cling</a>
                </div>
                <div class="dropdown-class">
                  <a href="office-store-branding-printing-dubai.html#workplace" class="nav-sub-heading" >Workplace </a>
                  <a href="social-distancing-screen-divider-dubai.html">Desk Partition</a>
                  <a href="office-store-branding-printing-dubai.html#vehicle_graphics" class="nav-sub-heading" href="#">Vehicle Graphics</a>
                  <a href="vehicle-branding-dubai.html">Car Door</a>
                  <a href="vehicle-branding-dubai.html#half_wrap">Half Wrap Vehicle</a>
                  <a href="vehicle-branding-dubai.html#bus_branding">Van Branding</a>
                  <a href="magnetic-sheet-printing-dubai.html" class="nav-sub-heading">Magnetic Sheet</a>
                  <a href="ceremonial_ribbons_dubai.html" class="nav-sub-heading">Ceremonial Ribbon</a>
                </div>
                 </div>
                   <div class="dropdown-class">
                    <div class="nav-img-container">
                      <img class="navbar-img" id="nav-img" src="images/navbarImages/business_cards.webp" alt="Business Cards in Dubai">
                      <h6 class="navbar-img-text" id="nav-img-text">Bussiness Cards</h6>
                    </div>
                    <h6>Most Popular</h6>
                    <div class="nav-products">
                      <div>
                        <img src="images/navbarImages/binding.webp" alt="Binding in Dubai, Abu Dhabi">
                        <p>Bindind</p>
                      </div>
                      <div>
                        <img src="images/navbarImages/business_cards.webp" alt="Business Cards in Dubai">
                        <p>Business Cards</p>
                      </div>
                      <div>
                        <img src="images/navbarImages/envelopes.webp" alt="Envelopes in Dubai">
                        <p>Envelopes</p>
                      </div>
                    </div>
                   </div>
                  </div>
                </div>
               </li>
               <li class="nav-item dropdown">
                   <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">Signages </a>
                   <div  class="dropdown-menu dropdown-align">
                    <div class="submenu">
                  <div class="submenu-info">
                    <div class="dropdown-class">
                        <p class="nav-opt-heading" >All Signages</p>
                        <p class="nav-sub-heading">3D Indoor / Outdoor Signage</p>
                        <a href="#">Unlit 3D Signage</a>
                        <a href="#">Frontlit 3D Signage</a>
                        <a href="#">Backlit 3D Signage</a>
                        <a href="#">Outlit 3D Signage</a>
                        <a href="#">Push Through 3D Signage</a>
                        <a href="#">Neon 3D Signage</a>
                        <p class="nav-sub-heading">Sign Board</p>
                        <a href="#">Flex Face Sign Board</a>
                        <a href="#">Frontlit 3D Sign Board</a>
                        <a href="#">Backlit 3D Sign Board</a>
                        <a href="#">Push Through Sign Board</a>
                        <a href="#">Neon Sign Board</a>
                    </div>
                    <div class="dropdown-class">
                      <p class="nav-sub-heading" >Light Box Signages</p>
                      <a href="#">Flex Face Light Box</a>
                      <a href="#">Fabric Light Box</a>
                      <a href="">Acrylic Light Box</a>
                      <a href="#">Poster Light Box</a>
                      <p class="nav-sub-heading">Direction / Wayfinding Signage</p>
                      <a href="#">Self-Standing Signage</a>
                      <a href="#">Wall Mounted Signage</a>
                      <a href="#">Hanging Signage</a>
                      <a href="#">Directory Signage</a>
                      <p class="nav-sub-heading">Self Standing Letters</p>
                      <a href="#">Metal Letters</a>
                      <a href="#">Wooden Letters</a>
                      <a href="#">Acrylic Letters</a>
                      <a href="#">Forex / FOAM Letters</a>
                    </div>
                    <div class="dropdown-class">
                      <p class="nav-sub-heading" >Name Plate </p>
                      <a href="#">Metal Name Plates</a>
                      <a href="#">Acrylic Name Plates</a>
                      <a href="#">Wooden Name Plates</a>
                      <a href="#">Table Top Plates /  Sign</a>
                      <p class="nav-sub-heading" >Safety Signage</p>
                      <a href="#">Self-Standing Sign</a>
                      <a href="#">Wall Mounted Sign</a>
                      <a href="#">Floor Sign / Floot Graphics</a>
                      <p class="nav-sub-heading" >Labels</p>
                      <a href="#">Traffolyte / PVC / Acrylic Labels</a>
                      <a href="#">Metal Labels</a>
                      <a href="#">Wooden Labels</a>
                      <a href="#">Acrylic Labels</a>
                    </div>
                  </div>
                  <div class="dropdown-class">
                    <div class="nav-img-container">
                      <img class="navbar-img" id="nav-img" src="images/navbarImages/business_cards.webp" alt="Business Cards in Dubai">
                      <h6 class="navbar-img-text" id="nav-img-text">Bussiness Cards</h6>
                    </div>
                    <h6>Most Popular</h6>
                    <div class="nav-products">
                      <div>
                        <img src="images/navbarImages/binding.webp" alt="Bindind in Dubai">
                        <p>Bindind</p>
                      </div>
                      <div>
                        <img src="images/navbarImages/business_cards.webp" alt="Business Cards in Dubai">
                        <p>Business Cards</p>
                      </div>
                      <div>
                        <img src="images/navbarImages/envelopes.webp" alt="Envelopes in Dubai">
                        <p>Envelopes</p>
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>
               </li>
               <li class="nav-item dropdown">
                    <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">Flags</a>
                    <div  class="dropdown-menu dropdown-align">
                      <div class="submenu">
                       <div class="submenu-info">
                        <div class="dropdown-class">
                          <p class="nav-opt-heading" >All Flags</p>
                          <p  class="nav-sub-heading">Advertising Flags</p>
                          <a href="#">Sail Flags</a>
                          <a href="#">Tear Drop Flags</a>
                          <a href="#">L Shape Flags</a>
                          <a href="#">Blade Flags</a>
                          <a href="#">Telescopic Flags</a>
                          <p  class="nav-sub-heading">Decorative Flags</p>
                          <a href="#">Car Flags</a>
                          <a href="#">Car Desert Flags</a>
                          <a href="#">Pennant Flags</a>
                          <a href="#">Bunting Flags</a>
                          <a href="#">Toothpick Flags</a>
                      </div>
                      <div class="dropdown-class">
                        <p class="nav-sub-heading" >Handheld Flags</p>
                        <a href="#">Pole Flags</a>
                        <a href="#">Hand Flags</a>
                        <a href="">Finish LINE</a>
                        <a href="#">Body Flags</a>
                        <a href="#">Fan SCART</a>
                        <p  class="nav-sub-heading">Outdoor Flags</p>
                        <a href="#">Hoisting Flags</a>
                        <a href="#">Wall Mounted Flags</a>
                        <a href="#">Staduim Flags</a>
                        <a href="#">Advertising Flags</a>
                        <a href="#">Festival Flags</a>
                      </div>
                      <div class="dropdown-class">
                        <p class="nav-sub-heading" >Office Flags </p>
                        <a href="#">Table Flags</a>
                        <a href="#">Table Flags - Royel</a>
                        <a href="#">Conference Flags</a>
                        <p class="nav-sub-heading" >Flag Base</p>
                      </div>
                       </div>
                       <div class="dropdown-class">
                        <div class="nav-img-container">
                          <img class="navbar-img" id="nav-img" src="images/navbarImages/business_cards.webp" alt="Business Cards in Dubai">
                          <h6 class="navbar-img-text" id="nav-img-text">Bussiness Cards</h6>
                        </div>
                        <h6>Most Popular</h6>
                        <div class="nav-products">
                          <div>
                            <img src="images/navbarImages/binding.webp" alt="Binding In Dubai">
                            <p>Bindind</p>
                          </div>
                          <div>
                            <img src="images/navbarImages/business_cards.webp" alt="Business Cards in Dubai">
                            <p>Business Cards</p>
                          </div>
                          <div>
                            <img src="images/navbarImages/envelopes.webp" alt="">
                            <p>Envelopes</p>
                          </div>
                        </div>
                       </div>
                       </div>
                    </div>
               </li>
               <li class="nav-item dropdown">
                    <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  Backdrops & Exhibition </a>
                    <div  class="dropdown-menu dropdown-align">
                      <div class="submenu">
                       
                       <div class="submenu-info">
                        <div class="dropdown-class">
                          <p class="nav-opt-heading" >All Backdrops</p>
                          <p  class="nav-sub-heading">Popups, Rollups & Banners</p>
                          <a href="#">Pop Ups</a>
                          <a href="#">Fabric Pop Ups</a>
                          <a href="#">Rollup Banners</a>
                          <a href="#">X Banners</a>
                          <a href="#">Lama Stand</a>
                          <p  class="nav-sub-heading">Backlit Standee</p>
                          <a href="#">Snapfold Backlit Standee</a>
                          <a href="#">Classic Backlit Standee</a>

                      </div>
                      <div class="dropdown-class">
                        <p class="nav-sub-heading" >Backdrop & Standees</p>
                        <a href="#">Wooden Backdrop</a>
                        <a href="#">Step & Repeat Backdrop</a>
                        <a href="">Fabric Backdrop - Indoor</a>
                        <a href="#">Fabric Backdrop - Outdoor</a>
                        <a href="#">Bolloon Backdrop</a>
                        <a href="#">Round Backdrop</a>
                        <a href="#">Popout Banner / Spring A Board</a>
                        <a href="#">Tablerone Frame</a>
                        <a href="#">Cutout Standee</a>
                        <p  class="nav-sub-heading">Backlit Walls</p>
                        <a href="#">Backlit Backdrop</a>
                        <a href="#">Backlit Arches</a>
                      </div>
                      <div class="dropdown-class">
                        <p class="nav-sub-heading" >Exhibition & Events </p>
                        <a href="#">Promotion Table</a>
                        <a href="#">Exhibition Counters</a>
                        <a href="#">Tent /  Canopy & Table Cloth </a>
                        <a href="#">Table Cover & Table Cloth </a>
                        <a href="#">Socieal Media Frame </a>
                        <a href="#">Party Props </a>
                        <a href="#">Foam Board </a>
                        <a href="#">Shell Scheme Booth Branding </a>
                        <p class="nav-sub-heading" >Backlit Exhibition Stand</p>
                        <a href="#">Insland Backlit Shell Scheme</a>
                        <a href="#">Mudular Backlit Booths</a>
                      </div>
                       </div>
                       <div class="dropdown-class">
                        <div class="nav-img-container">
                          <img class="navbar-img" id="nav-img" src="images/navbarImages/business_cards.webp" alt="Business Cards in Dubai">
                          <h6 class="navbar-img-text" id="nav-img-text">Bussiness Cards</h6>
                        </div>
                        <h6>Most Popular</h6>
                        <div class="nav-products">
                          <div>
                            <img src="images/navbarImages/binding.webp" alt="Binding in Dubai">
                            <p>Binding</p>
                          </div>
                          <div>
                            <img src="images/navbarImages/business_cards.webp" alt="Business Cards in Dubai">
                            <p>Business Cards</p>
                          </div>
                          <div>
                            <img src="images/navbarImages/envelopes.webp" alt="Envelopes in Dubai">
                            <p>Envelopes</p>
                          </div>
                        </div>
                       </div>
                       </div>
                    </div>
               </li>
               <li class="nav-item dropdown">
                    <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  Corporate Gifts </a>
                    <div  class="dropdown-menu dropdown-align">
                      <div class="submenu">
                       <div class="submenu-info">
                        <div class="dropdown-class">
                          <p class="nav-opt-heading" >All Corporate Gifts</p>
                          <p  class="nav-sub-heading">Office Essentials</p>
                          <a href="#">Pens</a>
                          <a href="#">PU Notebooks</a>
                          <a href="#">Mouse Pad</a>
                          <a href="#">X Calendars</a>
                          <a href="#">Name Badges</a>
                      </div>
                      <div class="dropdown-class">
                        <p class="nav-sub-heading" >Corporate Events</p>
                        <a href="#">USB</a>
                        <a href="#">Mugs</a>
                        <a href="">Bottles</a>
                        <a href="#">Tumblers</a>
                        <a href="#">Wristband</a>
                        <a href="#">T-Shirt</a>
                        <a href="#">Caps</a>
                        </div>
                      <div class="dropdown-class">
                        <p class="nav-sub-heading" >Shopping Bags</p>
                        <a href="#">Paper Bag </a>
                        <a href="#">Kraft Bag</a>
                        <a href="#">Non Woven Bag </a>
                        <a href="#">Juite Bag </a>
                        <a href="#">Tote Bag </a>
                        <a href="#">Canvas Bag </a>
                        <a href="#">Drawstring Bag </a>
                        <a href="#">Cotton String Bag </a>
                      </div>
                       </div>
                       <div class="dropdown-class">
                        <div class="nav-img-container">
                          <img class="navbar-img" id="nav-img" src="images/navbarImages/business_cards.webp" alt="Business Cards in Dubai">
                          <h6 class="navbar-img-text" id="nav-img-text">Bussiness Cards</h6>
                        </div>
                        <h6>Most Popular</h6>
                        <div class="nav-products">
                          <div>
                            <img src="images/navbarImages/binding.webp" alt="Binding in Dubai">
                            <p>Binding</p>
                          </div>
                          <div>
                            <img src="images/navbarImages/business_cards.webp" alt="Business Cards in Dubai">
                            <p>Business Cards</p>
                          </div>
                          <div>
                            <img src="images/navbarImages/envelopes.webp" alt="Envelopes in Dubai">
                            <p>Envelopes</p>
                          </div>
                        </div>
                       </div>
                       </div>
                    </div>
               </li>
            </ul>
          </div>
        </div>
          <!-- <div class="search-container d-flex">
              <form action="/search" method="get">
                <input class="search expandright" id="searchright" onkeyup="handleSearch(this.value)" type="search"  placeholder="Search">
                <label class="button searchbutton" for="searchright">
                      <i class="fa-solid fa-magnifying-glass search-icon"></i>
                </label>
              </form>
          </div>  -->
        <div class="search-result" id="search-result">
          <ul class="list-unstyled" id="search-list">
            <li class="item"><a href="promotional-corporate-gifts-dubai.html" class="nav-link">Corporate Gifts</a></li>
            <li class="item"><a href="flags-printing-branding-dubai.html" class="nav-link">Flags</a></li>
            <li class="item"><a href="backdrop-stand-dubai.html" class="nav-link">Backdrops</a></li>
            <li class="item"><a href="office-store-branding-printing-dubai.html" class="nav-link">Office & Store Branding</a></li>
            <li class="item"><a href="product-page/bussiness-card.html" class="nav-link">Business Cards</a></li>
            <li class="item"><a href="letter-heads-printing-dubai.html" class="nav-link">Letterheads</a></li>
            <li class="item"><a href="envelopes-printing-dubai.html" class="nav-link">Envelopes</a></li>
            <li class="item"><a href="folders-printing-dubai.html" class="nav-link">Folders</a></li>
            <li class="item"><a href="compliment-slips-dubai.html" class="nav-link">Compliment Slips</a></li>
            <li class="item"><a href="notepads-printing-dubai.html" class="nav-link">Notepads</a></li>
            <li class="item"><a href="customized-notebooks-dubai.html" class="nav-link">Notebook & Journal</a></li>
            <li class="item"><a href="binding.html" class="nav-link">Binding</a></li>
            <li class="item"><a href="stamps-dubai.html" class="nav-link">Self Ink Stamps</a></li>
            <li class="item"><a href="wax-seal-dubai.html" class="nav-link">Wax Seal</a></li>
            <li class="item"><a href="embossing-seal-dubai.html" class="nav-link">Embossing Seal</a></li>
            <li class="item"><a href="brochures-printing-dubai.html" class="nav-link">Brochures</a></li>
            <li class="item"><a href="flyers-printing-dubai.html" class="nav-link">Flyers</a></li>
            <li class="item"><a href="catalogues-printing-dubai.html" class="nav-link">Booklets & Catalogues</a></li>
            <li class="item"><a href="cd-printing-dubai.html" class="nav-link">CD / DVD Printing</a></li>
            <li class="item"><a href="cd-covers-printing-dubai.html" class="nav-link">CD / DVD Covers</a></li>            
            <li class="item"><a href="stickers-prices.html" class="nav-link">PVC Round sticker</a></li>
            <li class="item"><a href="print-and-cut-stickers-dubai.html" class="nav-link">Print & Cut sticker</a></li>
            <li class="item"><a href="paper-stickers-dubai.html" class="nav-link">Paper Sticker Gloss / Matt</a></li>
            <li class="item"><a href="pvc-transparent-stickers-dubai.html" class="nav-link">PVC Transparent Sticker</a></li>
            <li class="item"><a href="pvc-stickers-dubai.html" class="nav-link">PVC White Sticker</a></li>
            <li class="item"><a href="white-ink-stickers-dubai.html" class="nav-link">White Ink Sticker</a></li>
            <li class="item"><a href="epoxy-stickers-dubai.html" class="nav-link">Epoxy sticker</a></li>
            <li class="item"><a href="windshield-stickers-dubai.html" class="nav-link">Windshield sticker</a></li>
            <li class="item"><a href="stencil-stickers-dubai.html" class="nav-link">Stencil Sticker</a></li>
            <li class="item"><a href="embossing-seal-dubai.html#seal-stickers" class="nav-link">Embossing seal sticker</a></li>
            <li class="item"><a href="helmet-stickers-dubai.html" class="nav-link">Helmet Sticker</a></li>
            <li class="item"><a href="pens-printing-dubai.html" class="nav-link">Pens</a></li>
            <li class="item"><a href="notebooks-printing-dubai.html" class="nav-link">PU Notebooks</a></li>
            <li class="item"><a href="calendars-printing-dubai.html" class="nav-link">Calendars</a></li>
            <li class="item"><a href="mobile-cover-printing-dubai.html" class="nav-link">Mobile Covers</a></li>      
            <li class="item"><a href="t-shirts-printing-dubai.html" class="nav-link">T-Shirts</a></li>
            <li class="item"><a href="pillow-cushion-printing-dubai.html" class="nav-link">Pillow & Cushion Covers</a></li>
            <li class="item"><a href="bean-bag-dubai.html" class="nav-link">Bean Bags</a></li>
            <li class="item"><a href="usb-printing-dubai.html" class="nav-link">USB</a></li>
            <li class="item"><a href="mugs-printing-dubai.html" class="nav-link">Mugs</a></li>
            <li class="item"><a href="caps-printing-dubai.html" class="nav-link">Caps</a></li>
            <li class="item"><a href="magnetic-sheet-printing-dubai.html" class="nav-link">Magnetic Sheet</a></li>
            <li class="item"><a href="coupons-printing-dubai.html" class="nav-link">Tickets & Coupons</a></li>
            <li class="item"><a href="scratch-win-cards-dubai.html" class="nav-link">Scratch & Win Coupons</a></li>
            <!-- 		===========New List to be added=========
            <li class="item"><a href="#" class="nav-link">Event badges</a></li>
            <li class="item"><a href="#" class="nav-link">Office badges</a></li>
            <li class="item"><a href="#" class="nav-link">PVC Patch</a></li>
            <li class="item"><a href="#" class="nav-link">Embroidery Patch</a></li>
            
            <li class="item"><a href="#" class="nav-link">Enamel pins</a></li>
            <li class="item"><a href="#" class="nav-link">Die cast pins</a></li>
            <li class="item"><a href="#" class="nav-link">Keychains</a></li>
            <li class="item"><a href="#" class="nav-link">Coins</a></li>
          
                ===========New List to be added=========		-->
            <li class="item"><a href="sail_flags_dubai.html" class="nav-link">Sail Flags</a></li>
            <li class="item"><a href="tear_drop_flags_dubai.html" class="nav-link">Tear Drop Flags</a></li>
            <li class="item"><a href="l_shape_flags_dubai.html" class="nav-link">L Shape Flags</a></li>
            <li class="item"><a href="telescopic_flags_dubai.html" class="nav-link">Telescopic Flags</a></li>
          
            <li class="item"><a href="fan_scarf_dubai.html" class="nav-link">Fan Scarf</a></li>
            <li class="item"><a href="pennant_flags_dubai.html" class="nav-link">Pennant Flags</a></li>
            <li class="item"><a href="bunting_flags_dubai.html" class="nav-link">Bunting Flags</a></li>
            <li class="item"><a href="car_flags_dubai.html" class="nav-link">Car Flags</a></li>
            <li class="item"><a href="toothpick_flags_dubai.html" class="nav-link">Toothpick Flags</a></li>
          
            <li class="item"><a href="hand_held_pole_flags_dubai.html" class="nav-link">Pole flags</a></li>
            <li class="item"><a href="hand_held_flags_dubai.html" class="nav-link">Hand flags</a></li>
            <li class="item"><a href="stadium-flags-dubai.html" class="nav-link">Stadium flags</a></li>
                        
            <li class="item"><a href="hoisting_flags_dubai.html" class="nav-link">Hoisting Flags</a></li>
            <li class="item"><a href="wall_mounted_flags_dubai.html" class="nav-link">Wall Mounted Flags</a></li>
            <li class="item"><a href="advertising_flags_dubai.html" class="nav-link">Advertising Flags</a></li>
            <li class="item"><a href="festival_flags_dubai.html" class="nav-link">Festival Flags</a></li>
        
            <li class="item"><a href="table_flags_dubai.html" class="nav-link">Table Flags</a></li>
            <li class="item"><a href="conference_flags_dubai.html" class="nav-link">Conference Flags</a><
            <li class="item"><a href="pop-up-banner-dubai.html" class="nav-link">Pop Ups</a></li>
            <li class="item"><a href="fabric-pop-up-printing-in-dubai.html" class="nav-link">Fabric Pop Ups</a></li>
            <li class="item"><a href="roll-ups-printing-dubai.html" class="nav-link">Rollup Banners</a></li>
            <li class="item"><a href="banners-printing-dubai.html#xbanner" class="nav-link">X Banners</a></li>
            <li class="item"><a href="banners-printing-dubai.html" class="nav-link">Banners-Flex & Fabric</a></li>
            <li class="item"><a href="fence-banner-printing-dubai.html" class="nav-link">Fence Banners</a></li>
        
            <li class="item"><a href="wooden-backdrop-printing-in-dubai.html" class="nav-link">Wooden Backdrop</a></li>
            <li class="item"><a href="step-and-repeat-backdrop-printing-in-dubai.html" class="nav-link">Step & Repeat Backdrop</a></li>
            <li class="item"><a href="fabric-backdrop-printing-in-dubai.html" class="nav-link">Fabric Backdrop</a></li>
            <li class="item"><a href="backlit-backdrop-printing-in-dubai.html" class="nav-link">Backlit Backdrop</a></li>
            <li class="item"><a href="pop-out-banner-printing-in-dubai.html" class="nav-link">Popout Banner / Spring A Board</a></li>
            <li class="item"><a href="toblerone-a-frame-printing-in-dubai.html" class="nav-link">Toblerone Frame</a></li>
            <li class="item"><a href="cutout-standee-printing-dubai.html" class="nav-link">Cutout Standee</a></li>
            <li class="item"><a href="lama-standee-printing-dubai.html" class="nav-link">Lama Stand</a></li>
          
            <li class="item"><a href="outdoor-tent-printing-dubai.html" class="nav-link">Tent / Canopy / Gazebo</a></li>
            <li class="item"><a href="table-cloth-table-cover-dubai.html" class="nav-link">Table Cover & Table Cloth</a></li>
            <li class="item"><a href="social_media_hashtag_frame_dubai.html" class="nav-link">Social Media Frame</a></li>
            <li class="item"><a href="party-props-dubai.html" class="nav-link">Party Props</a></li>
            <li class="item"><a href="foam-board-dubai.html" class="nav-link">Foam Board</a></li>
            <li class="item"><a href="exhibition-graphics-dubai.html" class="nav-link">Shell Scheme Booth Branding</a></li>
          
            <li class="item"><a href="frosted-glass-sticker.html#reverse_cut" class="nav-link">Reverse Cut Frosted sticker</a></li>
            <li class="item"><a href="frosted-glass-sticker.html#standard_cut" class="nav-link">Standard Cut Frosted sticker</a></li>
            <li class="item"><a href="frosted-glass-sticker.html#printed" class="nav-link">Printed Frosted sticker</a></li>
            <li class="item"><a href="frosted-glass-sticker.html#gradiant" class="nav-link">Gradient Frosted sticker</a></li>
            <li class="item"><a href="frosted-glass-sticker.html#blank" class="nav-link">Blank Frosted sticker</a></li>
      
            <li class="item"><a href="window-vinyl-lettering-dubai.html" class="nav-link">Window Vinyl Lettering</a></li>
            <li class="item"><a href="window-graphics-dubai.html" class="nav-link">Window Graphics</a></li>
            <li class="item"><a href="one-way-vision-sticker-dubai.html" class="nav-link">One Way Vision Sticker</a></li>
            <li class="item"><a href="decorative-window-film-dubai.html" class="nav-link">Window Films</a></li>
          
            <li class="item"><a href="wall-vinyl-lettering-dubai.html" class="nav-link">Wall Vinyl Lettering</a></li>
            <li class="item"><a href="wall-graphics-dubai.html" class="nav-link">Wall Graphics</a></li>
            <li class="item"><a href="pillar-branding-dubai.html" class="nav-link">Pillar Branding</a></li>
                  
                 <!--        
                          <li class="item"><a href="#" class="nav-link">Clear static cling</a></li>
                          <li class="item"><a href="#" class="nav-link">Clear static with White ink</a></li>
                          <li class="item"><a href="#" class="nav-link">White static Cling</a></li>
                          <li class="item"><a href="#" class="nav-link">Shape cut out Cling</a></li>
                          -->
            
            <li class="item"><a href="vehicle-branding-dubai.html" class="nav-link">Car Door</a></li>
            <li class="item"><a href="vehicle-branding-dubai.html#half_wrap" class="nav-link">Half Wrap Vehicle</a></li>
            <li class="item"><a href="vehicle-branding-dubai.html#bus_branding" class="nav-link">Van Branding</a></li>
            <li class="item"><a href="vehicle-branding-dubai.html#golf_cart" class="nav-link">Golf Cart Branding</a></li>
        
            <li class="item"><a href="wall-signage-dubai.html" class="nav-link">Wall signage</a></li>
            <li class="item"><a href="reception-signage-dubai.html" class="nav-link">Reception signage</a></li>
                   <!--       <li class="item"><a href="#" class="nav-link">Door signage</a></li>			-->
            <li class="item"><a href="3d-signage-dubai.html" class="nav-link">3D signage</a></li>
        
            <li class="item"><a href="social-distancing-screen-divider-dubai.html#desk_partition" class="nav-link">Desk Partition</a></li>
            <li class="item"><a href="social-distancing-screen-divider-dubai.html" class="nav-link">Counter Partition</a></li>
          
            <li class="item"><a href="fashion-scarf-dubai.html" class="nav-link">Scarf</a></li>
            <li class="item"><a href="fashion-sarong-dubai.html" class="nav-link">Sarong</a></li>
            <li class="item"><a href="fashion-stoles-dubai.html" class="nav-link">Stoles</a></li>
            <li class="item"><a href="fashion-bandana-dubai.html" class="nav-link">Bandana</a></li>
            <li class="item"><a href="fashion-sash-dubai.html" class="nav-link">Sash</a></li>
            <li class="item"><a href="fashion-hand-umbrella-dubai.html" class="nav-link">Hand Umbrella</a></li>
                        
            <li class="item"><a href="#" class="nav-link">Apron</a></li>
            <li class="item"><a href="#" class="nav-link">Napkins</a></li>
            <li class="item"><a href="#" class="nav-link">Linen Table Throw</a></li>
          
          
            <li class="item"><a href="#" class="nav-link">Decorative pillows</a></li>
            <li class="item"><a href="#" class="nav-link">Bedsheet</a></li>
            <li class="item"><a href="#" class="nav-link">Bean Bags</a></li>
            <li class="item"><a href="#" class="nav-link">Roller Blinds</a></li>
            <li class="item"><a href="#" class="nav-link">Curtains</a></li>
                       
            <li class="item"><a href="#" class="nav-link">Wall paper</a></li>
            <li class="item"><a href="#" class="nav-link">Frames</a></li>
            <li class="item"><a href="#" class="nav-link">Cotton print</a></li>
        
            <li class="item"><a href="#" class="nav-link">Cotton Custom Bags</a></li>
            <li class="item"><a href="#" class="nav-link">Draw String Pouches</a></li>
            <li class="item"><a href="#" class="nav-link">Zip pouch</a></li>
                       
            <li class="item"><a href="social-distancing-screen-divider-dubai.html#desk_partition" class="nav-link">Desk Partition</a></li>
            <li class="item"><a href="social-distancing-screen-divider-dubai.html" class="nav-link">Counter Partition</a></li>
            <li class="item"><a href="roll-ups-printing-dubai.html" class="nav-link">Social Distance Rollup Banners</a></li>
            <li class="item"><a href="floor-graphic-sticker-dubai.html" class="nav-link">Social Distance Floor Stickers</a></li>
            <li class="item"><a href="floor-graphic-sticker-dubai.html#floor-elevator" class="nav-link">Social Distance Elevator Stickers</a></li>
            <li class="item"><a href="posters-printing-dubai.html" class="nav-link">Social Distance Posters</a></li>
            <li class="item"><a href="roll-ups-printing-dubai.html" class="nav-link">Social Distance Rollup Banners</a></li>
             
            <li class="item"><a href="custom-face-mask-dubai.html" class="nav-link">Face Mask</a></li>
            <li class="item"><a href="covid-face-shield-mask-dubai.html" class="nav-link">Face Shield</a></li>
            <li class="item"><a href="covid-face-shield-mask-dubai.html#goggles" class="nav-link">Protective Goggles</a></li>
            <li class="item"><a href="hand-gloves-dubai.html" class="nav-link">Hand Gloves</a></li>
            <li class="item"><a href="hand-sanitizer-dubai.html" class="nav-link">Hand Sanitizer</a></li>
            <li class="item"><a href="stickers-prices.html" class="nav-link">Social Distance Round Stickers</a></li>
            <li class="item"><a href="pvc-stickers-dubai.html" class="nav-link">Social Distance Square Stickers</a></li>
            <li class="item"><a href="print-and-cut-stickers-dubai.html" class="nav-link">Social Distance Die Cut Stickers</a></li>
            <li class="item"><a href="cutout-standee-printing-dubai.html" class="nav-link">Social Distance Cutout Standee</a></li>
          </ul>
        </div>
        </div> 
    </nav> 
  </div>
     `
    }
}
navbar()

// document.addEventListener("DOMContentLoaded", function(){
//     // make it as accordion for smaller screens
//     if (window.innerWidth > 992) {
//         document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    
//             everyitem.addEventListener('mouseover', function(e){
    
//                 let el_link = this.querySelector('a[data-bs-toggle]');
    
//                 if(el_link != null){
//                     let nextEl = el_link.nextElementSibling;
//                     el_link.classList.add('show');
//                     nextEl.classList.add('show');
//                 }
    
//             });
//             everyitem.addEventListener('mouseleave', function(e){
//                 let el_link = this.querySelector('a[data-bs-toggle]');
    
//                 if(el_link != null){
//                     let nextEl = el_link.nextElementSibling;
//                     el_link.classList.remove('show');
//                     nextEl.classList.remove('show');
//                 }
    
    
//             })
//         });
    
//     }
//     // end if innerWidth
//     }); 



function handleNavImage(event,url){
    // console.log(event.target.innerText)
    let img = document.getElementById("nav-img")
    img.src= url;

    let imgtext = document.getElementById("nav-img-text")
    imgtext.innerText = event.target.innerText

    // console.log(url)
}

let ul = document.getElementById("search-list");
let li = ul.getElementsByTagName("li");
// let selected = 0;

function handleSearch(search){
    // console.log("search", search)

    let searchResult = document.getElementById("search-result")
    searchResult.style.visibility = "visible";

    if(search === ""){
        searchResult.style.visibility = "hidden";
    }

    var  filter, a, i;
    input = document.getElementById("mySearch");
    filter = search.toUpperCase();
    
    // Loop through all list items, and hide those who don't match the search query
    let count=0;
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
        // li[i].remove();
        count++;
      }
    }
    if(count >= li.length){
      // searchResult.innerHTML = null
      console.log(count, li.lengthf)
      document.getElementById("product-not-found").style.display= "block";
    }
    else{
      document.getElementById("product-not-found").style.display= "none";
    }
    // selectSearch()
}

// function selectSearch(){
//   li[selected].style.background= "#c9c9c9"
//   console.log(document.getElementById("search-list"))
// }


window.addEventListener('mouseup',function(event){
    let searchright = document.getElementById("searchright")
    let searchResult = document.getElementById("search-result")
    searchright.value=""
    handleSearch("")
    // if(event.target != searchright && event.target.parentNode != searchright){
    //     searchResult.style.display = 'hidden';
    // }
    // console.log(event.target,searchright)
});  
