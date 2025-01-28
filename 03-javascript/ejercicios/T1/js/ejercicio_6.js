let dia = prompt("¿Que día es hoy?");
dia = dia
  .toUpperCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "");

if (!isNaN(dia)) {
  alert("Por favor introduce un día de la semana, no un número");
  alert("Volavaos a empezar");
  location.reload();
}

let result;
switch (dia) {
  case "LUNES":
    result = ` El ${
      dia.toLowerCase() + " " + "es" + " " + "el día" + " " + 1
    } de la semana`;
    console.log(`Día 1 de la semana`);
    dia = 1;
    break;

  case "MARTES":
    result = ` El ${
      dia.toLowerCase() + " " + "es" + " " + "el día" + " " + 2
    } de la semana`;
    dia = 2;
    break;

  case "MIERCOLES":
    result = ` El ${
      dia.toLowerCase() + " " + "es" + " " + "el día" + " " + 3
    } de la semana`;
    dia = 3;
    break;

  case "JUEVES":
    result = ` El ${
      dia.toLowerCase() + " " + "es" + " " + "el día" + " " + 4
    } de la semana`;
    dia = 4;
    break;

  case "VIERNES":
    result = ` El ${
      dia.toLowerCase() + " " + "es" + " " + "el día" + " " + 5
    } de la semana`;
    dia = 5;
    break;

  case "SABADO":
    result = ` El ${
      dia.toLowerCase() + " " + "es" + " " + "el día" + " " + 6
    } de la semana`;
    dia = 6;
    break;

  case "DOMINGO":
    result = ` El ${
      dia.toLowerCase() + " " + "es" + " " + "el día" + " " + 7
    } de la semana`;
    dia = 7;
    break;
}
alert(result);

/* const mostra = document.querySelector("#mostrar");
mostra.innerHTML = result; */

let salirono = confirm("volver a cargar la app");
if (salirono) {
  location.reload();
} else {
  salir();
}
