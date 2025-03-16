const burgerIcon = document.querySelector('.icon--burger')
const sideNav = document.querySelector('.side-nav')
const closeButton = document.querySelector('.side-nav__button--menu')

const toggleMenu = () => {
  sideNav.classList.toggle('active')
}

burgerIcon.addEventListener('click', (e) => {
  e.stopPropagation()
  toggleMenu()
})

closeButton.addEventListener('click', (e) => {
  e.stopPropagation()
  toggleMenu()
})

document.addEventListener('click', (e) => {
  const target = e.target
  const isSideNav = target === sideNav || sideNav.contains(target)
  const isBurgerIcon = target === burgerIcon

  if (!isSideNav && !isBurgerIcon && sideNav.classList.contains('active')) {
    toggleMenu()
  }
})
