const aumentatexto = document.querySelector("#moretext");
const disminuyetexto = document.querySelector("#lesstext");
const contraste = document.querySelector("#contrast");
const accconteiner = document.querySelector("#conteiner");
const acch1 = document.querySelector("#divtitle");
const accsect = document.querySelector("#acc");
const lebeluno = document.querySelector("#leb");
const lebeldos = document.querySelector("#lebdos");

let tam = 1;

const contras = () => {
  fotoenbody.classList.toggle("acc_body");
  accconteiner.classList.toggle("acc_conteiner");
  cargatemp.classList.toggle("acc_button");
  inpciudad.classList.toggle("acc_input");
  paiselect.classList.toggle("acc_input");
  acch1.classList.toggle("acc_input");
  accsect.classList.toggle("acc_cont");
  mostratemp.classList.toggle("acc_mostra");
  accsect.classList.toggle("acc_acc");
};
const textoaumenta = () => {
  tam = tam + 1;
  let untamaño = 18 + tam;
  lebeluno.style.fontSize = `${untamaño}px`;
  lebeldos.style.fontSize = `${untamaño}px`;
  acch1.style.fontSize = `${untamaño}px`;
  if (untamaño > 30) {
    aumentatexto.removeEventListener("click", textoaumenta);
  }
  if (untamaño > 20) {
    disminuyetexto.addEventListener("click", textodisminuye);
  }
};
const textodisminuye = () => {
  tam = tam - 1;
  let untamaño = 18 + tam;
  lebeluno.style.fontSize = `${untamaño}px`;
  lebeldos.style.fontSize = `${untamaño}px`;
  acch1.style.fontSize = `${untamaño}px`;
  if (untamaño < 20) {
    disminuyetexto.removeEventListener("click", textodisminuye);
  }
  if (untamaño < 30) {
    aumentatexto.addEventListener("click", textoaumenta);
  }
};

contraste.addEventListener("click", contras);
aumentatexto.addEventListener("click", textoaumenta);
disminuyetexto.addEventListener("click", textodisminuye);
