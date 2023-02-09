/**ATRIBUNIDO UMA FUNCTION PARA UMA VARIAVEL */
/**FORMA ANTIGA DE SE FAZER UMA FUNCTION */
const raiz1 = function (n) {
    return n ** 0.5
}
console.log('Resultado da raiz1: \n' + raiz1(9))
console.log(raiz1(16))
console.log(raiz1(25))

/**FORMA ATUAL PARA SE FAZER UMA (ARROW) FUNCTION */
const raiz2 = n => n ** 0.5

console.log('\nResultado da raiz2: \n' + raiz2(9))
console.log(raiz2(16))
console.log(raiz2(25))
