import AbstractView from './abstract-view';
export default class Header extends AbstractView {
  constructor(game) {
    super();
    this.game = 0 || game;
  }
  get template() {
    return `<header class="header">
      <button class="back">
        <span class="visually-hidden">Вернуться к началу</span>
        <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
          <use xlink:href="img/sprite.svg#arrow-left"></use>
        </svg>
        <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
          <use xlink:href="img/sprite.svg#logo-small"></use>
        </svg>
      </button>
    ${this.game ? `<div class="game__timer">NN</div>
        <div class="game__lives">
        ${new Array(this.game.maxLives - this.game.lives)
        .fill(`<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`).join(``)}
        ${new Array(this.game.lives)
          .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`).join(``)}
        </div>` : ``}
    </header>`;
  }
  bind() {
    const back = this.element.querySelector(`.back`);
    back.addEventListener(`click`, this.onBackClick);
  }
  onBackClick() {}
}
