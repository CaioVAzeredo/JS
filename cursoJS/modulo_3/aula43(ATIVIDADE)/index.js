/* Escreva uma funçao que receba um numero e retorne o seguinte: 
numero é divisivel por 3 = Fizz
numero é divisivel por 5 = Buzz
numero é divisivel por 3 e 5 = FizzBuzz
numero NAO é divisivel por 3 e 5 = RETORNA O PRÓPIO NUMERO
checar se o numero é realmente um numero = retorna o próprio numero 
Use a função com numeros de 0 a 100 
*/
for (let i = 0; i <= 100; i++) {
    let retorno = condicao(i)
    console.log(i, retorno)
}

function condicao(i) {
    let retorno
    
    if (typeof i !== 'number') {
        return i
    }

    if (i % 3 === 0) {
        retorno = 'Fizz'
    } if (i % 5 === 0) {
        retorno = 'Buzz'
    }
    if (i % 3 === 0 && i % 5 === 0) {
        retorno = 'FizzBuzz'
    }
    if (i % 3 !== 0 && i % 5 !== 0) {
        retorno = i
    }
    return retorno
}

