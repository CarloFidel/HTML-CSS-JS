let nota = prompt("Ingrese la nota del estudiante");
nota = nota.replace(",", ".");
nota = Number(nota);

if (nota >= 0 && nota < 5) {
  alert("El estudiante está suspenso");
} else if (nota >= 5 && nota < 6) {
  alert("El estudiante está aprobado");
} else if (nota >= 6 && nota < 7) {
  alert("El estudiante está bien");
} else if (nota >= 7 && nota < 9) {
  alert("El estudiante está notable");
} else if (nota >= 9 && nota <= 10) {
  alert("El estudiante está excelente");
}

if (nota > 10) {
  alert("El estudiante tiene capacidades especiales");
}

let salirono = confirm("Próximo estudiante");
if (salirono) {
  location.reload();
} else {
  salir();
}
