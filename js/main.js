//Функция, возвращающая случайное целое число из переданного диапазона включительно

const randomNumber = (min, max) => {
  if (max < min) {
    return randomNumber(max, min);
  } else if (min === max) {
    return Math.floor(max);
  }
  return Math.floor(Math.random() * (min - max + 1) + max);
};

randomNumber(0, 50);

// Функция для проверки максимальной длины строки.

const MAX_LENGTH = 140;
const isStringTooLong = (string) => (string.length <= MAX_LENGTH);
isStringTooLong('');
