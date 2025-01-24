function createCard(item, {deleteCard, likeCard, handleImageClick}){
    const cardTemplate = document.querySelector('#card-template').content; 
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImg = cardElement.querySelector('img');
    const cardLike = cardElement.querySelector('.card__like-num');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    
    cardImg.src = item.link;
    cardImg.alt = 'Вид на ' + item.name;
    cardElement.querySelector('.card__title').textContent = item.name;
    cardLike.textContent = item.numLike.length;
    deleteButton.addEventListener('click', function(evt){
        deleteCard(evt.target.closest('.card'), item.idCard);
    });

    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', function(evt){
        likeCard(evt.target, item.idCard, cardLike);
    });

    cardImg.addEventListener('click', function(evt){
        handleImageClick(evt.target);
    });

    if(item.author !== item.author) {
        deleteButton.classList.add('hide__delete-button');
    } else {
        deleteButton.classList.remove('hide__delete-button');
    }
    item.numLike.forEach((array) => {
        if (array.name === item.profileName.textContent){
            likeButton.classList.add('card__like-button_is-active');
        }
    })
    return cardElement;
}

export {createCard};