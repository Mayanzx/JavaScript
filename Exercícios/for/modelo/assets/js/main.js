const elementos = [
    {tag: 'p', texto: 'Testes'},
    {tag: 'div', texto: 'Teste 2'},
    {tag: 'section', texto: 'Teste 3'},
    {tag: 'footer', texto: 'Teste 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i=0; i<elementos.length; i++){
    let { tag, texto } = elementos [i];
    let tagCriada = document.createElement(tag)
    tagCriada.innertext = texto;
    div.appendChild(tagCriada)
};

container.appendChild(div);