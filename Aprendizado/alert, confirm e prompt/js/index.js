alert ('Vamos realizar um pequeno teste.');

let num1 = prompt ('Digite o primeiro número.');
let num2 = prompt ('Digite o segundo número.');

num1 = parseFloat(num1);
num2 = parseFloat(num2);

const resul = num1 + num2;
alert (`O resultado da soma entre ${num1} e ${num2} foi: ${resul}`);