import './pages/index.css';
import initialCards from './scripts/cards.js';
import {createCard, removeCard, likePic} from './scripts/card.js';
import {openModal, closeModal}  from './scripts/modal.js';

const popupEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
let activePopup;

//плавность открытия окон
popupImage.classList.add('popup_is-animated');
popupEdit.classList.add('popup_is-animated');
popupNewCard.classList.add('popup_is-animated');
// @todo: DOM узлы
const cardConteiner = document.querySelector('.places__list');
// @todo: Вывести карточки на страницу
function addCard(cardElement){
    cardConteiner.append(cardElement);
};
for (let i = 0; i < 6; i++){
    addCard(createCard(initialCards[i], {deleteCard: removeCard, likeCard:likePic, handleImageClick:imageOpenPopup}));
}
//обработка клика по кнопке редактирования профиля
const buttonEditProfile = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.popup__input_type_name');
const profileDescription = document.querySelector('.popup__input_type_description');
const editProfileTitle = document.querySelector('.profile__title');
const editProfileDescription = document.querySelector('.profile__description');

buttonEditProfile.addEventListener('click', function(){
    profileName.value = editProfileTitle.textContent;
    profileDescription.value = editProfileDescription.textContent;
    activePopup = popupEdit;
    openModal(activePopup);
});
//обработка клика по кнопке добавления профиля profile__add-button
const buttonAddProfile = document.querySelector('.profile__add-button');
buttonAddProfile.addEventListener('click', function(){
    activePopup = popupNewCard;
    openModal(activePopup);
});
//Функция открытие попапов по клику по картинке
const popupImagePic = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
function imageOpenPopup(element) {
    popupImagePic.src = element.getAttribute('src');
    popupImagePic.alt = element.getAttribute('alt');
    popupCaption.textContent = popupImagePic.alt;
    activePopup = popupImage;
    openModal(activePopup);
}
//обработка клико по кнопке закрытия окна
const buttonsClosePopup = document.querySelectorAll('.popup__close');

buttonsClosePopup.forEach(item => {
    item.addEventListener('click', closeButton);
});
//закрытие окна кликом по крестику
function closeButton(){
    closeModal(activePopup);
}
//Изменение имени и описание профиля
const formEditProfile = document.forms['edit-profile'];
const nameInput = formEditProfile.elements['name'];
const jobInput = formEditProfile.elements['description'];

function profileFormSubmit(evt) {
    evt.preventDefault();
    document.querySelector('.profile__title').textContent = nameInput.value;
    document.querySelector('.profile__description').textContent = jobInput.value;
    closeModal(popupEdit);
};
formEditProfile.addEventListener('submit', profileFormSubmit);
//Добавление карточки
const formNewPlace = document.forms['new-place'];
const formPlaceName = formNewPlace.elements['place-name'];
const formLink = formNewPlace.elements['link'];

function handleAddPlace(evt) {
    evt.preventDefault();
    const newCardObject = {
        name: formPlaceName.value,
        link: formLink.value
    };
    cardConteiner.prepend(createCard(newCardObject, {deleteCard: removeCard, likeCard:likePic, handleImageClick:imageOpenPopup}));
    closeModal(activePopup);
    formNewPlace.reset();
};
formNewPlace.addEventListener('submit', handleAddPlace);

export {activePopup};