'use strict';

const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const current0El = document.getElementById('current--0'); // "el" de elemento
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // relativamente mais rápido que "querySelector"

score0El.textContent = 0; // condições iniciais
score1El.textContent = 0;

diceEl.classList.add('hidden'); // deixa o dado invísivel inicialmente

const scores = [0, 0]; // pontuação 0 para ambos jogadores. "scores" é a pontuação final que acumula
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    diceEl.classList.remove('hidden'); // exibe o dado
    diceEl.src = `dice-${dice}.png`; // usa a variável "dice" de acordo com o número gerado a uma imagem. "dice-" é o prefixo de todas as imagens. agora com o template literal carrega dinamicamente
    if (dice !== 1) {
        // adiciona o dado para o score atual
        currentScore += dice; // currentScore = currentScore + dice;
        document.getElementById(`current--${activePlayer}`).textContent =
            currentScore; // seleciona o elemento de pontuação dinamicamente baseado em qual é o jogador da vez
        // current0El.textContent = currentScore; // interage só com o jogador 0
    } else {
        activePlayer = activePlayer === 0 ? 1 : 0; // se V, muda para o próximo jogador
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        player0El.classList.toggle('player--active'); // "toggle()" adiciona a classe se não estiver lá; se estiver lá, remove. classe que ajusta o brilho de cada lado
        player1El.classList.toggle('player--active');
    }
});
