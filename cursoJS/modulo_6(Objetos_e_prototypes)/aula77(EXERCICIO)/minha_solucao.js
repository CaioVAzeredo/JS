//705.484.450-52   070.987.720-03
/* 
7  0  5  4  8  4  4  5  0
x  x  x  x  x  x  x  x  x
10 9  8  7  6  5  4  3  2
70 9  40 28 48 20 16 15 0 = 237

(10 * 237) % 11 = 5 (Primeiro digito)
Se o número digito for maior que 9, consideramos 0
*/

let cpf = '048.269.241-35'
let cpfLimpo = cpf.replace(/\D+/g, '') ///\D+/g é pra pegar tudo que nao é um numero


//DIGITO 1
cpfArray1 = Array.from(cpfLimpo) //Array.from() é para transformar string em array
for (let i = 0; i <= 1; i++) {
    cpfArray1.pop()
}

let i = 10
let resultado = 0

for (let numero of cpfArray1) {
    let multiplicado = numero * i
    resultado += multiplicado
    i--
}

function resto() {
    cpfArray2 = Array.from(cpfLimpo)
    cpfArray2.pop()
    let tamanhoCPF2 = cpfArray2.length
    let resultadoDoResto = calculo(tamanhoCPF2, resultado)
    /* let compara = comparacao1(resultadoDoResto) */
    return resultadoDoResto

}

function calculo(tamanho, resultado) {
    let valor = (tamanho * resultado) % 11
    if (valor <= 9) {
        return valor = valor
    }
    else {
        return valor = 0
    }

}

//DIGITO 2
cpfArray2 = Array.from(cpfLimpo) //Array.from() é para transformar string em array
for (let i = 0; i <= 0; i++) {
    cpfArray2.pop()
}

let j = 11
let resultado2 = 0

for (let numero2 of cpfArray2) {
    let multiplicado2 = numero2 * j
    resultado2 += multiplicado2
    j--
}

function resto2() {
    let tamanhoCPF2 = cpfArray1.length + 1
    let resultadoDoResto2 = calculo(tamanhoCPF2, resultado2)
    return resultadoDoResto2

}

function comparacao() {
    let digitosFinais = resto().toString() + resto2().toString()
    cpfArray3 = Array.from(cpfLimpo)
    let resultadoFinal = ' '
    for (let i = 0; i <= 8; i++) {
        cpfArray3.shift()
    }
    cpfString = cpfArray3.join('')
    if (Number(cpfString) === Number(digitosFinais)) {
        resultadoFinal = 'valido'
    }  else{
        resultadoFinal = 'invalido'
    }


    return resultadoFinal
}
console.log(comparacao())