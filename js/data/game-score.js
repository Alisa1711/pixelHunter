import {settings} from './game-data';

const getTotalScore = (game, livesAmount) => {
  const points = {
    CORRECT_ANSWER: 100,
    LIVE: 50,
    FAST: 50,
    SLOW: -50
  };
  const correctAnswers = game.answers.filter((it) => it.isCorrect === true);
  let totalScore = correctAnswers.length * points.CORRECT_ANSWER;
  correctAnswers.forEach((it) => {
    if (it.settings >= settings.TIME_SLOW) {
      totalScore += points.SLOW;
    } else if (it.settings <= settings.TIME_FAST) {
      totalScore += points.FAST;
    }
  });
  if (correctAnswers.length < 10) {
    return -1;
  }
  return totalScore + livesAmount * points.LIVE;
};

const reduceLives = (game) => {
  const newGame = Object.assign({}, game, {
    lives: --game.lives
  });
  if (newGame.lives < 0) {
    throw new Error(`You are dead`);
  }
  return newGame;
};

const changeLevel = (game) => {
  const MAX_LEVEL = 10;
  let level = ++game.level;
  if (level > MAX_LEVEL) {
    throw new Error(`This is last level`);
  }
  const newGame = Object.assign({}, game, {
    level
  });
  return newGame;
};

export {
  getTotalScore,
  reduceLives,
  changeLevel
};
