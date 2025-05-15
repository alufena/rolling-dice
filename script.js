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

// score0El.textContent = 0; // condições iniciais
// score1El.textContent = 0;
// diceEl.classList.add('hidden'); // deixa o dado invísivel inicialmente

// const scores = [0, 0]; // pontuação 0 para ambos jogadores. "scores" é a pontuação final que acumula
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true; // "state variable" do jogo. lógida de se está em andamento ou não

let scores, currentScore, activePlayer, playing; // deixa as variáveis acessíveis no escopo global

const init = function () {
    scores = [0, 0]; // retirado const para evitar criação de uma nova variável
    currentScore = 0; // retirado let daqui até "playing". valores redeclarados
    activePlayer = 0;
    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
    // sem "param/arg" porque o código é exatamente o mesmo para todas situações do projeto. caso houvesse pequenas mudanças, chamar um arg seria útil para especificar essa mudança
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        // console.log(dice);
        diceEl.classList.remove('hidden'); // exibe o dado
        diceEl.src = `dice-${dice}.png`; // usa a variável "dice" de acordo com o número gerado a uma imagem. "dice-" é o prefixo de todas as imagens. agora com o template literal carrega dinamicamente
        if (dice !== 1) {
            // adiciona o dado para o score atual
            currentScore += dice; // currentScore = currentScore + dice;
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore; // seleciona o elemento de pontuação dinamicamente baseado em qual é o jogador da vez
            // current0El.textContent = currentScore; // interage só com o jogador 0
        } else {
            // activePlayer = activePlayer === 0 ? 1 : 0; // se V, muda para o próximo jogador
            // document.getElementById(`current--${activePlayer}`).textContent = 0;
            // currentScore = 0;
            // player0El.classList.toggle('player--active'); // "toggle()" adiciona a classe se não estiver lá; se estiver lá, remove. classe que ajusta o brilho de cada lado
            // player1El.classList.toggle('player--active');
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore; // soma a pontuação atual ao total. exemplo: scores[1] = scores[1] + currentScore
        // console.log(scores[activePlayer]);
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];
        if (scores[activePlayer] >= 20) {
            playing = false; // desabilita a função dos botões quando alguém ganha
            diceEl.classList.add('hidden'); // esconde o dado quando alguém ganha
            document
                .querySelector(`.player--${activePlayer}`) // querySelector precisa do "ponto" (= clase) para que ocorra o query corretamente
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active'); // remove o estilo de "player active" para que "player winner" se imponha
        } else {
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init); // sem (), pois será chamado assim que ocorrer um click
// btnNew.addEventListener('click', function () {
// score0El.textContent = 0;
// score1El.textContent = 0;
// current0El.textContent = 0;
// current1El.textContent = 0;
// player0El.classList.remove('player--winner');
// player1El.classList.remove('player--winner');
// player0El.classList.add('player--active'); // "remove" no lugar de "add" porque o jogador 0 deve ser o jogador ativo (ou seja, o que começa jogando) toda vez que o jogo é reiniciado. Isso faz com que o jogador 0 volte a ser o ativo sem precisar verificar se ele já era ou não. Se ele já tiver essa classe, o JavaScript simplesmente não faz nada (não duplica a classe). Por que não usar remove com player0El? Estaria removendo a classe do jogador 0 — ou seja, desativando ele visualmente, o que não faz sentido, porque ele é quem deve começar a nova rodada.
// player1El.classList.remove('player--active');
// });
