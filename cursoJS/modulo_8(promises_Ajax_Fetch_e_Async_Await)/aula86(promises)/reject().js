function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (msg !== 'string') {
            reject('BAD value')
        }
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}
esperaAi('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Frase 2', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Frase 3', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
    }).catch(e => {
        console.log('ERRO: ' + e)
    })//quando o reject() for chamado, o catch() vai ser executado


