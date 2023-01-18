const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e)=>{

const num = Number(frm.inNumero.value)

let valor

if(num%2 == 0 ){
    valor = "Par"    
}
else{
    valor = "Impar"
}
resp.innerText = `${valor}`

    e.preventDefault()
})


frm.addEventListener("reset", ()=> {
    resp.innerText = " "
})