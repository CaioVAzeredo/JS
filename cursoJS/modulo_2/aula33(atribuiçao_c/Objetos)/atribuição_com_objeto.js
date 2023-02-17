const pessoa = {
    nome: 'Caio', sobrenome: 'Viana', idade: 24, endereco: {rua: 'QI5', numero: 2302}
}
//Atribuição via desestruturação
const {nome,  ...resto} = pessoa
console.log(nome, resto) /* Resto de dentro do objeot */

/* Adivionar variavel dentro do objeto */
const{nomeModificado = "Felipe"} = pessoa
console.log(nomeModificado)
//Pegar informação de dentro de
const{endereco: {rua, numero}} = pessoa
console.log(rua, numero)
