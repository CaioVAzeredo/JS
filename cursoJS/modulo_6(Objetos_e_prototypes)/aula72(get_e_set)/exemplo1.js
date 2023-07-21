function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    let estoquePreso = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: false, // se pode configurar
        get: function () { //get armazena o valor atribuido
            return estoquePreso
        },
        set: function (valor) { //set pega o valor atribuido p1.estoque = 500
            if (typeof valor !== 'number') {
                throw new TypeError('mensagem')
            }
            estoquePreso = valor
        }
    })
}

const p1 = new Produto('Camisa', 20, 3)
/* console.log(p1)*/

p1.estoque = 500
console.log(p1.estoque)