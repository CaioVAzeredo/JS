/**Primitivos(imutaveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados 
 * 
 * Referencia(mutavel) - array, object,function - Passados por referencia
*/
let a = [1,2,3]
let b = [...a]//copia a info de 'a' 
let c = a// referencia ao mesmo valor da memoria de a

console.log('\nTem o mesmo valor: \n' + a, b, c)
a.push(4)
console.log('"a" valor diferente de "b": '+ a , b+ '. E "c" tem continuma com o mesmo valor de "a": valor de "c": ' + c )

/**A mesma coisa serve para copiar um object */
const d = {
    nome: 'Caio',
    sobrenome: 'Viana'
}
const e = {
    ...d
}
d.nome = 'Joao' //mudando o valor de "d"
console.log('Nome "d": ' + d.nome + '\nNome "e": ' + e.nome) //comparando os nomes salvos em "d" e "e"