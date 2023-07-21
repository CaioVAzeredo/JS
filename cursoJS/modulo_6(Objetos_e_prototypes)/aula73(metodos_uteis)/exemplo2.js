//Object.freeze (congela o objeto)
//Object.defineProperties (define varias propriedades)
//Object.defineProperty (define uma unica propriedade)

const produto = {
    nome: 'Produto', preco: 1.8
}
 const caneca = Object.assign({}, produto, {material: 'Porcelana'}) 


caneca.nome = 'Outra coisa'
caneca.preco = 2.5

console.log(produto)
console.log(caneca)
