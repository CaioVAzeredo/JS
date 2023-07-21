//Object.freeze (congela o objeto)
//Object.defineProperties (define varias propriedades)
//Object.defineProperty (define uma unica propriedade)

const produto = {
    nome: 'Produto', preco: 1.8
}
const caneca = { nome: produto.nome, preco: produto.preco }
Object.freeze(produto)
console.log(Object.keys(produto))
