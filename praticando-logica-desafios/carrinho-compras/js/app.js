let valorCarrinho = 0;

function adicionar() {
    let produto = document.getElementById('produto');
    let quantidade = document.getElementById('quantidade').value;
    entradas = produto.value.split(" - R$");
    let nome = entradas[0];
    let preco = parseInt(entradas[1]);
    let valorTotal = document.getElementById('valor-total');
    let valor = preco * quantidade;
    let carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$${valor}</span>
    </section>`

    valorTotal.innerHTML = `R$${valorCarrinho += valor}`;

    quantidade.value = 1;
}

function limpar() {
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = '';
    let valorTotal = document.getElementById('valor-total');
    valorTotal.innerHTML = 'R$0';
    valorCarrinho = 0;
}