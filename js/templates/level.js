import {
  getElementFromTemplate,
  // updateGame
} from '../utils';
import {levels} from '../data/game-data';
import single from './single';
import double from './double';
import triple from './triple';
import stats from './stats';
import header from './header';

const typeToTemplate = {
  single,
  double,
  triple
};

export default (game) => {
  const currentLevel = levels[game.level];
  const template = typeToTemplate[currentLevel.type];
  const levelElement = getElementFromTemplate(`${header}
    <section class="game">
      ${template.getString(currentLevel)}
      ${stats}
    </section>`);
  template.setListener(levelElement, game, currentLevel);
  return levelElement;
};
