import {getElementFromTemplate, renderScreen} from '../utils';
import header from '../templates/header';

export default (game) => {
  const template = `${header.getString()}
        <section class="result">
          <h2 class="result__title">
            ${game.result ? `Победа!` : `Поражение`}
          </h2>
          <table class="result__table">
            <tr>
              <td class="result__number">1.</td>
              <td colspan="2">
                <ul class="stats">
                ${game.answers.map((answer) => `<li class="stats__result stats__result--${answer.status}"></li>`).join(``)}
                </ul>
              </td>
              <td class="result__points">× ${game.rules.points}</td>
              <td class="result__total">${game.scores.base}</td>
            </tr>
            ${game.stats.fast ? `<tr>
              <td></td>
              <td class="result__extra">Бонус за скорость:</td>
              <td class="result__extra">${game.stats.fast} <span class="stats__result stats__result--fast"></span></td>
              <td class="result__points">× ${game.rules.bonus}</td>
              <td class="result__total">${game.scores.fast}</td>
            </tr>` : ``}
            ${game.lives ? `<tr>
              <td></td>
              <td class="result__extra">Бонус за жизни:</td>
              <td class="result__extra">${game.lives}<span class="stats__result stats__result--alive"></span></td>
              <td class="result__points">× ${game.rules.bonus}</td>
              <td class="result__total">${game.scores.lives}</td>
            </tr>` : ``}
            ${game.stats.slow ? `<tr>
              <td></td>
              <td class="result__extra">Штраф за медлительность:</td>
              <td class="result__extra">${game.stats.slow}<span class="stats__result stats__result--slow"></span></td>
              <td class="result__points">× -50</td>
              <td class="result__total">-${game.scores.penalty}</td>
            </tr>` : ``}
            <tr>
              <td colspan="5" class="result__total  result__total--final">${game.scores.total}</td>
            </tr>
          </table>
        </section>`;

  const elem = getElementFromTemplate(template);
  header.setListener(elem);
  renderScreen(elem);
};
