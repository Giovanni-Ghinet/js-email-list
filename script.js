API_URL_RANDOM_WORD = 'https://flynn.boolean.careers/exercises/api/random/mail';

const emailListHtml = document.querySelector('#EmailList');

for (let i = 0; i < 10; i++) {
fetch(API_URL_RANDOM_WORD)
.then((risposta) => {
    return risposta.json();
})

.then(function(jsonData) {
    console.log(jsonData);

    const emails = jsonData.response;
        console.log(emails);

});
}