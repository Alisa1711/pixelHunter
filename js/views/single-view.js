import LevelView from './level-view';

export default class SingleView extends LevelView {
  get template() {
    return `<section class="game">
    <p class="game__task">${this.level.task}</p>
    <form class="game__content game__content--wide">
    <div class="game__option">
        <img src="${this.level.images[0].src}" alt="Option 1" width="705" height="455">
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden" name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      </form>
      ${this.stats}
      </section>`;
  }
  bind() {
    const option = this.element.querySelector(`.game__option`);
    option.addEventListener(`click`, ({target}) => {
      if (target.tagName === `INPUT`) {
        const isCorrect = target.value === this.level.images[0].type;
        this.onAnswer(isCorrect);
      }
    });
  }
}
