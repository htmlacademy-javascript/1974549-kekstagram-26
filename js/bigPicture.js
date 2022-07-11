const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCancelElement = bigPictureElement.querySelector('.big-picture__cancel');
const socialCommentsElement = bigPictureElement.querySelector('.social__comments');
const socialListCommentsElement = socialCommentsElement.querySelector('.social__comment');
const commentAvatarElement = socialListCommentsElement.querySelector('.social__picture');

// Отрисовка комментариев

const renderComment = ({
  message,
  avatar,
  nameUser
}) => {
  const newComments = socialListCommentsElement.cloneNode(true);
  const commentsTextElement = newComments.querySelector('.social__text');
  commentAvatarElement.src = avatar;
  commentAvatarElement.url = nameUser;
  commentsTextElement.textContent = message;
  return newComments;
};

const renderComments = (
  comments
) => {
  const newUserComment = document.createDocumentFragment();
  socialCommentsElement.innerHTML = '';
  for (let i = 0; i < comments.length; i++) {
    newUserComment.append(renderComment(comments[i]));
  }
  socialCommentsElement.append(newUserComment);
};

// Открытие большого фото

const renderBigPicture = ({
  likes,
  comments,
  url,
  description
}) => {
  bigPictureElement.querySelector('img').src = url;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
  bigPictureElement.querySelector('.comments-count').textContent = comments;
  renderComments(comments);
};

const showBigPicture = (picture) => {
  bigPictureElement.classList.remove('hidden');
  bigPictureElement.querySelector('.social__comment-count').classList.add('hidden');
  document.body.classList.add('.modal-open');
  renderBigPicture(picture);
  document.addEventListener('keydown', escKeydownHandler);
};

// Закрытие большого фото

const closeBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', escKeydownHandler);
};

function escKeydownHandler(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
}

bigPictureCancelElement.addEventListener('click', closeBigPicture);


export {
  showBigPicture
};
