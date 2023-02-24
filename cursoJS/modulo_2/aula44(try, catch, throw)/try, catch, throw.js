function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser um número') //captura do erro
    }
    return x + y
}

try { //executa quando nao há erros
    console.log(soma('1', 2))
} catch (e) { //executa quando há erros
    /*  console.log(error) */ //apresentar o erro(não fazer isso )
    console.log('Alguma coisa mais amigável para o cliente')
}