const buttons = document.querySelectorAll("[data-button-carousel]");
const navbarbutton = document.querySelector(".navbar-hamburger");
const itemcounter = document.querySelector("#counter");
const bodyclick = document.querySelector("body");
const cartbutton = document.querySelector("#cart");
const cartcontainer = document.querySelector(".cartcontainer");
let itempricecounter = 0;
let itemcount = 0


cartbutton.addEventListener("click", () => {
   
    
    cartcontainer.classList.toggle("cart-show-state");
})


function cartfunction(amountofitem, totalprice){

    const discarditembtn = document.querySelector("#discardbtn");
    discarditembtn.addEventListener("click", () =>{

        cartfunction(0, 0);
        itempricecounter = 0;
        itemcount = 0;
        itemcounter.innerHTML = `0`;
    })
    const aoi = document.querySelector("#amountofitem");
    const tprice = document.querySelector("#totalprice");
    const checkoutbtn = document.querySelector(".checkoutbtn");
    const itemselected = document.querySelector(".items");
    const EmptyState = document.querySelector("#EmptyItem");
    if(amountofitem <= 0 ){
       checkoutbtn.style.visibility = "hidden";
       itemselected.style.visibility = "hidden";
       EmptyState.style.display = "block";
    }
    
    else{
       checkoutbtn.style.visibility = "visible";
       itemselected.style.visibility = "visible";
       EmptyState.style.display = "none";
    }
    aoi.innerHTML = `${amountofitem} `
    tprice.innerHTML = `$${totalprice}.00`
    
}

itemfunction();
function itemfunction (){

    
    const additembtn = document.querySelector("#additem");
    const minusitembtn = document.querySelector("#minusitem");
    additembtn.addEventListener("click", () => {

        itemcount += 1;
        itempricecounter += 125.00;
        itemcounter.innerHTML =  `${itemcount}`;
        cartfunction(itemcount, itempricecounter);
    })
    minusitembtn.addEventListener("click", () => {
        itemcount == 0 ? itemcount=0 : itemcount -= 1;
        itempricecounter == 0 ? itempricecounter = 0 : itempricecounter -= 125.00;
        itemcounter.innerHTML = `${itemcount}`;
        cartfunction(itemcount, itempricecounter);
    })
}

let navbarstate = false;
navbarbutton.addEventListener("click", () => {

    const navbarcontainer = document.querySelector(".navbarcontainer");
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