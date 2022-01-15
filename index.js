const buttons = document.querySelectorAll("[data-button-carousel]");

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