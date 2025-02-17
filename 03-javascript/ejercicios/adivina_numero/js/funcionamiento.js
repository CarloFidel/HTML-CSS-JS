const nombre = document.querySelector("#inputnombre");
const botoncontinuarNombre = document.querySelector("#continuar");
const containerNombre = document.querySelector("#divNombre");
const containerNumeros = document.querySelector("#divNumero");
const containersegNumero = document.querySelector("#segundonumero");
const enunc = document.querySelector("#enunc");
const containerbotones = document.querySelector("#botonesjugador");
const enuncbotones = document.querySelector("#enunciadobotones");
const seccionbot = document.querySelector("#seccionbotones");
const valnombre = /^[A-ZÀ][a-zA-ZÀ-ÿ\s]{3,20}$/;
nombre.focus();
containerbotones.style.display = "none";

containerNumeros.style.display = "none";
containersegNumero.style.display = "none";

const validarnombre = () => {
  const revnomb = document.querySelector(".errornombre");
  if (revnomb) {
    revnomb.remove();
  }
  if (valnombre.test(nombre.value)) {
    funcionamiento();
  } else {
    const errornombre = `<p> Por favor escribe un nombre correctamente </p>`;
    const diverrornombre = document.createElement("div");
    diverrornombre.classList.add("errornombre");
    nombre.classList.add("inputnombrerror");
    containerNombre.appendChild(diverrornombre);
    diverrornombre.innerHTML = errornombre;
  }
};
const funcionamiento = () => {
  const nombrejugador = nombre.value;
  botoncontinuarNombre.style.display = "none";
  containerNombre.style.display = "none";
  containerNumeros.style.display = "block";
  const enunciado = `<p> Hola de nuevo ${nombrejugador}, el juego conciste en lo siguiente. Tendrás que indicarnos un número del 1 al 10, después otro del 30 al 40 y en ese momento el juego seleccionará otro de manera aleatoria dentro del rango comprendido entre las dos cifras que has introducido. Tendrás 5 intentos para adivinar ese número. </p>`;
  containerNumeros.classList.add("enunciadonum");
  const inputprimernumero = document.createElement("input");
  inputprimernumero.classList.add("inputprimero");
  containerNumeros.innerHTML = enunciado;
  containerNumeros.appendChild(inputprimernumero);
  inputprimernumero.focus();
  const br = document.createElement("br");
  containerNumeros.appendChild(br);
  const botonprimernumero = document.createElement("button");
  botonprimernumero.textContent = "Continuar";
  containerNumeros.appendChild(botonprimernumero);
  const primernumero = document.querySelector(".inputprimero");

  const validarprimer = () => {
    const errselect = document.querySelector(".errornombre");
    if (errselect) {
      errselect.remove();
    }
    if (
      !isNaN(inputprimernumero.value) &&
      inputprimernumero.value.trim() !== "" &&
      Number(inputprimernumero.value) <= 10 &&
      Number(inputprimernumero.value) > 0
    ) {
      inputprimernumero.classList.add("inputcorrecto");
      irasegundo();
    } else {
      const errorprimero = `<p> Por favor escribe un número entre 1 y 10 </p>`;
      const diverrorprimero = document.createElement("div");
      diverrorprimero.classList.add("errornombre");
      inputprimernumero.classList.add("inputnombrerror");
      containerNumeros.appendChild(diverrorprimero);
      diverrorprimero.innerHTML = errorprimero.toUpperCase();
    }
  };
  const irasegundo = () => {
    containerNumeros.removeChild(botonprimernumero);
    inputprimernumero.setAttribute("disabled", "");
    containersegNumero.style.display = "block";
    const valorprimero = Number(primernumero.value);
    const parrafoprimer = document.createElement("p");
    parrafoprimer.classList.add("tuprimernumero");
    containerNumeros.appendChild(parrafoprimer);
    const msmprimernumero = `Tu primer número es ${valorprimero}`;
    parrafoprimer.innerHTML = msmprimernumero.toUpperCase();
    const enuncsegundo = document.createElement("p");
    containersegNumero.appendChild(enuncsegundo);
    enuncsegundo.innerHTML = `<p> Ahora ingresa el segundo número </p>`;

    const inputsegundonumero = document.createElement("input");
    inputsegundonumero.classList.add("inputsegundo");
    containersegNumero.appendChild(inputsegundonumero);
    inputsegundonumero.focus();

    const brdos = document.createElement("br");
    containersegNumero.appendChild(brdos);

    const botonsegundonumero = document.createElement("button");
    botonsegundonumero.innerHTML = "Continuar";

    botonsegundonumero.classList.add("botonsegundo");
    containersegNumero.appendChild(botonsegundonumero);
    const botonseg = document.querySelector(".botonsegundo");
    const segundonumero = document.querySelector(".inputsegundo");

    const validarsegundo = () => {
      const errselectseg = document.querySelector(".errornombre");
      if (errselectseg) {
        errselectseg.remove();
      }
      if (
        !isNaN(inputsegundonumero.value) &&
        inputsegundonumero.value.trim() !== "" &&
        Number(inputsegundonumero.value) <= 40 &&
        Number(inputsegundonumero.value) >= 30
      ) {
        inputsegundonumero.classList.add("inputcorrecto");

        irabotones();
      } else {
        const errorsegundo = `<p> Por favor escribe un número entre 30 y 40 </p>`;
        const diverrorsegundo = document.createElement("div");
        diverrorsegundo.classList.add("errornombre");
        inputsegundonumero.classList.add("inputnombrerror");
        containersegNumero.appendChild(diverrorsegundo);
        diverrorsegundo.innerHTML = errorsegundo.toUpperCase();
        inputsegundonumero.value = "";
      }
    };

    const irabotones = () => {
      const valorsegundo = Number(segundonumero.value);
      console.log(valorsegundo);
      const muestrasegundo = `<p> Tu segundo número es ${valorsegundo}`;
      const containermostrarsegundo = document.createElement("div");
      containermostrarsegundo.classList.add("muestrasegundo");
      containersegNumero.appendChild(containermostrarsegundo);
      containermostrarsegundo.innerHTML = muestrasegundo.toUpperCase();
      inputsegundonumero.setAttribute("disabled", "");
      botonseg.style.display = "none";

      const espera = () => {
        const pensando = document.createElement("p");
        containersegNumero.appendChild(pensando);
        pensando.innerHTML = `Estamos generando el número.`;
        const puntouno = () => {
          const punt = document.createElement("p");
          containersegNumero.appendChild(punt);
          pensando.innerHTML += ".";
        };
        setInterval(puntouno, 600);
      };
      setTimeout(espera, 500);

      const crearbotonesynumerorandom = () => {
        containerbotones.style.display = "block";
        containerNumeros.style.display = "none";
        containersegNumero.style.display = "none";
        containermostrarsegundo.innerHTML = "";
        let int = 1;
        let interestantes = 5 - int;
        const enunciadobotones = `${nombre.value}, tus números son el ${valorprimero} y el ${valorsegundo}. Adivina el número dentro de ese rango que el juego ha pensado de manera aleatoria. Este es tu intento ${int} de 5.`;
        enuncbotones.innerHTML = enunciadobotones;

        for (let i = valorprimero; i < valorsegundo; i++) {
          const botonesjugador = document.createElement("button");
          botonesjugador.classList.add("botonescreados");
          botonesjugador.textContent = [i];
          containerbotones.appendChild(botonesjugador);
          console.log(botonesjugador);
        }
        const rango = valorsegundo - valorprimero;
        const random = Math.floor(Math.random() * rango);
        console.log(random);
        const botonosarray = Array.from(
          document.querySelectorAll(".botonescreados")
        );
        const coincidencia = botonosarray[random - 1];
        console.log(coincidencia);

        botonosarray.splice(random - 1, 1);
        console.log(botonosarray);
        botonosarray.forEach((boton) => {
          boton.classList.add("incorr");
        });

        botonesjugador.addEventListener("click", (event) => {
          if (event.target === coincidencia) {
            const msmganador = `<p> Has ganado este juego. Eres Nostradamus</p>`;
            const felicidades = document.createElement("p");
            felicidades.classList.add("msmfelicidades");
            seccionbot.appendChild(felicidades);
            felicidades.innerHTML = msmganador.toUpperCase();
            containerbotones.style.display = "none";
          }
          if (event.target.classList.contains("incorr")) {
            const errbot = document.querySelector(".mensajeperdedor");
            if (errbot) {
              errbot.remove();
            }
            let msmgperdedor = `<p> Incorrecto. Te quedan ${interestantes} intentos </p>`;
            const pesame = document.createElement("p");
            pesame.classList.add("mensajeperdedor");
            seccionbot.appendChild(pesame);
            pesame.innerHTML = msmgperdedor;
            interestantes = interestantes - 1;
            if (interestantes === -1) {
              const msmperd = `<p> Lo siento. Has perdido, inténtalo de nuevo </p>`;
              const felicidades = document.createElement("p");
              felicidades.classList.add("msmfelicidades");
              seccionbot.appendChild(felicidades);
              felicidades.innerHTML = msmperd.toUpperCase();
              containerbotones.style.display = "none";
            }
          }
        });
      };
      setTimeout(crearbotonesynumerorandom, 4000);
    };
    botonseg.onclick = validarsegundo;
    containersegNumero.addEventListener("keyup", function (event) {
      console.log("funciona");
      if (event.key === "Enter") {
        validarsegundo();
      }
    });
  };
  botonprimernumero.onclick = validarprimer;
  containerNumeros.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      validarprimer();
    }
  });
};

botoncontinuarNombre.onclick = validarnombre;
nombre.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    validarnombre();
  }
});
