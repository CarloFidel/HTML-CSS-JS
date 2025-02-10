/* localStorage y sessionStorage
Son objetos que almacenan informacion en el navegadpr y lo que guardan son pares
aAmbos objetos de almacenaje proveen los mismos metofos y propiedades:

API:

setItem(clave, valor) - guarda pares clave/valor.
getItem(clave) - coge el valor de una clave.
removeItem(clave) - borra una clave con su valor.
clear() - borra todo.
key(indice) - coge la clave con una posicion determinada.
length - el numero de item almacenados.
utiliza Object.keys para conseguir todas las claves.

localStorage - sessionStorage.
Tanto la clave como el valor deben ser strings.
E limite de almacenaje es mas de 5 mb aprox, dependiendo del navegador. Los datos estan vinculados al origen (dominio/puerto/protocolo). 

El localstorage mantiene datos entre todas las pestañas y ventanas que tengan el mismo origen. Sessionstorage es solo accesible en una pestaña del navegador, incluyendo iframes del mismo origen.

LocalStorage: No extpiran

sessionStorage
Muere al cerrar la pestaña */

const boton = document.querySelector("#grabar");
const indice = document.querySelector("#clave");
const val = document.querySelector("#texto");
let cajadatos = document.querySelector("#cajadatos");

const eliminar = (clave) => {
  if (confirm("estas seguro)")) {
    sessionStorage.removeItem(clave);
    mostrar();
  }
};

const eliminartodo = () => {
  if (confirm("seguro?")) {
    sessionStorage.clear();
    cajadatos.innerHTML = "";
    mostrar();
  }
};

const mostrar = () => {
  cajadatos.innerHTML = `<div><input type="button" onclick="eliminarTodo()" value="Eliminar Todo"></div>`;
  for (let f = 0; f < sessionStorage.length; f++) {
    let clave = sessionStorage.key(f);
    let valor = sessionStorage.getItem(clave);
    cajadatos.innerHTML += `<div> ${clave} - ${valor} <br><input type="button" onclick="eliminar('${clave}')"value="Eliminar"></div>`;
  }
};

const iniciar = () => {
  boton.addEventListener("click", () => {
    let clave = indice.value;
    let valor = val.value;

    sessionStorage.setItem(clave, valor);
    indice.value = "";
    val.value = "";
    mostrar();
  });
};
window.addEventListener("load", iniciar);
