const frm = document.querySelector("form")
const resp = document.querySelector("#resp")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNum.value)
    let divisao = 0

    for (let i = 2; i <= numero / 2; i++){
        if(numero % i == 0){
            divisao = 1
            break
        }
    }

    if(numero > 1 && divisao){
        resp.innerText = `${numero} nao é primo`
    }else{
        resp.innerText = `${numero} é primo`
    }
})