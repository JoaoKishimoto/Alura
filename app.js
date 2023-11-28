let listaDeNumeros = [];
let numeroLimite = 100;
let numeroDeElementosNaLista = listaDeNumeros.length;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//Trocar texto
function setText(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//Título e parágrafo
function exibirMensagemInicial() {  
    setText('h1', 'Jogo do número secreto');
    setText('p', `Escolha um número entre 1 e ${numeroLimite}`);
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        setText('h1', 'Acertou!');
        let mensagem = tentativas > 1 ? `você descobriu o número secreto em ${tentativas} tentativas!` : `você descobriu o número secreto em 1 tentativa!`;
        setText('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto){
        setText('p', `o número secreto é menor que ${chute}.`);
    } else {
        setText('p', `o número secreto é maior que ${chute}.`);
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

    if (numeroDeElementosNaLista == numeroLimite) {
        listaDeNumeros = [];
    }

    if (listaDeNumeros.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeros.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();cd 
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}