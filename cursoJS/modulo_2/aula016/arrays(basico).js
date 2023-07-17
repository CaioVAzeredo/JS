//                0        1        2
const alunos = ['Luiz', 'Maria', 'Joao']
console.log('\nArray:' + alunos)

/**SUBSTITUIR  ARRAYS*/
alunos[0] = 'Caio' // trocou LUIZ por CAIO
console.log('\ntrocou LUIZ por CAIO: ' + alunos)

/**ADICIONAR INFORMAÇÃO NO FINAL DA ARRAY COM .push()*/
alunos.push('Lucas')
console.log('\nAdicionando informação no final da array com .push(): ' + alunos)

/**OUTRA FORMA É INDICAR ONDE QUER ADICIONAR */
alunos[3] = 'Felipe'//adicionando FELIPE no índice 3 da array
console.log('\nElemento adicionado: '+ alunos[3] + '. Array com os elementos: ' + alunos)

/**ADICIONAR INFORMAÇÃO NO COMEÇO DA ARRAY */
alunos.unshift('Carlos')//adicionando CARLOS no índice 0 da array
console.log('\nElemento adicionado: ' + alunos[0] + '. Array com o elemento: ' + alunos)

/**REMOVER ULTIMO ELEMENTO DA ARRAY */
const removido = alunos.pop()
console.log('\nElemento removido: ' + removido + '. Array sem o elemento' + alunos )

/**REMOVER PRIMEIRO ELEMENTO DA ARRAY */
const Removido = alunos.shift()
console.log('\nElemento removido: ' + Removido + '. Array sem o elemento: ' + alunos )

/**DELETANDO ELEMENTOS DA ARRAY */
delete alunos[1]
console.log('\nElemento deletado: ' + alunos[1] + '. Array sem o elemento: ' + alunos)

/**FATIAR ELEMENTOS DA ARRAY */
console.log('\nSelecionando apenas os elementos entre 0 e 4 ou seja, 1; 2; 3: ' + alunos.slice(0, 4))//selecionando apenas os elementos entre 0 e 4 ou seja, 1; 2; 3;

/**VER SE É UM ARRAY */
console.log('\nSe for uma array retorna TRUE caso contrário, retorna FALSE: ' + alunos instanceof Array)// se for uma array retorna TRUE caso contrário, retorna FALSE
