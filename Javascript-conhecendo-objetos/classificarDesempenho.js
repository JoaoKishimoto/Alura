pessoa = {
    nome: 'Eduardo Fontana',
    notas: [8, 9, 10],
    calcularMediaNotas: function() {
        let soma = 0;
        let nNotas = 0;
        for (let nota in this.notas) {
            soma += this.notas[nota];
            nNotas++;
        }
        return soma/nNotas;
    },
    classificarDesempenho: function() {
        const media = this.calcularMediaNotas();
        if(media >= 9) {
            console.log('Desempenho excelente');
        } else if(media >= 7.5) {
            console.log('Bom Desempenho');
        } else if(media >= 6) {
            console.log('Desempenho regular');
        } else {
            console.log('Desempenho insuficiente');
        }
    }
}

pessoa.classificarDesempenho();

carro = {
    marca: 'Porsche',
    modelo: '992 GT3 RS',
    ano: 2022,
    cor: 'Lizard Green'
}

for(let chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
}