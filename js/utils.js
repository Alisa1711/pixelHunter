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

const resize = (frame, image) => {
  const frameRatio = frame.width / frame.height;
  const imageRatio = image.width / image.height;
  if (frameRatio >= imageRatio) {
    return {
      width: Math.floor(frame.height * imageRatio),
      height: frame.height,
    };
  } else {
    return {
      width: frame.width,
      height: Math.floor(frame.width / imageRatio),
    };
  }
};

export {
  getElementFromTemplate,
  renderScreen,
  resize
};
