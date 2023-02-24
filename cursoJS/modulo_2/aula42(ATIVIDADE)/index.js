/* ESCREVA UMA FUNÇÃO CHAMADA ePaisagem que recebe dois argumentos, largura e altura de uma imagem. 
Retorne true se a imagem estiver no modo paisagem */

const ePaisagem = (alt, larg) => {
    if (larg > alt) {
        return true
    } else {
        return false
    }
}

console.log(ePaisagem(7000, 100))

