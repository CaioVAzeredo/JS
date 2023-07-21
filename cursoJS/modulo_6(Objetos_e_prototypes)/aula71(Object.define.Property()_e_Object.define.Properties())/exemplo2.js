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
console.log(Object.keys(p1))

for(let chave in p1){
    console.log(chave)
}