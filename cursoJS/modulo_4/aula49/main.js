//Declaração de função(Function hoisting)
falaOi()
function falaOi(){
    console.log('oi')
}


/*  First-class objects (Objetos de primeira classe)
    Function expression
*/
const souUmDado = function(){
    console.log('Dado de algum Sistema')
}
function executarFuncao(funcao){
    console.log('Vou executar sua função abaixo')
    funcao()
}
executarFuncao(souUmDado)


//Arrow function
const funcaoArrow = () =>{
    console.log('Sou uma arrow function')
}
funcaoArrow()

// Dentro de um objeto
const obj = {
    falar(){
        console.log('Estou falando')
    }
}
obj.falar()