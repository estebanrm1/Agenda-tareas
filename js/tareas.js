const fecha = document.querySelector("#fecha");
const lista = document.querySelector("#listaDeTareas");
const input = document.querySelector("#tareaInput");
const botonAgregar = document.querySelector("#agregar");
const check = "bi-check2-circle";
const nocheck = "bi-circle";
const tareaTachada = "tarea-tachada";
let id = 0;
const arrayTarea = [];

const FECHA = new Date();
fecha.innerHTML = FECHA.toLocaleDateString("es-AR", {
  weekday: "long",
  month: "short",
  day: "numeric",
});

function agregarTarea(tarea, id, realizado, eliminado) {
  if (eliminado) {
    return;
  }

  const REALIZADO = realizado ? check : nocheck;
  const TAREATACHADA = realizado ? tareaTachada : "";

  const elemento = `
    <li id="elemento">
    <i class="${REALIZADO}" data="realizado" id="${id}"></i>
    <p class="text ${TAREATACHADA}">${tarea}</p>
    <i class="bi bi-trash" data="eliminado" ${id}></i>
    </li>`;
  lista.insertAdjacentHTML("beforeend", elemento);
}

function tareaRealizada(element) {
  element.classList.toggle(check);
  element.classList.toggle(nocheck);
  element.parentNode.querySelector(".text").classList.toggle(tareaTachada);
  arrayTarea[element.id].realizado = arrayTarea[element.id].realizado
    ? false
    : true;
}

function tareaEliminada(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
}

botonAgregar.addEventListener("click", () => {
  const tarea = input.value;
  if (tarea) {
    agregarTarea(tarea, id, false, false);
    arrayTarea.push({
      nombre: tarea,
      id: id,
      realizado: false,
      eliminado: false,
    });
  }
  input.value = "";
  id++;
});

document.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    const tarea = input.value;
    if (tarea) {
      agregarTarea(tarea, id, false, false);
      arrayTarea.push({
        nombre: tarea,
        id: id,
        realizado: false,
        eliminado: false,
      });
    }
    input.value = "";
    id++;
  }
});

lista.addEventListener("click", function (event) {
  const element = event.target;
  const elementData = element.attributes.data.value;

  if (elementData === "realizado") {
    tareaRealizada(element);
  }
  if (elementData === "eliminado") {
    tareaEliminada(element);
  }
});

console.log(arrayTarea);
