/* class */
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.nomecompleto = nome + ' ' + sobrenome
    }

    falar() {
        console.log(`${this.nomecompleto} está falando`)
    }
}


/* function construction */
function Pessoa2(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomecompleto = nome + ' ' + sobrenome
}

Pessoa2.prototype.falar = function () {
    console.log(`${this.nomecompleto} está falando`)
}


const p1 = new Pessoa('Caio', 'Viana')
const p2 = new Pessoa2('Caio', 'Viana')


