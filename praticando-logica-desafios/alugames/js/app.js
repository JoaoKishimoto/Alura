let jogosAlugados = 1;

function alterarStatus(id) {
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');

    if(botao.classList.contains('dashboard__item__button--return')){

        if(confirm(`Você confirma a devolução do jogo ${nomeJogo.textContent}?`)){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.innerHTML = "Alugar";
            jogosAlugados--;
            alugados();
        }

    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = "Devolver";
        jogosAlugados++;
        alugados();
    }
}

function alugados(){
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function palindromo(palavra){
    let palavraQuebrada = palavra.split("");
    var inverso = [];
    for(i = 1; i <= palavraQuebrada.length; i++){
        inverso.push(palavraQuebrada[palavraQuebrada.length - i]);
    }
    if(palavraQuebrada.join('') == inverso.join('')) {console.log(`A palavra ${palavra} é um palíndromo`)}
    else {console.log(`A palavra ${palavra} não é um palíndromo`)}
}

function crescente(a, b, c) {
    const numerosOrdenados = [a, b, c].sort();
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

crescente(3, 5, 1);