const itemControls = document.querySelectorAll('.item__control')
const items = document.querySelectorAll('.item')

const showAcordionItem = (items, num) => {
  items.forEach(item => item.classList.remove('item--active'))
  items[num].classList.add('item--active')
}

itemControls.forEach((item, index) => item.addEventListener('click', () => showAcordionItem(items, index)))

showAcordionItem(items, 0)
