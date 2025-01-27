// включение валидации вызовом enableValidation
// все настройки передаются при вызове

function hideInputError(formElement, inputElement, inputErrorClass){
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = '';
  inputElement.setCustomValidity("");
}

function toggleButtonState(inputList, buttonSub, inactiveButtonClass){
  if(hasValidInpit(inputList)){
    buttonSub.classList.add(inactiveButtonClass);
    buttonSub.setAttribute("disabled", "");
  } else {
    buttonSub.classList.remove(inactiveButtonClass);
    buttonSub.removeAttribute("disabled", "");
  }
}

function hasValidInpit(inputList){
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

function enableValidation(configValidation){
 
    const formList = Array.from(document.querySelectorAll(configValidation.formSelector));
    
    function showInputError(formElement, inputElement, errorMessage){
      const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(configValidation.inputErrorClass);
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
        hideInputError(formElement, inputElement, configValidation.inputErrorClass);
      }
    }

    function setEventListeners(formElement, inactiveButtonClass, submitButtonSelector) {
      const inputList = Array.from(formElement.querySelectorAll(configValidation.inputSelector));
      const buttonSub = formElement.querySelector(submitButtonSelector);

      toggleButtonState(inputList, buttonSub, inactiveButtonClass);
      inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          checkInputValidity(formElement, inputElement);
          toggleButtonState(inputList, buttonSub, inactiveButtonClass);
        });
      })
    };

    formList.forEach((formElement) => {
      setEventListeners(formElement, configValidation.inactiveButtonClass, configValidation.submitButtonSelector);
    });
  }
  
function clearValidation(formElement, configValidation){ 
  const inputList = Array.from(formElement.querySelectorAll(configValidation.inputSelector));
  const buttonSub = formElement.querySelector(configValidation.submitButtonSelector);
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, configValidation.inputErrorClass);
    });
  toggleButtonState(inputList, buttonSub, configValidation.inactiveButtonClass);
}

export {enableValidation, clearValidation};