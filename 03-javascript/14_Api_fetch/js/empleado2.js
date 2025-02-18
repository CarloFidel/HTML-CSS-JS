export const btn3 = document.querySelector("#btn3");

export const mEmpleHTML = (empleados) => {
  mostra.mEmpleHTML = "";
  empleados.forEach((empleado) => {
    empleado = `<p>ID: ${empleado.nombre}</p>
  <p>ID: ${empleado.empresa}</p>
  <p>ID: ${empleado.puesto}</p>

    <hr/>`;
    mostra.innerHTML += empleado;
  });
};
export const obDatos = () => {
  fetch("./server/empleados.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("esto es un rerroren solicitud");
      }
      return response.json();
    })
    .then((response) => {
      console.log(response);
      mEmpleHTML(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
btn3.addEventListener("click", obDatos);
