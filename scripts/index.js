// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content; 
// @todo: DOM узлы
const cardConteiner = document.querySelector('.places__list');
// @todo: Функция создания карточки
function createCard(img, title){
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImg = cardElement.querySelector('img');
    cardImg.src = img;
    cardImg.alt = 'Вид на ' + title;
    cardElement.querySelector('.card__title').textContent = title;
    
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', function(evt){
        removeCard(evt.target.closest('.card'));
    });
    return cardElement;
}
// @todo: Функция удаления карточки
function removeCard(element){
    element.remove();
}
// @todo: Вывести карточки на страницу
function addCard(cardElement){
    cardConteiner.append(cardElement);
}
for (let i = 0; i < 6; i++){
    addCard(createCard(initialCards[i].link, initialCards[i].name));
}