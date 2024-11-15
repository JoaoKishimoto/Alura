let qtd_pista = 100;
let qtd_superior = 200;
let qtd_inferior = 400;

function comprar() {
    let qtd = document.getElementById('qtd');
    let tipo = document.getElementById('tipo-ingresso').value;

    switch (tipo) {
        case 'pista':
            if (parseInt(qtd.value) > qtd_pista) {
                alert(`Quantidade indisponível para ${tipo}`);
            } else {
                qtd_pista -= parseInt(qtd.value);
                alert('Ingresso(s) comprado(s) com sucesso');
                document.getElementById('qtd-pista').innerHTML = qtd_pista;
            }
            break;
        case 'superior':
            if (parseInt(qtd.value) > qtd_superior) {
                alert(`Quantidade indisponível para ${tipo}`);
            } else {
                qtd_superior -= parseInt(qtd.value);
                alert('Ingresso(s) comprado(s) com sucesso');
                document.getElementById('qtd-superior').innerHTML = qtd_superior;
            }
            break;
        case 'inferior':
            if (parseInt(qtd.value) > qtd_inferior) {
                alert(`Quantidade indisponível para ${tipo}`);
            } else {
                qtd_inferior -= parseInt(qtd.value);
                alert('Ingresso(s) comprado(s) com sucesso');
                document.getElementById('qtd-inferior').innerHTML = qtd_inferior;
            }
            break;
    }
}