// Функция для проверки максимальной длины строки.

const MAX_LENGTH = 140;
const isStringTooLong = (string) => (string.length <= MAX_LENGTH);
isStringTooLong('');

const NAMES = [
  'Андрей',
  'Катя',
  'Вован',
  'Витас',
  'Артур',
  'Влад',
  'Миша'
];

const DESCRIPTIONS = [
  'сучайное описание',
  'сучайное описание 2',
  'сучайное описание 3',
  'сучайное описание 4',
  'сучайное описание 5'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const GENERATED_OBJECT = 25;

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

const creatComment = (comId) => ({
  id: comId,
  avatar: `img/avatar-${randomNumber(1, 6)}.svg`,
  message: getRandomArrayElements(COMMENTS),
  name: `${getRandomArrayElements(NAMES)}`,
});

const createComments = (number) => Array.from({
  length: number
}, (i) => creatComment(i));

const createPhoto = (comId) => ({
  id: comId,
  url: `photos/${randomNumber(1, 25)}.jpg`,
  description: getRandomArrayElements(DESCRIPTIONS),
  likes: randomNumber(15, 200),
  comments: createComments(randomNumber(1, 5)),
});

const createPhotos = () => Array.from({
  length: GENERATED_OBJECT
}, (i) => createPhoto(i));

export {
  creatComment,
  createComments,
  createPhoto,
  createPhotos
};
