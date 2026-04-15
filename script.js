API_URL_RANDOM_WORD = 'https://flynn.boolean.careers/exercises/api/random/mail';

const emailListHtml = document.querySelector('#EmailList');

fetch(API_URL_RANDOM_WORD)
.then((risposta) => {
    console.log(risposta);
    return risposta.json();
})
.then(function(jsonData) {
    console.log(jsonData);
    
    const emails = jsonData.results;

    const emailListInnerHtml = emails.map(email => {
        return `<div>${email.name}</div>`
    });
    emailListHtml.innerHTML = emailListInnerHtml.join("");
});