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
    this.maxLevels = levels.length;
    this.maxLives = 3;
    this.pointsPerOne = 100;
    this.bonus = 50;
    this.penalty = -50;

    this.level = 0;
    this.lives = this.maxLives;
    this.answers = [];
    this._levels = levels;

    this.over = false;
    this.result = false;
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
    if (this.level === this.maxLevels - 1) {
      this.over = true;
      this.result = true;
    } else {
      this.level++;
    }
  }

  get fastBonus() {
    const count = this.answers.filter((it) => it.status === status.FAST).length;
    return {
      count,
      total: count * this.bonus
    };
  }

  get liveBonus() {
    return {
      count: this.lives,
      total: this.lives * this.bonus
    };
  }

  get slowPenalty() {
    const count = this.answers.filter((it) => it.status === status.SLOW).length;
    return {
      count,
      total: count * this.penalty
    };
  }

  get points() {
    const count = this.answers.filter((it) => it.status !== status.WRONG).length;
    return count * this.pointsPerOne;
  }

  get totalScores() {
    return this.points + this.fastBonus.total + this.liveBonus.total + this.slowPenalty.total;
  }
}
