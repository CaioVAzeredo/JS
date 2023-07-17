function retornaHora(data) {
    if (data && !(data instanceof Date)) { //verificar se data é uma instancia de Date
        throw new TypeError('Esperando instancia de Date')
    }
    if(!data){
        data = new Date()
    }
    return data.toLocaleTimeString('pt-BR', {
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12: false
    })
}
try{
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora()
    console.log(hora)
}catch(error){
    console.log('Insira uma data e hora válidos')
}finally{
    console.log('Tenha um bom dia')
}

/* try {//executado quando nao tem erro 

} catch (e) { //tratando erro

} finally{//sempre executado

} */