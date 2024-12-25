function createCard(item, {deleteCard, likeCard, handleImageClick}){
    const cardTemplate = document.querySelector('#card-template').content; 
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImg = cardElement.querySelector('img');
    cardImg.src = item.link;
    cardImg.alt = 'Вид на ' + item.name;
    cardElement.querySelector('.card__title').textContent = item.name;
    
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', function(evt){
        deleteCard(evt.target.closest('.card'));
    });

    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', function(evt){
        likeCard(evt.target);
    });

    cardImg.addEventListener('click', function(evt){
        handleImageClick(evt.target);
    });

    return cardElement;
}

function removeCard(element){
    element.remove();
}

function likePic(element){
    element.classList.toggle('card__like-button_is-active');
}

export {createCard, removeCard, likePic};