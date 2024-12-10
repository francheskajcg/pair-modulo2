'use strict'

const add = document.querySelector ('.js_add');
const btnAdd = document.querySelector ('.btn-add');
const listTask = document.querySelector ('.task-ul');
const check = document.querySelector ('.checkbox');

btnAdd.addEventListener ('click', (ev) => {
    ev.preventDefault();
    listTask.innerHTML += `<li><input class="checkbox" type="checkbox" id="checkBox">` + ' ' + `${add.value}</li>`;
    add.value = " ";
console.log(add.value);
});

check.addEventListener ('click', (ev) => {

});