let listaDeTareas = document.getElementById('listaDeTareas'),
tareaInput = document.getElementById('tareaInput'),
buttonAgregar = document.getElementById('buttonAgregar'),
buttonEliminar = document.getElementById('buttonEliminar');

const agregarTarea = function(){};
const eliminarTarea = function(){ alert('Eliminar tarea')};


buttonAgregar.addEventListener("click", agregarTarea);
buttonEliminar.addEventListener("click", eliminarTarea);

