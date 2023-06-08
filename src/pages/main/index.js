import './main.html';
import './index.scss';
import 'animate.css';
import '../../modules/formSubmit'
import '../../modules/showPopUp'
import '../../modules/accordion'
import '../../modules/animate'
import { observer } from '../../modules/animate';
import { showAcordionItem, items } from '../../modules/accordion';
import timer from '../../modules/timer';

const eventsTitle = document.querySelector('.events__title')

window.addEventListener('DOMContentLoaded', () => {
  timer('.timer', '2023-05-31');
  showAcordionItem(items, 0)
  observer.observe(eventsTitle);
})
