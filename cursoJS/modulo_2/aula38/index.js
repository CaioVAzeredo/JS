const paragrafos = document.querySelector(".paragrafos")
const ps = paragrafos.querySelectorAll('p')

/* PARAGRAFO */
const estilosBody = getComputedStyle(document.body)//pegar todos os estilos do body
const backgroundColorBody = estilosBody.backgroundColor//pegar a cor do background do body

/* LAÇO DE REPETIÇÃO */
for (let p of ps) {
    p.style.background = backgroundColorBody
    p.style.color = '#ffff'
}

