'use strict'

const add = document.querySelector ('.js_add');
const btnAdd = document.querySelector ('.btn-add');
const listTask = document.querySelector ('.task-ul');
const check = document.querySelector ('.checkbox');

// const GITHUB_USER = martaxxa;
// const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

let tasks = [];

fetch('https://dev.adalab.es/api/todo/martaxxa')
    .then((response) => response.json())
    .then((data) => {
        tasks = data.results;
        let html = '';
        for (const addObj of tasks) {
            if(addObj.completed === true){  
                html += `<li><input class="checkbox"  type="checkbox" id="checkBox" checked>` + ' ' + `${addObj.name}</li>`;
            }
            else{
                html += `<li><input class="checkbox"  type="checkbox" id="checkBox">` + ' ' + `${addObj.name}</li>`;
            }
        }
        listTask.innerHTML = html;
    });


const UlInner = (oneObject) => {
    const html = listTask.innerHTML += `<li><input class="checkbox"  type="checkbox" id="checkBox">` + ' ' + `${oneObject.name}</li>`;
    return html;
}

/*check.addEventListener ('click', (ev) => {
});*/


btnAdd.addEventListener ('click', (ev) => {
    
    ev.preventDefault();
    UlInner(add.name);
    
});

