function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('CAI NO ERRO')
            return
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + '- Passei na promise')
            return
        }, tempo)
    })
}
// Promise.all; Promise.race; Promise.resolve; Promise.reject
//Promise.resolve
function baixaPagina() {
    const emCache = true

    if (emCache) {
        return /* * */Promise.resolve('Pag em cache') /* * */
    } else {
        return esperaAi('baixei a pág', 3000)
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina)
})
.catch(e => console.log('ERRO', e))