const data = new Date() 

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth())
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const s = zeroAEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${s}`
}
function zeroAEsquerda(num) {
    if (num >= 10) {
        num = num
    } else {
        num = `0${num}`
    }
    return num
}

console.log(formataData(data))