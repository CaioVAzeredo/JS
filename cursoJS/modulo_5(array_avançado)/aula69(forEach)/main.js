//apenas em array

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

/* for (let i = 0; i <= a1.length; i++) {
    console.log(a1[i], i)
} */

a1.forEach((valor, indice, array) => {
    console.log(valor, indice)
})

// exemplo se fosse um reduce
let total = 0
a1.forEach(valor => {
    total += valor
})

console.log(total)