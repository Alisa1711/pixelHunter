export default [
  {
    type: `DoubleView`,
    task: `Угадайте для каждого изображения фото или рисунок?`,
    images: [
      {src: `https://k42.kn3.net/CF42609C8.jpg`, type: `paint`},
      {src: `http://i.imgur.com/1KegWPz.jpg`, type: `photo`}
    ]
  },
  {
    type: `SingleView`,
    task: `Угадай, фото или рисунок?`,
    images: [
      {src: `https://k42.kn3.net/D2F0370D6.jpg`, type: `paint`}
    ]
  },
  {
    type: `TripleView`,
    task: `Найдите рисунок среди изображений`,
    images: [
      {src: `https://k32.kn3.net/5C7060EC5.jpg`, type: true},
      {src: `https://i.imgur.com/DiHM5Zb.jpg`, type: false},
      {src: `http://i.imgur.com/DKR1HtB.jpg`, type: false}
    ]
  }
];
