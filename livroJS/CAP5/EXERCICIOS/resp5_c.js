const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = frm.inNum.value

    let contador = ""
    let somador = 1

    for (let i = 2; i <= numero/2; i++) {
        if (numero % i == 0) {

            contador += ", " + i
            somador = somador + i
        }
    }
    if (somador == numero) {
        resp.innerText = `Divisores do ${numero}: 1${contador} (soma: ${somador}) \n O número: ${numero} é um numero perfeito`
    } else {
        resp.innerText = `Divisores do ${numero}: 1 ${contador}(soma: ${somador}) \n O número: ${numero} NÃO é um numero perfeito`
    }

    frm.inNum.value = ""
    frm.inNum.focus()
})