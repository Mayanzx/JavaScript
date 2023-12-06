const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)

const pessoa2 = {
    nome: 'Arthur',
    sobrenome: 'Rose',
    idade: 24
};

console.log(pessoa2.nome)
console.log(pessoa2.sobrenome)
console.log(pessoa2.idade)

console.log('//');

function cria (nome,sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa3 = cria('Gabriel', 'Henrique', 18);
console.log(pessoa3.nome)
console.log(pessoa3.sobrenome)
console.log(pessoa3.idade)