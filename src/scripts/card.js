
import {putCardLikeAPI, deleteCardAPI} from '/src/index.js';

const adrCardLike = 'cards/likes';

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

    deleteButton.addEventListener('click', function(){
        deleteCard (cardElement, item.idCard);
    })

    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', function(evt){
        likeCard(evt.target, item.idCard, cardLike);
    });

    cardImg.addEventListener('click', function(evt){
        handleImageClick(evt.target);
    });
    if(item.author !== item.profileId) {
        deleteButton.classList.add('hide__delete-button');
    } else {
        deleteButton.classList.remove('hide__delete-button');
    }
   
    if (item.numLike.some((element) => {
        return element.name === item.profileName.textContent 
    })){
            likeButton.classList.add('card__like-button_is-active');
    }
   
    return cardElement;
}

//функция лайка
function likePic(element, id, cardLike){

    if(!element.classList.contains('card__like-button_is-active')) {
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
             cardLike.textContent = data.likes.length;
             element.classList.remove('card__like-button_is-active');
         })
         .catch(err => {
             console.log(err);
         }) 
    }
 }

export {createCard, likePic};