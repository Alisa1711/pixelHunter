import Game from './data/game-data';
import levels from './data/levels-data';
import {showIntro, showResults} from './screens/non-game-screens';
import showLevel from './screens/level-screen';

showIntro();

const startGame = () => {
  const game = new Game(levels);
  playGame(game);
};

const playGame = (game) => {
  return game.over ? showResults(game) : showLevel(game);
};

export {
  startGame,
  playGame
};
