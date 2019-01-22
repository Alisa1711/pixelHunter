import {
  GAME_STATE,
  settings
} from './data/game-data';

import stats from './stats';

import getlevelElement from './templates/level';

const Answer = function (isCorrect, time) {
  this.isCorrect = isCorrect;
  this.time = 15 || time;
};

const addAnswer = (game, isCorrect) => {
  return game.answers.push(new Answer(isCorrect));
};

const mainElement = document.querySelector(`#main`);

const getElementFromTemplate = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element;
};

const renderScreen = (screen) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(screen);
};

const changeLevel = (game) => {
  if (game.level === settings.MAX_LEVEL) {
    gameOver();
  }
  return Object.assign({}, game, {
    level: game.level + 1
  });
};

const renderLevel = (game) => {
  const levelElement = getlevelElement(game);
  renderScreen(levelElement);
};

const updateGame = (game, isCorrect) => {
  const newGame = changeLevel(game);
  addAnswer(newGame, isCorrect);
  renderLevel(newGame);
  console.log(newGame);
};

const startGame = () => {
  const game = Object.assign({}, GAME_STATE);
  renderLevel(game);
};

const gameOver = () => {
  const screen = getElementFromTemplate(stats);
  renderScreen(screen);
};

export {
  getElementFromTemplate,
  renderScreen,
  renderLevel,
  startGame,
  updateGame,
  addAnswer
};
