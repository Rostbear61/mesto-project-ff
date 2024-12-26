import {activePopup} from '/src/index.js';
function openModal(element){
    element.classList.add('popup_is-opened');
    activePopup.addEventListener('click', closeOverlay);
    document.addEventListener('keydown', closeEsc);
}
function closeModal(element){
    element.classList.remove('popup_is-opened'); 
    activePopup.removeEventListener('click', closeOverlay);
    document.removeEventListener('keydown', closeEsc);
}
//закрытие окна кликом по оверлею
function closeOverlay(evt){
    if (evt.target.classList.contains('popup')){
        closeModal(activePopup);
    }
}
//закрытие попапов по "Esc"
function closeEsc(evt){
    if (evt.key === 'Escape'){
        closeModal(activePopup);
    }
}
export {openModal, closeModal};