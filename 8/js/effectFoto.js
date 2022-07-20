const effectLevelContainer = document.querySelector('.effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectList = document.querySelector('.effects__list');
const photoPreview = document.querySelector('.img-upload__preview img');
const effectsRadioElements = document.querySelectorAll('.effects__radio');

let effectNow = 'none';

const EFFECTS_FOTOS = {
  chrome: {
    effectStyle: 'grayscale',
    unit: '',
    slider: {
      step: 0.1,
      min: 0,
      max: 1,
    }
  },

  sepia: {
    effectStyle: 'sepia',
    unit: '',
    slider: {
      step: 0.1,
      min: 0,
      max: 1
    }
  },

  marvin: {
    effectStyle: 'invert',
    unit: '%',
    slider: {
      step: 1,
      min: 0,
      max: 100
    }
  },

  phobos: {
    effectStyle: 'blur',
    unit: 'px',
    slider: {
      step: 0.1,
      min: 0,
      max: 3
    }
  },

  heat: {
    effectStyle: 'brightness',
    unit: '',
    slider: {
      step: 0.1,
      min: 1,
      max: 3
    }
  }
};

noUiSlider.create(effectLevelSlider, {
  connect: 'lower',
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  step: 0.1,
});

const effectReset = () => {
  photoPreview.style.filter = '';
  effectLevelContainer.classList.add('hidden');

  effectsRadioElements.forEach((effectsRadioElement, index) => {
    effectsRadioElements.checked = index === 0;
  });
};

effectLevelSlider.noUiSlider.on('update', () => {
  effectLevelValue.value = effectLevelSlider.noUiSlider.get();

  effectList.addEventListener('change', (evt) => {
    effectNow = evt.target.id.split('-').pop();

    if (effectNow in EFFECTS_FOTOS) {
      const effect = EFFECTS_FOTOS[effectNow];

      effectLevelContainer.classList.remove('hidden');

      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: effect.slider.min,
          max: effect.slider.max,
        },
        start: effect.slider.min,
        step: effect.slider.step,
      });
    } else {
      effectReset();
    }
  });

  if (effectNow in EFFECTS_FOTOS) {
    const effect = EFFECTS_FOTOS[effectNow];
    photoPreview.style.filter = `${effect.effectStyle}(${effectLevelValue.value}${effect.unit})`;
  } else {
    effectReset();
  }
});

export {
  effectReset
};
