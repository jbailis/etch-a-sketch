const runValidation = (validation, errMsg) => data =>
  validation(data) ? true : alert(errMsg);

const validateDimension = runValidation(data =>
  Number.isInteger(data) && data > 0 && data <= 100,
  'Dimension must be a positive integer in range [1, 100]');

function getDimension() {
  let candidate = '';
  do {candidate = Number(prompt('Dimension of your sketch?'));
  } while (!validateDimension(candidate));
  return candidate;
};

const DIMENSION = getDimension();


//const DIMENSION = 16;
const MAX_VIEWPORTS = 80; //derived from css.  remaining viewports after padding

const divWidth = MAX_VIEWPORTS / DIMENSION;
const sketchItemStyle = `width: ${divWidth}vw;`;

const sketchContainer = document.querySelector('.sketch-container');

const addDiv = () => document.createElement('div');

const setHover = (event) => event.currentTarget.classList.add('hover-state');
const hoverOptions = {'once': true}

function setupSketch() {
  for (let i = 0; i < DIMENSION ** 2; i++) {
    let div = addDiv();
    div.classList.add('sketch-item');
    div.setAttribute('style', sketchItemStyle);
    div.addEventListener('pointerover', setHover, hoverOptions);
    sketchContainer.appendChild(div);
  };
};

setupSketch();
