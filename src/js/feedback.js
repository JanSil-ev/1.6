const ChatIcon = document.querySelector('.icon--chat')
const feedbackForm = document.querySelector('.feedback')
const closeButton = document.querySelector('.feedback__close-button')

const toggleFeedbackForm = () => {
  feedbackForm.classList.toggle('active')
}

ChatIcon.addEventListener('click', (e) => {
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
  const isChatIcon = target === ChatIcon

  if (
    !isFeedbackForm &&
    !isChatIcon &&
    feedbackForm.classList.contains('active')
  ) {
    toggleFeedbackForm()
  }
})

const Chat = document.querySelector('.side-nav__button--chat')
const feedbackFor = document.querySelector('.feedbac')
const toggleFeedbackFor = () => {
  feedbacForm.classList.toggle('active')
}

Chat.addEventListener('click', (e) => {
  e.stopPropagation()
  toggleFeedbackForm()
})

const FeedNav = document.querySelector('.side-nav')
if (Chat && FeedNav) {
  Chat.addEventListener('click', function () {
    FeedNav.classList.remove('active')
  })
}
