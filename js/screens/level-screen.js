import {showScreen} from '../utils';
import SingleView from '../views/single-view';
import DoubleView from '../views/double-view';
import TripleView from '../views/triple-view';
import {playGame} from '../main';
import {getHeader} from './non-game-screens';

const templates = {
  SingleView,
  DoubleView,
  TripleView
};

export default (game) => {
  const header = getHeader(game);
  const Level = templates[game.levelObj.type];
  const level = new Level(game);
  level.onAnswer = (isCorrect) => {
    game.update(isCorrect);
    playGame(game);
  };
  level.resizeImages();
  showScreen(header, level.element);
};
