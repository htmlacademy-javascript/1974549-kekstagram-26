import { MAX_LENGTH } from './util.js';

// Валидация формы

const MAX_HASHTAGS = 5;

const hashtag = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const userForm = document.querySelector('.img-upload__form');
const hashtagInput = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const getHashtag = (string) => string.trim().toLowerCase().split(' ');

const pristine = new Pristine(userForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__form__error',
});

const isHashtagUnique = (value) => {
  const hashtags = getHashtag(value);
  const set = new Set(hashtags);
  return (set.size === hashtags.length);
};

const isValidHashtagLength = (value) => {
  const hashtagLength = getHashtag(value).length;
  return hashtagLength <= MAX_HASHTAGS;
};

const isValidHashtag = (value) => {
  const hashtags = getHashtag(value);
  return hashtags.every((item) => hashtag.test(item));
};

pristine.addValidator(hashtagInput, (value) => isValidHashtagLength(value), `Не более ${MAX_HASHTAGS} хештегов`);
pristine.addValidator(hashtagInput, (value) => isValidHashtag(value), 'хэш-тег начинается с символа # (решётка),хештег должен содержать только буквы и цифры, хештег не может быть менее 1 символа и более 20');
pristine.addValidator(hashtagInput, (value) => isHashtagUnique(value), 'Хештеги должны быть уникальными');
pristine.addValidator(commentField, (value) => value.length <= MAX_LENGTH, `Комментарий не может быть больше ${MAX_LENGTH} символов`);

const isUploadFormValid = () => pristine.validate();

const formSubmit = (evt) => {
  if (!isUploadFormValid()) {
    evt.preventDefault();
  }
};

userForm.addEventListener('submit', formSubmit);

userForm.addEventListener('reset', () => {
  pristine.reset();
});

export {
  isUploadFormValid,
  formSubmit
};
