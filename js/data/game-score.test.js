import {assert} from 'chai';
import {GAME_STATE, settings} from './game-data';
import {getTotalScore, reduceLives, changeLevel} from './game-score.js';

const CORRECT_ANSWERS = [
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15}
];

const WRONG_ANSWERS = [
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: false, time: 15}
];

const gameState1 = Object.assign({}, GAME_STATE, {
  answers: CORRECT_ANSWERS
});

const gameState2 = Object.assign({}, GAME_STATE, {
  lives: 2,
  answers: WRONG_ANSWERS
});

const gameState3 = Object.assign({}, GAME_STATE, {
  level: settings.MAX_LEVEL,
  lives: 0,
  answers: WRONG_ANSWERS
});

describe(`Check level changer`, () => {
  it(`should increase level`, () => {
    assert.equal(changeLevel(gameState1).level, 2);
  });
  it(`should not allow increase level over ${settings.MAX_LEVEL}`, () => {
    assert.throws(() => reduceLives(gameState3).lives, /You are dead/);
  });
});

describe(`Check lives changer`, () => {
  it(`should reduce lives by 1`, () => {
    assert.equal(reduceLives(gameState2).lives, 1);
  });
  it(`should not allow set negative values`, () => {
    assert.throws(() => reduceLives(gameState3).lives, /You are dead/);
  });
});

describe(`Check total score`, () => {
  it(`should return -1 if got less than 10 answers`, () => {
    assert.equal(getTotalScore(gameState2, 1), -1);
  });
  it(`should return 1150 if got all answers with normal speed and all lives`, () => {
    assert.equal(getTotalScore(gameState1, 3), 1150);
  });
});
