(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){var n=t.deleteCard,o=t.likeCard,r=t.handleImageClick,a=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),i=a.querySelector("img"),c=a.querySelector(".card__like-num");i.src=e.link,i.alt="Вид на "+e.name,a.querySelector(".card__title").textContent=e.name,c.textContent=e.numLike.length;var u=a.querySelector(".card__delete-button");u.addEventListener("click",(function(t){n(t.target.closest(".card"),e.idCard)}));var l=a.querySelector(".card__like-button");return l.addEventListener("click",(function(t){o(t.target,e.idCard,c)})),i.addEventListener("click",(function(e){r(e.target)})),"c34995df82aa9dc0df91ea68"!==e.author?u.classList.add("hide__delete-button"):u.classList.remove("hide__delete-button"),e.numLike.forEach((function(t){t.name===e.profileName.textContent&&l.classList.add("card__like-button_is-active")})),a}function n(e){e.classList.add("popup_is-opened"),f.addEventListener("click",r),document.addEventListener("keydown",a)}function o(e){e.classList.remove("popup_is-opened"),f.removeEventListener("click",r),document.removeEventListener("keydown",a)}function r(e){e.target.classList.contains("popup")&&o(f)}function a(e){"Escape"===e.key&&o(f)}e.d({},{bA:()=>f});var i="https://nomoreparties.co/v1/wff-cohort-30/",c={authorization:"70a934e4-2d27-4172-bb6b-5fe0eaddbd72","Content-Type":"application/json"};function u(e){return fetch(i+e,{method:"GET",headers:c}).then(d)}function l(e,t){return fetch(i+e+"/"+t,{method:"DELETE",headers:c}).then(d)}function d(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function s(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n),o.textContent=""}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var f,m=document.querySelector(".popup_type_edit"),_=document.querySelector(".popup_type_new-card"),v=document.querySelector(".popup_type_image"),y=document.querySelector(".popup_type_delete_card"),h=document.querySelector(".popup_type_edit_avatar"),b=document.querySelector(".profile__image"),k=document.querySelector(".popup__button_delete"),S="cards",g="users/me",L="cards/likes";function C(e){e.querySelector(".popup__button").textContent="Сохранение..."}function q(e){e.querySelector(".popup__button").textContent="Сохраненить"}v.classList.add("popup_is-animated"),m.classList.add("popup_is-animated"),_.classList.add("popup_is-animated"),y.classList.add("popup_is-animated"),h.classList.add("popup_is-animated");var E=document.querySelector(".places__list");function A(e,t){n(f=y),k.addEventListener("click",(function n(){!function(e,t,r){l(e,t).then((function(){r.remove(),k.removeEventListener("click",n),o(f),q(f)})).catch((function(e){console.log(e)}))}(S,t,e),C(f)}))}function x(e,t,n){e.classList.toggle("card__like-button_is-active"),e.classList.contains("card__like-button_is-active")?function(e,t){return fetch(i+e+"/"+t,{method:"PUT",headers:c}).then(d)}(L,t).then((function(e){n.textContent=e.likes.length})).catch((function(e){console.log(e)})):l(L,t).then((function(e){n.textContent=e.likes.length})).catch((function(e){console.log(e)}))}document.querySelector(".popup__button_edit_avatar");var w=document.forms["form_edit-profile_avatar"];function O(e){e.preventDefault(),C(f);var t,n=document.querySelector(".popup__input_avatar_link");(t=n.value,fetch(i+"users/me/avatar",{method:"PATCH",headers:c,body:JSON.stringify({avatar:t})}).then(d)).then((function(e){var t="background-image: url("+e.avatar+")";b.setAttribute("style",t),n.value="",o(f),q(f)})).catch((function(e){console.log(e)}))}b.addEventListener("click",(function(){n(f=h),w.addEventListener("submit",O)}));var j=document.querySelector(".profile__edit-button"),P=document.querySelector(".popup__input_type_name"),T=document.querySelector(".popup__input_type_description"),N=document.querySelector(".profile__title"),I=document.querySelector(".profile__description");j.addEventListener("click",(function(){P.value=N.textContent,T.value=I.textContent,n(f=m)})),document.querySelector(".profile__add-button").addEventListener("click",(function(){n(f=_)}));var D=document.querySelector(".popup__image"),M=document.querySelector(".popup__caption");function J(e){D.src=e.getAttribute("src"),D.alt=e.getAttribute("alt"),M.textContent=D.alt,n(f=v)}function H(){var e;o(f),e=f,Array.from(e.querySelectorAll(".popup__input")).forEach((function(t){console.log(t),s(e,t,"popup__input_invalid")}))}document.querySelectorAll(".popup__close").forEach((function(e){e.addEventListener("click",H)}));var U=document.forms["edit-profile"],V=U.elements.name,z=U.elements.description;U.addEventListener("submit",(function(e){var t,n,r;e.preventDefault(),C(f),(t=g,n=V.value,r=z.value,fetch(i+t,{method:"PATCH",headers:c,body:JSON.stringify({name:n,about:r})}).then(d)).then((function(e){N.textContent=e.name,I.textContent=e.about,o(m),q(f)})).catch((function(e){console.log(e)}))}));var G=document.forms["new-place"],$=G.elements["place-name"],B=G.elements.link;G.addEventListener("submit",(function(e){var n,r,a;e.preventDefault(),C(f),(n=S,r=$.value,a=B.value,fetch(i+n,{method:"POST",headers:c,body:JSON.stringify({name:r,link:a})}).then(d)).then((function(e){var n={name:e.name,link:e.link,numLike:e.likes,author:e.owner._id,idCard:e._id,profileName:N};E.prepend(t(n,{deleteCard:A,likeCard:x,handleImageClick:J})),o(f),q(f),G.reset()})).catch((function(e){console.log(e)}))})),function(e,t,n,o,r){function a(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.classList.remove(o):t.classList.add(o)}Array.from(document.querySelectorAll(".popup__form")).forEach((function(e){!function(e){var t=Array.from(e.querySelectorAll(".popup__input")),n=e.querySelector(".popup__button");a(t,n),t.forEach((function(o){o.addEventListener("input",(function(){(function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?s(e,t,r):function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r),o.textContent=n}(e,t,t.validationMessage)})(e,o),a(t,n)}))}))}(e)}))}(0,0,0,"button_inactive","popup__input_invalid"),Promise.all([u(g),u(S)]).then((function(e){var n,o,r=(o=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a,i,c=[],u=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=a.call(n)).done)&&(c.push(o.value),c.length!==t);u=!0);}catch(e){l=!0,r=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw r}}return c}}(n,o)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],i=r[1],c="background-image: url("+a.avatar+")";N.textContent=a.name,I.textContent=a.about,b.setAttribute("style",c),i.forEach((function(e){var n={name:e.name,link:e.link,numLike:e.likes,author:e.owner._id,idCard:e._id,profileName:N};E.append(t(n,{deleteCard:A,likeCard:x,handleImageClick:J}))}))})).catch((function(e){console.log(e)}))})();