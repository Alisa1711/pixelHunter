const status = {
  SLOW: `slow`,
  FAST: `fast`,
  CORRECT: `correct`,
  WRONG: `wrong`
};

class Answer {
  constructor(isCorrect, time = 15) {
    this.status = isCorrect ? this.getStatus(time) : status.WRONG;
  }
  getStatus(time) {
    const slow = 20;
    const fast = 10;
    if (time >= slow) {
      return status.SLOW;
    } else if (time <= fast) {
      return status.FAST;
    }
    return status.CORRECT;
  }
}

export default class Game {
  constructor(levels) {
    this.level = 0;
    this.lives = this.rules.lives;
    this.answers = [];
    this._levels = levels;

    this.over = false;
    this.result = false;
  }

  get rules() {
    return {
      levels: 10,
      lives: 3,
      points: 100,
      bonus: 50,
      penalty: -50
    };
  }

  update(isCorrect, time) {
    this.changeLevel();
    const answer = new Answer(isCorrect, time);
    this.answers.push(answer);
    this.manageLives(answer);
    return this;
  }

  get levelObj() {
    return this._levels[this.level];
  }

  manageLives(answer) {
    if (answer.status === status.WRONG) {
      if (this.lives) {
        this.lives--;
      } else {
        this.over = true;
        this.result = false;
      }
    }
  }

  changeLevel() {
    if (this.level === this.rules.levels - 1) {
      this.over = true;
      this.result = true;
    } else {
      this.level++;
    }
  }

  get stats() {
    let total = 0;
    let fast = 0;
    let slow = 0;
    this.answers.forEach((it) => {
      if (it.status !== status.WRONG) {
        total++;
      }
      if (it.status === status.FAST) {
        fast++;
      }
      if (it.status === status.SLOW) {
        slow++;
      }
    });
    return {
      total,
      fast,
      slow
    };
  }

  get scores() {
    const base = this.stats.total * this.rules.points;
    const fast = this.stats.fast * this.rules.bonus;
    const penalty = this.stats.slow * this.rules.penalty;
    const lives = this.lives * this.rules.bonus;
    const total = base + fast + penalty + lives;

    return {
      base,
      fast,
      penalty,
      lives,
      total
    };
  }
}
