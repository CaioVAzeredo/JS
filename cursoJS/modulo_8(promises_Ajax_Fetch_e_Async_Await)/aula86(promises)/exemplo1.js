function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo, callBack) {
    setTimeout(() => {
        console.log(msg)
        if (callBack) {
            callBack()
        }
    }, tempo)
}

esperaAi('frase 1', rand(1, 3), function() { //funcao anônima que é passado pelo call back
    esperaAi('frase 2', rand(1, 3), function () {
        esperaAi('frase 3', rand(1, 3))
    })
})

