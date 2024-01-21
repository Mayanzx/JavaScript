//função que se auto invoca, e se separa do escopo global
(function(nome, idade){
    console.log(nome, idade);
})('Geovane', 20);