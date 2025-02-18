const cargarApiexterna = document.querySelector("#btn5");
const mostra = document.querySelector("#mostra");

const mEmpleHTML = (empleados) => {
  mostra.innerHTML = ""; // Limpiar el contenido de 'mostra'
  empleados.forEach((empleado) => {
    // Desestructuración para obtener el nombre del empleado
    const { title, first, last } = empleado.name;
    const { medium } = empleado.picture;
    const { city, country, postcode } = empleado.location;

    // Generar el HTML para cada empleado
    const empleadoHTML = `
      <p>Imagen:<br/><img src="${medium}" width="100" /></p>
      <p>Título: ${title}</p>
      <p>Nombre: ${first} ${last}</p>
      <p>Ciudad: ${city} </p>
      <p>País:${country}</p>
      <p>Postcode:${postcode}</p>
      <hr/>
    `;
    // Agregar el HTML al contenedor 'mostra'
    mostra.innerHTML += empleadoHTML;
  });
};

export const obDatos = () => {
  fetch("https://randomuser.me/api/?results=50")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      return response.json();
    })
    .then((response) => {
      console.log(response);
      mEmpleHTML(response.results);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Asociar el evento al botón
cargarApiexterna.addEventListener("click", obDatos);
