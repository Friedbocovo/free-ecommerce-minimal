const iconMenu=document.querySelector(".menu__image-menu")
const menuLinkActive=document.querySelector(".section1__header__nav")
const link1=document.querySelectorAll(".link1")
const link2=document.querySelectorAll(".link2")
const sectionProductActive=document.querySelector(".section1__produit")
const section1=document.querySelector(".section1")
let i=0
iconMenu.addEventListener("click",()=>{
  menuLinkActive.classList.toggle("ralentir")
  for(let i=0;i<link1.length;i++){
    link1[i].classList.toggle("active-link1")
    link2[i].classList.toggle("active-link2")
    sectionProductActive.classList.toggle("section1__produit-active")
    section1.classList.toggle("section1-height-active")
    
  }

})
