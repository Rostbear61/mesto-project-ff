import './pages/index.css';
import initialCards from './scripts/cards.js';
import {createCard, removeCard, likePic} from './scripts/card.js';
import {openModal, closeModal}  from './scripts/modal.js';

const popupEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');

//плавность открытия окон
document.querySelector('.popup_type_image').classList.add('popup_is-animated');
document.querySelector('.popup_type_edit').classList.add('popup_is-animated');
document.querySelector('.popup_type_new-card').classList.add('popup_is-animated');
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
buttonEditProfile.addEventListener('click', function(){
    const profileName = document.querySelector('.popup__input_type_name');
    const profileDescription = document.querySelector('.popup__input_type_description');
    profileName.value = document.querySelector('.profile__title').textContent;
    profileDescription.value = document.querySelector('.profile__description').textContent;
    openModal(popupEdit);
});

//обработка клика по кнопке добавления профиля profile__add-button
const buttonAddProfile = document.querySelector('.profile__add-button');
buttonAddProfile.addEventListener('click', function(){
    openModal(popupNewCard);
});
//Функция открытие попапов по клику по картинке
function imageOpenPopup(element) {
    const popupImagePic = document.querySelector('.popup__image');
    popupImagePic.src = element.getAttribute('src');
    popupImagePic.alt = element.getAttribute('alt');
    document.querySelector('.popup__caption').textContent = popupImagePic.alt;
    openModal(popupImage);
}
//закрытие попапов на крестик
const buttonClosePopup = document.querySelectorAll('.popup__close');

buttonClosePopup[0].addEventListener('click', function(){
    closeModal(popupEdit);
});
buttonClosePopup[1].addEventListener('click', function(){
    closeModal(popupNewCard);
});
buttonClosePopup[2].addEventListener('click', function(){
    closeModal(popupImage);
});
//закрытие окна кликом по оверлею
const page = document.querySelector('.page__content');

page.addEventListener('click', function(){
    const activePopus = document.querySelector('.popup_is-opened');  
    if(activePopus !== null){
        activePopus.addEventListener('click', function(evt){
            if (evt.target.classList.contains('popup')){
                closeModal(activePopus);
            }
        });
    }
});
//закрытие попапов по "Esc"
addEventListener('keydown', function(evt){
    const activePopus = document.querySelector('.popup_is-opened');
    if (evt.key === 'Escape'){
        if(activePopus !== null){
            closeModal(activePopus);
        }
    }
});
//Изменение имени и описание профиля
const formEditProfile = document.forms[0];
const nameInput = formEditProfile.elements[0];
const jobInput = formEditProfile.elements[1];

function handleFormSubmit(evt) {
    evt.preventDefault();
    document.querySelector('.profile__title').textContent = nameInput.value;
    document.querySelector('.profile__description').textContent = jobInput.value;
    closeModal(popupEdit);
};
formEditProfile.addEventListener('submit', handleFormSubmit);
//Добавление карточки
const formNewPlace = document.forms[1];
const formPlaceName = formNewPlace.elements[0];
const formLink = formNewPlace.elements[1];

function handleAddPlace(evt) {
    evt.preventDefault();
    const newCardObject = {
        name: formPlaceName.value,
        link: formLink.value
    };
    cardConteiner.prepend(createCard(newCardObject, {deleteCard: removeCard, likeCard:likePic, handleImageClick:imageOpenPopup}));
    allPopup[1].classList.remove('popup_is-opened');
    closeModal(popupImage);
    formNewPlace.reset();
};
formNewPlace.addEventListener('submit', handleAddPlace);
