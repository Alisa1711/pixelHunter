const showScreen = (...elements) => {
  const mainElement = document.querySelector(`#main`);
  mainElement.innerHTML = ``;
  elements.forEach((it) => {
    mainElement.appendChild(it);
  });
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
  showScreen,
  resize
};
