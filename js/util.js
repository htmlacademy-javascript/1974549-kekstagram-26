//Функция, возвращающая случайное целое число из переданного диапазона включительно

const randomNumber = (min, max) => {
  if (max < min) {
    return randomNumber(max, min);
  } else if (min === max) {
    return Math.floor(max);
  }
  return Math.floor(Math.random() * (min - max + 1) + max);
};

const getRandomArrayElements = (elements) => elements[randomNumber(0, elements.length - 1)];

// Функция для проверки максимальной длины строки.

const MAX_LENGTH = 140;
const isStringTooLong = (string) => (string.length <= MAX_LENGTH);
isStringTooLong('');

const isEscapeKey = (evt) => evt.key === 'Escape';

export {
  getRandomArrayElements,
  randomNumber,
  isEscapeKey,
  isStringTooLong,
  MAX_LENGTH
};
