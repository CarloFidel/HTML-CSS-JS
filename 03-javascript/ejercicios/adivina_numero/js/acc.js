const contrast = document.querySelector(".contraste");
const aumentar = document.querySelector("#aumenta");
const reduce = document.querySelector("#reduce");
const body = document.querySelector("body");
const main = document.querySelector("main");
const divnomb = document.querySelector("#divNombre");

const cambiacontraste = () => {
  body.classList.toggle("contrastebody");
  main.classList.toggle("mainwhite");
  divnomb.classList.toggle("divnumacc");
};

const aumentatexto = () => {};
const disminuyetexto = () => {};

contrast.onclick = cambiacontraste;
aumentar.onclick = aumentatexto;
reduce.onclick = disminuyetexto;
