import {popupEdit, popupNewCard, popupImage, activePopup} from '/src/index.js';
const buttonsClosePopup = document.querySelectorAll('.popup__close');

function openModal(element){
    element.classList.add('popup_is-opened');
    page.addEventListener('click', closeOverlay);
    document.addEventListener('keydown', closeEsc);
    if (element === popupEdit) {
        buttonsClosePopup[0].addEventListener('click', closeButton);
    } else if(element === popupNewCard) {
        buttonsClosePopup[1].addEventListener('click', closeButton);
    } else if(element === popupImage) {
        buttonsClosePopup[2].addEventListener('click', closeButton); 
    }
}
function closeModal(element){
    element.classList.remove('popup_is-opened'); 
    page.removeEventListener('click', closeOverlay);
    document.removeEventListener('keydown', closeEsc);
    if (element === popupEdit) {
        buttonsClosePopup[0].removeEventListener('click', closeButton);
    } else if(element === popupNewCard) {
        buttonsClosePopup[1].removeEventListener('click', closeButton);
    } else if(element === popupImage) {
        buttonsClosePopup[2].removeEventListener('click', closeButton); 
    }
}
//закрытие окна кликом по крестику
function closeButton(){
    closeModal(activePopup);
}
//закрытие окна кликом по оверлею
const page = document.querySelector('.page__content');
function closeOverlay(){
    activePopup.addEventListener('click', function(evt){
        if (evt.target.classList.contains('popup')){
            closeModal(activePopup);
        }
    });
}
//закрытие попапов по "Esc"
function closeEsc(evt){
    if (evt.key === 'Escape'){
        closeModal(activePopup);
    }
}

export {openModal, closeModal};