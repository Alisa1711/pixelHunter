import {getElementFromTemplate} from '../utils';
import stats from './stats';
import header from './header';

export default (level) => {
  const template = level.type;
  return getElementFromTemplate(`${header}
    <section class="game">
      ${template.template(level)}
      ${stats}
    </section>`);
};
