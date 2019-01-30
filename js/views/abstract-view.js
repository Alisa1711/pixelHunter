export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstarctView, only concrete one`);
    }
  }
  get template() {
    throw new Error(`Template is required`);
  }
  render() {
    const element = document.createElement(`div`);
    element.innerHTML = this.template;
    return element;
  }
  bind() {}
  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind(this._element);
    return this._element;
  }
}
