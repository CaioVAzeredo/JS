const _velocidade = Symbol('velocidade')
class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0
    }

    set velocidade(valor) { //SET serve para armazenar o valor na variavel
        if (typeof valor !== 'number') {
            return
        }
        if (valor >= 100 || valor <= 0){
            return
        }
        this[_velocidade] = valor
    }
    get velocidade(){ // GET serve para mandar a informação quando for requisitado 
        return this[_velocidade]
    }


    acelerar() {
        if (this._velocidade >= 100) {
            return
        } else {
            this._velocidade++
        }
    }
    freiar() {
        if (this._velocidade <= 0) {
            return
        } else {
            this._velocidade--
        }
    }
}

/* for (let i = 0; i <= 10000; i++) {
    c1.acelerar()
} */


const c1 = new Carro('fusca')
c1.velocidade = 1000
console.log(c1.velocidade)
