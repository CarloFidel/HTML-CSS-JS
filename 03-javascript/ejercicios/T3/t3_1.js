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
const num204 = document.querySelector("#in204");
const btn0104 = document.querySelector("#ejecutar04");
const limp04 = document.querySelector("#limpiar04");
const divi04 = document.querySelector("#mensaje04");
const sele = document.querySelector("#mat");

const click04 = () => {
  let n104 = num104.value;
  n104 = Number(n104.replace(",", "."));
  let n204 = num204.value;
  n204 = Number(n204.replace(",", "."));

  let resultado04;
  if (isNaN(n104) || isNaN(n204) || n104 == "" || n204 == "") {
    resultado04 = `<div class="alert alert-danger">No puedo operar si no son dos números`;
    divi04.innerHTML = resultado04;
  } else {
    let s = document.querySelector("#mat");
    let i = s.selectedIndex;
    let oper = s.options[i].text;
    if (oper == "Suma") {
      resultado04 = n104 + n204;
      resultado04 = `<div class="alert alert-success">El resultado de sumar ${n104} y ${n204} es ${resultado04}`;
      divi04.innerHTML = resultado04;
    }
    if (oper == "Resta") {
      resultado04 = n104 - n204;
      resultado04 = `<div class="alert alert-success">El resultado de restar ${n104} y ${n204} es ${resultado04}`;
      divi04.innerHTML = resultado04;
    }
    if (oper == "Multiplica") {
      resultado04 = n104 * n204;
      resultado04 = `<div class="alert alert-success">El resultado de multiplicar ${n104} y ${n204} es ${resultado04}`;
      divi04.innerHTML = resultado04;
    }
    if (oper == "Divide") {
      resultado04 = n104 / n204;
      resultado04 = `<div class="alert alert-success">El resultado de dividir ${n104} y ${n204} es ${resultado04}`;
      divi04.innerHTML = resultado04;
    }
    if (oper == "Modulo") {
      resultado04 = n104 % n204;
      resultado04 = `<div class="alert alert-success">El resultado de restar ${n104} y ${n204} es ${resultado04}`;
      divi04.innerHTML = resultado04;
    }
  }
};
const denuevo04 = () => {
  num104.value = "";
  num204.value = "";
  divi04.innerHTML = "";
};

btn0104.onclick = click04;
limp04.onclick = denuevo04;
///////////////////////////////////ejercicio05//////////////////////////////////////////
const etiq = document.querySelector("#input05");
const ejec05 = document.querySelector("#ejec05");
const volv05 = document.querySelector("#limp05");
const div05 = document.querySelector("#mostra05");

const denuevo05 = () => {
  etiq.value = "";
  div05.innerHTML = "";
};
const click05 = () => {
  et = etiq.value;
  et = Number(et.replace(",", "."));
  etr = Math.round(et);
  if (isNaN(etr) || etr == "") {
    let resul05 = `<div class="alert alert-danger">No puedo operar si no ingresas un número`;
    div05.innerHTML = resul05;
  } else {
    let codi = [];
    let prod = [];
    let resul05 = `<ul class="alert alert-success" id="list05">`;
    for (let i = 0; i < etr; i++) {
      codi.push(`Etiqueta: ${Math.round(Math.random() * 1034500)}`);
      prod.push(`Producto ${i + 1}`);
      resul05 += `<li>${prod[i]}: ${codi[i]} </li>`;
    }
    resul05 = resul05 + "</ul>";
    div05.innerHTML = resul05;
  }
};
ejec05.onclick = click05;
volv05.onclick = denuevo05;
///////////////////////////////////ejercicio06//////////////////////////////////////////
const anc = document.querySelector("#prop06");
const mostra06 = document.querySelector("#mostra06");

const pantalla = () => {
  res06 = `<ul style="list-style-type:none" class="alert alert-success"> <li> La altura de la pantalla es ${
    screen.height
  } px </li> <li>La altura útil de pantalla es ${
    window.innerHeight
  } px </li> <li> El ancho de la pantalla es de ${
    screen.width
  } px </li> <li> El ancho útil de pantalla es de ${
    window.innerWidth
  } px <li> La profundidad de color es de ${
    screen.colorDepth
  } bit </li> <li> La diagonal es de ${Math.round(
    Math.sqrt(screen.height * screen.height + screen.width * screen.width)
  )} px </li> </ul>`;

  mostra06.innerHTML = res06;
};
const limp06 = () => {
  location.reload();
};
///////////////////////////////////ejercicio07//////////////////////////////////////////
const elecc07 = document.querySelector("#select07").value;
const btn07 = document.querySelector("#ejec07");
const back = document.querySelector("#limp07");

const color07 = () => {
  const elecc07 = document.querySelector("#select07").value;
  switch (elecc07) {
    case "azul":
      document.body.style.backgroundColor = "rgb(103, 107, 220)";
      break;
    case "verde":
      document.body.style.backgroundColor = "rgb(124, 225, 126)";
      break;
    case "naranja":
      document.body.style.backgroundColor = "rgb(227, 161, 95)";
      break;
    case "rojo":
      document.body.style.backgroundColor = "rgb(231, 147, 147)";
      break;
    default:
      document.body.style.backgroundColor = "white";
      break;
  }
};
const altras07 = () => {
  document.body.style.backgroundColor = "white";
};
btn07.onclick = color07;
back.onclick = altras07;
///////////////////////////////////ejercicio08//////////////////////////////////////////
const vent = document.querySelector("#ejec08");
const ini = document.querySelector("#limp08");

const nova08 = () => {
  win08 = window.open("nova.html");
};

vent.onclick = nova08;
///////////////////////////////////ejercicio09//////////////////////////////////////////
const inp09 = document.querySelector("#input09");
const btn09 = document.querySelector("#ejec09");
const back09 = document.querySelector("#limp09");
const div09 = document.querySelector("#mostra09");
const div209 = document.querySelector("#mostra209");
const rees = document.querySelector("#ejec209");

const string09 = () => {
  let cant = inp09.value.length;
  let result09 = `<div class="alert alert-success">La cantidad de caracteres es ${cant}</div>`;
  div09.innerHTML = result09;
};

const reescribe = () => {
  const inp09 = document.querySelector("#input09").value;
  let result209 = `<div  > ${inp09}</div>`;
  div209.innerHTML = result209;
};

const limpia09 = () => {
  inp09.value = "";
  div09.innerHTML = "";
  div209.innerHTML = "";
};

btn09.onclick = string09;
rees.onclick = reescribe;
back09.onclick = limpia09;
///////////////////////////////////ejercicio10//////////////////////////////////////////
const enc10 = document.querySelector("#enc10");
const apg10 = document.querySelector("#apg10");
const div10 = document.querySelector("#encendida10");
const div210 = document.querySelector("#apagada10");
div10.style.display = "none";
div210.style.display = "block";

enc10.style.display = "none";
apg10.style.display = "none";

const encender = () => {
  div10.style.display = "block";
  div210.style.display = "none";
};
const apagar = () => {
  div10.style.display = "none";
  div210.style.display = "block";
};
////////////Variante 1////////////
div210.addEventListener("mouseover", encender);
div10.addEventListener("mouseout", apagar);

////////////Variante 2////////////
/* div210.addEventListener("dblclick", encender);
div10.addEventListener("click", apagar);
 */
////////////Variante 3////////////
/* enc10.style.display = "block";
apg10.style.display = "block";

enc10.onclick = encender;
apg10.onclick = apagar;
 */
