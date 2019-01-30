import LevelView from './level-view';

export default class TripleView extends LevelView {
  get template() {
    return `<section class="game">
    <p class="game__task">${this.level.task}</p>
      <form class="game__content  game__content--triple">
      ${[...this.level.images].map((img, i) => `<div class="game__option">
      <img src="${img.src}" alt="Option ${i}" width="304" height="455">
    </div>`).join(``)}
      </form>
      ${this.stats}
      </section>`;
  }
  bind() {
    const options = this.element.querySelectorAll(`.game__option`);

    const onOptionClick = ({currentTarget}) => {
      const imgSrc = currentTarget.querySelector(`img`).getAttribute(`src`);
      const pickedImg = this.level.images.find(
          (it) => it.src === imgSrc);
      const isCorrect = pickedImg.type;
      this.onAnswer(isCorrect);
    };

    [...options].forEach((it) => {
      it.addEventListener(`click`, onOptionClick);
    });
  }
}
