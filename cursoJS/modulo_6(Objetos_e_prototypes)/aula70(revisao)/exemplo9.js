//Constructor functions

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    //return this //{nome: 'Caio', sobrenome: 'Viana'}
}
//new cria um obj vazio e atrela o this à função
const p1 = new Pessoa('Caio', 'Viana')
Object.freeze(p1) //nao pode sofrer alteração 
const p2 = new Pessoa('Joao', 'Maria')
console.log(p1)
console.log(p2)