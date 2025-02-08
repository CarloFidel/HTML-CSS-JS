const contrast = document.querySelector(".contraste");
const main = document.querySelector(".principal");
const cuerpo = document.querySelector(".cuerpo");
const acheuno = document.querySelector("h1");
const achedos = document.querySelector("h2");
const continput = document.querySelector(".inputs");
const divdetalles = document.querySelector(".detalles");
const erroneasacc = document.querySelector(".letrasErroneas");
const pistaacc = document.querySelector("#pista");
const divacc = document.querySelector(".acce");
const botacc = document.querySelector(".reset-btn");
const aumentar = document.querySelector("#aumenta");
const reduce = document.querySelector("#reduce");

const inputacc = continput.children;

console.log(inputacc);

const cambiacontraste = () => {
  inputusuario.focus();
  cuerpo.classList.toggle("contrastebody");
  main.classList.toggle("contrastemain");
  acheuno.classList.toggle("textos");
  divdetalles.classList.toggle("textos");
  erroneasacc.classList.toggle("textos");
  pistaacc.classList.toggle("textos");
  divacc.classList.toggle("accecontraste");
  achedos.classList.toggle("textos");
  botacc.classList.toggle("botonamarillo");

  Array.from(inputacc).forEach((input) => {
    input.classList.toggle("inputsaccesibilidad");
    input.classList.remove(".inputs");
    input.classList.toggle("inputsacc");
  });
};

const aumentatexto = () => {
  let tamañopistacc = parseFloat(window.getComputedStyle(pistaacc).fontSize);
  pistaacc.style.fontSize = tamañopistacc + 3 + "px";
  let tamañoerroneasacc = parseFloat(
    window.getComputedStyle(pistaacc).fontSize
  );
  erroneasacc.style.fontSize = tamañoerroneasacc + 2 + "px";
  let tamañoachedos = parseFloat(window.getComputedStyle(achedos).fontSize);
  achedos.style.fontSize = tamañoachedos + 2 + "px";
};
const disminuyetexto = () => {
  let tamaño = parseFloat(window.getComputedStyle(pistaacc).fontSize);
  pistaacc.style.fontSize = tamaño * 0.9 + "px";
  let tamañoerroneasacc = parseFloat(
    window.getComputedStyle(pistaacc).fontSize
  );
  erroneasacc.style.fontSize = tamañoerroneasacc + 2 + "px";
};

contrast.onclick = cambiacontraste;
aumentar.onclick = aumentatexto;
reduce.onclick = disminuyetexto;
