const data1 = Date.now()
const data = new Date(data1)
const diaSemana = data.getDay()
 const diaText = diaSemanaTexto(diaSemana)
console.log(diaSemana, diaText)

function diaSemanaTexto(diaSemana){
    let diaText
switch (diaSemana) {
    case 0: 
    diaText = 'Domingo'
    break
    case 1: 
    diaText = 'Segunda'
    break
    case 2: 
    diaText = 'Terça'
    break
    case 3: 
    diaText = 'Quarta'
    break
    case 4: 
    diaText = 'Quinta'
    break
    case 5: 
    diaText = 'Sexta'
    break
    case 6: 
    diaText = 'Sabado'
    break
    
    default: //else
    diaText = ' '
}
 return diaText
}
/* if(diaSemana === 0 ){
    diaText = `Domingo`
} else if(diaSemana === 1 ){
    diaText = `Segunda`
} else if(diaSemana === 2 ){
    diaText = `Terça`
} else if(diaSemana === 3 ){
    diaText = `Quarta`
} else if(diaSemana === 4 ){
    diaText = `Quinta`
} else if(diaSemana === 5 ){
    diaText = `Sexta`
} else {
    diaText = `Sabado`
} 
 */
