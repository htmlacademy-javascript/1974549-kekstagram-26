import {
  overlayOpen
} from './overlayImg.js';

const imageSize = {
  WIDTH: 600,
  HEIGHT: 600,
};

const TYPES_FILE = ['png','jpg','jpeg'];

const uploadButton = document.querySelector('#upload-file');
const previewImg = document.querySelector('.img-upload__preview img');

uploadButton.addEventListener('change', (evt) => {
  const file = evt.target.files[0];
  const fileName = file.name.toLowerCase();

  const match = TYPES_FILE.some((it) => fileName.endsWith(it));

  if (match) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      previewImg.src = reader.result;
      previewImg.width = imageSize.WIDTH;
      previewImg.height = imageSize.HEIGHT;

      overlayOpen();
    });

    reader.readAsDataURL(file);
  }
});
