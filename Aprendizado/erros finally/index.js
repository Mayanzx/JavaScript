try {
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');

    try{
        console.log(b);
    }catch(e) {
        console.log('Deu erro');
    }

} catch (e) {
    console.log('Tratando o erro');
} finally{
    console.log('Eu sempre sou executado');
}