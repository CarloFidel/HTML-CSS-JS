const inputs = document.querySelector(".inputs"),
  pistaTag = document.querySelector(".pista span"),
  pRestantes = document.querySelector(".restantes span"),
  letraEquivocada = document.querySelector(".erroneas span"),
  resetBtn = document.querySelector(".reset-btn"),
  lletraInput = document.querySelector(".lletra");
mostra = document.querySelector("#mostra");

// Variables de alcance limitado a un bloque
let maxErrores,
  itemAleatorio,
  palabra,
  letrasCorrectas = [],
  letrasIncorrectas = [];

const finalSuccess = () => {
  const rndMsg = Math.floor(Math.random() * window.msg.length);
  mostra.innerHTML = msg[rndMsg].toUpperCase();
};
const showfinalSuccess = () => {
  pRestantes.innerHTML = `<span style="color:green">CLICK PARA VOLVER A EMPEZAR</span>`;
  letraEquivocada.innerHTML = `<span style="color:green">HAS GANADO</span>`;

  finalSuccess();
};

const finalError = () => {
  const rndError = Math.floor(Math.random() * window.msgError.length);
  mostra.innerHTML = msgError[rndError].toUpperCase();
};

const showfinalError = () => {
  letraEquivocada.innerHTML = `<span style="color:orangered">NO TIENES MAS INTENTOS</span>`;
  pRestantes.innerHTML = `<span style="color:orangered">HAS PERDIDO</span>`;
  for (let i = 0; i < palabra.length; i++) {
    inputs.querySelectorAll("input")[i].value = palabra[i];
  }
  finalError();

  pRestantes.innerText = 0;
};

const checkStatus = () => {
  letrasCorrectas.length === palabra.length
    ? showfinalSuccess()
    : maxErrores < 1 //si no es igual a plabra llamamos a la función finalError() o dejamos el string vcio
    ? showfinalError()
    : "";
};
const extraePalabra = () => {
  return listado[Math.floor(Math.random() * listado.length)];
};

const palabraAleatoria = () => {
  itemAleatorio = extraePalabra();
  palabra = itemAleatorio.palabra;
  console.log(itemAleatorio.palabra);
  maxErrores = palabra.length >= 7 ? 8 : 6;
  pistaTag.innerText = itemAleatorio.pista;
  pRestantes.innerText = maxErrores;
  let html = "";
  for (let i = 0; i < palabra.length; i++) {
    html += `<input class="font-control" type="text" disabled>`;
  }
  inputs.innerHTML = html;
};
const init = (e) => {
  let key = e.target.value.toLowerCase();
  console.log(key);
  if (
    key.match(/^[A-Za-zÀ-ÿ]$/) &&
    !letrasIncorrectas.includes(key) &&
    !letrasCorrectas.includes(key)
  ) {
    if (palabra.includes(key)) {
      for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] == key) {
          letrasCorrectas += key;
          inputs.querySelectorAll("input")[i].value = key;
        }
      }
    } else {
      letrasIncorrectas.push(`${key}`);
      maxErrores--;
    }
    pRestantes.innerText = maxErrores;
    letraEquivocada.innerText = letrasIncorrectas.join(", ");
  }
  lletraInput.value = "";
  checkStatus();
};

onload = palabraAleatoria();
lletraInput.addEventListener("input", init);
document.addEventListener("keydown", () => lletraInput.focus());
resetBtn.addEventListener("click", () => {
  location.reload();
});
document.addEventListener("DomContentloaded", () => {
  checkStatus();
});
