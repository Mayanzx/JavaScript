const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: '14',
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const { nome, idade, profissao = 'Desconhecida', ...resto } = pessoa;
console.log(nome, idade, profissao, resto);