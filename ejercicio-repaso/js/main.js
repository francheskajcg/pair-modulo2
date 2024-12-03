'use strict'

const select = document.querySelector('.js_select');
const btn = document.querySelector('.js_btn');
const carita = document.querySelector('.js_carita');

btn.addEventListener ('click' , (ev) => {
    ev.preventDefault();

    const caritaTriste = select.value;

    carita.innerHTML = ':(';
    carita.classList.add('triste');
});







