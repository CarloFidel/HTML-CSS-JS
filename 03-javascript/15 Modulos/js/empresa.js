import { Cliente } from "./cliente.js"; //Importamos la clase para creaR una subclase o clase heredada

export class Empresa extends Cliente {
  constructor(nombre, ahorro, categoria) {
    super(nombre, ahorro); //Palabra clave para acceder al constructor de la clase padre, no necesitamos más en las propiedades ya definidas en el padre
    this.categoria = categoria;
  }
  mostrarinformacion() {
    return `Cliente:${this.nombre} - Ahorro: ${this.ahorro} - Categoria ${this.categoria}`;
  }
}
