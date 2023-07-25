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
const p1 = new Pessoa('Caio', 'Viana')

p1.falar()


