const pessoas = [
        {nome: 'Caio', idade: 62},
        {nome: 'Maria', idade: 23},
        {nome: 'Eduardo', idade: 55},
        {nome: 'Leticia', idade: 19},
        {nome: 'Rosana', idade: 32},
        {nome: 'Wallace', idade: 47},
]

const pessoaComCincoLetras = pessoas.filter(pessoa => pessoa.nome.length > 5 )
console.log(pessoaComCincoLetras)

const pessoComMaisDeCinquenta = pessoas.filter(pessoa => pessoa.idade > 50)
console.log(pessoComMaisDeCinquenta)
                                                                           //Termina com..
const pessoasFiltradas = pessoas.filter(pessoa => pessoa.nome.toLowerCase().endsWith('a'));
console.log(pessoasFiltradas);
