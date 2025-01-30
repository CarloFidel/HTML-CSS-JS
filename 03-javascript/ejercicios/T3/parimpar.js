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
const prod = document.querySelector("#prod").value;
const iva = document.querySelector("#iva").value;
const btn03 = document.querySelector("#btn03");
const limp03 = document.querySelector("#limp03");
const mostra03 = document.querySelector("#mostra03");
console.log(prod);
console.log(iva);

const resultiva = () => {
  p03 = Number(prod);
  iv03 = Number(iva);
  resulto3;
  console.log(iv03);
  mostra03.innerHTML = result03;
};

function limpiar03() {
  prod.value = "";
  iva.value = "";
  mostra03.innerHTML = "";
}
///////////////////////////////////ejercicio04//////////////////////////////////////////
document.getElementById("dos").style.display = "none";
let uno = document.getElementById("uno").value;
console.log(uno);
