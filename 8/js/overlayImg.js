import {
  isEscapeKey
} from './util.js';

const overlay = document.querySelector('.img-upload__overlay');
const uploadCancel= document.querySelector('#upload-cancel');

const overlayClose = () => {
  overlay.classList.add('hidden');
};

const overlayOpen = () => {
  overlay.classList.remove('hidden');
};

uploadCancel.addEventListener('click', () => {
  overlayClose();
});

const onOverlayEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    overlayClose();
  }
};

document.addEventListener('keydown', onOverlayEscKeydown);

export {
  overlayClose,
  overlayOpen
};
