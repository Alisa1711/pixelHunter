import {getElementFromTemplate, renderScreen} from '../utils';
import templates from '../templates/levels';
import stats from '../templates/stats';
import header from '../templates/header';

export default (game) => {
  const template = templates[game.levelObj.type];
  const levelElement = getElementFromTemplate(
      ` ${header.getString(game)}
          <section class="game">
            ${template.getString(game.levelObj)}
            ${stats(game)}
          </section>`);
  template.setListener(levelElement, game);
  header.setListener(levelElement);
  renderScreen(levelElement);
};
