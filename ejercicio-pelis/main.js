'use strict'

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const peli1 = document.querySelector ('.peli1');
const peli2 = document.querySelector ('.peli2');
const peli3 = document.querySelector ('.peli3');
const peli4 = document.querySelector ('.peli4');
const peli5 = document.querySelector ('.peli5');

const btn = document.querySelector ('.js_btn');
const ul = document.querySelector ('.js_ul');
const text = document.querySelector ('.js_text');

btn.addEventListener ('click', (ev) => {
  peli1.innerHTML = inception;
  peli2.innerHTML = theButterFlyEffect;
  peli3.innerHTML = eternalSunshineOfTheSM;
  peli4.innerHTML = blueVelvet;
  peli5.innerHTML = split; 
});

peli1.addEventListener ('mouseover', (event) => {
text.innerHTML = 'la peli seleccionada es' + inception;
});

