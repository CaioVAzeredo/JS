const min = 1
const max = 50
let rand = 10

function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

do{
    rand = random(min, max)
    console.log(rand)
}while (rand !== 10)

