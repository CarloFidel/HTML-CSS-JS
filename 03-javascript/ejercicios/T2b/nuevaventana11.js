function cerrarventana() {
  window.close();
}
const url = window.location.href;
const t = document.title;
const al = window.innerHeight;
const w = window.innerWidth;

const text = ` <h2>Las propiedades de la nueva ventana son </h2>
<p> URL: ${url}  </p> <p> Título: ${t} </p><p> Altura: ${al}  </p><p> Ancho: ${w} </p>`;
document.getElementById("prop").innerHTML = text;
