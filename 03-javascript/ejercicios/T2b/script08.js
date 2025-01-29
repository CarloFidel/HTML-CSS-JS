function retit() {
  document.title = "Nuevo título!!!";
  document.getElementById("tit").innerHTML = document.title;
}
setTimeout(retit, 3000);

function gris() {
  document.body.style.backgroundColor = "rgb(86, 86, 100)";
  document.body.style.transition = "background-color 1s ease";
}
function blanco() {
  document.body.style.backgroundColor = "rgb(128, 128, 155)";
}
function textcolor() {
  document.getElementById("textblue").style.color = "blue";
  document.getElementById("textblue2").style.color = "blue";
}

//////////////////////////ejercicio09/////////////////////////////////////

let amp = window.outerWidth;
console.log(`amplada de pantalla es ${amp}`);
let alt = window.outerHeight;
console.log(`alt de pantalla es ${alt}`);
let amputi = window.innerWidth;
console.log(`amplada util de pantalla es ${amputi}`);
let altuti = window.outerHeight;
console.log(`alt util de pantalla es ${altuti}`);
let dia = Math.sqrt(amputi * amputi + altuti * altuti);
console.log(`diagonal de pantalla es ${dia}`);

let win;
function finestra() {
  win = window.open("novafinestra.html", "hey", "height=300, width=700");
}
//////////////////////////////ejercicio12///////////////////////////////
function click() {
  let inp = document.getElementById("input").value;
  let t = inp.length;
  let i = t - 5;
  let str = inp.substring(i, t);
  console.log(str);

  document.getElementById(
    "result"
  ).innerHTML = `Los últimos 5 caracteres son ${str}`;
  recarg();
}
function recarg() {
  document.getElementById("input").value = "";
}

function valida() {
  let inp = document.getElementById("input").value;
  if (inp.length >= 10) {
    click();
  } else {
    alert("Ingresa más de 10 caracteres");
    recarg();
  }
}
////////////////////////////////ejercicio13/////////////////////////////
function click13() {
  let inp13 = document.getElementById("input13").value;
  let cant = inp13.length;
  document.getElementById(
    "result13"
  ).innerHTML = `La cantidad de caracteres es ${cant}`;
  function re() {
    document.getElementById("input13").value = "";
  }
  setTimeout(re, 1500);
}

document.getElementById("input13").addEventListener("input", function () {
  this.style.fontStyle = "italic";
  this.style.fontWeight = "bold";
  this.style.color = "red";
  this.style.textDecoration = "line-through";
});
/////////////////////////////////ejercicio14////////////////////////////
const t = `<input id="input1" type="text" placeholder="Celda1" style="font-style: italic"; /><input id="input2" type="text" placeholder="Celda2" style="font-style:italic"; />
      <div><input id="input3" type="text" placeholder="Celda3" style="font-style:italic" /><input id="input4" type="text" placeholder="Celda4" style="font-style:italic" /></div>
      <div id="ejerc14"></div>`;

document.getElementById("tab").innerHTML = t;
function borrar() {
  window.onload = document.getElementById("input1").value = "";
  window.onload = document.getElementById("input2").value = "";
  window.onload = document.getElementById("input3").value = "";
  document.getElementById("input4").value = "";
}
////////////////////////////////////ejercicio15/////////////////////////
let base = Number(document.getElementById("base")).value;
let altura = Number(document.getElementById("altura")).value;

function ar() {
  let base = document.getElementById("base").value;
  let altura = document.getElementById("altura").value;
  if (isNaN(base) || isNaN(altura)) {
    alert("Ingresa números");
    volver();
  } else {
    let re = base * altura;
    document.write(`<p> El área es ${re} </p>`);
  }
}
function volver() {
  document.getElementById("base").value = "";
  document.getElementById("altura").value = "";
}
///////////////////////////////////ejercicio16//////////////////////////
let en = document.getElementById("encendida");
let apg = document.getElementById("apagada");

function encender() {
  document.body.style.backgroundColor = "rgb(182, 182, 235)";
  document.body.style.transition = "background-color 2s ease";
  en.style.display = "block";
  apg.style.display = "none";
}
function apagar() {
  document.body.style.backgroundColor = "rgb(128, 128, 155)";
  document.body.style.transition = "background-color 0.1s ease";

  en.style.display = "none";
  apg.style.display = "block";
}
///////////////////////////////////ejercicio17//////////////////////////
let d = new Date();

const dhias = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];
const mheses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

let di = d.getDate();
let mes = mheses[d.getMonth()];
let año = d.getFullYear();
let diasem = dhias[d.getDay()];

function tim() {
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let hora = h + ":" + m + ":" + s;
  document.getElementById(
    "hoy"
  ).innerHTML = `<p>Hoy es ${diasem} ${di} de ${mes}, del año ${año}. Son las ${hora}</p>`;
}
tim();
setInterval(tim, 1000);

const maya = new Date(2012, 11, 21, 11, 30);
let diasemmaya = dhias[maya.getDate()];
let dimaya = maya.getDate();
let mesmaya = mheses[maya.getMonth()];
let añomaya = maya.getFullYear();
let horamaya = maya.getHours();

document.getElementById(
  "maya"
).innerHTML = `Según el calendario maya el mundo acabaría el ${diasemmaya} ${dimaya} de ${mesmaya}, del año ${añomaya}, a los ${
  horamaya * 60 * 60 * 1000
} milisegundos</p>`;
//////////////////////////////////ejercicio18////////////////////////////////////////
const ant = new Date(1970);
const today = new Date();
// un año = 31,536,000,000 milisegundos///
let res = (año - 1970) * 31536000000 + di * 60 * 60 * 60 * 1000;
console.log(res);
document.getElementById(
  "segur"
).innerHTML = `La cantidad de milisegundos que han paasado desde 1970 hasta la fecha es de ${res}`;
