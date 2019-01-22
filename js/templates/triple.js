import {updateGame} from '../utils';
export default {
  getString(level) {
    return `<p class="game__task">${level.task}</p>
      <form class="game__content  game__content--triple">
      ${[...level.images].map((img, i) =>
    `<div class="game__option">
      <img src="${img.src}" alt="Option ${i}" width="304" height="455">
    </div>`).join(``)}
      </form>`;
  },
  setListener(levelElement, game, level) {
    const answers = levelElement.querySelectorAll(`.game__option img`);
    const onAnswerClick = ({target}) => {
      const selectedPicture = level.images.find((image) => image.src === target.getAttribute(`src`));
      const isCorrect = selectedPicture.type;
      updateGame(game, isCorrect);
    };
    answers.forEach((answer) => {
      answer.addEventListener(`click`, onAnswerClick);
    });
  }
};
