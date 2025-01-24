import './pages/index.css';
import {createCard} from './scripts/card.js';
import {openModal, closeModal}  from './scripts/modal.js';
import {getAPI, patchProfile, postAPI, deleteCardAPI, putCardLikeAPI, patchAPI} from './scripts/api.js';
import {enableValidation, clearValidation} from './scripts/validation.js';

const popupEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const popupDelete = document.querySelector('.popup_type_delete_card');
const popupEditAvatar = document.querySelector('.popup_type_edit_avatar');
const editProfileImg = document.querySelector('.profile__image');
const buttonDeleteCard = document.querySelector('.popup__button_delete');
const adrCards = 'cards';
const adrProfile = 'users/me';
const adrProfileAvatar = 'users/me/avatar';
const adrCardLike = 'cards/likes';

let profileId;
let activePopup;

//функция изменения надписи кнопки при загрузке
function waitLoading (formElement){
    const button = formElement.querySelector('.popup__button');
    button.textContent = 'Сохранение...';
}
//функция восстановления надписи когда загрузка завершена
function completeLoading (formElement){
    const button = formElement.querySelector('.popup__button');
    button.textContent = 'Сохранить';
}

//плавность открытия окон
popupImage.classList.add('popup_is-animated');
popupEdit.classList.add('popup_is-animated');
popupNewCard.classList.add('popup_is-animated');
popupDelete.classList.add('popup_is-animated');
popupEditAvatar.classList.add('popup_is-animated');
// @todo: DOM узлы
const cardConteiner = document.querySelector('.places__list');
//функция удаления карточки
function removeCard(element, idCard){
    activePopup = popupDelete;
    openModal(activePopup);

    function clickDelete(){
        sendDeleteCard(adrCards, idCard, element);
        waitLoading(activePopup);
    }
    function sendDeleteCard(adrCards, idCard, element){
        deleteCardAPI(adrCards, idCard)
            .then(() => {
                element.remove();
                buttonDeleteCard.removeEventListener('click', clickDelete);
                closeModal(activePopup);
            })
            .catch(err => {
                console.log(err);
            }) 
            .finally(() => {
                completeLoading(activePopup);
            })
    }
    buttonDeleteCard.addEventListener('click', clickDelete);
}
//функция лайка
function likePic(element, id, cardLike){
   if(element.classList.contains('card__like-button_is-active')) {
        putCardLikeAPI(adrCardLike, id)
        .then((data) => {
            cardLike.textContent = data.likes.length;
            element.classList.add('card__like-button_is-active');
        })
        .catch(err => {
            console.log(err);
        }) 
   } else {
        deleteCardAPI(adrCardLike, id)
        .then((data) => {
            element.classList.remove('card__like-button_is-active');
            cardLike.textContent = data.likes.length;
        })
        .catch(err => {
            console.log(err);
        }) 
   }
}

//редактирование аватарки
const buttonEditAvatar = document.querySelector('.popup__button_edit_avatar');
const formEditAvatar = document.forms['form_edit-profile_avatar'];
editProfileImg.addEventListener('click', () => {
    activePopup = popupEditAvatar;
    openModal(activePopup);
    formEditAvatar.addEventListener('submit', submitProfileImg);
})

function submitProfileImg(evt){
    evt.preventDefault();
    waitLoading(activePopup);
    const linkEditAvatar = document.querySelector('.popup__input_avatar_link');
    patchAPI(adrProfileAvatar, linkEditAvatar.value)
    .then((data) => {
         const atrStyle = `background-image: url(`+ data.avatar + `)`;
        editProfileImg.setAttribute('style', atrStyle);
        linkEditAvatar.value = '';
        closeModal(activePopup);
    }) 
    .catch(err => {
        console.log(err);
    }) 
    .finally(() => {
        completeLoading(activePopup);
    }) 
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
    clearValidation(activePopup)
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
//обработка клика по кнопке закрытия окна
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
    waitLoading(activePopup);
    patchProfile(adrProfile, nameInput.value, jobInput.value)
    .then((data) => {
        editProfileTitle.textContent = data.name;
        editProfileDescription.textContent = data.about;  
        closeModal(popupEdit);
    }) 
    .catch(err => {
        console.log(err);
    })  
    .finally(() => {
        completeLoading(activePopup);
    })
};
formEditProfile.addEventListener('submit', profileFormSubmit);
//Добавление карточки
const formNewPlace = document.forms['new-place'];
const formPlaceName = formNewPlace.elements['place-name'];
const formLink = formNewPlace.elements['link'];

function handleAddPlace(evt) {
    evt.preventDefault();
    waitLoading(activePopup);
    postAPI(adrCards, formPlaceName.value, formLink.value)
    .then((data) => {
        const newCardObject = {
            name: data.name,
            link: data.link,
            numLike: data.likes,
            author : data.owner._id,
            idCard: data._id,
            profileName : editProfileTitle,
            profileId : profileId
        };
        cardConteiner.prepend(createCard(newCardObject, {deleteCard: removeCard, likeCard:likePic, handleImageClick:imageOpenPopup}));
        closeModal(activePopup);
        formNewPlace.reset();
        clearValidation(activePopup)
    })
    .catch(err => {
        console.log(err);
    }) 
    .finally(() => {
        completeLoading(activePopup);
    })
};
formNewPlace.addEventListener('submit', handleAddPlace);

//включение Валидации форм
enableValidation('.popup__form', '.popup__input', '.popup__button', 'button_inactive', 'popup__input_invalid');

//загрузка данных профиля и карточек с сервера
// @todo: Вывести карточки на страницу

Promise.all([getAPI(adrProfile), getAPI(adrCards)])
.then(([profileInfo, allCards]) => {
    const atrStyle = `background-image: url(`+ profileInfo.avatar + `)`;
    editProfileTitle.textContent = profileInfo.name;
    editProfileDescription.textContent = profileInfo.about;  
    editProfileImg.setAttribute('style', atrStyle);
    profileId = profileInfo._id;

    console.log(profileId);

    allCards.forEach(item => {
        const newCardObject = {
            name: item.name,
            link: item.link,
            numLike: item.likes,
            author : item.owner._id,
            idCard: item._id,
            profileName : editProfileTitle,
            profileId : profileId
        };
        cardConteiner.append(createCard(newCardObject, {deleteCard: removeCard, likeCard:likePic, handleImageClick:imageOpenPopup}));
    })
})
.catch(err => {
    console.log(err);
}) 

export {activePopup};
export {removeCard, likePic};