const numeros = [1,2,3,4,5,6,7,8,9,10];



const somaDobroPares = numeros
.filter(valor => valor % 2 === 0) // filtrando os pares
.map(valor => valor*2) // dobrando os valores
.reduce((ac, valor) => ac + valor); // acumulando tudo e somando

console.log(somaDobroPares);