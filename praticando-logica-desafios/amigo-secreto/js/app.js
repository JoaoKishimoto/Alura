amigosAdicionados = [];

function adicionar () {
    let nome = document.getElementById('nome-amigo').value;
    amigosAdicionados.push(nome);
    if(amigosAdicionados.length == 1) {
        document.getElementById('lista-amigos').innerHTML += `${nome}`;
        return;
    } else {
        document.getElementById('lista-amigos').innerHTML += `, ${nome}`;
    }
}

function sortear () {
    document.getElementById('lista-sorteio').innerHTML = '';
    amigosAdicionados.sort(() => Math.random() - 0.5);
    amigosAdicionados.sort(() => Math.random() - 0.5);
    for(i = 0; i < amigosAdicionados.length - 1; i++) {
        document.getElementById('lista-sorteio').innerHTML += `${amigosAdicionados[i]} -> ${amigosAdicionados[i + 1]}<br>`;
    }
    document.getElementById('lista-sorteio').innerHTML += `${amigosAdicionados[amigosAdicionados.length - 1]} -> ${amigosAdicionados[0]}<br>`;
}

function reiniciar() {
    amigosAdicionados = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}