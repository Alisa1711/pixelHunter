import {
  getElementFromTemplate,
  renderScreen
} from '../utils';
import {levels} from '../data/game-data';
import templates from '../templates/level';
import stats from '../templates/stats';
import header from '../templates/header';

export default (game) => {
  const currentLevel = levels[game.level];
  const template = templates[currentLevel.type];
  const levelElement = getElementFromTemplate(
      `${header.getString(game)}
        <section class="game">
          ${template.getString(currentLevel)}
          ${stats(game)}
        </section>`);
  template.setListener(levelElement, game, currentLevel);
  header.setListener(levelElement);
  renderScreen(levelElement);
};
