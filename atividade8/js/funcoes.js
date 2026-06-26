function soma() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) + Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Soma", primeiroNumero, segundoNumero, resultado);
}

function subtracao() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) - Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Subtração", primeiroNumero, segundoNumero, resultado);
}

function multiplicacao() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) * Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Multiplicação", primeiroNumero, segundoNumero, resultado);
}

function divisao() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) / Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Divisão", primeiroNumero, segundoNumero, resultado);
}

function salvarHistorico(nomeDaFuncao, num1, num2, resultado) {
    console.log("Função: " + nomeDaFuncao);
    console.log("Primeiro numero: " + num1 + ", SegundoNumero: " + num2);
    console.log("Resultado: " + resultado);
    console.log("--------------------------------------");

    let operacao = {
        funcao: nomeDaFuncao,
        numero1: num1,
        numero2: num2,
        resultado: resultado
    };

    let historicoLocal = JSON.parse(localStorage.getItem("historicoCalculos")) || [];
    // [] criam a lista; || compara
    historicoLocal.push(operacao);

    localStorage.setItem("historicoCalculos", JSON.stringify(historicoLocal));
}



// Cálculo de imposto, ICMS sobre importação. 
// Uma nova função. Se o produto custar menos que 50 dolares, 
// Você vai ter que pagar o valor do produto mais 20%
// Se o produto custar mais do que 50 dolares
// você vai ter que pagar o valor do produto +20%,depois +90% sobre o 
//resultado
// Seja salvo num novo objeto, dentro do local storage, seu histórico de conversão
// Ex: Historico de calculos e histórico de conversões

// ==========================================
// NOVAS FUNÇÕES: CÁLCULO DE IMPOSTO E HISTÓRICO
// ==========================================

function calcularImpostoImportacao() {
    // Captura o valor do produto (reutilizando o primeiro input)
    let valorProduto = Number(document.getElementById("valorProduto").value);
    let resultadoFinal = 0;
    let tipoRegra = "";

    // Regra: Menor ou igual a 50 dólares (Regra Leve)
    if (valorProduto <= 50) {
        resultadoFinal = valorProduto * 1.20; // Valor + 20%
        tipoRegra = "Até $50 (+20%)";
    } 
    // Regra: Maior que 50 dólares (Regra Pesada)
    else {
        let subtotal = valorProduto * 1.20; // Valor + 20%
        resultadoFinal = subtotal * 1.90;   // Subtotal + 90%
        tipoRegra = "Acima de $50 (+20% depois +90%)";
    }

    // Exibe o resultado na tela (formatado com 2 casas decimais)
    document.getElementById("resultadoFinal").innerText = resultadoFinal.toFixed(2);

    // Salva no histórico de conversões separado
    salvarHistoricoConversoes(valorProduto, resultadoFinal, tipoRegra);
}

function salvarHistoricoConversoes(valorOriginal, valorTotalComImposto, regraAplicada) {
    console.log("Função: Imposto de Importação ICMS");
    console.log("Valor Original: $" + valorOriginal);
    console.log("Regra: " + regraAplicada);
    console.log("Valor Total: $" + valorTotalComImposto.toFixed(2));
    console.log("--------------------------------------");

    let conversao = {
        funcao: "Imposto Importação",
        valorOriginal: valorOriginal,
        regra: regraAplicada,
        resultadoFinal: valorTotalComImposto.toFixed(2)
    };

    // Salva na chave separada: "historicoConversoes"
    let historicoConversoes = JSON.parse(localStorage.getItem("historicoConversoes")) || [];
    historicoConversoes.push(conversao);
    localStorage.setItem("historicoConversoes", JSON.stringify(historicoConversoes));
}

function apagarLocalStorage(){
    let confirmarApagar=window.confirm("Você deseja apagar seu histórico?")
    
    if(confirmarApagar){
        localStorage.clear();
    }
}