const volverajugar = document.querySelector(".reset-btn");
const mostrarpista = document.querySelector("#pista");
const inputusuario = document.querySelector(".lletra");
const mostrarintentos = document.querySelector("#int");
const mostrarletraserroneas = document.querySelector("#err");
const arrayerroneas = [];

function crearinputs() {
  inputusuario.focus();
  const contenedor = document.querySelector(".inputs");
  for (let i = 0; i < arrayrandom.length; i++) {
    const inp = document.createElement("input");
    contenedor.appendChild(inp);
    console.log("funciona");
  }
  if (arrayrandom.length > 8) {
    int = 8;
    mostrarintentos.innerHTML = int;
  }
  if (arrayrandom.length <= 7) {
    int = 6;
    mostrarintentos.innerHTML = int;
  }
}
crearinputs();

function crearpista() {
  const texto = pista;
  mostrarpista.innerHTML = texto;
}
crearpista();

function reload() {
  location.reload();
  inputusuario.value = "";
}
volverajugar.onclick = reload;

function comprobarCoincidencia() {
  const inpus = inputusuario.value;
  if (arrayrandom.includes(inpus)) {
    alert("¡Coincidencia encontrada!");
    inputusuario.value = "";
  } else {
    alert("No hay coincidencias.");
    const erroneas = inpus;
    mostrarletraserroneas.innerHTML = erroneas;
    inputusuario.value = "";
  }
}
inputusuario.addEventListener("keyup", comprobarCoincidencia);
