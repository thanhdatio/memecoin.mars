/*MENU MOBILE */
// const btnMobile = document.querySelector('button.btn-mobile-menu')
// function toggleMenu() {
//   const navMobile = document.querySelector('header nav')
//   btnMobile.classList.toggle('active')
//   navMobile.classList.toggle('active')
// }
// btnMobile.addEventListener('click', toggleMenu)
/*MENU MOBILE */

/*SWIPER */
const swiperGlobal = new Swiper('.swiper-global .swiper', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-global .button-next',
    prevEl: '.swiper-global .button-prev'
  }
})
/*SWIPER */
AOS.init()
