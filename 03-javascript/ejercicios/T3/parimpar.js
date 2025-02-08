let result, resultado;
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
    if (result !== 0) {
      resultado = `<div class="alert alert-success"> El valor introducido es un número impar, concretamente el ${n}<br/>`;
    } else {
      resultado = `<div class="alert alert-success"> El valor introducido es un número par, concretamente el ${n}<br/>`;
    }
  }
  mostra.innerHTML = resultado;
};

const borrando = () => {
  num.value = "";
  mostra.innerHTML = "";
};

btn1.onclick = parimpar;
borrar.onclick = borrando;
//////////////////////////////////ejercicio02///////////////////////////////
