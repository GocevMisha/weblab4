import {start} from './js/first.js'
import {render} from'./js/second.js'


const second = function () {render();};
if(localStorage.id === 2)
    second();
else
    start();

const pokemonButton = document.getElementById('pokemon-button');
const infoButton = document.getElementById('info-button');

function pokemon(){
    second();
    localStorage.id = 2;
}
pokemonButton.onclick = pokemon;
pokemonButton.removeEventListener('click', pokemon);

function info(){
    start();
    localStorage.id = 1;
}
infoButton.onclick = info;
infoButton.removeEventListener('click', info);


