//IIFE -> IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function (idade, peso, altura) {

    const sobrenome = 'Viana'
    function criarNome(nome){
        return nome + ' ' + sobrenome
    }

    function falaNome(){
        console.log(criarNome('Caio'))
    }

    falaNome()
    console.log(idade, peso, altura)

})(30, 75, 1.75)