/* estructura while */
let cont = 0;
while (cont <= 10) {
  console.log("repetición número:" + cont);
  cont++;
}
console.log("Valor final:" + cont);

/* bucle for o estructura de control for */
for (let conta = 0; conta <= 10; conta++) {
  console.log("repetición número:" + conta);
}
console.log(`Vlor final:${conta}`);
//aquí conta no está declarada la en el ámbito global, por lo tnto no se puede acceder a ella

/* Estructura While */
/* El while lo que hace es que recopila datos y si se cumple la condición, entonces continúa, si no se cumple no hará nada */
cont = 0;
do {
  console.log("repetición número:" + cont);
  cont++;
} while (cont <= 10);
console.log("Valor final:" + cont);
