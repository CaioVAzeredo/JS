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
function mesT(Mes) {
    const mes = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','julho','Agosto','Setebro','Outubro','Novembro','Desembro']
    return Mes[mes]
}
function semanaT(dia) {
    const diaSemana = ['domingo','seungda', 'terça','quarta', 'quinta','sexta', 'sabado']
    return dia[diaSemana]
}

function retorno() {
    return `${dia(data)} ${horaF(data)} `
}

h1.innerHTML = retorno()