

function setRecommendProducts(){
    let recommendProducts = JSON.parse(localStorage.getItem("recommend-products")) || []
    // console.log(recommendProducts)
    let recommendProductsDiv = document.getElementById("recommend-products-div")
    if(recommendProducts.length < 4){
        let cur_product_check = true;
        for(i=0; i<recommendProducts.length; i++){
            // console.log(recommendProducts[i],"p")
            if(document.getElementById("product-name").innerText.trim() === recommendProducts[i].productName){
                cur_product_check = false;
                break;
            }
        }
        if(cur_product_check){
         let cur_product = {
            productName: document.getElementById("product-name").innerText,
            productImg: document.getElementById("product-img").src,
            productLink : window.location.href,
            }
            recommendProducts.push(cur_product)
            //  recommendProducts = products;
            localStorage.setItem("recommend-products", JSON.stringify(recommendProducts))
        }
       
      }
    if(recommendProducts.length > 0){
      recommendProducts.forEach((el) => {
        if(el.productName.trim() !== document.getElementById("product-name").innerText.trim() ){
            // console.log(el.productName.trim() === document.getElementById("product-name").innerText.trim())
            let productCart = document.createElement("a")
            productCart.setAttribute("href",el.productLink)
            let productDiv = document.createElement("div")
            // productDiv.setAttribute("class","product-div")
            let productName = document.createElement("h2")
            productName.setAttribute("class","h6")
            productName.innerText = el.productName;
            let productImg = document.createElement("img")
            productImg.style.width = "100%"
            productImg.src = el.productImg;
            let readBtn = document.createElement("button")
            readBtn.innerHTML = ""
            // console.log(productImg)
            let recommendProductsHeading = document.getElementById("recommend-products-heading")
            // recommendProducts.setAttribute("class","products-heading")
            productDiv.append(productImg,productName)
            productCart.append(productDiv)
            recommendProductsDiv.append(productCart)
            recommendProductsHeading.style.display = "block"
            // recommendProductsHeading.display = "block"
        }
        
        
      });
      // console.log(products)
    }
  
}
setRecommendProducts()




// code for tabs 
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// openCity("click","price")