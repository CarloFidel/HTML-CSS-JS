if (titul.length >= 3 && titul.length <= 10) {
  if (barra === "YES") {
    alert("se abrira w3school");
    window.open("./index_fines.html", "", "width=200,height=100");
  } else {
    alert("has entrado no");
  }
} else {
  alert("Ingresa un texto válido");
  location.reload();
}
