export default (game) => {
  return `<ul class="stats">
    ${game.answers.map((answer) => `<li class="stats__result stats__result--${answer.status}"></li>`).join(``)}
    ${new Array(game.rules.levels - game.answers.length)
      .fill(`<li class="stats__result stats__result--unknown"></li>`)
      .join(``)}
    </ul>`;
};
