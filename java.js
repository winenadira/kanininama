const header = document.querySelector("header");

window.addEventListener ("scroll", fuction(){
    header.classList.toggle ("sticky, this.window.scrollY > 0");
})