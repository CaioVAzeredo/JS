function relogio() {
    const relogio = document.querySelector(".relogio")
    let timer
    let segundos = 0
    document.addEventListener('click', (e) => {
        const el = e.target //e.target mostra o local onde eu estou clicando na página 

        if (el.classList.contains('iniciar')) {
            iniciaRelogio() //CHAMANDO A FUNÇÃO PARA INICIAR O TIMER
            relogio.style.color = 'black'
        }

        if (el.classList.contains('pausar')) {
            setTimeout((e) => {
                clearInterval(timer)
            }, 0)
            relogio.style.color = 'red'
        }

        if (el.classList.contains('zerar')) {
            setTimeout((e) => {
                clearInterval(timer)
            }, 0) //PARANDO O TEMPO
            segundos = 0 //ZERANDO O TEMPO
            relogio.innerHTML = '00:00:00' //ZERANDO O CONTADOR DO HTML
            relogio.style.color = 'black'
        }

    })

    function iniciaRelogio() {
        timer = setInterval(function () {//COMEÇA O LOOP ACRESCENTANDO O TEMPO
            segundos++  //ADICIONA SEGUNDOS
            relogio.innerHTML = criarHoraDosSegundos(segundos) //MUDA O HTML CHAMANDO A FUNÇÃO
        }, 1000)

    }
    function criarHoraDosSegundos(segundos) {
        let data = new Date(segundos * 1000) //PEGANDO OS SEGUNDOS 
        return data.toLocaleTimeString('pt-BR', { //MANIPULANDO O TEMPO PARA OS SEGUNDOS E RETORNAR NA FUNÇÃO
            hour12: false,
            timeZone: 'UTC'
        })
    }

}
relogio()

