import './main.html';
import './index.scss';
import 'animate.css';
import '../../modules/formSubmit'
import '../../modules/showPopUp'
import '../../modules/accordion'
import '../../modules/animate'
import timer from '../../modules/timer';

window.addEventListener('DOMContentLoaded', () => {
  timer('.timer', '2023-05-31');
})
