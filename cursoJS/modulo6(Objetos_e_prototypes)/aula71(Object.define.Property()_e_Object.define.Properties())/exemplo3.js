function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // se pode alterar
        configurable: false // se pode configurar
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: false, // se pode alterar
            configurable: false // se pode configurar
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: false, // se pode alterar
            configurable: false // se pode configurar
        }
    })
}

const p1 = new Produto('Camisa', 20, 3)
console.log(p1)

for(let chave in p1){
    console.log(chave)
}
