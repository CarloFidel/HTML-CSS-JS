const cargarApiBtn = document.querySelector("#btn4");
const mostra = document.querySelector("#mostra");

const mHTML = (datos) => {
  mostra.innerHTML = "";
  let html = "<h4>Usuarios piscum</h4>";
  datos.forEach((dato) => {
    const { author, url, download_url } = dato;
    html += `<p> Autor:${author}</p>
            <p>Imagen:<br/><img src="${download_url}" width="200" /><br/>
            <a href="${download_url}" target="new"> Descargar original</p>`;
  });
  mostra.innerHTML = html;
};

const obtenerDatos = () => {
  //fetch("./server/dbpictures.json")
  fetch("https://picsum.photos/v2/list?page=2&limit=50")
    .then((response) => {
      if (!response.ok) throw new Error("esto es un rerroren solicitud");
      return response.json();
    })
    .then((response) => {
      console.log(response);
      mHTML(response);
    })
    .catch((error) => {
      console.log(error);
      mostra.innerHTML = `<p>Error al cargar los datos del empleado</p>`;
    });
};
cargarApiBtn.addEventListener("click", obtenerDatos());
