const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
    let num = Number(frm.inNum.value)

    let resposta = ""
    for (let i = num; i >= 0; i--) {
        if(i>0){
        resposta = resposta + i + ", "
        }else {
        resposta = resposta + i + ". "
        }
    }   

    resp.innerText = `${resposta}`


    e.preventDefault()
})