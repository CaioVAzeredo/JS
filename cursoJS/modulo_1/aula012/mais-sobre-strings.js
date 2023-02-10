//Tipo diferente que podemos usar como string
let string = "Um \"texto\""
console.log(string)

/**cada caracter tem um índice
 * 
              01234567 */  
let String = "Um texto"
console.log('Mostra o número do índice indicado. letra: e: ' + String[4])//Mostra o número do índice indicado. letra: e;
console.log('\nnesse caso da como indefinido: ' + String[8])//nesse caso da como indefinido;


/*--------charAt()-----------*/
//outra forma de pegar o número do indice indicado
console.log('\nMostra a letra do indice indicado. letra: t: ' + String.charAt(3))//Mostra o número do índice indicado. letra: t;
console.log('\nnesse caso não mostra nada: ' + String.charAt(8))//nesse caso não mostra nada;

/*--------indexOf()-----------*/
console.log('\nBusca de frente pra trás: ' + String.indexOf('t'))//Resultado: 3. Busca de frente pra trás;
console.log('\nBusca a partir do indice 4 pois foi indicado, entao vai procurar a letra t depois desse índice: ' + String.indexOf('t',4))/*Resultado: 6.Busca a partir do indice 4 pois foi indicado, entaoavai procurar a letra t depois desse índice;*/


/*--------lastIndexOf()-----------*/
console.log('\nBusca a de trás pra frente a partir do índice: ' + String.lastIndexOf('m',3))//Resultado: 1. Busca a de trás pra frente a partir do índice;

/*--------replace()-----------*/
console.log('\ntroca UM para OUTRO: ' + String.replace('Um', 'Outro'))//troca UM para OUTRO.Resultado: Outro texto

/*--------length()-----------*/
console.log('\nRetorna o tamanho a string: ' + String.length)//Resultado: 10. Retorna o tamanho a string;

/*--------slice()-----------*/
console.log('\nIndica o Início e o fim de alguma lugar da string: ' + String.slice(3, 8))//Indica o Início e o fim de alguma lugar da string. Resultado: texto
console.log('\nIndica de trás pra frente de um alguma string: ' + String.slice(-5))//Indica de trás pra frente de um alguma string. Resultado: texto
console.log('\nSepara a string pelos espaços: ' + String.split(' '))//Separa a string pelos espaços. Resultado: ['Um', 'texto'] 
console.log('\nSepara a string pela quantidade de vezes: ' + String.split('Separa a string pela quantidade de vezes: ', 1))//Separa a string pela quantidade de vezes. Resultado:['Um'] 

/*--------toUpperCase()-----------*/
console.log('\nTudo em caixa alta: ' + String.toUpperCase())//Tudo em caixa alta

/*--------toLowerCase()-----------*/
console.log('\nTudo em minusculo: ' + String.toLowerCase())//Tudo em minusculo