const tresH = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
let data = new Date(0 + tresH + umDia);
console.log(data.toString());

data = new Date()
console.log(data.toString());

//               a    m   d   h   M   s   ms
data = new Date(2023, 11, 28, 18, 30, 15)
console.log(data.toString());

data = new Date('2024-02-28 15:45:00');
console.log(data.toString());

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // mês começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getUTCHours());
console.log('Minuto', data.getUTCMinutes());
console.log('Segundo', data.getUTCSeconds());
console.log('Milisegundos', data.getUTCMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - Domingo, 6 - Sábado

console.log(Date.now()); // Milisegundos do "início" até a data indicada



