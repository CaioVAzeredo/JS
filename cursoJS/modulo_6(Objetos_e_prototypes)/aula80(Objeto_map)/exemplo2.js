const pessoas = [
    { id: 3, nome: 'Caio' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena' },
]


const novasPessoas = new Map()
for (const pessoa of pessoas) {
    const { id } = pessoa
    novasPessoas.set(id, { ...pessoa }) 
}

for(const pessoas of novasPessoas){
    console.log(pessoas)
}
for(const [identificador, {id, nome}] of novasPessoas){
    console.log(identificador, id, nome)
}
for(const pessoas of novasPessoas.keys()){
    console.log(pessoas)
}
for(const pessoas of novasPessoas.values()){
    console.log(pessoas)
}