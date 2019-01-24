import {
  GAME_STATE,
  settings
} from './data/game-data';

import {
  getElementFromTemplate,
  renderScreen
} from './utils';

import result from './screens/result';

import renderLevel from './screens/game';

const Answer = function (isCorrect, time) {
  this.isCorrect = isCorrect;
  this.time = 15 || time;

  const getStatus = () => {
    if (this.time >= settings.TIME_SLOW) {
      return `slow`;
    } else if (this.time <= settings.TIME_FAST) {
      return `fast`;
    }
    return `correct`;
  };

  this.status = isCorrect ? getStatus() : `wrong`;
};

const addAnswer = (game, isCorrect) => {
  return game.answers.push(new Answer(isCorrect));
};

const changeLevel = (game) => {
  if (game.level === settings.MAX_LEVEL - 1) {
    gameOver();
  }
  return Object.assign({}, game, {
    level: game.level + 1
  });
};

const decreaseLives = (game, isCorrect) => {
  game.lives = isCorrect ? game.lives : --game.lives;
  return game;
};

const updateGame = (game, isCorrect) => {
  addAnswer(game, isCorrect);
  decreaseLives(game, isCorrect);
  console.log(game);
  const newGame = changeLevel(game);
  renderLevel(newGame);
};

const startGame = () => {
  const game = Object.assign({}, GAME_STATE);
  console.log(game);
  renderLevel(game);
};

const gameOver = () => {
  const screen = getElementFromTemplate(result);
  renderScreen(screen);
};

export {
  startGame,
  updateGame,
  addAnswer
};
