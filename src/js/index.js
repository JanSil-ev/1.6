import '../scss/style.scss'
import './nav.js'
import './brands.js'
import './repair.js'
import './feedback.js'
import './callBack.js'
console.log('Привет')

let x = window.matchMedia('(max-width: 768px)')
myFunction(x)
function myFunction(x) {
  if (x.matches) {
    let swiper = new Swiper('.mySwiper', {
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      slidesPerGroup: 1,
      paginationClickable: true,
      pagination: {
        el: '.swiper-pagination'
      },
      centeredSlides: false
    })
  } else {
    document.querySelector('.swiper-wrapper').classList.add('brands')
    document.querySelector('.swiper-wrapper').classList.remove('swiper-wrapper')

    document.querySelector('.swiper').classList.remove('swiper', 'mySwiper')

    document.querySelectorAll('.swiper-slide').forEach((el) => {
      el.classList.add('brands-high')
      el.classList.remove('swiper-slide')
    })
  }
}
