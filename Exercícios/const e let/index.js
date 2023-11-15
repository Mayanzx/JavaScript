 const nome = 'Geovane Mayan'
 const idade = 20;
 const peso = 65;
 const alturaEmM = 1.80;

 let imc;
 imc = peso / (alturaEmM * alturaEmM);
 let anoNascimento;
 anoNascimento = 2023 - idade;



 console.log(nome, 'tem', idade, 'anos, e pesa', peso, 'kg.');
 console.log(`Possui ${alturaEmM} metros de altura e seu IMC é de ${imc}.`); // Método mais morderno de impressõa de String
 console.log('Nascido em', anoNascimento + '.');