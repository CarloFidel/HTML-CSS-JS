
const d=document;
onload=d.documentElement.style.setProperty("--font-size",`${fontSize=16}`);
const btncontrast = d.querySelector("#contrast");
const contrast = () => {
  const consta = d.querySelector("body");
  consta.classList.toggle("contraste");
};

const getFontSize = () =>
  parseFloat(
    getComputedStyle(d.documentElement).getPropertyValue("--font-size")
  );

const fontUp = (element) => {
  element.addEventListener("click", () => {
    let fontSize = getFontSize();
    (fontSize>=16) && (fontSize<=32)?
    d.documentElement.style.setProperty("--font-size",`${fontSize + 2}`):null;});
};

const fontDown = (element) => {
  element.addEventListener("click", () => {
    let fontSize = getFontSize();
 (fontSize>16)? d.documentElement.style.setProperty("--font-size",`${fontSize -2}`):
      d.documentElement.style.setProperty( "--font-size", `${fontSize=16}`);
  
  });
};

addEventListener("keyup", (e) => {
  if (e.key === "ArrowUp") document.querySelector("#font-up").click();
  if (e.key === "ArrowDown") document.querySelector("#font-down").click();
});

fontUp(document.querySelector("#font-up"));
fontDown(document.querySelector("#font-down"));

btncontrast.onclick = contrast;
