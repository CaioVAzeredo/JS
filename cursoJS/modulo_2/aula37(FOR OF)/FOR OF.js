//for clássico - geralmente com iteráveis (array ou strings)
//for in - retorna o índice ou chave (string, array ou objeto)
//for of - retorna o calor em si(iteráveis, array ou string)


const nome = 'Caio Viana'

//FOR CLÁSSICO
/* for(let i =0; i< nome.length; i++){
    console.log(nome[i])
} */

//FOR IN
/*for (let i in nome){
    console.log(nome[i])
}*/

//FOR OF

for (let valor of nome){
    console.log(valor)
}

const pessoa = {
    nome: 'Caio',
    sobrenome: 'Viana' 
}