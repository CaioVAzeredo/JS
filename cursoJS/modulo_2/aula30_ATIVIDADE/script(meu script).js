const h1 = document.querySelector("h1")

const data1 = Date.now()// recebe data atual em ms
const data = new Date(data1)//recebe a info da data1

/* DIA */
function dia(data) {
    const diaNum = data.getDate()//dia do mes
    const diaSemana = data.getDay() //recebe o dia da semana em número(0 - dom ... 6 - sab)
    const diaSemT = semanaT(diaSemana)
    const mes = data.getMonth() + 1
    const Mes = mesT(mes)
    const ano = data.getFullYear()

    return `${diaSemT}, ${diaNum} de ${Mes} de ${ano}`

}
/* HORA */
function horaF(data) {
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const s = zeroAEsquerda(data.getSeconds())

    return ` ${hora}:${min}:${s}`
}
function zeroAEsquerda(num) {
    if (num >= 10) {
        return num
    } else {
        return `0${num}`
    }
}

/* FUNÇOES */
function mesT(mes) {
    if (mes === 1) {
        return 'Janeiro'
    } else if (mes === 2) {
        return 'Fevereiro'
    } else if (mes === 3) {
        return 'Março'
    } else if (mes === 4) {
        return 'Abril'
    } else if (mes === 5) {
        return 'Maio'
    } else if (mes === 6) {
        return 'Junho'
    } else if (mes === 7) {
        return 'Julho'
    } else if (mes === 8) {
        return 'Agosto'
    } else if (mes === 9) {
        return 'Setembro'
    } else if (mes === 10) {
        return 'Outrubro '
    } else if (mes === 11) {
        return 'Novembro'
    } else {
        return 'Dezembro'
    }
}
function semanaT(dia) {
    if (dia === 0) {
        return 'Domingo'
    } else if (dia === 1) {
        return 'Segunda-feira'
    } else if (dia === 2) {
        return 'Terça-feira'
    } else if (dia === 3) {
        return 'Quarta-feira'
    } else if (dia === 4) {
        return 'Quinta-feira'
    } else if (dia === 5) {
        return 'Sexta-feira'
    } else {
        return 'Sabado'
    }
}

function retorno() {
    return `${dia(data)} ${horaF(data)} `
}

h1.innerHTML = retorno()


