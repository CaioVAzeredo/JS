//Object.freeze (congela o objeto)
//Object.defineProperties (define varias propriedades)
//Object.defineProperty (define uma unica propriedade)

const produto = {
    nome: 'Produto',
    preco: 1.8,
    material: 'porcelana'
}
//console.log(Object.keys(produto))
//console.log(Object.entries(produto)) 

for (let [chave, valor] of Object.entries(produto)) {
    console.log(`${chave}: ${valor}`)
}
console.log('\n')
for (let valor of Object.entries(produto)) {
    console.log(`${valor[0]}: ${valor[1]}`)
}