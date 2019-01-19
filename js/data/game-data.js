const GAME_STATE = Object.freeze({
  level: 1,
  lives: 3,
  answers: []
});

const settings = {
  TIME_MAX: 30,
  TIME_SLOW: 20,
  TIME_FAST: 10,
  MAX_LEVEL: 10
};

export {GAME_STATE, settings};
