const numeros = [1,2,3,4,5,6,7,8,9,10];


const total = numeros.reduce(function(acumulador, valor){
    acumulador += valor
    return acumulador;
});
console.log(total)

const somaPares = numeros.reduce(function(acumulador,valor){
    if(valor % 2 === 0){
    acumulador += valor;
    }
    return acumulador;
}, 0)
console.log(somaPares)