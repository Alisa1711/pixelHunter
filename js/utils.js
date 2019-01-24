const getElementFromTemplate = (template = ``) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element;
};

const renderScreen = (element) => {
  const mainElement = document.querySelector(`#main`);
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

export {
  getElementFromTemplate,
  renderScreen
};
