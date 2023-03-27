const DIMENSION = 16;
const MAX_VIEWPORTS = 80; //derived from css.  remaining viewports after padding

const divWidth = Math.floor(MAX_VIEWPORTS / DIMENSION);
const sketchItemStyle = `width: ${divWidth}vw;`;

const sketchContainer = document.querySelector('.sketch-container');

const addDiv = () => document.createElement('div');

for (let i = 0; i < DIMENSION ** 2; i++) {
  let div = addDiv();
  div.classList.add('sketch-item');
  div.setAttribute('style', sketchItemStyle);
  sketchContainer.appendChild(div);
};


console.log(sketchContainer);
