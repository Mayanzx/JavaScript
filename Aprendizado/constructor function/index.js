 function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
 }

 const p1 = new Pessoa('Geovane', 'Mayan');
 const p2 = new Pessoa('Murillo', 'Augusto');

 console.log(p1.nome, p1.sobrenome);
 console.log(p2.nome, p2.sobrenome);