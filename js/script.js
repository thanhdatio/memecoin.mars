/*MENU MOBILE */
const btnMobile = document.querySelector('button.btn-mobile-menu')
function toggleMenu() {
  const navMobile = document.querySelector('header nav')
  btnMobile.classList.toggle('active')
  navMobile.classList.toggle('active')
}
btnMobile.addEventListener('click', toggleMenu)
/*MENU MOBILE */

/*SWIPER */
const swiperBombers = new Swiper('.swiper-bombers .swiper', {
  loop: true,
  slidesPerView: 3,
  navigation: {
    nextEl: '.swiper-bombers .button-next',
    prevEl: '.swiper-bombers .button-prev'
  }
})
/*SWIPER */
AOS.init()
