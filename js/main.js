import Game from './data/game';
import levels from './data/levels';
import intro from './screens/intro';
import result from './screens/result';
import renderLevel from './screens/game-screen';

intro();

const startGame = () => {
  const game = new Game(levels);
  playGame(game);
};

const playGame = (game) => game.over ? result(game) : renderLevel(game);

export {
  startGame,
  playGame
};
