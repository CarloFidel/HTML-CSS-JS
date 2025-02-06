const contrast = document.querySelector(".contraste");
const main = document.querySelector(".principal");
const cuerpo = document.querySelector(".cuerpo");
const acheuno = document.querySelector("h1");
const todotexto = document.querySelector("h2, p");
const continput = document.querySelector(".inputs");
const inputacc = continput.children;

console.log(inputacc);

const cambiacontraste = () => {
  cuerpo.classList.toggle("contrastebody");
  main.classList.toggle("contrastemain");
  acheuno.classList.toggle("textos");
  todotexto.classList.toggle("textos");

  Array.from(inputacc).forEach((input) => {
    input.classList.toggle("inputsaccesibilidad");
    input.classList.remove(".inputs");
    input.classList.toggle("inputsacc");
  });
};

const mantenerFoco = (event) => {
  if (!inputusuario.contains(event.target)) {
    inputusuario.focus();
  }
};

document.addEventListener("click", mantenerFoco);

contrast.onclick = cambiacontraste;
