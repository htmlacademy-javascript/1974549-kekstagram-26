const buttonScaleMinus = document.querySelector('.scale__control--smaller');
const buttonScalePlus = document.querySelector('.scale__control--bigger');
const scaleImgPreview = document.querySelector('.img-upload__preview img');
const scaleInput = document.querySelector('.scale__control--value');


const SCALE_DEFAULT = 25;
const MINUS_SCALE = 25;
const PLUS_SCALE = 100;

// Функция для уменьшения и увеличения изображения

const  scale = () => {
  const currentValue = parseFloat(scaleInput.value);
  scaleImgPreview.style.transform = `scale(${currentValue / 100})`;
};

const plusScaleClickHandler = () => {
  const currentValue = parseFloat(scaleInput.value);

  if (currentValue === PLUS_SCALE) {
    return false;
  }
  scaleInput.value = `${currentValue + SCALE_DEFAULT}%`;
  scale();
};

const minusScaleClickHandler = () => {
  const currentValue = parseFloat(scaleInput.value);

  if (currentValue === MINUS_SCALE) {
    return false;
  }
  scaleInput.value = `${currentValue - SCALE_DEFAULT}%`;
  scale();
};

buttonScaleMinus.addEventListener('click', minusScaleClickHandler);
buttonScalePlus.addEventListener('click', plusScaleClickHandler);

export const reset = () => {
  scaleImgPreview.style.transform = '';
};
