const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value)

    let tempo
    let troco
    if (valor >= 1 && valor <= 1.74) {
        tempo = " 30 min"
        if (valor > 1) {
            troco ="O troco em real:  " + Number((valor - 1))
        }
    }else{
        tempo = "Valor insuficiente"
        troco = " "
    }

    if(valor >=1.75 && valor < 3){
        tempo = "60 min"
        if(valor > 1.75){
            troco = "O troco em real:  " + Number((valor - 1.75))
        }
    }
    if(valor >= 3){
        tempo = "120"
        
        if(valor > 3 ){
            troco = "O troco em real:  " + Number((valor - 3))
        }
    }


    resp1.innerText = `Tempo em min: ${tempo}`
    resp2.innerText = `${troco}`


    e.preventDefault()
})

frm.addeventlistener("reset", () => {
    resp1.innerText = " "
    resp2.innerText = " "
})