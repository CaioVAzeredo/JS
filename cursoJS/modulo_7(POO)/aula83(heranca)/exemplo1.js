class DispositiviEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' dispositivo ja ligado')
            return
        }
        this.ligado = true
    }
    desligar() {
        if (!this.ligado) {
            return
        }
        this.ligado = true
    }
}


class Smartphone extends DispositiviEletronico {
    constructor(nome, cor, modelo) {
        super(nome) //pegar o que ja tem na class pai igual ao .call()

        this.cor = cor
        this.modelo = modelo
    }
}

class Tablet extends DispositiviEletronico {
    constructor(nome, wifi) {
        super(nome)

        this.wifi = wifi
    }
}