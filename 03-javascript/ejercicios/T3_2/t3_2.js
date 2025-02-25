/////////////Ejercicio_1//////////////
const ejec01 = document.querySelector("#btn_ejer1");
const mostra01 = document.querySelector("#mostra1");
const limp01 = document.querySelector("#btn_limpiar");
const solucion01 = document.createElement("div");
let arraymeses = [
  "enero",
  "marzo",
  "febrero",
  "septiembre",
  "julio",
  "mayo",
  "junio",
  "abril",
  "diciembre",
  "agosto",
  "octubre",
  "noviembre",
];
arraymeses[1] = "febrero";
arraymeses[2] = "marzo";
arraymeses[3] = "abril";
arraymeses[4] = "mayo";
arraymeses[5] = "junio";
arraymeses[6] = "julio";
arraymeses[7] = "agosto";
arraymeses[8] = "septiembre";
arraymeses[9] = "octubre";
arraymeses[10] = "noviembre";
arraymeses[11] = "diciembre";

const ordencorrecto = arraymeses;
const ordenalf = [...arraymeses].sort();
const guiones = ordenalf.join(" - ");
const arrayinv = [...ordenalf].reverse();
const otrocaracter = [...arraymeses].join(" # ");

const ejecutar01 = () => {
  if (!document.querySelector(".divcreada")) {
    result01a = `Orden correcto de los meses: ${arraymeses.join(", ")}`;
    result01b = `b) El orden alfabètico de los meses es: <br> ${ordenalf.join(
      ", "
    )}`;
    result01c = `c) Aquí están los meses separados por guiones: <br>${guiones}`;
    result01d = `d) En orden invertido: <br> ${arrayinv.join(", ")}`;
    result01e = `e) El orden alfabètico de los meses es: <br> ${otrocaracter}`;
    solucion01.classList.add("divcreada");
    solucion01.innerHTML =
      `<br>${result01a}` +
      `<br>${result01b}` +
      `<br>${result01c}` +
      `<br>${result01d}` +
      `<br>${result01e}`;
    mostra01.appendChild(solucion01);
  }
};
const limpiar01 = () => {
  solucion01.remove();
};
ejec01.addEventListener("click", ejecutar01);
limp01.addEventListener("click", limpiar01);
/////////////Ejercicio_2//////////////
const mostra02 = document.querySelector("#mostra02");
const input02 = document.querySelector("#input02");
const ejec02 = document.querySelector("#ejec02");
const limp02 = document.querySelector("#limp02");
const solucion02 = document.createElement("div");

const func = () => {
  let array = input02.value.split(" ");
  const a = array[0];
  const b = array;
  result02a = `La primera paraula: ${a}`;
  solucion02.classList.add("divcreada02");
  solucion02.innerHTML = `<br>${result02a}`; //+
  mostra02.appendChild(solucion02);
  input02.value = "";
};
const ejecutar02 = () => {
  if (!document.querySelector(".divcreada02")) {
    func();
  } else {
    func();
  }
};
const limpiar02 = () => {
  solucion02.remove();
};
ejec02.addEventListener("click", ejecutar02);
limp02.addEventListener("click", limpiar02);
