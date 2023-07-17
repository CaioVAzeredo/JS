const container = document.querySelector('.container')//selecionando o container
const div = document.createElement('div')//selecionando  div

container.appendChild(div)//criando a div dentro do container

const elementos = [ //array 
    { tag: 'p', texto: 'frase 1' }, // objeto 1 
    { tag: 'div', texto: 'frase 2' },// objeto 2
    { tag: 'section', texto: 'frase 3' },// objeto 3
    { tag: 'footer', texto: 'frase 4' }// objeto 4
]


for (let i = 0; i < elementos.length; i++) { 
    let { tag, texto } = elementos[i] 
    let tagCriada = document.createElement(tag)
    div.appendChild(tagCriada)
    tagCriada.innerText = texto

} 