const pessoas = [
    { nome: 'Caio', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

const ReturnString = pessoas.map(nome => {
    return nome.nome
})
console.log(ReturnString)

const idade = pessoas.map(valor => ({
    idade: valor.idade
})
)
console.log(idade)

const comIds = pessoas.map((novo, indice) => {
    novo.id = indice
    return novo

})
console.log(comIds)
