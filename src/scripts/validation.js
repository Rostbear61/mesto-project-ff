// включение валидации вызовом enableValidation
// все настройки передаются при вызове
function hideInputError(formElement, inputElement, inputErrorClass){
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = '';
}

function enableValidation(
    formSelector,
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass){
      
    const formList = Array.from(document.querySelectorAll(formSelector));

    function hasValidInpit(inputList){
      return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      })
    }

    function toggleButtonState(inputList, buttonSub){
      if(hasValidInpit(inputList)){
        buttonSub.classList.add(inactiveButtonClass);
      } else {
        buttonSub.classList.remove(inactiveButtonClass);
      }
    };
    
    function showInputError(formElement, inputElement, errorMessage){
      const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(inputErrorClass);
      errorElement.textContent = errorMessage;
    }
    function checkInputValidity(formElement, inputElement){
      if(inputElement.validity.patternMismatch){
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
      } else {
        inputElement.setCustomValidity("");
      }
      if(!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
      } else {
        hideInputError(formElement, inputElement, inputErrorClass);
      }
    }

    function setEventListeners(formElement) {
      const inputList = Array.from(formElement.querySelectorAll(inputSelector));
      const buttonSub = formElement.querySelector(submitButtonSelector);

      toggleButtonState(inputList, buttonSub);

      inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          checkInputValidity(formElement, inputElement);
          toggleButtonState(inputList, buttonSub);
        });
      })
    };

    formList.forEach((formElement) => {
      setEventListeners(formElement);
    });
  }
  
function clearValidation(profileForm, inputErrorClass){ 
     const inputList = Array.from(profileForm.querySelectorAll('.popup__input'));
     inputList.forEach((inputElement) => {
      console.log(inputElement);
      hideInputError(profileForm, inputElement, inputErrorClass);
     });
  }

export {enableValidation, clearValidation};