const textRotate = document.querySelectorAll('.item__rotate');
const text = document.querySelectorAll('.item__title');
const itemBodies = document.querySelectorAll('.item__body')
const itemControls = document.querySelectorAll('.item__control')
const items = document.querySelectorAll('.item')

// text.forEach((item, index) => {
//   const rotatedWidth = getComputedStyle(item).height;
//   textRotate[index].style.width = rotatedWidth;
// })


itemControls.forEach((item, index) => {
  item.addEventListener('click', () => {
    items.forEach(item => item.classList.remove('item--active'))
    items[index].classList.add('item--active')
  })
})

items[0].classList.add('item--active')
