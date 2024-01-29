const nomes = ['João', 'Pedro', 'Geovane', 'Gustavo', 'Murillo'];

//                         indice, quantidade deletada
let removidos = nomes.splice(3, 2);
console.log(nomes, removidos);

//                        indice, quantidade a ser alterada, novo elemento
 removidos = nomes.splice(1,1,'Matheus', 'Luiz', 'Gabriel');
 console.log(nomes, removidos);


 // Number.MAX_VALUE : maior valor possível
