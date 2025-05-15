'use strict';

const score0El = document.querySelector('#score--0'); // "el" de elemento
const score1El = document.getElementById('score--1'); // relativamente mais rápido que "querySelector"
const diceEl = document.querySelector('.dice');

score0El.textContent = 0; // condições iniciais
score1El.textContent = 0;
diceEl.classList.add('hidden'); // deixa o dado invísivel inicialmente
