const livro = {
    titulo: "Percy Jackson e os Olimpianos",
    autor: "Rick Riordan",
    anoPublicacao: 2005,
    genero: "Fantasia"
};

anoAtual = new Date().getFullYear();

livro.idadePublicacao = anoAtual - livro.anoPublicacao;
mostrarDetalhes = `Detalhes do livro:
    Título: ${livro["titulo"]}
    Autor: ${livro['autor']}
    Ano de publicação: ${livro['anoPublicacao']}
    Gênero: ${livro['genero']}
    Idade da publicação: ${livro['idadePublicacao']}`;

livro.avaliacao = null;
notaLivro = 9;
if(livro.avaliacao === null) {
    livro.avaliacao = notaLivro;
} else { console.log('O Livro já possui uma avaliação')}

livro.genero = 'Aventura';
delete livro.avaliacao;

console.log(mostrarDetalhes);
console.log(livro);