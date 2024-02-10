
let mynumber = document.querySelector('span');
let mytext = document.querySelector('q');
let mybutton = document.querySelector('.btn');

let respuesta = {
    id: 0,
    advice: '',
}

mybutton.addEventListener('click', petition);

petition();

function petition() {
// Make a request for a user with a given ID with AXIOS
axios.get('https://api.adviceslip.com/advice')
  .then(function (response) {
    respuesta = response.data.slip;
  })
  .catch(function (error) {
    respuesta.advice = 'Internal Error';
    respuesta.id = 'E';
  })
  .finally(function () {
    mynumber.innerHTML = respuesta.id;
    mytext.innerHTML = respuesta.advice;
  });
}

