function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // se pode alterar
        configurable: false // se pode configurar
    })
}

const p1 = new Produto('Camisa', 20, 3)
p1.estoque = 5000000000//nao pode mexer por conta do writable
delete p1.estoque //nao pode mexer por conta do writable
console.log(p1)