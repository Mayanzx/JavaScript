const nomes = ['Geovane', 'Pedro', 'Lucas'];
console.log(nomes);

console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);

nomes[0] = 'Arthur';
nomes[3] = 'Gustavo';
console.log(nomes);
console.log(nomes.length);

nomes.push('Luan');
console.log(nomes);

nomes.unshift('Vini');
console.log(nomes);

nomes.pop();
console.log(nomes);

delete nomes[1];
console.log(nomes);

console.log(nomes.slice(0,3));