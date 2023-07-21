class Carro {
    constructor(nome) {
        this.nome = nome
        this.velocidade = 0
    }
    acelerar() {
        if (this.velocidade >= 100) {
            return
        } else {
            this.velocidade++
        }
    }
    freiar() {
        if (this.velocidade <= 0) {
            return
        } else {
            this.velocidade--
        }
    }
}

const c1 = new Carro('fusca')

for (let i = 0; i <= 10000; i++) {
    c1.acelerar()
}
console.log(c1)
