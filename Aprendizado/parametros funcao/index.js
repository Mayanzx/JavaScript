// arguments = sustenta todos os argumentos enviados
function funcao(){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total);
}
funcao(1,2,3,4,5,6)



function funcaoDois({ nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
let obj= {nome: 'Geovane', sobrenome: 'Mayan', idade: 20};
funcaoDois(obj);



//                                    resto
function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
       if (operador === '+') acumulador += numero;
       if (operador === '-') acumulador -= numero;
       if (operador === '/') acumulador /= numero;
       if (operador === '*') acumulador *= numero;
    }
    console.log (acumulador);
}
conta('+', 1, 1, 2, 3, 4, 5);