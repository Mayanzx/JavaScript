function* ger1(){
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const g1 = ger1();
for(let valor of g1){
    console.log(valor);
}

console.log('-------------');

function* ger2(){
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}

const g2 = ger2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log('-------------');

function* ger3(){
    yield 0;
    yield 1;
    yield 2;
}

function* ger4(){
    yield*ger3();
    yield 3;
    yield 4;
    yield 'fim';
}

const g4 = ger4();
for(let valor of g4){
    console.log(valor);
}