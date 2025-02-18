const cargarJSONporid = document.querySelector("#btn6");
/* const mostra = document.querySelector("#contenido");
 */
const mEmpleHTML = (empleado) => {
  mostra.innerHTML = `<p>ID: ${empleado.id}</p>
                      <p>ID: ${empleado.nombre}</p>
                      <p>ID: ${empleado.empresa}</p>
                      <p>ID: ${empleado.puesto}</p>`;
};

const obDatosid = (id) => {
  fetch("./server/empleados.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("esto es un rerroren solicitud");
      }
      return response.json();
    })
    .then((empleados) => {
      const empleado = empleados.find((emp) => emp.id === id);
      mEmpleHTML(empleado);
    })
    .catch((error) => {
      console.log(error);
      mostra.innerHTML = `<p>Error al cargar datos del empleado</p>`;
    });
};
cargarJSONporid.addEventListener("click", () => obDatosid(4));
