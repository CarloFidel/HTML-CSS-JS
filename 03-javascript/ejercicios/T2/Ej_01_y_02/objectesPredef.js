const valor_maximo = Number.MAX_VALUE;
const valor_minimo = Number.MIN_VALUE;
const altura_pantalla = window.screen.height;
const anchura_pantalla = window.screen.width;
const altura_pagina = window.innerHeight;
const anchura_pagina = window.innerWidth;
const url = window.location.url;
const con_ext = location.pathname;
const sin_ext = location.hostname;
const valor_aleatorio = Math.floor(Math.random() * 201);
const sistema_operatiu = navigator.platform;

const tab = `<table id="Tabla">
  <tr>
    <th class = naranja>PROPIETAT</th>
    <th class = verde>VALOR OBTINGUT AMB JS</th>
  </tr>
  <tr>
    <td>Valor màxim que pot tenir un número en JavaScript</td>
    <td>El valor máximo es ${Number.MAX_VALUE}</td>
  </tr>
    <tr>
    <td>Valor mínim que pot tenir un número en JavaScript</td>
    <td>El valor mínim es ${Number.MIN_VALUE}</td>
  </tr>
    <tr>
    <td>Alçada total de la pantalla</td>
    <td>L'alçada es ${window.screen.height}</td>
  </tr>
    <tr>
    <td>Amplada total de la pantalla</td>
    <td>L'amplada es ${window.screen.width}</td>
  </tr>
    <tr>
    <td>Alçada de la pàgina web</td>
    <td>L'alçada es ${window.innerHeight}</td>
  </tr>
    <tr>
    <td>Amplada de la pàgina web</td>
    <td>L'amplada es ${Number.MIN_VALUE}</td>
  </tr>
    <tr>
    <td>URL de la pàgina web</td>
    <td>El URL es ${window.location.url}</td>
  </tr>
  <tr>
  <td>Nom de la pàgina web amb la seva extensió (index.html)</td>    
    <td> ${location.pathname}</td>
  </tr>
  <tr>
    <td>Nom de la pàgina web sense la seva extensió (index)</td>
    <td> ${location.hostname}</td>
  </tr>
  <tr>
    <td>Un valor aleatori entre 0 i 200 (utilitza Math)</td>
    <td>L'alçada es ${Math.floor(Math.random())}</td>
  </tr>
    <tr>
  <td>Sistema operatiu de lordinador.</td>
    <td> ${navigator.platform}</td>
  </tr>
</table>`;

document.getElementById("container").innerHTML = tab;

/////////////////////////////////////////////

let text = prompt(
  "Ingresa dos valores separados por coma. El primero tendrá de 3 a 10 caracteres y el segundo solo puede ser 'Yes' o 'No'"
);

titul = text.substring(0, text.indexOf(","));
titul = titul.toUpperCase();
barra = text.substring(text.indexOf(",") + 1);
barra = barra.toUpperCase();

if (titul.length >= 3 && titul.length <= 10) {
  if (barra == "YES" || barra == "NO") {
    alert(`se abrira una nueva ventana con barras de navegación`);
    let h = Math.random() * 50;
    let w = Math.random() * 400;

    let wind = window.open(
      "finestra.html",
      "",
      `scrollbars=yes,height=${h},width=${w}`
    );
    wind.onload = function () {
      wind.document.title = `${titul}`;
    };
  } else {
    alert("Ingresa un texto válido");
    location.reload();
  }
} else {
  alert("Ingresa un texto válido");
  location.reload();
}
