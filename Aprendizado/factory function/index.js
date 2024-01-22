function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,

        // caso eu queira fingir não ser uma função, posso usar o 'get'
        get nomeCompleto (){
            return `${this.nome} ${this.sobrenome}`;
        },

        fala: function(assunto){
            return `${this.nomeCompleto} está ${assunto}.`;
        },
        altura,
        peso,
        imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Geovane', 'Mayan', 1.80, 62);
console.log(p1.fala('vendo seu imc'));
console.log(p1.imc());