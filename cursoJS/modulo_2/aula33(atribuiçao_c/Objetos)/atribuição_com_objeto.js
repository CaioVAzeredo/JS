const pessoa = {nome: 'Caio', sobrenome: 'Viana', idade: 24, endereco: { rua: 'QI5', numero: 2302 }}
//Atribuição via desestruturação
const { nome, ...resto } = pessoa
console.log('\nInformaçãode dentro do objeto: ' + nome + '\n') /* Informaçãode dentro do objeto */
console.log(resto) /* Resto de dentro do objeot */

/* Adicionar variavel dentro do objeto */
const { nomeModificado = "Felipe" } = pessoa
console.log('\nAdicionar variavel dentro do objeto' + nomeModificado)
//Pegar informação de dentro de
const { endereco: { rua, numero } } = pessoa
console.log('\nPegar informação de dentro: ' + rua, numero)
