let num = prompt("introduix el numero");

/* for (num = num; num >= 0; num--) {
  console.log(num);
}
 */
/* while (num > 0) {
  num--;
  console.log(num);
}
 */
/* do {
  num--;
  console.log(num);
} while (num > 0);
 */

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::/

num = num.replace(",", ".");
if (num.includes(".")) {
  alert("Has introducido un número decimal");
  alert("Tu número se redondeará");
  let redo = Math.round(Number(num));
  alert(`Tu número es ahora ${redo} Busca en la progresión en consola`);
  for (redo = Number(redo); redo >= 0; redo--) {
    console.log(redo);
  }
} else {
  for (num = Number(num); num >= 0; num--) {
    console.log(num);
  }
}
if ((num = !Number(num))) {
  alert("introduce un número válido");
  location.reload();
}
alert("Busca la progresión en consola");

let salirono = confirm("volver a cargar la app");
if (salirono) {
  location.reload();
} else {
  salir();
}
