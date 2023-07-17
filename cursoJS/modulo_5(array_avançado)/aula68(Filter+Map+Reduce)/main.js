/* 

Retorne a soma do dobro de todos os pares
 filtrar pares 
 dobrar os valores
 reduzir (somar tudo)
*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const pares = numeros.filter(e => {
    if (e % 2 === 0) {
        return e
    }

})

const dobro = pares.map(e => {
    return e * 2
})

const soma = dobro.reduce((acumulador, valor) => {
    acumulador += valor
    return acumulador
}, 0)

console.log('-----------')
console.log(pares)
console.log('-----------')
console.log(dobro)
console.log('-----------')
console.log(soma)

