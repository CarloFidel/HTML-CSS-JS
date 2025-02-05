const formulario = document.querySelector("#contact");
const inputs = document.querySelectorAll("#contact input");
const textarea = document.querySelector("#textarea");
const inputnombre = document.querySelector("#usuario");
const inputtelefono = document.querySelector("#telefono");
const inputfecha = document.querySelector("#edad");
const inputemail = document.querySelector("#mail");
const inputdni = document.querySelector("#dni");
const condiciones = document.querySelector("#acepto");
const msm = document.querySelector("#mens");

inputnombre.addEventListener("keyup", () => {
  const text = inputnombre.value;
  textarea.innerHTML = text;
});
inputtelefono.addEventListener("keyup", () => {
  const text = inputtelefono.value;
  textarea.innerHTML = text;
});
inputemail.addEventListener("keyup", () => {
  const text = inputemail.value;
  textarea.innerHTML = text;
});
inputdni.addEventListener("keyup", () => {
  const text = inputdni.value;
  textarea.innerHTML = text;
});
inputfecha.addEventListener("change", () => {
  const text = inputfecha.value;
  textarea.innerHTML = text;
});

const exp = {
  nombre: /^[A-ZÀ][a-zA-ZÀ-ÿ\s]{3,20}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^(\d\d\d)-? ?(\d\d)-? ?(\d)-? ?(\d)-? ?(\d\d)$/,
  dni: /^[XYZ]?\d{5,8}[A-Z]{1}$/,
};

const campos = {
  nombre: false,
  telefono: false,
  fecha: false,
  email: false,
  dni: false,
};

const validarFormulario = (e) => {
  switch (e.target.id) {
    case "usuario":
      if (exp.nombre.test(e.target.value)) {
        textarea.innerHTML = `<div >Es correcto: ${inputnombre.value}</div>`;
        campos["nombre"] = true;
      } else {
        textarea.innerHTML = `<div class= formulario_incorrecto>ES INCORRECTO: ${inputnombre.value}</div>`;
        campos["nombre"] = false;
      }
      break;
    case "telefono":
      if (exp.telefono.test(e.target.value)) {
        textarea.innerHTML = `<div >Es correcto: ${inputtelefono.value}</div>`;
        campos["telefono"] = true;
      } else {
        textarea.innerHTML = `<div class= "formulario_incorrecto">ES INCORRECTO: ${inputtelefono.value}</div>`;
        campos["telefono"] = false;
      }
      break;
    case "edad":
      if (edad()) {
        textarea.innerHTML = `<div>Es correcto: ${inputfecha.value}</div>`;
        campos["fecha"] = true;
      } else {
        textarea.innerHTML = `<div class="formulario_incorrecto">ES INCORRECTO: ${inputfecha.value}</div>`;
        campos["fecha"] = false;
      }
      break;
    case "mail":
      if (exp.correo.test(e.target.value)) {
        textarea.innerHTML = `<dv >Es correcto: ${inputemail.value}</dv>`;
        campos["email"] = true;
      } else {
        textarea.innerHTML = `<div class= "formulario_incorrecto">ES INCORRECTO: ${inputemail.value}</div>`;
        campos["email"] = false;
      }
      break;
    case "dni":
      if (exp.dni.test(e.target.value)) {
        textarea.innerHTML = `<div >Es correcto: ${inputdni.value}</div>`;
        campos["dni"] = true;
      } else {
        textarea.innerHTML = `<div class= "formulario_incorrecto">ES INCORRECTO: ${inputdni.value}</div>`;
        campos["dni"] = false;
      }
      break;
  }
};

const edad = () => {
  let fechaNacimiento = inputfecha.value;
  let fechaNace = new Date(fechaNacimiento);
  let fechaActual = new Date();

  let mi_edad = Math.floor(
    (fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365
  );
  if (mi_edad >= 18 && mi_edad <= 100) return true;
  return false;
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("change", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  if (campos.nombre && campos.telefono && campos.dni && campos.fecha) {
    window.open();
    formulario.submit();
  }
});
const limpiatodo = () => {
  textarea.innerHTML = "";
  msm.innerHTML = "";
};
function setCookie(cname, cvalue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
function guardarValor() {
  const usuariocookie = document.querySelector("#usuario").value;
  setCookie("usuario", usuariocookie, 7);
  const telefonocookie = document.querySelector("#telefono").value;
  setCookie("telefono", telefonocookie, 7);
  const fechacookie = document.querySelector("#edad").value;
  setCookie("edad", fechacookie, 7);
  const mailcookie = document.querySelector("#mail").value;
  setCookie("mail", mailcookie, 7);
  const dnicookie = document.querySelector("#dni").value;
  setCookie("dni", dnicookie, 7);
}
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}
function asignarValor() {
  const usuariofromcookie = getCookie("usuario");
  document.querySelector("#usuario").value = usuariofromcookie;
  const telefonofromcookie = getCookie("telefono");
  document.querySelector("#telefono").value = telefonofromcookie;
  const fechafromcookie = getCookie("edad");
  document.querySelector("#edad").value = fechafromcookie;
  const mailfromcookie = getCookie("mail");
  document.querySelector("#mail").value = mailfromcookie;
  const dnifromcookie = getCookie("dni");
  document.querySelector("#dni").value = dnifromcookie;
}
