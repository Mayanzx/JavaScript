const num1= [1,2,3];
const num2= [4,5,6];
const num3 = num1.concat(num2);
console.log(num3);

console.log('---------');

const num4 = num1.concat(num2, [7,8,9], 'Geovane');
console.log(num4);

console.log('---------');

//... serve para apresentar os elementos
const num5 = [...num1, 'Geovane', ...num2, ...[7, 8, 9]];
console.log(num5);

