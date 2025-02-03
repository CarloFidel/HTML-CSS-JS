const nom = document.querySelector("#usuario");
const telf = document.querySelector("#telefono");
const dia = document.querySelector("#dia");
const mes = document.querySelector("#mes");
const año = document.querySelector("#año");
const mail = document.querySelector("#mail");
const dni = document.querySelector("#dni");
const check = document.querySelector("#acepto");
const men = document.querySelector("#mens");
const ta = document.querySelector("#textarea");

const validarFormulario = () => {
  const validarNombre = () => {
    const valor = nom.value;
    const regex = /^[^\d][\w\s]{2,19}$/;
    if (!regex.test(valor)) return false;
    return true;
  };

  const validarTelefono = () => {
    const valor = telf.value;
    const regex = /^\d{9}$/;
    if (!regex.test(valor)) return false;
    return true;
  };

  const validarFechaNacimiento = () => {
    const valorDia = parseInt(dia.value, 10);
    const valorMes = parseInt(mes.value, 10);
    const valorAño = parseInt(año.value, 10);
    const fecha = new Date(valorAño, valorMes - 1, valorDia);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fecha.getFullYear();
    if (
      isNaN(fecha) ||
      fecha.getFullYear() !== valorAño ||
      fecha.getMonth() + 1 !== valorMes ||
      fecha.getDate() !== valorDia ||
      edad < 18
    ) {
      return false;
    }
    return true;
  };

  const validarEmail = () => {
    const valor = mail.value;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(valor)) return false;
    return true;
  };

  const validarDNI = () => {
    const valor = dni.value;
    const regexDNI = /^\d{8}[a-zA-Z]$/;
    const regexNIE = /^[XYZxyz]\d{7}[a-zA-Z]$/;
    if (!regexDNI.test(valor) && !regexNIE.test(valor)) return false;
    return true;
  };

  let esValido = true;
  let mensaje = "";

  if (!validarNombre()) {
    esValido = false;
    mensaje += "Nombre inválido. ";
  }

  if (!validarTelefono()) {
    esValido = false;
    mensaje += "Teléfono inválido. ";
  }

  if (!validarFechaNacimiento()) {
    esValido = false;
    mensaje += "Fecha de nacimiento inválida o menor de edad. ";
  }

  if (!validarEmail()) {
    esValido = false;
    mensaje += "Email inválido. ";
  }

  if (!validarDNI()) {
    esValido = false;
    mensaje += "DNI/NIE inválido. ";
  }

  if (!check.checked) {
    esValido = false;
    mensaje += "Debe aceptar las condiciones. ";
  }

  men.innerHTML = mensaje;
  return esValido;
};

const manejarKeyUp = (event) => {
  let valido = false;

  switch (event.target.id) {
    case "usuario":
      valido = validarNombre();
      break;
    case "telefono":
      valido = validarTelefono();
      break;
    case "dia":
    case "mes":
    case "año":
      valido = validarFechaNacimiento();
      break;
    case "mail":
      valido = validarEmail();
      break;
    case "dni":
      valido = validarDNI();
      break;
  }

  ta.innerHTML = event.target.value + (valido ? " (Válido)" : " (Inválido)");
};

document
  .querySelectorAll("#usuario, #telefono, #dia, #mes, #año, #mail, #dni")
  .forEach((input) => {
    input.addEventListener("keyup", manejarKeyUp);
  });

document.querySelector("#myForm").addEventListener("submit", (event) => {
  if (!validarFormulario()) {
    event.preventDefault();
  }
});
