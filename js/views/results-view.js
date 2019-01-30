import AbstractView from './abstract-view';

export default class ResultsView extends AbstractView {
  constructor(game) {
    super();
    this.game = game;
    this.lives = game.liveBonus;
    this.fast = game.fastBonus;
    this.slow = game.slowPenalty;
    this.win = game.result;
  }
  get template() {
    return `<section class="result">
      <h2 class="result__title">
        ${this.win ? `Победа!` : `Поражение`}
      </h2>
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            <ul class="stats">
            ${this.game.answers.map((it) => `<li class="stats__result stats__result--${it.status}"></li>`).join(``)}
            ${new Array(10 - this.game.answers.length).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}
            </ul>
          </td>
          <td class="result__points">× ${this.win ? `${this.game.pointsPerOne}` : `0` }</td>
          <td class="result__total">${this.win ? `${this.game.points}` : `0`}</td>
        </tr>
        ${this.fast.count ? this.extra(this.fastBonus) : ``}
        ${this.lives.count ? this.extra(this.liveBonus) : ``}
        ${this.slow.count ? this.extra(this.slowPenalty) : ``}
        <tr>
          <td colspan="5" class="result__total  result__total--final">
          ${this.win ? `${this.game.totalScores}` : `Вы проиграли`}</td>
        </tr>
      </table>
    </section>`;
  }
  extra(bonus) {
    return `<tr>
      <td></td>
      <td class="result__extra">${bonus.title}</td>
      <td class="result__extra">${bonus.count} <span class="stats__result stats__result--${bonus.class}"></span></td>
      <td class="result__points">× ${bonus.points}</td>
      <td class="result__total">${bonus.total}</td>
    </tr>`;
  }
  get fastBonus() {
    return {
      title: `Бонус за скорость:`,
      count: this.fast.count,
      class: `fast`,
      points: this.game.bonus,
      total: this.fast.total
    };
  }
  get liveBonus() {
    return {
      title: `Бонус за жизни:`,
      count: this.lives.count,
      class: `alive`,
      points: this.game.bonus,
      total: this.lives.total
    };
  }
  get slowPenalty() {
    return {
      title: `Штраф за медлительность:`,
      count: this.slow.count,
      class: `slow`,
      points: this.game.penalty,
      total: this.slow.total
    };
  }
}
