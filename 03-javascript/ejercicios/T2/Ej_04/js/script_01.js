let tit = prompt(`Introduzca el nombre de la página web`);

if (tit === null || tit.trim() === "" || /^\d+$/.test(tit)) {
  alert("Introduzca un nombre válido");
  location.reload();
} else if (tit === Number()) {
  alert("Introduzca un nombre válido");
  location.reload();
} else {
  tit = tit.toUpperCase();
  alert(`El títul de la página web es ${tit}`);
}
let salirono = confirm("¿Seguir probando títulos?");
if (salirono) {
  location.reload();
} else {
  salir();
}
