const p1 = new Produto('Camiseta', 50)
function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}


/* ------------------------------ */
//literal
const p2 = {
    nome: 'Caneca',
    preco: 30
}

/* ------------------------------ */

const p3 = Object.create(Produto.prototype, {
    nome: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: 'Escova',
    },
    preco: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: 123,
    },
    tamanho: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: 40,
    }
})

/* ----------------------------- */

Object.setPrototypeOf(p2, Produto.prototype) //pegar o prototype de p1 e reaproveitar em p2

/* ------------------------------ */

Produto.prototype.desconto = function (percentual) {
    return this.preco = this.preco - (this.preco * (percentual / 100))
}
Produto.prototype.aumento = function (percentual) {
    return this.preco = this.preco + (this.preco * (percentual / 100))
}

p1.desconto(50)
console.log(p1)
console.log(p2)
console.log(p3)