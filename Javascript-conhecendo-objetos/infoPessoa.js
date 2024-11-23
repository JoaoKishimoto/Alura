clarinha = {
    nome: 'Maria Clara',
    idade: 22,
    solteiro: true,
    hobbies: ['ler', 'dançar', 'velas aromáticas']
}

function mostrarInfoPessoa(pessoa) {
    info = `        Nome: ${pessoa.nome}
        idade: ${pessoa.idade}
        solteiro: ${pessoa.solteiro}
        hobbies: ${pessoa.hobbies.join(', ')}
        endereço: ${pessoa.endereco.rua}, ${pessoa.endereco.cidade}, ${pessoa.endereco.estado}`;
    console.log(info);
}

clarinha.endereco = {
    rua: 'Rua da Quixabá',
    cidade: 'Salvador',
    estado: 'Bahia'
}

pessoas = [clarinha];

peppa = {
    nome: 'Pedro Paulo',
    idade: 18,
    cidade: 'Brasília'
}
pessoas.push(peppa);

nena = {
    nome: 'Felipe Kishimoto',
    idade: 5,
    cidade: 'Brasília'
}
pessoas.push(nena);

function mostrarListaPessoas(pessoas) {
    for (pessoa of pessoas) {
        mostrarInfoPessoa(pessoa);
    }
}

fontana = {
    nome: 'Eduardo Fontana',
    idade: 19,
    cidade: 'Salvador'
}
pessoas.push(fontana);

function filtrarPorCidade(cidade, listaPessoas) {
    pessoasFiltradas = [];
    for (pessoa of listaPessoas) {
        if (pessoa.cidade === cidade) {
            pessoasFiltradas.push(pessoa);
        }
    }
    for (pessoa of pessoasFiltradas) {
        console.log(pessoa.nome, end=', ');
    }
    console.log(`moram em ${cidade}`);
}

calculadora = {
    soma: (a, b) => a + b,
    subtracao: (a, b) => a - b,
    multiplicacao: (a, b) => a * b,
    divisao: (a, b) => b != 0 ? a / b : console.log('Não é possível dividir por zero')
}

console.log(calculadora.soma(1, 2));
console.log(calculadora.subtracao(1, 2));
console.log(calculadora.multiplicacao(1, 2));
console.log(calculadora.divisao(1, 2));

calculadora.calcularMedia = (notas) => {
    soma = 0;
    nDeNotas = 0;
    for (nota of notas) {
        soma += nota;
        nDeNotas++;
    }
    return soma / nDeNotas;
}

console.log(calculadora.calcularMedia([5, 6, 7, 8, 9]));

contaBancaria = {
    titular: 'Alessandra Rios Marques',
    saldo: 100000,
    depositar: function (valor) {this.saldo += valor},
    sacar: function (valor) {this.saldo>= valor ? this.saldo -= valor: console.log('Saldo insuficiente')}
}

cliente = {
    nome: 'Alessandra Rios Marques',
    conta: contaBancaria
}

function mostrarSaldo(cliente) {
    console.log(`O saldo da conta de ${this.cliente.nome} é de R$${this.cliente.conta.saldo}`);
}

cliente.conta.depositar(1000);
cliente.conta.sacar(100);
mostrarSaldo(cliente);
