import {
  getElementFromTemplate,
  renderScreen
} from '../utils';
import greetingElement from './greeting';

const introElement = getElementFromTemplate(
    `<section class="intro">
      <button class="intro__asterisk asterisk" type="button">
        <span class="visually-hidden">Продолжить</span>*</button>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </section>`
);

const asterisk = introElement.querySelector(`.intro__asterisk`);
asterisk.addEventListener(`click`, () => {
  renderScreen(greetingElement);
});

export default introElement;
