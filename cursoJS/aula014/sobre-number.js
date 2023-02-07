let num1 = 12
let num2 = 1.123456
console.log('\n.toString() converte numero para string: '+num1.toString() + num2)//.toString() converte numero para string

/* Para o número binário basta colocar o numero 2 dentro do .toString(2)*/
console.log('\nPara o número binário basta colocar o numero 2 dentro do .toString(2): ' + num1.toString(2))//vai apresentar o numero binário do num1 

/** Decidir quantas casa decimais usa o .toFixed()
 */
console.log('\nDecidir quantas casa decimais usa o .toFixed(): ' + num2.toFixed(2))
/**Verificar se o numero é inteiro com Number.isIteger() e retorna falso ou verdaddeiro */
console.log('\nVerificar se o numero é inteiro com Number.isIteger(): '+ Number.isInteger(num1))

/**Verificar se o número é um NaN com Number.isNaN() retorna verdadeiro ou falso*/
console.log('\nVerificar se o número é um NaN com Number.isNaN():' + Number.isNaN(num2))