const popUp = document.querySelector('.pop-up')
const popUpCloseButtons = document.querySelectorAll('.close')

popUpCloseButtons.forEach(item => {
  item.addEventListener('click', () => {
    popUp.classList.remove('pop-up--active')
    document.body.classList.remove('body--active')
  })
})
