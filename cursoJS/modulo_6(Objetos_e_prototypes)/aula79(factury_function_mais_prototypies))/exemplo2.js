const falar = {
    falar() {
        console.log(`${this.nome} esta falando`)
    }
}
const comer = {
    comer() {
        console.log(`${this.nome} esta comendo`)
    }
}
const beber = {
    beber() {
        console.log(`${this.nome} esta bebendo`)
    }
}

/* Também funciona assim: const pessoaPrototype = { ...comer, ...falar, ...beber } */
const pessoaPrototype = Object.assign({}, comer, falar, beber)


function criarPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    })
}
const p1 = criarPessoa('Caio', 'Viana')
const p2 = criarPessoa('Levy', 'Viana')
p1.falar()
p2.comer()
