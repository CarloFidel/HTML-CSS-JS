const volverajugar = document.querySelector(".reset-btn");
const mostrarpista = document.querySelector("#pista");
const inputusuario = document.querySelector(".lletra");
const mostrarintentos = document.querySelector("#int");
const mostrarletraserroneas = document.querySelector("#err");
const mensajefinal = document.querySelector(".detalles");
const contvidas = document.querySelector(".restantes");
let arrayacertadas = [];
let arrayerroneas = [];
let corazonarray = [];
let vidasrestantes;

function crearinputs() {
  inputusuario.focus();
  const contenedor = document.querySelector(".inputs");
  for (let i = 0; i < arrayrandom.length; i++) {
    const inp = document.createElement("input");
    inp.setAttribute("disabled", "");
    contenedor.appendChild(inp);
  }
  if (arrayrandom.length >= 8) {
    int = 8;
  }
  if (arrayrandom.length <= 7) {
    int = 6;
  }
  for (let i = 0; i < int; i++) {
    const corazon = document.createElement("img");
    corazon.classList.add("vidas");
    corazon.src = "./icons8-favorite-50.png";
    contvidas.appendChild(corazon);
    corazonarray.push(corazon);
  }
}
crearinputs();

function crearpista() {
  const texto = pista;
  mostrarpista.innerHTML = texto;
}
crearpista();

function comprobarCoincidencia() {
  const inpus = inputusuario.value.trim();
  if (arrayrandom.includes(inpus)) {
    const posiciones = [];
    for (let i = 0; i < arrayrandom.length; i++) {
      if (arrayrandom[i] === inpus) {
        posiciones.push(i);
      }
    }
    let inparray = Array.from(document.querySelectorAll(".inputs input"));
    posiciones.forEach((pos) => {
      if (inparray[pos]) {
        let cap = inparray[pos];
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
    if (arrayacertadas.length == arrayrandom.length) {
      const ganado = [`<p class="ganado">${menganador}<p>`];
      mensajefinal.innerHTML = ganado;
    }
  } else {
    if (!arrayerroneas.includes(inpus)) {
      arrayerroneas.push(inpus);
      mostrarletraserroneas.innerHTML = arrayerroneas.join(", ").toUpperCase();
      let dism = arrayerroneas.length;
      let disminuyendo = int - dism;
      let corazoneliminado = corazonarray.pop();
      contvidas.removeChild(corazoneliminado);

      if (disminuyendo == 0) {
        const perdido = `<p class="perdido">${men}<p>`;
        mensajefinal.innerHTML = perdido;
      }
    } else {
      inputusuario.value = "";
    }

    inputusuario.value = "";
  }
  inputusuario.value = "";
  document.addEventListener("click", mantenerFoco);
}
inputusuario.addEventListener("keyup", comprobarCoincidencia);

function reload() {
  location.reload();
  inputusuario.value = "";
}
volverajugar.onclick = reload;

function mantenerFoco() {
  inputusuario.focus();
}
document.addEventListener("click", (event) => {
  if (event.target !== inputusuario) {
    mantenerFoco();
  }
});
