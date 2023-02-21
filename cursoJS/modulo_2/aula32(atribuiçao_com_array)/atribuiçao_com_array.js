//               0 1 2 3 4 5 6 7 8
const numeros = [1,2,3,4,5,6,7,8,9]
const [primeiroNum, segundoNum, ...resto] = numeros //atribuindo os numeros e pegando o resto que nao foi pego e colocando no '...resto'

console.log('O que foi pego nas Arrays' + primeiroNum, segundoNum)
console.log('O que nao foi pego nas Arrays' + resto)

//              0         1         2
//            0 1 2     0 1 2     0 1 2                
const num = [[1,2,3,], [4,5,6,], [7,8,9]]
const [lista1, lista2, lista3] = num
console.log(lista3[2])