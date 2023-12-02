let numero = prompt('Digite um número');
numero = Number(numero);
let numtitu = document.getElementById('num');
let text = document.getElementById('texto');

numtitu.innerHTML = numero;
text.innerHTML = `<p>Seu número - 2 é ${numero - 2} </p>`