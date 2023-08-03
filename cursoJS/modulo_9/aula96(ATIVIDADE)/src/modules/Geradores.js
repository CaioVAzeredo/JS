const aleatorio = (min, max) => {
    return Math.floor((Math.random() * (max - min) + min))
}

const geraMaiuscula = () => {
    return String.fromCharCode(aleatorio(65, 91))
}

const geraMinuscula = () => {
    return String.fromCharCode(aleatorio(97, 123))
}

const geraNUmero = () => {
    return String.fromCharCode(aleatorio(48, 58))
}

const simbolos = '@_'
const geraSimbolos = () => {
    return simbolos[aleatorio(0, simbolos.length)]
}
export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = []

    for (let i = 0; i < qtd; i++) {
        if (maiusculas) {
            senhaArray.push(geraMaiuscula())
        }
        if (minusculas) {
            senhaArray.push(geraMinuscula())
        }
        if (numeros) {
            senhaArray.push(geraNUmero())
        }
        if (simbolos) {
            senhaArray.push(geraSimbolos())
        }
    }
    
    return senhaArray.join('').slice(0, qtd)
}

