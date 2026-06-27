// Integração com API Via CEP
function buscarCEP(){
    let cepDigitado = document.getElementById("cep").value;

    if (cepDigitado === ""){
        return;
    }
    fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
        //Escolha caso
        // Quando acessar o link, execute o que está aqui dentro:
        .then(function(resposta){
            return resposta.json();

        })
        .then(function(dados){
            //Caso erro, alerta
            if(dados.erro){
                alert("CEP não encontrado")
                return;
            }
            // Se der certo, salva os valores em Json
            document.getElementById("rua").value=dados.logradouro;
            document.getElementById("bairro").value=dados.bairro;
            document.getElementById("cidade").value=dados.localidade;
            document.getElementById("uf").value=dados.uf;
        
        })

}

const campoCEP=document.getElementById("cep");
// addEventListener -> o valor digitado vai chamar a função
campoCEP.addEventListener("focusout", buscarCEP);
