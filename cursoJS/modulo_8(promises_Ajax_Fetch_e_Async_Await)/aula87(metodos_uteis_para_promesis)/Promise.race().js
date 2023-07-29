function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO')
                return
            }
            resolve(msg.toUpperCase() + '- Passei na promise')
            return
        }, tempo)
    })
}
// Promise.all; Promise.race; Promise.resolve; Promise.reject
const promises = [
    esperaAi('Promise 1', rand(1, 3)),
    esperaAi('Promise 2', rand(1, 3)),
    esperaAi(1000, rand(1, 3)),
    esperaAi('Promise 3', rand(1, 3)),
]
//Promise.race() vai mandar o primeiro que foi resolvido 
Promise.race(promises)
    .then(function (valor) {
        console.log(valor)
    })
    .catch(function (erro) {
        console.log(erro)
    })