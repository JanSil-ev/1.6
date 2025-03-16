document.getElementById('repairButton').addEventListener('click', function () {
  const child = window.matchMedia('(max-width: 770px)').matches ? 6 : 5
  const repairButtons = document.querySelectorAll(
    `.repair-section__slide:nth-last-child(-n+${child})`
  )

  repairButtons.forEach(function (button) {
    button.style.display = button.style.display === 'flex' ? 'none' : 'flex'
  })
  this.textContent = this.textContent === 'Скрыть' ? 'Показать все' : 'Скрыть'

  document
    .querySelector('.repair-section__toggle::before')
    .classList.add('repair-section__toggle--clicked::before')
})
