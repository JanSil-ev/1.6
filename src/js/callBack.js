const CallIcon = document.querySelector('.icon--call')
const feedbackForm = document.querySelector('.callback')
const closeButton = document.querySelector('.callback__close-button')

const toggleFeedbackForm = () => {
  feedbackForm.classList.toggle('active')
}

CallIcon.addEventListener('click', (e) => {
  e.stopPropagation()
  toggleFeedbackForm()
})

closeButton.addEventListener('click', (e) => {
  e.stopPropagation()
  toggleFeedbackForm()
})

document.addEventListener('click', (e) => {
  const target = e.target
  const isFeedbackForm =
    target === feedbackForm || feedbackForm.contains(target)
  const isCallIcon = target === CallIcon

  if (
    !isFeedbackForm &&
    !isCallIcon &&
    feedbackForm.classList.contains('active')
  ) {
    toggleFeedbackForm()
  }
})

const Call = document.querySelector('.side-nav__button--call')
const callbackFor = document.querySelector('.callback')
const toggleFeedbackFor = () => {
  callbacForm.classList.toggle('active')
}

Call.addEventListener('click', (e) => {
  e.stopPropagation()
  toggleFeedbackForm()
})

const sideNav = document.querySelector('.side-nav')
if (Call && sideNav) {
  Call.addEventListener('click', function () {
    sideNav.classList.remove('active')
  })
}
