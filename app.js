let container = document.querySelector('.container');
let vezDe = 'x';
container.classList.add(vezDe);

let quadrados = document.querySelectorAll('.quadrado')
let contador = 0;

function joga(event){
  let celulaClicada = event.target;
  contador++;
  console.log(event);

  if (vezDe === 'x') {
    celulaClicada.classList.add('x');   
    container.classList.add('o');
    vezDe = 'o';
    verificaGanhador('x')

  } else{
    celulaClicada.classList.add('o')
    container.classList.add('x');
    vezDe = 'x';
    verificaGanhador('o')
  };
};


function verificaGanhador(jogador) {
  if (quadrados[0].classList.contains(jogador)
    && quadrados[1].classList.contains(jogador)
   && quadrados[2].classList.contains(jogador)) {
    window.alert(`O ganhador foi ${jogador}`)
  } 

  if (quadrados[0].classList.contains(jogador)
    && quadrados[3].classList.contains(jogador)
   && quadrados[6].classList.contains(jogador)) {
    window.alert(`O ganhador foi ${jogador}`)
  } 

  if (quadrados[1].classList.contains(jogador)
    && quadrados[4].classList.contains(jogador)
   && quadrados[7].classList.contains(jogador)) {
    window.alert(`O ganhador foi ${jogador}`)
  } 

  if (quadrados[2].classList.contains(jogador)
    && quadrados[5].classList.contains(jogador)
   && quadrados[8].classList.contains(jogador)) {
    window.alert(`O ganhador foi ${jogador}`)
  } 

  if (quadrados[6].classList.contains(jogador)
    && quadrados[7].classList.contains(jogador)
   && quadrados[8].classList.contains(jogador)) {
    window.alert(`O ganhador foi ${jogador}`)
  } 

  if (quadrados[0].classList.contains(jogador)
    && quadrados[4].classList.contains(jogador)
   && quadrados[8].classList.contains(jogador)) {
    window.alert(`O ganhador foi ${jogador}`)
  } 
  
  if (quadrados[2].classList.contains(jogador)
    && quadrados[4].classList.contains(jogador)
   && quadrados[6].classList.contains(jogador)) {
    window.alert(`O ganhador foi ${jogador}`)
  }

  if (quadrados[3].classList.contains(jogador)
    && quadrados[4].classList.contains(jogador)
   && quadrados[5].classList.contains(jogador)) {
    window.alert(`O ganhador foi ${jogador}`)
  } 

  if (contador === 9) 
    window.alert(`Empate!`);

};

console.log(quadrados)