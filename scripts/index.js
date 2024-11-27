// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content; 
// @todo: DOM узлы
const cardConteiner = document.querySelector('.places__list');
// @todo: Функция создания карточки
function addCard(img, title){
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('img').src = img;
    cardElement.querySelector('.card__title').textContent = title;
    cardConteiner.append(cardElement);

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', function(evt){
    removeCard(evt.target.parentElement);
    });
}
// @todo: Функция удаления карточки
function removeCard(element){
    element.remove();
}
// @todo: Вывести карточки на страницу
for (let i = 0; i < 6; i++){
    addCard(initialCards[i].link, initialCards[i].name);
}


