function mostrarHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}
const timer = setInterval((e) => {
    console.log(mostrarHora())
}, 1000)
setTimeout((e)=>{
    clearInterval(timer)
}, 10000)