function openModal(element){
    element.classList.add('popup_is-opened');
}
function closeModal(element){
    element.classList.remove('popup_is-opened'); 
}
function escCloseModal(activePopup){
    closeModal(activePopup);
}
function overlayCloseModal(activePopup){
    activePopup.addEventListener('click', function(evt){
        if (evt.target.classList.contains('popup')){
            closeModal(activePopup);
        }
    });
}

export {openModal, closeModal, escCloseModal, overlayCloseModal};