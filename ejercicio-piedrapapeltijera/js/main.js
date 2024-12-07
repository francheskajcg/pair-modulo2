'use strict'

const select = document.querySelector('.js_select');
const btn = document.querySelector('.js_btn');
const letter = document.querySelector('.js_letter');
const player = document.querySelector('.js_player');
const pc = document.querySelector('.js_pc');

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
};

let playerCont = 0;
let pcCont = 0; 

btn.addEventListener('click' , (ev) => {
    ev.preventDefault();
    const pcPlay = getRandomNumber(9);

    if(select.value === 'Piedra') {
        if(pcPlay <= 3){
            letter.innerHTML = '¡Empate!';
            player.innerHTML = 'Jugador: ' + playerCont;
            pc.innerHTML = 'Computadora: ' + pcCont;
        }

        else if(pcPlay >= 7){
            letter.innerHTML = '¡Has perdido!';
            pcCont += 1;
            pc.innerHTML = 'Computadora: ' + pcCont;
        }

        else{
            letter.innerHTML = '¡Has ganado!';
            playerCont += 1;
            player.innerHTML = 'Jugador: ' + playerCont;
        }
    }

    else if(select.value === 'Papel') {
        if(pcPlay <= 3){
            letter.innerHTML = '¡Has ganado!';
            playerCont += 1;
            player.innerHTML = 'Jugador: ' + playerCont;
        }

        else if(pcPlay >= 7){
            letter.innerHTML = '¡Empate!';
            player.innerHTML = 'Jugador: ' + playerCont;
            pc.innerHTML = 'Computadora: ' + pcCont;
        }

        else{
            letter.innerHTML = '¡Has perdido!';
            pcCont += 1;
            pc.innerHTML = 'Computadora: ' + pcCont;
        }
    }

    else {
        if(pcPlay <= 3){
            letter.innerHTML = '¡Has perdido!';
            pcCont += 1;
            pc.innerHTML = 'Computadora: ' + pcCont;
        }

        else if(pcPlay >= 7){
            letter.innerHTML = '¡Has ganado!';
            playerCont += 1;
            player.innerHTML = 'Jugador: ' + playerCont;
        }

        else{
            letter.innerHTML = '¡Empate!';
            player.innerHTML = 'Jugador: ' + playerCont;
            pc.innerHTML = 'Computadora: ' + pcCont;
        }
    } 
    if((playerCont + pcCont) === 10){
        playerCont = 0;
        pcCont = 0;
    }

    console.log(pcPlay);
});

