carro = {
    marca: 'Porsche',
    modelo: '992 GT3 RS',
    ano: 2022,
    cor: 'Lizard Green'
}

carro.ligado = false;
carro.ligar = function () {this.ligado ? console.log('Carro já está ligado') : this.ligado = true;};
carro.desligar = function () {this.ligado ? this.ligado = false : console.log('Carro já está desligado')};
carro.obterDetalhes = function () {
    let detalhes = '';
    for (let chave in this) {
        if(typeof this[chave] !== 'function' && typeof this[chave] !== 'object') {
            detalhes += `${chave}: ${this[chave]} \n`;
        }
    }
    return detalhes;
}

carro.placa = 'RPV-2J80'
Object.defineProperty(carro, 'placa', {enumerable: false});
Object.defineProperty(carro, 'ligar', {enumerable: false});
Object.defineProperty(carro, 'desligar', {enumerable: false});
Object.defineProperty(carro, 'obterDetalhes', {enumerable: false});

for (let chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
}

console.log(carro.placa);

carroNovo = {
    marca: 'Porsche',
    modelo: '911 carrera GTS',
    ano: 2022,
    cor: 'space grey'
}

carroComNovosDetalhes = {
    ...carroNovo,
    placa: 'SSK-6J75',
    motor: 'inline 6',
    potencia: 541,
}

carroComNovosDetalhes.cor = 'Slate Gray Neo';

for (let chave in carroComNovosDetalhes) {
    console.log(`${chave}: ${carroComNovosDetalhes[chave]}`);
}