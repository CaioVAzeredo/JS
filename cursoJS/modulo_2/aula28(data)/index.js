const data1 = new Date('2023-02-16 10:40:34') // 
console.log('Dia', data1.getDate()) // dia 0 - dom 6 - sab
console.log('Mes', data1.getMonth() +1) // mes 0-janeiro 13-dezembro
console.log('Ano', data1.getFullYear())
console.log('Hora', data1.getHours())
console.log('Min', data1.getMinutes())
console.log('Seg', data1.getSeconds())
console.log('ms', data1.getMilliseconds()) // ms da data que foi dada na variavel
console.log('Dia da semana', data1.toString())
console.log('ms da data atual do sistema', Date.now()) // ms da data atual do sistema 

const data2 = new Date(1676554834460) // pode ser colocado como string ou por ms
console.log(data2.toString())