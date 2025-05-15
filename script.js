'use strict';

const score0El = document.querySelector('#score--0'); // "el" de elemento
const score1El = document.getElementById('score--1'); // relativamente mais rápido que "querySelector"
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

score0El.textContent = 0; // condições iniciais
score1El.textContent = 0;

diceEl.classList.add('hidden'); // deixa o dado invísivel inicialmente

let currentScore = 0;

btnRoll.addEventListener('click', function () {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    diceEl.classList.remove('hidden'); // exibe o dado
    diceEl.src = `dice-${dice}.png`; // usa a variável "dice" de acordo com o número gerado a uma imagem. "dice-" é o prefixo de todas as imagens. agora com o template literal carrega dinamicamente
    if (dice !== 1) {
        // adiciona o dado para o score atual
        currentScore += dice; // currentScore = currentScore + dice;
        current0El.textContent = currentScore;
    } else {
        // se V, muda para o próximo jogador
    }
});
