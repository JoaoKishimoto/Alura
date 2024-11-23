let animais = require('./animais.json');
animaisObj = JSON.parse(JSON.stringify(animais));
animaisObj.animais.push({
    id: 4,
    nome: 'orca',
    tipo: 'Mamífero',
    habitat: 'Oceano'});
animaisObj.animais.splice(2, 1);
animaisObj.animais[1].habitat = 'Antartida';
animaisString = JSON.stringify(animaisObj);
console.log(animaisObj);

const pessoa = {
    id: 0,
    nome: 'José',
    idade: 35,
}

const copiaPessoa = JSON.parse(JSON.stringify(pessoa));

copiaPessoa.id = 1;
copiaPessoa.nome = 'Maria';
copiaPessoa.idade = 13;

console.log(pessoa, copiaPessoa);