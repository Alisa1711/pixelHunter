import LevelView from './level-view';

export default class DoubleView extends LevelView {
  get template() {
    return `<section class="game">
    <p class="game__task">${this.level.task}</p>
    <form class="game__content">
    ${[...this.level.images].map((img, i) => `<div class="game__option">
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
      </form>
      ${this.stats}
      </section>`;
  }
  bind() {
    const form = this.element.querySelector(`.game__content`);
    const options = this.element.querySelectorAll(`.game__option`);
    const inputs = this.element.querySelectorAll(`input[type=radio]`);

    form.addEventListener(`click`, () => {
      const checkedInputs = [...inputs].filter((it) => it.checked);
      if (checkedInputs.length === options.length) {
        const isCorrect = checkedInputs.every(
            (it, i) => it.value === this.level.images[i].type);
        this.onAnswer(isCorrect);
      }
    });
  }
}
