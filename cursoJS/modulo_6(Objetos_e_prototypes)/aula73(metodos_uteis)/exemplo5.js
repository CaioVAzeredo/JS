//Object.freeze (congela o objeto)
//Object.defineProperties (define varias propriedades)
//Object.defineProperty (define uma unica propriedade)

const produto = {
    nome: 'Produto', preco: 1.8
}
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) //Object.getOwnPropertyDescriptor() retorna as configs feitas por Object.defineProperties() ou Object.defineProperty()

