let num = prompt(`introduce tu número`);

let cont = 0;

while (num < 50) {
  num = prompt(`introduce tu número`);
  cont++;
}
if (num > 50) {
  alert(`ha ntroducido ${cont++} veces un número menor a 50`);
}
let salirono = confirm("Cargar de nuevo?");
if (salirono) {
  location.reload();
} else {
  salir();
}
