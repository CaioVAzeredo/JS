/* FOR IN -> lê os índices ou chaves do objeto */

/* ARRAY */
const frutas = ['Pera', 'Maçã', 'Uva']

for (let index in frutas) {
    console.log(`${Number(index) + 1} Frutas: ` + frutas[index])
}
/* for (let i = 0; i < frutas.length; i++) {
    console.log(`${i+1}° fruta: ` + frutas[i])
} */


/* OBJETO */
const pessoa = {
    nome: 'Caio',//CHAVE
    sobrenome: 'Viana',//CHAVE
    idade: 24//CHAVE
}
for (let chave in pessoa) {
    console.log('\n' + chave, pessoa[chave])
}