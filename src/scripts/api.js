const baseUrl = "https://nomoreparties.co/v1/wff-cohort-30/"
const headers = {
    authorization: '70a934e4-2d27-4172-bb6b-5fe0eaddbd72',
    'Content-Type': 'application/json'
};

function getAPI (url) {
    const finishUrl = baseUrl + url;
    return fetch(finishUrl, {
    method: 'GET',
    headers
})
.then(checkResponse)
};

function patchProfile (url, title, description) {
    const finishUrl = baseUrl + url;
    return fetch(finishUrl, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({
            name: title,
            about: description
        })
    })
    .then(checkResponse)  
}

function postAPI (url, name, link){
    const finishUrl = baseUrl + url;
    return fetch(finishUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
    .then(checkResponse)  
}

function deleteCardAPI(url, id) {
    const finishUrl = baseUrl + url + '/' + id;
    return fetch(finishUrl, {
        method: 'DELETE',
        headers
})
    .then(checkResponse) 
}

function putCardLikeAPI(url, id) {
    const finishUrl = baseUrl + url + '/' + id;
    return fetch(finishUrl, {
        method: 'PUT',
        headers
})
    .then(checkResponse) 
}

function patchAPI(url, link){
    const finishUrl = baseUrl + url;
    return fetch(finishUrl, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({
            avatar: link
        })
    })
    .then(checkResponse)  
}

function checkResponse(res) {
    if(res.ok){
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export {getAPI, patchProfile, postAPI, deleteCardAPI, putCardLikeAPI, patchAPI};