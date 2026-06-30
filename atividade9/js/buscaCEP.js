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

/*Validação de CEP antes da consulta à API

Nesta atividade, você deverá melhorar o sistema de busca de CEP desenvolvido em sala, adicionando uma etapa de validação antes de realizar a requisição para a API.

Requisitos:

* Remova automaticamente o hífen (-) do CEP digitado, caso exista.
* Verifique se o CEP possui exatamente 8 números.
* Caso o CEP seja inválido, exiba uma mensagem informando o erro e não execute a consulta à API.
* Caso o CEP seja válido, realize normalmente a busca na API e preencha os campos do endereço.

Entrega após concluir a atividade:

1. Salve todas as alterações no seu repositório do GitHub.
2. Faça um commit com uma mensagem descritiva (ex.: Adicionada validação de CEP).
3. Envie (push) as alterações para o GitHub.
4. Anexe o link do seu repositório na entrega da atividade no Google Classroom.

OBS: quero os códigos com comentários dizendo como você fez algumas implementações.*/

