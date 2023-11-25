let num1 = 8.3234;
let num5 = 9;

// Arredondando para baixo
let num2 = Math.floor(num1);
console.log(num2)
// Arredondando para cima
let num3 = Math.ceil(num1);
console.log(num3);
// Arrendondando para o mais próximo
let num4 = Math.round(num1);
console.log(num4)

// Pegando o maior e o menos número de uma sequência numeral
console.log(Math.max(1,2,3,4,5,6,10,7,8, -1));
console.log(Math.min(1,2,3,4,5,6,10,7,8, -1));

// Pegando um número aleatório entre 10 e 1
const aleatorio = Math.round(Math.random() * (10 - 1) + 1);
console.log(aleatorio);

// Valor de PI
console.log(Math.PI);

// Potencialização
console.log(Math.pow(2,10));
console.log(2 ** 10);

// Raiz quadrada
console.log(num5 ** 0.5);
