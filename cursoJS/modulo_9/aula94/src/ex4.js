const nome = 'Caio Viana'
const sobrenome = 'de Azeredo'
const idade = 24

//so é exportado o que tem como default 
function soma(x, y) {
    return x + y
}

export default (x, y) => x * y

export { nome, sobrenome, idade, soma as default }