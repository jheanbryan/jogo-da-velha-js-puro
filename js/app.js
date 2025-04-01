let player1;
let player2;
let container = document.querySelector('.tabuleiro');
let vezDe = 'x';
container.classList.add(vezDe);

let quadrados = document.querySelectorAll('.celula')
let contador = 0;

function jogar() {
  document.querySelector("[data-jogo]").classList.remove("oculto");
}

function joga(event){
  player1 =  document.querySelector('#player1').value;
  player2 = document.querySelector('#player2').valaue;

  let celulaClicada = event.target;
  contador++;
  console.log(event);

  if (vezDe === 'x') {
    celulaClicada.classList.add('xis');   
    container.classList.add('circulo');
    vezDe = 'o';
    verificaGanhador('xis', player1)

  } else{
    celulaClicada.classList.add('circulo')
    container.classList.add('xis');
    vezDe = 'x';
    verificaGanhador('circulo', player2)
  };
};

function travarJogo(){
  container.style.pointerEvents = 'none';
};

function verificaGanhador(jogador, nickname) {
  if (quadrados[0].classList.contains(jogador)
    && quadrados[1].classList.contains(jogador)
   && quadrados[2].classList.contains(jogador)) {
    travarJogo();
    window.alert(`O ganhador foi ${nickname}, que é o ${jogador}`)
  } 

  if (quadrados[0].classList.contains(jogador)
    && quadrados[3].classList.contains(jogador)
   && quadrados[6].classList.contains(jogador)) {
    travarJogo();
    window.alert(`O ganhador foi ${nickname}, que é o ${jogador}`)
  } 

  if (quadrados[1].classList.contains(jogador)
    && quadrados[4].classList.contains(jogador)
   && quadrados[7].classList.contains(jogador)) {
    travarJogo();
    window.alert(`O ganhador foi ${nickname}, que é o ${jogador}`)
  } 

  if (quadrados[2].classList.contains(jogador)
    && quadrados[5].classList.contains(jogador)
   && quadrados[8].classList.contains(jogador)) {
    travarJogo();
    window.alert(`O ganhador foi ${nickname}, que é o ${jogador}`)
  } 

  if (quadrados[6].classList.contains(jogador)
    && quadrados[7].classList.contains(jogador)
   && quadrados[8].classList.contains(jogador)) {
    travarJogo();
    window.alert(`O ganhador foi ${nickname}, que é o ${jogador}`)
  } 

  if (quadrados[0].classList.contains(jogador)
    && quadrados[4].classList.contains(jogador)
   && quadrados[8].classList.contains(jogador)) {
    travarJogo();
    window.alert(`O ganhador foi ${nickname}, que é o ${jogador}`)
  } 
  
  if (quadrados[2].classList.contains(jogador)
    && quadrados[4].classList.contains(jogador)
   && quadrados[6].classList.contains(jogador)) {
    travarJogo();
    window.alert(`O ganhador foi ${nickname}, que é o ${jogador}`)
  }

  if (quadrados[3].classList.contains(jogador)
    && quadrados[4].classList.contains(jogador)
   && quadrados[5].classList.contains(jogador)) {
    travarJogo();
    window.alert(`O ganhador foi ${nickname}, que é o ${jogador}`)
  } 

  if (contador === 9) 
    window.alert(`Empate!`);

};

console.log(quadrados)