import renderIntro from './intro';
import renderGreeting from './greeting';

renderIntro();

document.addEventListener(`click`, (evt) => {
  if (evt.target.closest(`.back`)) {
    renderGreeting();
  }
});
