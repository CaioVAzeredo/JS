//Arguments: sustenta todos os argumentos enviados

//Nao funciona em arrowFunciton

function funcaoArrow() {
    let total = 0
    for (let argumentos of arguments) {
        total += argumentos
    }
    console.log(total)
}
funcaoArrow(1, 2, 3, 4, 5, 6, 7)


//se nao mandar valor insuficiente no agumento ele faz print com underfined
function funcao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
}
funcao(1, 2, 3)


//Receber valor padrao tem que enviar no argumento undefined
function Funcao(a, b = 2, c = 4) {
    console.log(a + b + c)

}
Funcao(2, undefined, 20)


//Desestruturação de valores em objetos
//function FuncaO({nome, sobrenome, idade, })
function FuncaO({ nome, sobrenome, idade, }) {
    console.log(nome, sobrenome, idade)
}
let obj = { nome: 'Caio', sobrenome: 'Viana', idade: '24' }
//FuncaO({nome: 'Caio', sobrenome: 'Viana', idade: '24'})
FuncaO(obj)

//Desestruturação de valores em array
function funcaO([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)

}
let array = ['Caio', 'Viana', '24']
funcaO(array)





//              EXEMPLO
const conta = function(operador, acumulador, ...numeros) /* tres pontinhos é o Rest operator que pega o resto dos argumentos e coloca em uma array */ {
    for (let numero of numeros) {
        if (operador === '+') {
            acumulador += numero
        }
        if (operador === '-') {
            acumulador -= numero
        }
        if (operador === '*') {
            acumulador *= numero
        }
        if (operador === '/') {
            acumulador /= numero
        }
    }
    console.log(acumulador)
}

conta('+', 0, 20, 30, 40, 50)
