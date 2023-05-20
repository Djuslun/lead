const footerForm = document.querySelector('.footer__form');

footerForm.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log('++')
  popUp.classList.add('pop-up--active')
  document.body.classList.add('body--active')
})
