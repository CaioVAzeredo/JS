const pessoas = [
    { id: 3, nome: 'Caio' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena' },
]
/* const novasPessoas = {}
for (const pessoa of pessoas) {
    const { id } = pessoa
    novasPessoas[id] = { ...pessoa }
} */
/* const novasPessoas = pessoas.map(pessoa => ({...pessoa})) */

const novasPessoas = new Map()
    // pessoa = id: 3, nome: 'Caio' | pessoas = id: 3, nome: 'Caio' 
for (const pessoa of pessoas) {
    // id = 3  | pessoa = id: 3, nome: 'Caio'
    const { id } = pessoa
    //novasPessoas = (id = 3 | pessoa id: 3, nome: 'Caio')
    novasPessoas.set(id, { ...pessoa }) //set é para atribuir o valor
}

//console.log(3 => { id: 3, nome: 'Caio' })
console.log(novasPessoas) 
console.log(novasPessoas.get(2)) //get é para pegar o valor 