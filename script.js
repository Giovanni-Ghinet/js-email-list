API_URL_RANDOM_WORD = 'https://flynn.boolean.careers/exercises/api/random/mail';

const emailListHtml = document.querySelector('#EmailList');

let emailsArray = [];

function updateEmailList() {
    // Svuoto la lista corrente
    emailListHtml.innerHTML = '';
    
    // Inserisco tutte le email nella lista
    emailsArray.forEach(email => {
        const li = document.createElement('li');
        li.textContent = email;
        emailListHtml.appendChild(li);
    });
}

for (let i = 0; i < 10; i++) {
fetch(API_URL_RANDOM_WORD)
.then((risposta) => {
    return risposta.json();
})

.then(function(jsonData) {
    console.log(jsonData);

    const emails = jsonData.response;
        console.log(emails);
    
    emailsArray.push(emails);

    // Quando abbiamo raccolto tutte e 10 le email, aggiorno la lista
    if (emailsArray.length === 10) {
    updateEmailList();
    }

});
}