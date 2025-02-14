const nombre = document.querySelector("#inputnombre");
const botoncontinuarNombre = document.querySelector("#continuar");
const containerNombre = document.querySelector("#divNombre");
const containerNumeros = document.querySelector("#divNumero");
const containersegNumero = document.querySelector("#segundonumero");
const enunc = document.querySelector("#enunc");
const containerbotones = document.querySelector("#botonesjugador");
const valnombre = /^[A-ZÀ][a-zA-ZÀ-ÿ\s]{3,20}$/;
let nombrevalor = nombre.value;

containerNumeros.style.display = "none";
containersegNumero.style.display = "none";
//si no es nombre que pasa//

//si es nombre continua el programa

const funcionamiento = () => {
  const nombrejugador = nombre.value;
  botoncontinuarNombre.style.display = "none";
  containerNombre.style.display = "none";
  containerNumeros.style.display = "block";
  const enunciado = `<p> Hola ${nombrejugador} El juego conciste en lo siguiente. Tendràs que indicarnos un número del 1 al 10, después otro del 30 al 40 y en ese momento el juego seleccionarà otro de manera aleatoria dentro del rango comprendido entre las dos cifras que has introducido. Tendrás 5 intentos para adivinar ese número </p>`;
  const inputprimernumero = document.createElement("input");
  inputprimernumero.classList.add("inputprimero");
  containerNumeros.innerHTML = enunciado;
  containerNumeros.appendChild(inputprimernumero);
  const botonprimernumero = document.createElement("button");
  botonprimernumero.innerHTML = "Continuar";
  containerNumeros.appendChild(botonprimernumero);
  const primernumero = document.querySelector(".inputprimero");

  console.log(nombre.value);
  console.log("funciona el boton");

  const irasegundo = () => {
    containersegNumero.style.display = "block";
    const valorprimero = Number(primernumero.value);
    console.log(valorprimero);
    const muestraprimero = `<p> Tu primer número es ${valorprimero}`;
    const containermostrarprimero = document.createElement("div");
    enunc.appendChild(containermostrarprimero);
    containermostrarprimero.innerHTML = muestraprimero;

    const inputsegundonumero = document.createElement("input");
    inputsegundonumero.classList.add("inputsegundo");
    containersegNumero.appendChild(inputsegundonumero);
    const botonsegundonumero = document.createElement("button");
    botonsegundonumero.innerHTML = "Continuar";

    botonsegundonumero.classList.add("botonsegundo");
    containersegNumero.appendChild(botonsegundonumero);
    const botonseg = document.querySelector(".botonsegundo");
    const segundonumero = document.querySelector(".inputsegundo");

    const irabotones = () => {
      const valorsegundo = Number(segundonumero.value);
      console.log(valorsegundo);
      const muestrasegundo = `<p> Tu segundo número es ${valorsegundo}`;
      const containermostrarsegundo = document.createElement("div");
      containersegNumero.appendChild(containermostrarsegundo);
      containermostrarsegundo.innerHTML = muestrasegundo;

      const crearbotonesynumerorandom = () => {
        containerNumeros.style.display = "none";
        containersegNumero.style.display = "none";
        containermostrarprimero.innerHTML = "";
        containermostrarsegundo.innerHTML = "";

        const enunciadobotones = `${nombre.value}, tus números son el ${valorprimero} y el ${valorsegundo}. Adivina el número dentro de ese rango que el juego ha pensado de manera aleatoria. Este es tu intento 1 de 5 `;
        containerbotones.innerHTML = enunciadobotones;

        for (let i = valorprimero; i <= valorsegundo; i++) {
          const botonesjugador = document.createElement("button");
          botonesjugador.classList.add("botonescreados");
          botonesjugador.innerHTML = [i];
          containerbotones.appendChild(botonesjugador);
          console.log(botonesjugador);
        }
        const rango = valorsegundo - valorprimero;
        const random = Math.floor(Math.random() * rango);
        console.log(random);
        let botonosarray = Array.from(
          document.querySelectorAll(".botonescreados")
        );
        const coincidencia = botonosarray[random - 1];
        console.log(coincidencia);
      };

      crearbotonesynumerorandom();
    };
    botonseg.onclick = irabotones;
  };
  botonprimernumero.onclick = irasegundo;
};
