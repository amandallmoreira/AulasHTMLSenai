function imprimirCracha() {
    window.alert("Seu formulário foi enviado");
    let nome=document.getElementById("nome").value;
    let idade=document.getElementById("idade").value;
    let cargo=document.getElementById("cargo").value;
    let departamento=document.getElementById("departamento").value;
    let temAcessoRestrito=document.querySelector("[name=temAcessoRestrito]:checked").value; // O query selector
    // seleciona o primeiro elemento que seja desse seletor CSS

    let cracha="Nome: "+ nome + "\n" +
    "Idade: " + idade + "\n" + 
    "Cargo: " + cargo + "\n" + 
    "Departamento: " + departamento + "\n" + 
    "Tem acesso restrito: " + temAcessoRestrito;

    console.log(cracha)

    alert(cracha)
}

// window.alert("Executa o Alert");

// console.log("Executando depois do alert");