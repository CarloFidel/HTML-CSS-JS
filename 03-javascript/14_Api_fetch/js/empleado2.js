const btn3 = document.querySelector("#btn3");

const mEmpleHTML = "";
empleados.forEach((empleado) => {
  empleado = `<p>ID: ${empleado.nombre}</p>
  <p>ID: ${empleado.empresa}</p>
  <p>ID: ${empleado.puesto}</p>
    <hr/>`;
  mostra.innerHTML += empleado;
});

btn3.addEventListener("click", obtenerDatos);
