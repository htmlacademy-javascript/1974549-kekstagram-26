import {
  createPhotos
} from './data.js';

import {
  pictureTemplateElement,
  similarElement
} from './galleryfoto.js';

import {
  showBigPicture
} from './bigPicture.js';

createPhotos().forEach((picture) => {
  const pictureElement = pictureTemplateElement.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__img').alt = picture.description;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
  similarElement.append(pictureElement);
  pictureElement.addEventListener('click', () => showBigPicture(picture));
});
