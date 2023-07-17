//retorne a pessoa mais velha

const pessoas = [
    { nome: 'Maria', idade: 23 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
    { nome: 'Caio', idade: 62 },
    { nome: 'Eduardo', idade: 55 },
]

const velha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) {
        return acumulador
    }
    else {
        return valor
    }
})

console.log(velha)