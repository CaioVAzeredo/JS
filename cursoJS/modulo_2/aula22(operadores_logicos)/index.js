/**
 * && -> false && true -> false retorna "o valor literal" do falso
 * FALSY
 * false
 * 0
 * ''; ""; ``
 * null/undefined
 * NaN
 */

function corPreto(){
    return 'preto'
}

const cor = NaN
const corA = cor && corPreto()

console.log(corA)// seleciona o valor falso pois NaN é falso

/**
 * || -> true || false -> vai retornar "o valor literal" do primeiro verdadeiro que aparecer 
 */
function corpreto(){
    return 'preto'
}

const corUsu = NaN
const corback = cor || corpreto()

console.log(corpreto())//seleciona o valor verdadeiro pois o NaN é falso