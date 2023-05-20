const popUp = document.querySelector('.pop-up')
const popUpCloseButtons = document.querySelectorAll('.close')
const popUpTitle = document.querySelector('.pop-up__title')
const popUpDescription = document.querySelector('.pop-up__description')

export const showPopUp = (status) => {
  if (status === 'error') {
    popUpTitle.textContent = 'ERROR!'
    popUpDescription.textContent = "Something goes wrong("
  }
  if (status === 'ok') {
    popUpTitle.textContent = 'SUCCESS!'
    popUpDescription.textContent = "You have successfully subscribed to the email newsletter"
  }
  popUp.classList.add('pop-up--active')
  document.body.classList.add('body--active')
}

const hidePopUp = () => {
  popUp.classList.remove('pop-up--active')
  document.body.classList.remove('body--active')
}

popUpCloseButtons.forEach(item => item.addEventListener('click', hidePopUp))
