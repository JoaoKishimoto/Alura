const biblioteca = [
    {
        id: 1,
        titulo: 'O Senhor dos Anéis',
        autor: 'J. R. R. Tolkien',
        anoPublicacao: 1954,
    },
    {
        id: 2,
        titulo: 'Dom Quixote',
        autor: 'Miguel de Cervantes',
        anoPublicacao: 1605, 
    },
    {
        id:3,
        titulo: '1984',
        autor: 'George Orwell',
        anoPublicacao: 1949,
    }
]

function encontrarLivroPorId (id) {
    const resultado = biblioteca.find(livro=> livro.id === id)
    if(resultado === undefined) {
        console.log('Nenhum livro foi encontrado')
        return null
    } else {
        return resultado
    }
}

console.log(encontrarLivroPorId(2))
console.log(encontrarLivroPorId(4))

const catalogo = [
    { 
        id: 1,
        titulo: "Matrix",
        diretor: "Lana Wachowski",
        anoLancamento: 1999
    },
    {
        id: 2,
        titulo: "Jurassic Park",
        diretor: "Steven Spielberg",
        anoLancamento: 1993
    },
    {
        id: 3,
        titulo: "Inception",
        diretor: "Christopher Nolan",
        anoLancamento: 2010
    }
]

function encontrarFilmesPorAno(catalogo, ano) {
    return catalogo.filter(filme => filme.anoLancamento === ano)
}


console.log(encontrarFilmesPorAno(catalogo, 1999))

const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
]

function filtrarOrdenarProdutosPorPreco(listaProdutos, precoMaximo) {
    return listaProdutos.filter(produto => produto.preco <= precoMaximo).sort((a, b) => a.preco - b.preco)
}

console.log(filtrarOrdenarProdutosPorPreco(listaProdutos, 50))

const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]

function ordenarAnimais(fn) {
    return animais.sort(fn)
}

function compararIdadedecrescente(a , b) {
    return b.idade - a.idade
}

function compararNomeOrdemAlfabetica (a, b) {
    return a.nome - b.nome
}