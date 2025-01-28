function timer() {
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let time = h + ":" + m + ":" + s;
  document.getElementById("date").innerHTML = time;

  if (6 <= h <= 14) {
    let bd = "Bon día";
    document.getElementById("mensaje").innerHTML = bd;
  }
  if (14 < h && h <= 20) {
    let bt = "Bona tarda";
    document.getElementById("mensaje").innerHTML = bt;
  }
  if (h > 20) {
    let bn = "Bona nit";
    document.getElementById("mensaje").innerHTML = bn;
  }
}
timer();
setInterval(timer, 1000);

function newdir() {
  let dir = prompt("Ingresa una nueva dirección web");
  location.replace(`${dir}`);
}
setTimeout(newdir, 3000);
