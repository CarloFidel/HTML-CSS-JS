let result, resultado;
const num1 = document.querySelector("#numero");
const mostra = document.querySelector("#mostra1");
const btn1 = document.querySelector("#btn_ejer1");
const borrar = document.querySelector("#btn_limpiar");

const parimpar = () => {
  let n = num1.value;
  console.log(typeof n);
  n = Number(n.replace(","), ".");

  if (isNaN(n) || n == "") {
    resultado = `<div class="alert alert-danger">No puedo operar<br/>`;
  } else {
    result = n % 2;
    //Operador ternario
    //Condición a evaluar? acción a ejecutar: (sino) acción descarte
    if (result !== 0) {
      resultado = `<div class="alert alert-success"> El valor introducido es un número impar, concretamente el ${n}<br/>`;
    } else {
      resultado = `<div class="alert alert-success"> El valor introducido es un número par, concretamente el ${n}<br/>`;
    }
  }
  mostra.innerHTML = resultado;
};

const borrando = () => {
  num1.value = "";
  mostra.innerHTML = "";
};

btn1.onclick = parimpar;
borrar.onclick = borrando;
///////////////////////////////////ejercicio02//////////////////////////////////////////
const inp02 = document.querySelector("#input02");
const ejec02 = document.querySelector("#ejec02");
const limp02 = document.querySelector("#limp02");
const mostra02 = document.querySelector("#mostra02");
let result02;

const ejecuta02 = () => {
  n02 = inp02.value;
  n02 = Number(n02.replace(",", "."));
  console.log(n02);
  if (isNaN(n02) || n02 == "") {
    result02 = `<div class="alert alert-danger">No puedo operar si no escribes números<br/>`;
  } else if (n02 !== 12) {
    result02 = `<div class="alert alert-danger">No es correcto<br/>`;
  } else {
    result02 = `<div class="alert alert-success">Correcto!!<br/>`;
  }

  mostra02.innerHTML = result02;
};

const limpiar02 = () => {
  inp02.value = "";
  mostra02.innerHTML = "";
};

ejec02.onclick = ejecuta02;
limp02.onclick = limpiar02;
///////////////////////////////////ejercicio03//////////////////////////////////////////
const prod = document.querySelector("#prod");
const iva = document.querySelector("#iva");
const btn03 = document.querySelector("#boton03");
const limp03 = document.querySelector("#borra03");
const divi03 = document.querySelector("#mensaje");

const click03 = () => {
  let resultado03;
  let calciva;
  let n03 = prod.value;
  n03 = Number(n03.replace(",", "."));
  let iva03 = iva.value;
  iva03 = Number(iva03.replace(",", "."));
  if (isNaN(n03) || isNaN(iva03) || n03 == "" || iva03 == "") {
    resultado03 = `<div class="alert alert-danger">No puedo operar<br/>`;
    divi03.innerHTML = resultado03;
  } else {
    calciva = n03 + (iva03 / 100) * n03;
    resultado03 = `<div class="alert alert-success">El costo total del producto es ${calciva}<br/>`;
  }
  divi03.innerHTML = resultado03;
};

const borra03 = () => {
  prod.value = "";
  iva.value = "";
  divi03.innerHTML = "";
};

btn03.onclick = click03;
limp03.onclick = borra03;
///////////////////////////////////ejercicio04//////////////////////////////////////////
const num104 = document.querySelector("#in104");
const mun204 = document.querySelector("#in204");
const btn0104 = document.querySelector("#ejecutar04");
const limp04 = document.querySelector("#limpiar04");
const divi04 = document.querySelector("#mensaje04");

const denuevo04 = () => {
  num104.value = "";
  mun204.value = "";
  divi04.innerHTML = "";
};

const click04 = () => {
  let n104 = num104.value;
  n104 = Number(n104.replace(",", "."));
  let n204 = num104.value;
  n204 = Number(n204.replace(",", "."));
  let resultado04;
  let opera04;
  if (isNaN(n104) || isNaN(iva204) || n104 == "" || n204 == "") {
    resultado04 = `<div class="alert alert-danger">No puedo operar si no es un número`;
    divi04.innerHTML = resultado04;
  }
};

btn0104.onclick = click04;
limp04.onclick = denuevo04;
