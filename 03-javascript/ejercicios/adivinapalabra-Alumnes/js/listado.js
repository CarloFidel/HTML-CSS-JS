const volverajugar = document.querySelector(".reset-btn");
const mostrarpista = document.querySelector("#pista");
const inputusuario = document.querySelector(".lletra");
const mostrarintentos = document.querySelector("#int");
const mostrarletraserroneas = document.querySelector("#err");
const mensajefinal = document.querySelector(".detalles");
let arrayerroneas = [];
let vidasrestantes;

function crearinputs() {
  inputusuario.focus();
  const contenedor = document.querySelector(".inputs");
  for (let i = 0; i < arrayrandom.length; i++) {
    const inp = document.createElement("input");
    contenedor.appendChild(inp);
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
  const inpus = inputusuario.value.trim();
  if (arrayrandom.includes(inpus)) {
    console.log("¡Coincidencia encontrada!");
    inputusuario.value = "";
    const posiciones = [];
    for (let i = 0; i < arrayrandom.length; i++) {
      if (arrayrandom[i] === inpus) {
        posiciones.push(i);
      }
      let inparray = document.querySelectorAll(".inputs input");
      console.log(inparray.length);
    }
    console.log(posiciones);
  } else {
    if (!arrayerroneas.includes(inpus)) {
      arrayerroneas.push(inpus);
      mostrarletraserroneas.innerHTML = arrayerroneas.join(", ");
      let dism = arrayerroneas.length;
      let disminuyendo = int - dism;
      mostrarintentos.innerHTML = disminuyendo;
      if (disminuyendo == 0) {
        const perdido = `<p class="perdido">${men}<p>`;
        mensajefinal.innerHTML = perdido;
      }
    } else {
      inputusuario.value = "";
    }

    inputusuario.value = "";
  }
}
inputusuario.addEventListener("keyup", comprobarCoincidencia);
