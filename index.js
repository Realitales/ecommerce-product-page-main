const buttons = document.querySelectorAll("[data-button-carousel]");
const navbarbutton = document.querySelector(".navbar-hamburger");
const itemcounter = document.querySelector("#counter");
const cartbutton = document.querySelector("#cart");
const body = document.querySelector("body");
const cartcontainer = document.querySelector(".cartcontainer");
const navbarcontainer = document.querySelector(".navbarcontainer");
const numberofitems = document.querySelector("#numberofitems");
let itempricecounter = 0;
let itemcount = 0
let navbarstate = false;
let cartstate = false;


document.addEventListener("click", (e) => {

    if(e.target.classList.contains("cartheader") ||
       e.target.classList.contains("itemcontainer") ||
       e.target.classList.contains("EmptyItem")||
       e.target.classList.contains("items") ||
       e.target.classList.contains("checkoutbtn")||
       e.target.classList.contains("checkout-button") ||
       e.target.classList.contains("item-name") ||
       e.target.id == "price" ||
       e.target.id == "amountofitem"||
       e.target.id == "discard-button"||
       e.target.id == "product-image" ||
       e.target.id == "totalprice" ||
       e.target.id == "cart") return
       cartcontainer.classList.remove("cart-show-state");
       cartbutton.src ="images/icon-cart.svg";
       cartstate=false;

   if(!e.target.classList.contains("background-color-fx"))return
     body.classList.remove("background-color-fx");
     navbarbutton.classList.remove("open-state-btn");
     navbarcontainer.classList.remove("open-state");
     navbarstate=false;

})

cartbutton.addEventListener("click", () => {
   
    if(cartstate == false ){
        cartcontainer.classList.add("cart-show-state");
        cartstate=true;
        cartbutton.src ="images/icon-cart-black.svg";
    }
    else {
        cartcontainer.classList.remove("cart-show-state");
        cartstate=false;
        cartbutton.src ="images/icon-cart.svg";
    }
    
})

const discarditembtn = document.querySelector("#discardbtn");
discarditembtn.addEventListener("click", () =>{

        cartfunction(0, 0);
        itempricecounter = 0;
        itemcount = 0;
        itemcounter.innerText = `0`;
})

function cartfunction(amountofitem, totalprice){

    
    const aoi = document.querySelector("#amountofitem");
    const tprice = document.querySelector("#totalprice");
    const checkoutbtn = document.querySelector(".checkoutbtn");
    const itemselected = document.querySelector(".items");
    const EmptyState = document.querySelector(".EmptyItem");
    if(amountofitem <= 0 ){
       checkoutbtn.style.visibility = "hidden";
       itemselected.style.visibility = "hidden";
       EmptyState.style.display = "block";
       numberofitems.style.display = "none";
    }
    
    else{
       checkoutbtn.style.visibility = "visible";
       itemselected.style.visibility = "visible";
       numberofitems.style.display = "block";
       EmptyState.style.display = "none";
    }
    aoi.innerText = `${amountofitem} `
    tprice.innerText = `$${totalprice}.00`
    numberofitems.innerText = `${amountofitem}`;
    
}

itemfunction();
function itemfunction (){

    
    const additembtn = document.querySelector("#additem");
    const minusitembtn = document.querySelector("#minusitem");
    additembtn.addEventListener("click", () => {

        itemcount += 1;
        itempricecounter += 125.00;
        itemcounter.innerText =  `${itemcount}`;
        cartfunction(itemcount, itempricecounter);
    })
    minusitembtn.addEventListener("click", () => {
        itemcount == 0 ? itemcount=0 : itemcount -= 1;
        itempricecounter == 0 ? itempricecounter = 0 : itempricecounter -= 125.00;
        itemcounter.innerText = `${itemcount}`;
        cartfunction(itemcount, itempricecounter);
    })
}


navbarbutton.addEventListener("click", () => {

    if(!navbarstate){
        navbarcontainer.classList.add("open-state")
        navbarbutton.classList.add("open-state-btn")
        body.classList.add("background-color-fx")
        navbarstate = true
    }
    else{
        navbarcontainer.classList.remove("open-state")
        navbarbutton.classList.remove("open-state-btn")
        body.classList.remove("background-color-fx")
        navbarstate = false
    }
})

buttons.forEach(button => {

    button.addEventListener("click", () => {

       const offset = button.dataset.buttonCarousel === "next" ? 1 : -1
       const slides = button.closest("[active-carousel]").querySelector("[data-slides]")

       const activeSlide = slides.querySelector("[data-active-picture]")
       let newIndex = [...slides.children].indexOf(activeSlide) + offset;
       if (newIndex < 0) newIndex = slides.children.length - 1 
       if (newIndex >= slides.children.length) newIndex = 0 

       slides.children[newIndex].dataset.activePicture = true
       delete activeSlide.dataset.activePicture
       
       console.log(newIndex);
    })
})