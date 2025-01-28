let ejercicio1 = prompt("Ingese la nota del primer ejercicio");
ejercicio1 = ejercicio1.replace(",", ".");
let ejercicio2 = prompt("Ingese la nota del segundo");
ejercicio2 = ejercicio2.replace(",", ".");

nota = (Number(ejercicio1) + Number(ejercicio2)) / 2;

if (nota >= 0 && nota < 5) {
  alert(`La nota mediana es ${nota}. El estudiante está SUSPENSO`);
} else if (nota >= 5 && nota < 6) {
  alert(`La nota mediana es ${nota}. El estudiante está APROBADO`);
} else if (nota >= 6 && nota < 7) {
  alert(`La nota mediana es ${nota}. El estudiante está BIEN`);
} else if (nota >= 7 && nota < 9) {
  alert(`La nota mediana es ${nota}. El estudiante está NOTABLE`);
} else if (nota >= 9 && nota <= 10) {
  alert(`La nota mediana es ${nota}. El estudiante está EXCELENTE`);
}
let salirono = confirm("Próximo estudiante");
if (salirono) {
  location.reload();
} else {
  salir();
}
