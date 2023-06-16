const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')


function criarLi(){
    const li = document.createElement('li')
    return li
}

 function criarTarefa(textoInput){
    const li = criarLi()
    li.innerText = textoInput
    tarefas.appendChild(li)
 }

btnTarefa.addEventListener('click', (e)=>{
    if(inputTarefa.value == false){
        return
    }
    criarTarefa(inputTarefa.value)
})