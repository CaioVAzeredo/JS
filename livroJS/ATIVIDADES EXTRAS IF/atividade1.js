const frm = document.querySelector("form")
const resp = document.querySelector("#resposta")

frm.addEventListener("submit", (e)=>{
var a = frm.inLetra.value
if(a == "a" || a == "e" || a=="i" || a == "u" ){
        resp.innerText = `A letra "${a}" é uma vogal`
}
else{
    resp.innerText = `a letra "${a}" é uma consoante`
}

    e.preventDefault()
})

frm.addEventListener("reset", () => {
    resp.innerText = " "
})