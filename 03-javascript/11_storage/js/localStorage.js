const boton = document.querySelector("#grabar");
const indice = document.querySelector("#clave");
const val = document.querySelector("#texto");
let cajadatos = document.querySelector("#cajadatos");

localStorage.setItem("now", Date.now());
localStorage.getItem("now");
console.log("now");

const eliminar = (clave) => {
  if (confirm("estas seguro)")) {
    localStorage.removeItem(clave);
    mostrar();
  }
};

const eliminartodo = () => {
  if (confirm("seguro?")) {
    localStorage.clear();
    cajadatos.innerHTML = "";
    mostrar();
  }
};

const mostrar = () => {
  cajadatos.innerHTML = `<div><input type="button" onclick="eliminarTodo()" value="Eliminar Todo"></div>`;
  for (let f = 0; f < localStorage.length; f++) {
    let clave = localStorage.key(f);
    let valor = localStorage.getItem(clave);
    cajadatos.innerHTML += `<div> ${clave} - ${valor} <br><input type="button" onclick="eliminar('${clave}')"value="Eliminar"></div>`;
  }
};

const iniciar = () => {
  boton.addEventListener("click", () => {
    let clave = indice.value;
    let valor = val.value;

    localStorage.setItem(clave, valor);
    indice.value = "";
    val.value = "";
    mostrar();
  });
};
window.addEventListener("load", iniciar);
