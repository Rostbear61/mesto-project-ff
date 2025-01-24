(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){var n=t.deleteCard,o=t.likeCard,r=t.handleImageClick,a=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),i=a.querySelector("img"),c=a.querySelector(".card__like-num");i.src=e.link,i.alt="Вид на "+e.name,a.querySelector(".card__title").textContent=e.name,c.textContent=e.numLike.length;var u=a.querySelector(".card__delete-button");u.addEventListener("click",(function(t){n(t.target.closest(".card"),e.idCard)}));var l=a.querySelector(".card__like-button");return l.addEventListener("click",(function(t){o(t.target,e.idCard,c)})),i.addEventListener("click",(function(e){r(e.target)})),"c34995df82aa9dc0df91ea68"!==e.author?u.classList.add("hide__delete-button"):u.classList.remove("hide__delete-button"),e.numLike.forEach((function(t){t.name===e.profileName.textContent&&l.classList.add("card__like-button_is-active")})),a}function n(e){e.classList.add("popup_is-opened"),_.addEventListener("click",r),document.addEventListener("keydown",a)}function o(e){e.classList.remove("popup_is-opened"),_.removeEventListener("click",r),document.removeEventListener("keydown",a)}function r(e){e.target.classList.contains("popup")&&o(_)}function a(e){"Escape"===e.key&&o(_)}e.d({},{bA:()=>_});var i,c="https://nomoreparties.co/v1/wff-cohort-30/",u={authorization:"70a934e4-2d27-4172-bb6b-5fe0eaddbd72","Content-Type":"application/json"};function l(e){return fetch(c+e,{method:"GET",headers:u}).then(s)}function d(e,t){return fetch(c+e+"/"+t,{method:"DELETE",headers:u}).then(s)}function s(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function p(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(i),n.textContent=""}function f(e){Array.from(e.querySelectorAll(".popup__input")).forEach((function(t){console.log(t),p(e,t)}))}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var _,v=document.querySelector(".popup_type_edit"),y=document.querySelector(".popup_type_new-card"),h=document.querySelector(".popup_type_image"),b=document.querySelector(".popup_type_delete_card"),k=document.querySelector(".popup_type_edit_avatar"),S=document.querySelector(".profile__image"),g=document.querySelector(".popup__button_delete"),L="cards",C="users/me",q="cards/likes";function E(e){e.querySelector(".popup__button").textContent="Сохранение..."}function A(e){e.querySelector(".popup__button").textContent="Сохраненить"}h.classList.add("popup_is-animated"),v.classList.add("popup_is-animated"),y.classList.add("popup_is-animated"),b.classList.add("popup_is-animated"),k.classList.add("popup_is-animated");var x=document.querySelector(".places__list");function w(e,t){n(_=b),g.addEventListener("click",(function n(){!function(e,t,r){d(e,t).then((function(){r.remove(),g.removeEventListener("click",n),o(_),A(_)})).catch((function(e){console.log(e)}))}(L,t,e),E(_)}))}function O(e,t,n){e.classList.toggle("card__like-button_is-active"),e.classList.contains("card__like-button_is-active")?function(e,t){return fetch(c+e+"/"+t,{method:"PUT",headers:u}).then(s)}(q,t).then((function(e){n.textContent=e.likes.length})).catch((function(e){console.log(e)})):d(q,t).then((function(e){n.textContent=e.likes.length})).catch((function(e){console.log(e)}))}document.querySelector(".popup__button_edit_avatar");var j=document.forms["form_edit-profile_avatar"];function P(e){e.preventDefault(),E(_);var t,n=document.querySelector(".popup__input_avatar_link");(t=n.value,fetch(c+"users/me/avatar",{method:"PATCH",headers:u,body:JSON.stringify({avatar:t})}).then(s)).then((function(e){var t="background-image: url("+e.avatar+")";S.setAttribute("style",t),n.value="",o(_),A(_)})).catch((function(e){console.log(e)}))}S.addEventListener("click",(function(){n(_=k),j.addEventListener("submit",P)}));var T=document.querySelector(".profile__edit-button"),N=document.querySelector(".popup__input_type_name"),I=document.querySelector(".popup__input_type_description"),D=document.querySelector(".profile__title"),M=document.querySelector(".profile__description");T.addEventListener("click",(function(){N.value=D.textContent,I.value=M.textContent,f(_=v),n(_)})),document.querySelector(".profile__add-button").addEventListener("click",(function(){n(_=y)}));var J=document.querySelector(".popup__image"),H=document.querySelector(".popup__caption");function U(e){J.src=e.getAttribute("src"),J.alt=e.getAttribute("alt"),H.textContent=J.alt,n(_=h)}function V(){o(_)}document.querySelectorAll(".popup__close").forEach((function(e){e.addEventListener("click",V)}));var z=document.forms["edit-profile"],G=z.elements.name,$=z.elements.description;z.addEventListener("submit",(function(e){var t,n,r;e.preventDefault(),E(_),(t=C,n=G.value,r=$.value,fetch(c+t,{method:"PATCH",headers:u,body:JSON.stringify({name:n,about:r})}).then(s)).then((function(e){D.textContent=e.name,M.textContent=e.about,o(v),A(_)})).catch((function(e){console.log(e)}))}));var B=document.forms["new-place"],F=B.elements["place-name"],K=B.elements.link;B.addEventListener("submit",(function(e){var n,r,a;e.preventDefault(),E(_),(n=L,r=F.value,a=K.value,fetch(c+n,{method:"POST",headers:u,body:JSON.stringify({name:r,link:a})}).then(s)).then((function(e){var n={name:e.name,link:e.link,numLike:e.likes,author:e.owner._id,idCard:e._id,profileName:D};x.prepend(t(n,{deleteCard:w,likeCard:O,handleImageClick:U})),o(_),A(_),B.reset(),f(_)})).catch((function(e){console.log(e)}))})),function(e,t,n,o,r){function a(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.classList.remove(o):t.classList.add(o)}i=r,Array.from(document.querySelectorAll(".popup__form")).forEach((function(e){!function(e){var t=Array.from(e.querySelectorAll(".popup__input")),n=e.querySelector(".popup__button");a(t,n),t.forEach((function(o){o.addEventListener("input",(function(){(function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?p(e,t):function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r),o.textContent=n}(e,t,t.validationMessage)})(e,o),a(t,n)}))}))}(e)}))}(0,0,0,"button_inactive","popup__input_invalid"),Promise.all([l(C),l(L)]).then((function(e){var n,o,r=(o=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a,i,c=[],u=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=a.call(n)).done)&&(c.push(o.value),c.length!==t);u=!0);}catch(e){l=!0,r=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw r}}return c}}(n,o)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],i=r[1],c="background-image: url("+a.avatar+")";D.textContent=a.name,M.textContent=a.about,S.setAttribute("style",c),i.forEach((function(e){var n={name:e.name,link:e.link,numLike:e.likes,author:e.owner._id,idCard:e._id,profileName:D};x.append(t(n,{deleteCard:w,likeCard:O,handleImageClick:U}))}))})).catch((function(e){console.log(e)}))})();