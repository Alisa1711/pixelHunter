const GAME_STATE = Object.freeze({
  level: levels[0],
  lives: 3,
  answers: []
});

const settings = {
  TIME_MAX: 30,
  TIME_SLOW: 20,
  TIME_FAST: 10,
  MAX_LEVEL: 10
};

const levels = [
  {
    type: `double`,
    images: [
      {src: `https://k42.kn3.net/CF42609C8.jpg`, type: `paint`},
      {src: `http://i.imgur.com/1KegWPz.jpg`, type: `photo`}
    ]
  },
  {
    type: `double`,
    images: [
      {src: `https://k42.kn3.net/D2F0370D6.jpg`, type: `paint`}
    ]
  },
  {
    type: `triple`,
    images: [
      {src: `https://k32.kn3.net/5C7060EC5.jpg`, type: `paint`},
      {src: `https://i.imgur.com/DiHM5Zb.jpg`, type: `photo`},
      {src: `http://i.imgur.com/DKR1HtB.jpg`, type: `photo`}
    ]
  }
];

export {GAME_STATE, settings};
