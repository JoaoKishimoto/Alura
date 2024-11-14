function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let sorteados = [];
    let numero;

    // alert(`Quantidade: ${quantidade}`)
    // alert(`De: ${de}`)
    // alert(`Até: ${ate}`)

    if(de >= ate){
        alert("O valor de início deve ser menor que o valor final");
        return;
    }

    for(i = 0; i < quantidade; i++){
        numero = randNum(de, ate);
        while(sorteados.includes(numero)){
            if(quantidade > (ate - de + 1)){
                alert("Quantidade de números a serem sorteados é maior que a quantidade de números disponíveis");
                return
            }
            numero = randNum(de, ate);
        }
        sorteados.push(numero);
    }

    let resultado = document.getElementById("resultado");
    let botao = document.getElementById("btn-reiniciar");

    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    if(botao.classList.contains("container__botao-desabilitado")){
        alterarStatusBotao();
    }
}

function randNum(min, max) {

    let dif = max - min;
    let selected = Math.random();
    return Math.floor((selected * (dif + 1)) + min);
}

function alterarStatusBotao(){

    let status = document.getElementById("btn-reiniciar");
    if(status.classList.contains("container__botao-desabilitado")){
        status.classList.remove("container__botao-desabilitado");
        status.classList.add("container__botao");
    }
    else{
        status.classList.remove("container__botao");
        status.classList.add("container__botao-desabilitado");
    }
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    alterarStatusBotao();
}