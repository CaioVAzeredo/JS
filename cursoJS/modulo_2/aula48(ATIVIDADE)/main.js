const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')


function criarTarefa(text){
    const li = criarLi()
    li.innerText = text
    tarefas.appendChild(li)
    criarBtnApagar(li)
    salvarTarefas() //função usando JSON
}
inputTarefa.addEventListener('keypress', (e)=>{ //Anotar
    if(e.keyCode === 13){
        if(inputTarefa.value === false){
            return
         }
         criarTarefa(inputTarefa.value)
         limparInput()
         
    }
})
btnTarefa.addEventListener('click', (e)=> {
    if(inputTarefa.value === false){
       return
    }
    criarTarefa(inputTarefa.value)
    limparInput()
})
document.addEventListener('click', (e)=>{
    const el = e.target

    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefas()
    }
})
function criarBtnApagar(li){
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar') //ANOTAR
    botaoApagar.setAttribute('title', 'Apagar') //ANOTAR
    li.appendChild(botaoApagar)
}

function limparInput(){
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criarLi(){
    const li = document.createElement('li') //ANOTAR
    return li
}

/* JSON estudar mais pra frente*/

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar',  '').trim() //replace() substitui o primeiro paramentro pelo segundo parametro e o trim( tira os espaços das variaveis)
        listaDeTarefas.push(tarefaTexto)//push() adiciona dentro da array
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas) //stringify() converter um objeto JS em string no formato JSON 
    localStorage.setItem('tarefas', tarefasJSON)
}
function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')  
    const listaDeTarefas = JSON.parse(tarefas)//stringify() converter um string no formato JSON  em objeto JS 

    for(let tarefa of listaDeTarefas){
        criarTarefa(tarefa)
    }
}
adicionaTarefasSalvas()