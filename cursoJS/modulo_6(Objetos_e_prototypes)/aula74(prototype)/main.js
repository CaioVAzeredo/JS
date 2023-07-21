function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => {
        return 'ORIGINAL ' + nome + ' ' + sobrenome
    }
    Pessoa.prototype.nomeCompleto = () => {
        return this.nome + ' ' + this.sobrenome
    }

    const pessoa1 = new Pessoa('Caio', 'V.')
    const pessoa2 = new Pessoa('Lucas', 'V.')

    console.log(pessoa1.nomeCompleto())
}