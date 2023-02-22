const paragrafos = document.querySelector(".paragrafos")
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body) //pegar todos os estilos do body
const backgroundColorBody = estilosBody.backgroundColor//pegar a cor do background do body
console.log(backgroundColorBody)

