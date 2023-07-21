const objA = {
    chave: 'A'
    //__proto__: Object.prototype
}

const objB = {
    chave: 'B'
    //__proto__: objA
}

const objC = new Object()
objC.chaveC = 'C'

Object.setPrototypeOf(objB, objA) //colocando objA em objB
Object.setPrototypeOf(objC, objB)//colocando objB em objC