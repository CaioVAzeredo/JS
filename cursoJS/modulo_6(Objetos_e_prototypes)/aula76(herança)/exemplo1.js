//Produto -> aumento, desconto
//Camisa = cor, caneca = material
const camisa = new Camisa('regata', 50, 'Preto')
const caneca = new Caneca('caneca gatinho', 65, 'Porcelana', 10)


/* PRODUTO */
function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}
/* Funções produto */
Produto.prototype.aumento = function (valor) {
    this.preco += valor
}

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco*(percentual/100))
}

Produto.prototype.desconto = function (valor) {
    this.preco -= valor
}

/* CAMISA */
function Camisa(nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor
}
Camisa.prototype = Object.create(Produto.prototype) // feito diferente de const p3 = Object.create(Produto.prototype pois Camisa é uma função e p3 é uma variavel 
Camisa.prototype.constructor = Camisa //Lincando o construtor da camisa para seu criador que é a Camisa ---> function Camisa(nome, preco, cor){ Produto.call(this, nome, preco): this.cor = cor}


/* CANECA */
function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco)
    this.material = material
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                return
            }
            estoque = valor
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca



/* Atribuições e print */
caneca.estoque = 100
camisa.aumento(100)

console.log(camisa)
console.log(caneca)
console.log('Estoque: ' + caneca.estoque)

