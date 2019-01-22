import {updateGame} from '../utils';
export default {
  getString(level) {
    return `<p class="game__tassk">${level.task}</p>
    <form class="game__content  game__content--wide">
    ${[...level.images].map((img, i) =>
    `<div class="game__option">
        <img src="${img.src}" alt="Option ${i}" width="705" height="455">
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
  setListener(levelElement, game, level) {
    const answers = levelElement.querySelectorAll(`input[type=radio]`);
    const onAnswerClick = ({target}) => {
      const isCorrect = target.value === level.images[0].type;
      updateGame(game, isCorrect);
    };
    answers.forEach((answer) => {
      answer.addEventListener(`click`, onAnswerClick);
    });
  }
};
