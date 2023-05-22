const eventsTitle = document.querySelector('.events__title')

window.addEventListener('scroll', () => {
  if (eventsTitle.getBoundingClientRect().y < 500) {
    eventsTitle.classList.add('animate__animated', 'animate__fadeInDown')
  }
})