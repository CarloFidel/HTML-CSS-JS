function salir() {
  location.replace("https://www.w3schools.com");
}
const mostra = document.querySelector("#mostrar");
mostra.innerHTML = result;

let salirono = confirm("volver a cargar la app");
if (salirono) {
  location.reload();
} else {
  salir();
}
