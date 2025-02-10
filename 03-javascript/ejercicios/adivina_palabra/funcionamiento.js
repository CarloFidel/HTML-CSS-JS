const start = document.querySelector(".volverjugar");
const mostrarpista = document.querySelector("#pista");
const inputusuario = document.querySelector(".lletra");
const mostrarintentos = document.querySelector("#int");
const mostrarletraserroneas = document.querySelector("#err");
const info = document.querySelector(".detalles");
const contvidas = document.querySelector(".restantes");
const contenedor = document.querySelector(".inputs");
const msgfinalfinal = document.querySelector(".ganadoperdio");
let arrayacertadas = [];
let corazonarray = [];

let vidasrestantes;

function mantenerFoco() {
  inputusuario.focus();
}
document.addEventListener("click", (event) => {
  if (event.target !== inputusuario) {
    mantenerFoco();
  }
});

start.onclick = () => {
  mostrarletraserroneas.innerHTML = "";
  info.style.display = "block";
  msgfinalfinal.innerHTML = "";
  mostrarletraserroneas.innerHTML = "";
  contenedor.innerHTML = "";
  contvidas.innerHTML = "";
  inputusuario.focus();
  azar();
  const par = listado[numerorandom];
  palabra = par.palabra;
  pista = par.pista;
  arrayrandom = palabra.split("");

  const msg = [
    `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}". Has ganado, pero en realidad has perdido (tu tiempo)`,
    `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}". Deja de jugar a esto y echa un Euromillón ... a ver si sales "probre"`,
    `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}".  Deja de jugar a esto y prueba a lamer un ladrillo`,
    `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}". Este juego no tiene secretos para ti`,
    `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}".  Un gallifante para ti!!`,
    `Enhorabuena! Encontraste la palabra "${palabra.toUpperCase()}".  Has ganado un chorizo poco chupado`,
  ];

  const msgError = [
    `Has fallado. La palabra correcta era "${palabra.toUpperCase()}". Esto es demasiado para un... como tú`,
    `Has fallado OTRA VEZ!!!. La palabra correcta era "${palabra.toUpperCase()}". Deberías dedicar tu tiempo a otras cosas`,
    `Has fallado. La palabra correcta era "${palabra.toUpperCase()}".. Las adivinanzas no son lo tuyo!!!`,
    `Has fallado. La palabra correcta era "${palabra.toUpperCase()}".... Zumo de Gato`,
    `Has fallado por no leer bien la pista, La palabra correcta era "${palabra.toUpperCase()}".... más fácil no puede ser esto!!!`,
    `Has fallado. La palabra correcta era "${palabra.toUpperCase()}".... y resulta que las cosas no son lo que parecen`,
  ];

  const msgazar = Math.floor(Math.random() * 6);
  const menganador = msg[msgazar];
  const men = msgError[msgazar];

  console.log(pista);
  console.log(palabra);

  let int;
  arrayerroneas = [];

  function crearinputs() {
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
    mostrarpista.classList.add("pistagrande");
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
        info.style.display = "none";
        msgfinalfinal.innerHTML = ganado;
      }
    } else {
      if (!arrayerroneas.includes(inpus)) {
        arrayerroneas.push(inpus);
        mostrarletraserroneas.innerHTML = arrayerroneas.join(",").toUpperCase();
        mostrarletraserroneas.classList.add("letrasmal");

        let dism = arrayerroneas.length;
        let disminuyendo = int - dism;
        let corazoneliminado = corazonarray.pop();
        contvidas.removeChild(corazoneliminado);

        if (disminuyendo == 0) {
          const perdido = `<p class="perdido">${men}<p>`;
          info.style.display = "none";
          msgfinalfinal.innerHTML = perdido;
        }
      } else {
        inputusuario.value = "";
      }

      inputusuario.value = "";
    }
    inputusuario.value = "";
  }
  inputusuario.addEventListener("keyup", comprobarCoincidencia);
};
document.addEventListener("DOMContentLoaded", () => {
  if (start) {
    start.click();
  }
});
