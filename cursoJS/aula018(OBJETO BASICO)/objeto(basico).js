/**CRIAÇÃO DO OBJEOTO */
const pessoa1 = {
    nome: 'Caio',
    sobrenome: 'Viana',
    idade: 24
}
console.log('\nFEITO COM A PRIMEIRA FORMA DE CIRAR UM OBJETO: \n' + pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)

const pessoa2 = {
    nome: 'Fernando',
    sobrenome: 'Oliveira',
    idade: 30
}
console.log('\n' + pessoa2.nome)
console.log(pessoa2.sobrenome)
console.log(pessoa2.idade)

/*------------------------------------------------------------------------------------------------------------------*/

/**OUTRA FORMA DE CIRAR UM OBJETO */

function criarPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
}
const pessoa3 = criarPessoa('Caio', 'Viana', 24)
const pessoa4 = criarPessoa('Fernando', 'Oliveira', 30)
console.log('\nFeito com a outra forma de crirar um objeto: \n' + pessoa3.nome, pessoa3.sobrenome, pessoa3.idade)
console.log('\n' + pessoa4.nome, pessoa4.sobrenome, pessoa4.idade)