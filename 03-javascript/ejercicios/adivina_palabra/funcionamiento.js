const volverajugar = document.querySelector(".reset-btn");
const mostrarpista = document.querySelector("#pista");
const inputusuario = document.querySelector(".lletra");
const mostrarintentos = document.querySelector("#int");
const mostrarletraserroneas = document.querySelector("#err");
const mensajefinal = document.querySelector(".detalles");
let arrayacertadas = [];
let arrayerroneas = [];
let vidasrestantes;

function crearinputs() {
  inputusuario.focus();
  let corazon = [];
  const contenedor = document.querySelector(".inputs");
  for (let i = 0; i < arrayrandom.length; i++) {
    const inp = document.createElement("input");
    inp.setAttribute("disabled", "");
    contenedor.appendChild(inp);
  }
  if (arrayrandom.length >= 8) {
    int = 8;
    mostrarintentos.innerHTML = int;
  }
  if (arrayrandom.length <= 7) {
    int = 6;
    mostrarintentos.innerHTML = int;
  }
  corazon.length = Array.from(int);
  console.log(corazon.length);
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
    const posiciones = [];
    for (let i = 0; i < arrayrandom.length; i++) {
      if (arrayrandom[i] === inpus) {
        posiciones.push(i);
      }
    }
    console.log(posiciones);

    let inparray = Array.from(document.querySelectorAll(".inputs input"));
    posiciones.forEach((pos) => {
      if (inparray[pos]) {
        let cap = inparray[pos];
        console.log("input:", cap);
        cap.value = String(inputusuario.value);
      }
    });
    inputusuario.value = "";

    let arrayacertadas = [];
    let inputsOcupados = 0;

    inparray.forEach((input) => {
      let valor = input.value;
      if (valor !== "") {
        inputsOcupados++;
      }
    });

    for (let i = 0; i < inputsOcupados; i++) {
      arrayacertadas.push(1);
    }
    console.log(arrayacertadas.length);
    if (arrayacertadas.length == arrayrandom.length) {
      console.log("ganar");
      const ganado = [`<p class="ganado">${menganador}<p>`];
      mensajefinal.innerHTML = ganado;
    }
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
  document.addEventListener("click", mantenerFoco);
}
inputusuario.addEventListener("keyup", comprobarCoincidencia);
