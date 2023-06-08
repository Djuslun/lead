const itemControls = document.querySelectorAll('.item__control')
export const items = document.querySelectorAll('.item')

export const showAcordionItem = (items, num) => {
  items.forEach(item => item.classList.remove('item--active'))
  items[num].classList.add('item--active')
}

itemControls.forEach((item, index) => item.addEventListener('click', () => showAcordionItem(items, index)))

