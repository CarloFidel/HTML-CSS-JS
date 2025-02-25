const aumentatexto = document.querySelector("#moretext");
const disminuyetexto = document.querySelector("#lesstext");
const contraste = document.querySelector("#contrast");
const accconteiner = document.querySelector("#conteiner");
const acch1 = document.querySelector("#divtitle");
const accsect = document.querySelector("#acc");

const contras = () => {
  fotoenbody.classList.toggle("acc_body");
  //fotoenbody.style.backgroundImage = "none";
  accconteiner.classList.toggle("acc_conteiner");
  cargatemp.classList.toggle("acc_button");
  inpciudad.classList.toggle("acc_input");
  paiselect.classList.toggle("acc_input");
  acch1.classList.toggle("acc_input");
  accsect.classList.toggle("acc_cont");
};

contraste.addEventListener("click", contras);
