console.log(nombreCliente);
console.log(nombreCliente, ahorro);

// 1) Esto nos puede llevar a variables que se mezclan con otras en especial si el codigo es mantenido por multiples peronas, es voluminoso, o tamnién si decidimos implementar liberrias...
// La solucion suee ser agrupar el contenido en lo que se conoce como un IFE Inmediately Invoked Function Expression
// 2) Para mejorar esta forma de uso con las IIFE, usaremos modulos, que nos permite importar y exportar parta del código entre archivos js según uestras necesidades: ejemlo de importación de nombreCliente desde cliente.js

/* import { nombreCliente } from "js/cliente.js"; importamos y usamos la constante nombreCliente
console.log(nombreCliente);
 */
/* import { nombreCliente, ahorro, mostrarDatos } from "js/cliente.js";
console.log(nombreCliente, ahorro);
 */
/* import { nombreCliente, ahorro, mostrarDatos } from "./cliente.js";
const cliente = mostrarDatos(nombreCliente, ahorro);
console.log(cliente); */
import { nombreCliente, ahorro } from "./cliente.js";

import { Cliente } from "./cliente.js";
const cliente = new Cliente(nombreCliente, ahorro);

console.log(cliente.nombre);
console.log(cliente.ahorro);
console.log(cliente.mostrarDatos());
