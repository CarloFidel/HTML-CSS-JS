const formu = document.firstContact;
const usu = formu.inp;
const tlf = formu.telefono;
const error = document.querySelector("#mens");

//
const corr = formu.mail;
const fech = formu.edad;
const vdni = formu.dni;
const pdni = /^[XYZ]?\d{5,8}[A-Z]{1}$/;

formu.addEventListener("submit", (e) => {
  const mydni = valdni();
  const edad = valfech();
  const mynom = valnom();
  const mymail = valmail();

  if (!mydni || !edad || !mynom || !mymail) {
    e.preventDefault();
    error.innerHTML = `<div class="alert alert-danger"> No se ha podido enviar el formulario.Por favor, revisa que todos los campos estén rellenados correctamente.</div>`;
    error.style.color = "#FF0000";
    return false;
  } else {
    formu.submit();
    return true;
  }
});

const valdni = () => {
  let rdni = vdni.value;
  rdni = rdni.toUpperCase();
  let numero, unaLetra;
  let resul = rdni.match(pdni);
  let letra = "TRWAGMYFPDXBNJZSQVHLCKE";

  if (resul) {
    numero = rdni.substr(0, rdni.length - 1);
    numero = numero.replace("X", 0);
    numero = numero.replace("Y", 1);
    numero = numero.replace("Z", 2);
    unaLetra = rdni.substr(rdni.length - 1, 1);
    numero = numero % 23;
    letra = letra.substring(numero, numero + 1);

    if (letra !== unaLetra) return false;
    return true;
  } else {
    return false;
  }
};

const valfech = () => {
  let nacimiento = fech.value;
  let fechaNace = new Date(nacimiento);
  console.log(fechaNace);
  let fechaActual = new Date();

  let mi_edad = Math.floor(
    (fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365
  );
  if (mi_edad >= 18 && mi_edad <= 100) return true;
  return false;
};

const valnom = () => {
  let nom = usu.value;
  if (nom.trim() === "") {
    return false;
  }
  const regex = /^[A-Za-z][A-Za-z0-9]{2,19}$/;
  return regex.test(nom);
};

const valmail = () => {
  let m = corr.value;
  if (m == "") {
    return false;
  }
  var expReg =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  var eleccorr = expReg.test(m);
  return eleccorr;
};
