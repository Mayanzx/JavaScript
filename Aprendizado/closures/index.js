function retornafuncao(nome){
    return function(){
        return nome;
    };
}

const funcao = retornafuncao('Geovane');
const funcao2 = retornafuncao('Mayan');

console.log(funcao);
console.log(funcao2);

console.log(funcao(), funcao2());