//Serve para reduzir a array em um unico elemento (acumulador)
//some todos os numeros (reduce)


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor
    console.log(acumulador, valor)
    return acumulador
}, 0) // o zero é o valor inicial