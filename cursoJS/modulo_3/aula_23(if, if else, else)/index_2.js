const num = 10

if (num <= 11) {
    console.log('O numero é menor  ou igual a 10')
}

if (num >= 0 && num <= 5) {
    console.log('O numero esta entre 0 e 5')
} else if (num >= 6 && num <= 8) {
    console.log('O numero NAO esta entre 6 e 8')
} else if (num >= 9 && num <= 11) {
    console.log('O numero NAO esta entre 9 e 11')
} else {
    console.log('O numero nao esta entre 0 e 11')
}

console.log('...Aqui vai o resto do código')