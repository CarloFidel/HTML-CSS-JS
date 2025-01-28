let cook = navigator.cookieEnabled;
if (cook) {
  let conf = window.confirm(
    "Este navegador tiene las cookies activadas, si acepta continuar, estará aceptando el uso de las cookies"
  );
  if (conf) {
    document.getElementById("yes").textContent =
      "Permanecer en esta página comporta aceptar el uso de cookies";
  } else {
    alert("Será redirigido a otra página");
    window.location.href = "https://www.carlofidel.com";
  }
}
