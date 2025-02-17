export const btn2 = document.querySelector("#btn2");
/* const mostra = document.querySelector("#contenido");
 */
const mostrarHTML = (resultado) => {
  mostra.innerHTML = "";
  const usuario = `
  <p>Emleado: ${resultado.nombre}</p>
  <p>ID: ${resultado.id}</p>
  <p>Empresa: ${resultado.empresa}</p>
  <p>Trabajo: ${resultado.puesto}</p>`;
  mostra.innerHTML = usuario;
};
const obtenerDatos = () => {
  fetch("./server/empleado.json")
    .then((response) => {
      console.log(response);
      console.log(response.type);
      console.log(response.headers.get("Content-Type"));
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.url);
      if (!response.ok) throw new Error("esto es un rerroren solicitud");
      return response.json();
    })
    .then((response) => {
      mostrarHTML(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

btn2.addEventListener("click", obtenerDatos);
