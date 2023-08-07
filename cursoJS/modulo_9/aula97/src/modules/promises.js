function promises() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hey, sou a promise')
            resolve('oi')
        }, 2000)
    })
}
export default async function () {
    await promises()
    console.log('Terminou')
}