//Constructor functions

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    Object.freeze(this) //nao pode sofrer alteração 
    //return this //{nome: 'Caio', sobrenome: 'Viana'}
}

//new cria um obj vazio e atrela o this à função
const p1 = new Pessoa('Caio', 'Viana')
p1.nome = 'Outra coisa' // a tentativa da alteração nao é feita
delete p1.nome // a tentativa da alteração nao é feita
const p2 = new Pessoa('Joao', 'Maria')
console.log(p1)
console.log(p2)