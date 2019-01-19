const mainElement = document.querySelector(`#main`);

const getElementFromTemplate = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element;
};

const renderScreen = (screen) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(screen);
};

export {
  getElementFromTemplate,
  renderScreen
};
