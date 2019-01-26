import {playGame} from '../main';
export default {
  photoOrPaint: {
    getString(level) {
      const wide = level.images.length === 1;
      const image = {
        width: wide ? 705 : 468,
        height: wide ? 455 : 458
      };
      return `<p class="game__tassk">${level.task}</p>
      <form class="game__content ${wide ? `game__content--wide` : ``}">
      ${[...level.images].map((img, i) => `<div class="game__option">
          <img src="${img.src}" alt="Option ${i}" width="${image.width}" height="${image.height}">
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
        <img src="${img.src}" alt="Option ${i}" width="304" height="455">
      </div>`).join(``)}
        </form>`;
    },
    setListener(levelElement, game) {
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
