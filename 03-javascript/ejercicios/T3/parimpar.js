/* let result, resultado;
const num = document.querySelector("#numero");
const mostra = document.querySelector("#mostra1");
const btn1 = document.querySelector("#btn_ejer1");
const borrar = document.querySelector("#btn_limpiar");

const parimpar = () => {
  let n = num.value;
  console.log(typeof n);
  n = Number(n.replace(","), ".");

  if (isNaN(n) || n == "") {
    resultado = `<div class="alert alert-danger">No puedo operar<br/>`;
  } else {
    result = n % 2;
    //Operador ternario
    //Condición a evaluar? acción a ejecutar: (sino) acción descarte
    result !== 0;
    resultado = `<div class="alert alert-success"> El vlor introducido es un número impar, concretamente el ${n}<br/>`;
    resultado = `<div class="alert alert-success"> El vlor introducido es un número par, concretamente el ${n}<br/>`;
  }
  mostra.innerHTML = resultado;
};

const borrando = () => {
  num.value = "";
  mostra.innerHTML = "";
};

btn1.onclick = parimpar;
borrar.onclick = borrando; */
///////////////////////////////////ejercicio02//////////////////////////////////////////
let num = document.getElementById("in").value;
console.log(num);

function valid() {
  if (num !== res) {
    alert("No es el resultado correcto");
  }
}

///////////////////////////////////ejercicio03//////////////////////////////////////////

function calc() {
  let prod = Number(document.getElementById("prod").value);
  let iva = Number(document.getElementById("iva").value);
  let total = prod + (iva / 100) * prod;
  document.getElementById("pagar").innerHTML = `<p> ${total} </p>`;
}

function volver() {
  document.getElementById("prod").value = "";
  document.getElementById("iva").value = "";
  document.getElementById("pagar").innerHTML = "0";
}
///////////////////////////////////ejercicio04//////////////////////////////////////////
document.getElementById("dos").style.display = "none";
let uno = document.getElementById("uno").value;
console.log(uno);
