const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#listaDeTareas');
const input = document.querySelector('#tareaInput');
const botonAgregar = document.querySelector('#agregar');

function agregarTarea (tarea){
    const elemento = `
    <li id="elemento">
    <i class="bi bi-circle" data="realizado" id="0"></i>
    <p class="text">${tarea}</p>
    <i class="bi bi-trash" data="eliminado" id="0"></i>
    </li>`
    lista.insertAdjacentHTML("beforeend", elemento)
}

botonAgregar.addEventListener("click", ()=> {
    const tarea = input.value
    if(tarea){
        agregarTarea(tarea)
    }
    input.value = ''
})

document.addEventListener("keyup", function(event){
    if(event.key == 'Enter'){
        const tarea = input.value
        if(tarea){
            agregarTarea(tarea)
        }
    input.value=''
    }
})