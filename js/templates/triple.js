export default {
  template(level) {
    return `<p class="game__task">${level.task}</p>
      <form class="game__content  game__content--triple">
      ${[...level.images].map((img, i) =>
    `<div class="game__option">
      <img src="${img.src}" alt="Option ${i}" width="304" height="455">
    </div>`).join(``)}
      </form>`;
  },
  answerClass: `.game__option`
};
