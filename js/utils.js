import {
  GAME_STATE,
  levels
} from './data/game-data';

import getlevelElement from './templates/level';

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

const changeLevel = (game) => Object.assign({}, game, {
  level: game.level + 1
});

const getAnswersElements = (element, answerClass) => {
  return Array.from(element.querySelectorAll(answerClass));
};

const isAllAnswers = (answers, options) => {
  const checkedAnswers = answers.filter((answer) => answer.checked);
  return checkedAnswers.length === options;
};

const renderLevel = (game) => {
  const currentLevel = levels[game.level];
  const levelElement = getlevelElement(currentLevel);
  const options = levelElement.querySelectorAll(`.game__option`);
  const answerClass = currentLevel.type.answerClass;
  const answersElements = getAnswersElements(levelElement, answerClass);

  const onOptionClick = () => {
    if (currentLevel.type === `triple` || isAllAnswers(answersElements, options.length)) {
      game = changeLevel(game);
      renderLevel(game);
    }
  };
  answersElements.forEach((option) => {
    option.addEventListener(`click`, onOptionClick);
  });
  renderScreen(levelElement);
};

const startGame = () => {
  const game = Object.assign({}, GAME_STATE);
  renderLevel(game);
};

export {
  getElementFromTemplate,
  renderScreen,
  renderLevel,
  startGame
};
