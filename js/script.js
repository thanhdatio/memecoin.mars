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

const btnMusicPlay = document.querySelector('.music-box button.play')
const btnMusicPause = document.querySelector('.music-box button.pause')
const music = document.querySelector('audio.music')

function initMusic() {
  if (btnMusicPause && btnMusicPlay) {
    btnMusicPlay.addEventListener('click', playMusic)
    btnMusicPause.addEventListener('click', pauseMusic)
    function playMusic() {
      btnMusicPlay.classList.remove('active')
      btnMusicPause.classList.add('active')
      music.play()
    }
    function pauseMusic() {
      btnMusicPause.classList.remove('active')
      btnMusicPlay.classList.add('active')
      music.pause()
    }
  }
}
initMusic()
