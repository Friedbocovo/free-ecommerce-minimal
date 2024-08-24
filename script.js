const iconMenu=document.querySelector(".menu__image-menu")
const menuLinkActive=document.querySelector(".section1__header__nav")

iconMenu.addEventListener("click",()=>{
  menuLinkActive.classList.toggle("active-nav")
})
