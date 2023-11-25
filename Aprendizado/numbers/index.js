let num1 = 10.4549124430;
let num2 = 5;
let num3 = 1;
let num4 = 0.7 + 0.1;

// Utilizar um number como string
console.log(num3.toString() + num2);

// Transformar em binário
console.log(num2.toString(2));

// Definir a quantidade dps da vírgula (arredondado)
console.log(num1.toFixed(3));

// Descobrir se o número é inteiro ou não
console.log(Number.isInteger(num2));
console.log(Number.isInteger(num1));

// contas com números decimais podem dar resultados imprecisos
console.log(num4);
num4 = Number(num4.toFixed(2));
console.log(num4)





