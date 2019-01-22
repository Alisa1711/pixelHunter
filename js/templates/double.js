import {updateGame} from '../utils';
export default {
  getString(level) {
    return `<p class="game__task">${level.task}</p>
    <form class="game__content">
    ${[...level.images].map((img, i) =>
    `<div class="game__option">
        <img src="${img.src}" alt="Option ${i}" width="468" height="458">
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
    const answers = Array.from(levelElement.querySelectorAll(`input[type=radio]`));
    const options = levelElement.querySelectorAll(`.game__option`);

    const onAnswerClick = () => {
      const checkedAnswers = answers.filter((answer) => answer.checked);
      if (checkedAnswers.length === options.length) {
        const isCorrect = checkedAnswers.every((answer, i) => answer.value === level.images[i].type);
        updateGame(game, isCorrect);
      }
    };
    answers.forEach((answer) => {
      answer.addEventListener(`click`, onAnswerClick);
    });
  }
};
