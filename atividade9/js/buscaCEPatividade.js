// Integração com API Via CEP
function buscarCEP() {

    let cepDigitado = document.getElementById("cep").value;

    // Variável que vai armazenar somente os números do CEP
    let cepLimpo = "";

    // Percorre todos os caracteres digitados
    for (let i = 0; i < cepDigitado.length; i++) {

        // Pega um caractere por vez
        let caractere = cepDigitado[i];

        // Verifica se o caractere é um número
        if (caractere >= "0" && caractere <= "9") {

            // Adiciona o número na variável cepLimpo
            cepLimpo += caractere;
        }
    }

    // Atualiza o campo mostrando apenas os números
    document.getElementById("cep").value = cepLimpo;

    // Verifica se o CEP possui exatamente 8 números
    if (cepLimpo.length != 8) {
        alert("CEP inválido! Digite um CEP com exatamente 8 números.");
        return;
    }

    // Consulta a API utilizando o CEP validado
    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)

        // Converte a resposta da API para JSON
        .then(function (resposta) {
            return resposta.json();
        })

        .then(function (dados) {

            // Caso o CEP não exista na API
            if (dados.erro) {
                alert("CEP não encontrado.");
                return;
            }

            // Preenche os campos do formulário com os dados retornados
            document.getElementById("rua").value = dados.logradouro;
            document.getElementById("bairro").value = dados.bairro;
            document.getElementById("cidade").value = dados.localidade;
            document.getElementById("uf").value = dados.uf;

        });

}

const campoCEP = document.getElementById("cep");

// Quando o usuário sair do campo, chama a função buscarCEP()
campoCEP.addEventListener("focusout", buscarCEP);