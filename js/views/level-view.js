import AbstractView from './abstract-view';
import {resize} from '../utils';

export default class LevelView extends AbstractView {
  constructor(game) {
    super();
    this.level = game.levelObj;
    this.game = game;
  }
  get stats() {
    return `<ul class="stats">
      ${this.game.answers.map((answer) => `<li class="stats__result stats__result--${answer.status}"></li>`).join(``)}
      ${new Array(this.game.maxLevels - this.game.answers.length)
        .fill(`<li class="stats__result stats__result--unknown"></li>`)
        .join(``)}
      </ul>`;
  }
  resizeImages() {
    const images = this.element.querySelectorAll(`.game__option img`);
    [...images].forEach((img) => {
      img.addEventListener(`load`, () => {
        const newSize = resize(
            {width: img.width, height: img.height},
            {width: img.naturalWidth, height: img.naturalHeight});
        img.width = newSize.width;
        img.height = newSize.height;
      });
    });
  }
  onAnswer(_isCorrect) {}
}
