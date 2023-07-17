//               -5       -4       -3        -2         -1    
//                0        1        2         3          4
const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia']

//nomes.splice(indice, delete, elem1, elem2, elem3)
//pop
const removidos = nomes.splice(3, 2, 'Caio', 'Viana') //remover do indice 3 2 elemento(gabriel e julia) e add caio viana

console.log(nomes, removidos) 