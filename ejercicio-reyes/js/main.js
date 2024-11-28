'use strict'

const day = document.querySelector('.js_day');
const month = document.querySelector('.js_month');
const btn = document.querySelector('.js_btn');
const text = document.querySelector('.js_text');


btn.addEventListener('click' , (ev) => {
    ev.preventDefault();
    console.log(day.value);

    const daySelector = day.value;
    const monthSelector = month.value;

    if(daySelector === '6' && monthSelector === 'Enero') {
        text.innerHTML = 'Es Día de Reyes!';
    }

    else{
        text.innerHTML = 'No es Día de Reyes';
    }
});






