export default {
  template(level) {
    return `<p class="game__task">${level.task}</p>
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
  answerClass: `input[type=radio]`
};
