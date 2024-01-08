const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backBody = estiloBody.backgroundColor;

for (let p of ps) {
  p.style.backgroundColor = backBody;
  p.style.color = 'white';
}