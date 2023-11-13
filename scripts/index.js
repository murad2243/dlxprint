document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {
    
        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    
            everyitem.addEventListener('mouseover', function(e){
    
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }
    
            });
            everyitem.addEventListener('mouseleave', function(e){
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }
    
    
            })
        });
    
    }
    // end if innerWidth
    }); 
function handleNavImage(event,url){
    // console.log(event.target.innerText)
    let img = document.getElementById("nav-img")
    img.src= url;

    let imgtext = document.getElementById("nav-img-text")
    imgtext.innerText = event.target.innerText

    console.log(url)
}
function handleSearch(search){
    console.log("search", search)

    let searchResult = document.getElementById("search-result")
    searchResult.style.visibility = "visible";

    if(search === ""){
        searchResult.style.visibility = "hidden";
    }
}

// let searchright = document.getElementById("search-input")
// searchright.addEventListener("click", (e)=>{
//     console.log(e.target.value)

// })

// owl carousel 

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});