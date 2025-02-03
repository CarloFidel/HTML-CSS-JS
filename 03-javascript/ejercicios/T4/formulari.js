let nom = document.querySelector("#usuario");
let telf = document.querySelector("#telefono");
let dia = document.querySelector("#dia");
let mes = document.querySelector("#mes");
let año = document.querySelector("#año");
let mail = document.querySelector("#mail");
let dni = document.querySelector("#dni");
let check = document.querySelector("#acepto");
const men = document.querySelector("#mens");
const reg = document.querySelector("#regis");
const limp = document.querySelector("#clean");
const guardar = document.querySelector("#guarda");
const rec = document.querySelector("#recupera");
const ta = document.querySelector("#textarea");

const val = () => {
  let res;
  if (!check.checked) {
    res = `Debe aceptar las condiciones para validar el formulario`;
    men.innerHTML = res;
  } else {
  }
};

const teclnom = () => {
  let te = nom.value;
  ta.innerHTML = te;
};
nom.addEventListener("keyup", teclnom);

const tecltel = () => {
  let te = telf.value;
  ta.innerHTML = te;
};
telf.addEventListener("keyup", tecltel);

const tecldia = () => {
  let te = dia.value;
  ta.innerHTML = te;
};
dia.addEventListener("keyup", tecldia);

const teclmes = () => {
  let te = mes.value;
  ta.innerHTML = te;
};
mes.addEventListener("keyup", teclmes);

const teclaño = () => {
  let te = año.value;
  ta.innerHTML = te;
};
año.addEventListener("keyup", teclaño);

const teclmail = () => {
  let te = mail.value;
  ta.innerHTML = te;
};
mail.addEventListener("keyup", teclmail);

const tecldni = () => {
  let te = dni.value;
  ta.innerHTML = te;
};
dni.addEventListener("keyup", tecldni);

const decero = () => {
  nom.value = "";
  telf.value = "";
  dia.value = "";
  mes.value = "";
  año.value = "";
  mail.value = "";
  dni.value = "";
  check.value = "";
  men.innerHTML = "";
  ta.innerHTML = "";
};
reg.onclick = val;
limp.onclick = decero;

const formu = document.firstContact;

formu.addEventListener("submit", (e) => {
  const vnom = valnom();
  const vtelf = valtelf();
  const vdia = valdia();
  const vmes = valmes();
  const vaño = valaño();
  const vmail = valmail();
  const vdni = valdni();

  if (!vnom || !vtelf || !vdia || !vmes || !vaño || !vmail || !vdni) {
    e.preventDefault();
    res.innerHTML =
      "ERRORUM   No se ha podido enviar el formulario. Por favor, revisa que todos los campos estén rellenados correctamente.";
    error.style.color = "#FF0000";
    return false;
  } else {
    formu.submit();
    return true;
  }
});

const valnom = () => {
  if (nom == "^[A-ZÀ]{1}[a-zA-ZÀ-ÿ\u00f1\u00d1s]{2,40}$") {
    return false;
  } else {
    return true;
  }
};
