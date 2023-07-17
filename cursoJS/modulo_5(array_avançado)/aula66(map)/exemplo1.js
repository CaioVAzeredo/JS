const numeros = [5, 50, 80, 1, 2, 3]

/* const numerosEmDobro1 = numeros.map(function(valor, indice, array){
    console.log(valor, indice, array)
}) */

const numerosEmDobro = numeros.map(valor => valor * 2)

console.log(numerosEmDobro)