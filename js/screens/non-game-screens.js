import {showScreen} from '../utils';
import {startGame} from '../main';
import IntroView from '../views/intro-view';
import GreetingView from '../views/greeting-view';
import RulesView from '../views/rules-view';
import ResultsView from '../views/results-view';
import Header from '../views/header-view';

const getHeader = (game) => {
  const header = new Header(game);
  header.onBackClick = () => showGreeting();
  return header.element;
};

const showIntro = () => {
  const intro = new IntroView();
  intro.onButtonClick = () => showGreeting();
  showScreen(intro.element);
};

const showGreeting = () => {
  const greeting = new GreetingView();
  greeting.onButtonClick = () => showRules();
  showScreen(greeting.element);
};

const showRules = () => {
  const rules = new RulesView();
  rules.onButtonClick = () => startGame();
  showScreen(getHeader(), rules.element);
};

const showResults = (game) => {
  const results = new ResultsView(game);
  showScreen(getHeader(), results.element);
};

export {showIntro, showResults, getHeader};
