const h1 = document.querySelector(`.container h1`);
const data = new Date()

function getWeekDay (diaSemana){
    let diaSemanaTexto;

    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = 'Dia inválido';
            return diaSemanaTexto;
    }
}

function getMonthName (numeroMes){
    let nomeMes;

    switch(numeroMes){
        case 0:
            nomesMes = 'janeiro';
            return nomesMes;
        case 1:
            nomesMes = 'fevereiro';
            return nomesMes;
        case 2:
            nomesMes = 'março';
            return nomesMes;
        case 3:
            nomesMes = 'abril';
            return nomesMes;
        case 4:
            nomesMes = 'maio';
            return nomesMes;
        case 5:
            nomesMes = 'junho';
            return nomesMes;
        case 6:
            nomesMes = 'julho';
            return nomesMes;
        case 7:
            nomesMes = 'agosto';
            return nomesMes;
        case 8:
            nomesMes = 'setembro';
            return nomesMes;
        case 9:
            nomesMes = 'outubro';
            return nomesMes;
        case 10:
            nomesMes = 'novembro';
            return nomesMes;
        case 11:
            nomesMes = 'dezembro';
            return nomesMes;   
        default:
            nomesMes = 'Dia inválido'  ;
            return nomesMes;
    }
}

function zero (num){
    return num>=10 ? num : `0${num}`;
}

function createDate(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getWeekDay(diaSemana);
    const nomeMes = getMonthName(numeroMes);

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    ` de ${data.getFullYear()} ${zero(data.getHours())}:${zero(data.getMinutes())}`
    )
}

h1.innerHTML = createDate(data);

// Todo esse código anterior pode ser simplificado com opções que encontramos na documentação da linguagem:

// const h1 = document.query Selector('.container h1');
// const data = new Date();
// const opcoes = {
//    dataStyle: 'full',
//    timeStyle: 'short'
// };
// h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
