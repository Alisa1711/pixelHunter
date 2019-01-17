const mainElement = document.querySelector(`#main`);

export const getElementFromTemplate = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element;
};

export const renderScreen = (screen) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(screen);
};
