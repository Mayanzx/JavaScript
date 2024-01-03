//               0  1  2  3  4  5  6  7  8
const numeros = [10,20,30,40,50,60,70,80,90];
const [primeiro, segundo, , , quinto, ...resto] = numeros;

console.log(primeiro, segundo, resto, quinto);

