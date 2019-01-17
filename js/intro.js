import {getElementFromTemplate, renderScreen} from './utils';
import renderGreeting from './greeting';

const intro = getElementFromTemplate(
    `<section class="intro">
      <button class="intro__asterisk asterisk" type="button">
        <span class="visually-hidden">Продолжить</span>*</button>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </section>`
);

const renderIntro = () => {
  renderScreen(intro);
  const asterisk = document.querySelector(`.intro__asterisk`);
  asterisk.addEventListener(`click`, renderGreeting);
};

export default renderIntro;
