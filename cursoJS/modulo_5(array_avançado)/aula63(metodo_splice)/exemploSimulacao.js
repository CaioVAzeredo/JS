//               -5       -4       -3        -2         -1    
//                0        1        2         3          4
const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia']

//nomes.splice(indice, delete, elem1, elem2, elem3)
//pop
const removidos = nomes.splice(-1, 1) 
console.log(nomes, removidos) 


//shift
const removidos2 = nomes.splice(0, 1)
console.log(nomes, removidos2) 


//push
const nomes2 = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia']
nomes2.splice(nomes2.length, 0, 'Caio')
console.log(nomes2) 

//unshit
nomes2.splice(0, 0, 'Levy')
console.log(nomes2)