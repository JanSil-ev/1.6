document.getElementById('hideButton').addEventListener('click', function () {
  const child = window.matchMedia('(min-width: 768px)').matches ? 3 : 5
  const brandButtons = document.querySelectorAll(
    `.brands-high:nth-last-child(-n+${child})`
  )

  brandButtons.forEach(function (button) {
    button.style.display = button.style.display === 'flex' ? 'none' : 'flex'
  })
  this.textContent = this.textContent === 'Скрыть' ? 'Показать все' : 'Скрыть'
  hideButton.classList.toggle('tap')

  document
    .querySelector('.hideButton::before')
    .classList.add('hideButton--clicked::before')
})
