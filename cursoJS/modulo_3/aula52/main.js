const nome = 'caio'

function falaNome(){
    console.log(nome)
}

function usaFalaNome(){
    const nome = 'viana'
    falaNome()
}
usaFalaNome()