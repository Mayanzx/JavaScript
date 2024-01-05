for (let i = 0; i<=20; i++) {
    console.log(`Linha ${i}`);
}

console.log('------')

for (let i = 100; i>=0; i -= 10){
    console.log(`Linha ${i}`);
}

console.log('------');

for (let i = 0; i<=20; i++){
    const par =  i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
}

console.log('------');

const cores = ['azul', 'verde', 'amarelo', 'branco', 'preto'];

for (let i = 0; i< cores.length; i++){
    console.log((i+1),cores[i], `Índice: ${i}`);
}