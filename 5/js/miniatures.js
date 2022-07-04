import {
  createPhoto
} from './data.js';

import {
  pictureTemplateElement,
  similarElement
} from './galleryfoto.js';

createPhoto.forEach((picture) => {
  const pictureElement = pictureTemplateElement.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
  similarElement.appendChild(pictureElement);
});
