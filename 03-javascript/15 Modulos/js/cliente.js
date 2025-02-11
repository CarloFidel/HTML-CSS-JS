export const nombreCliente = "Juan";
export let ahorro = 200;

//Los IFE son funcionen que se ejecutan inmediatamente que on leidas....
//Esta forma evita que las variables definidas en este archivo se puedan mezclar con las de otro archivo....su sintaxis es:
/* (function () {
 */ /*  const nombreCliente = "Juan"; */
/*   let ahorro = 200;
 */ //Evitamos que este código se mezcle con otras variables, el problema es que encapsula el código, para hacerlo accesible desde otros archivos debemos elevar el ambito de ese codigo al window del navegador
/*   window.nombreCliente = "Juan";
 */ /* })();
 */ //Para no tener grandes cantidades de codigo dentro de una IIFE,  ni conflictos de ambito son muy utiles los modulos y dos palabras, expor e import

/* export const nombreCliente = "Pepe";
export let ahorro = 200;
 */
//Podemos expotar e importar todo tipo de datos variables constantes funciones arrays objetos classes

export function mostrarDatos(nombre, ahorro) {
  return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

//Creacion de una clase, modelo para construir objetos

export class Cliente {
  constructor(nombre, ahorro) {
    this.nombre = nombre;
    this.ahorro = ahorro;
  }

  mostrarDatos() {
    return `Impresion en consola del Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
  }
}
