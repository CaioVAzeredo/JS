//               -5       -4       -3        -2         -1    
//                0        1        2         3          4
const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia']

//nomes.splice(indice, delete, elem1, elem2, elem3)
//pop
const removidos = nomes.splice(-2, 2/* Number.MAX_VALUE */) //remover do indice -2 1 elemento, se tivesse 2 seria removido gabriel e julia  
//Number.MAX_VALUE serve para colocar um numero muito grande
console.log(nomes, removidos) 