const numeros = [1,2,3,4,5,6,7,8,9];

const numerosFiltro = numeros.filter (valor => valor > 5);
console.log(numerosFiltro);

console.log('---------------');

const pessoas = [
    {nome: 'Geovane', idade: 20},
    {nome: 'Arthur', idade: 21},
    {nome: 'Gabriel', idade: 19},
    {nome: 'Luiz', idade: 20},
    {nome: 'Vinicius', idade: 21},
    {nome: 'Rafael', idade: 22},
];

// Nomes com 7 letras ou mais
const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);
console.log(pessoasNomeGrande);

// Idades maiores que 20
const pessoasVelhas = pessoas.filter(obj => obj.idade > 20);
console.log(pessoasVelhas);

// Nomes que terminam com l
const pessoasFimNomeA = pessoas.filter(obj => obj.nome.endsWith('l'));
console.log(pessoasFimNomeA);
