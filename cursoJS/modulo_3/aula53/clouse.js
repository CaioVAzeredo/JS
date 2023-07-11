//clouse é a habilidade que o a função tem de acessar seu escoupo léxico
function retornaFuncao(nome){
    return function(){
        return nome
    }
} 

const funcao = retornaFuncao('Caio') //muda o scopo com o nome igual a Caio
const funcao2 = retornaFuncao('Viana') //muda o scopo com o nome igual a Viana

console.log(funcao())
console.log(funcao2())