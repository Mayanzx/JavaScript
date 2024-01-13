function horaAtual(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const tempo = setInterval(function(){
    console.log(horaAtual());
}, 1000);

setTimeout(function(){
    clearInterval(tempo);
},10000);