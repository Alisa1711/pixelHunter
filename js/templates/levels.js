import {playGame} from '../main';
import {resize} from '../utils';

const DOUBLE_FRAME = {
  width: 468,
  height: 458
};
const SINGLE_FRAME = {
  width: 705,
  height: 455
};
const TRIPLE_FRAME = {
  width: 304,
  height: 455
};

const resizeImages = (levelElement) => {
  const images = Array.from(levelElement.querySelectorAll(`.game__option img`));
  images.forEach((img) => {
    img.addEventListener(`load`, () => {
      const newSize = resize({width: img.width, height: img.height}, {width: img.naturalWidth, height: img.naturalHeight});
      img.width = newSize.width;
      img.height = newSize.height;
    });
  });
};

export default {
  photoOrPaint: {
    getString(level) {
      const isOneImg = level.images.length === 1;
      const frame = isOneImg ? SINGLE_FRAME : DOUBLE_FRAME;

      return `<p class="game__tassk">${level.task}</p>
      <form class="game__content ${isOneImg ? `game__content--wide` : ``}">
      ${[...level.images].map((img, i) => `<div class="game__option">
          <img src="${img.src}" alt="Option ${i}" width="${frame.width}" height="${frame.height}">
          <label class="game__answer game__answer--photo">
            <input class="visually-hidden" name="question${i}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input class="visually-hidden" name="question${i}" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>`).join(``)}
        </form>`;
    },
    setListener(levelElement, game) {
      resizeImages(levelElement);

      const answers = Array.from(levelElement.querySelectorAll(`input[type=radio]`));
      const options = levelElement.querySelectorAll(`.game__option`);

      const onAnswerClick = () => {
        const checkedAnswers = answers.filter((answer) => answer.checked);
        if (checkedAnswers.length === options.length) {
          const isCorrect = checkedAnswers.every(
              (answer, i) => answer.value === game.levelObj.images[i].type);
          playGame(game.update(isCorrect));
        }
      };
      answers.forEach((answer) => {
        answer.addEventListener(`click`, onAnswerClick);
      });
    }
  },
  findImage: {
    getString(level) {
      return `<p class="game__task">${level.task}</p>
        <form class="game__content  game__content--triple">
        ${[...level.images].map((img, i) => `<div class="game__option">
        <img src="${img.src}" alt="Option ${i}" width="${TRIPLE_FRAME.width}" height="${TRIPLE_FRAME.height}">
      </div>`).join(``)}
        </form>`;
    },
    setListener(levelElement, game) {
      resizeImages(levelElement);

      const answers = levelElement.querySelectorAll(`.game__option img`);
      const onAnswerClick = ({target}) => {
        const selectedPicture = game.levelObj.images.find(
            (image) => image.src === target.getAttribute(`src`));
        const isCorrect = selectedPicture.type;
        playGame(game.update(isCorrect));
      };
      answers.forEach((answer) => {
        answer.addEventListener(`click`, onAnswerClick);
      });
    }
  }
};
