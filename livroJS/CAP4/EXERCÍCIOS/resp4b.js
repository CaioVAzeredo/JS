const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e)=>{
    const velocidade = Number(frm.inCondutor.value)
    const velocidadeVia = Number(frm.inNumero.value)

    const velFinal = (velocidadeVia * 0.2) + velocidadeVia
    let mensagem  
    if (velocidade <= velocidadeVia){
        mensagem = "Sem multa"
     }
     if (velocidade > velocidadeVia && velocidade <= velFinal){
        mensagem = "Multa leve"
     }
     if(velocidade > velFinal){
        mensagem = "Multa grava"
     }
     resp.innerText = `${mensagem}`
    e.preventDefault()
})

frm.addEventListener("reset", ()=>{
    resp.innerText = " "
})