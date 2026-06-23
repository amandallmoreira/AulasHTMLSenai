function salvarNome(){
    let valorDigitado=document.getElementById("texto-inserido").value;
    let idadeDigitada =document.getElementById("idade-inserida").value;
    // Persistencia de Dados, arquivos Json
    // Json

    let objetoNome = {
        nome: valorDigitado
    };

    let objetoIdade ={
        idade: idadeDigitada
    };

    let textoJSON = JSON.stringify(objetoNome, objetoIdade);
    // dadoNome, o que o navegador vai salvar como JSON
    localStorage.setItem("dadoNome", textoJSON);
    localStorage.setItem("dadoIdade", textoJSON);
    document.getElementById("nomeSalvo").innerText=valorDigitado;
    document.getElementById("idadeSalva").innerText=idadeDigitada;

}