let num1 = Number(prompt("introduce el primer número"));
let num2 = Number(prompt("introduce el segundo número "));

if (!Number(num1) || !Number(num2)) {
  alert(`Introduce un número`);
}
if (num1 > num2) {
  alert(`El número ${num1} es mayor que el número ${num2}`);
}
if (num1 < num2) {
  alert(`El número ${num1} es menor que el número ${num2}`);
}
if (num1 == num2) {
  alert(`Los números ${num1} y ${num2} son iguales`);
}

let salirono = confirm("Volver a comparar");
if (salirono) {
  location.reload();
}
