const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const dobro = numeros.map(valor => valor*2);
console.log(dobro);

console.log('-----------');

const pessoas = [
    {nome: 'Geovane', idade: 20},
    {nome: 'Arthur', idade: 21},
    {nome: 'Gabriel', idade: 19},
    {nome: 'Luiz', idade: 20},
    {nome: 'Vinicius', idade: 21},
    {nome: 'Rafael', idade: 22},
];

// Apenas os nomes
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

// Removendo a chave "nome"
const idades = pessoas.map(obj => ({idade: obj.idade}));
console.log(idades);

// adicionado um id
const pessoasId = pessoas.map(function(obj,indice){
// newObj para não afetar no objeto original
    const newObj = {...obj};
    newObj.id = indice + 1;
    return newObj;
});
console.log(pessoasId);