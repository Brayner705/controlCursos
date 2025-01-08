const asistencia1 = document.querySelector(".asistencia1");
const agregar = document.getElementById("agregar");
const modal = document.querySelector(".modal");
const modalPago = document.querySelector(".modalPago");
const reinciar = document.getElementById("reiniciar");
const exitAgregar = document.getElementById("salirAgregar");
const agregarTarjeta = document.getElementById("agregarTarjeta");
const contRegistro = document.querySelector(".registros");

const colorVerde = "#008f39";
const colorAmarillo = "#FFDE21";
const colorRojo = "#ff0000";

const crearTarjeta = (nombre, curso, numTarjeta) => {
  // Crear el contenedor principal de la tarjeta
  const card = document.createElement("div");
  card.classList.add("tarjetas");

  // Crear la sección "datos"
  const datos = document.createElement("div");
  datos.classList.add("datos");
  const img = document.createElement("img");
  img.src = "imagen/perfil.png";
  img.alt = "Foto Perfil";
  const h3Name = document.createElement("h3");
  h3Name.textContent = nombre;
  datos.appendChild(img);
  datos.appendChild(h3Name);

  // Crear la sección "información"
  const informacion = document.createElement("div");
  informacion.classList.add("informacion");
  const h3Course = document.createElement("h3");
  h3Course.textContent = curso;

  // Crear los botones
  const botones = document.createElement("div");
  botones.classList.add("botones");
  const btnPago = document.createElement("button");
  btnPago.classList.add(`pagoRealizado`);
  btnPago.classList.add(`pago${numTarjeta}`);
  btnPago.textContent = "PR";
  const btnInfo = document.createElement("button");
  btnInfo.classList.add("masInformacion");
  btnInfo.textContent = "Más información";
  const btnReiniciar = document.createElement("button");
  btnReiniciar.id = "reiniciar";
  btnReiniciar.classList.add("reinicio");
  btnReiniciar.innerHTML = '<i class="fa fa-rotate-right"></i>';
  botones.appendChild(btnPago);
  botones.appendChild(btnInfo);
  botones.appendChild(btnReiniciar);

  // Crear las asistencias
  const asistencias = document.createElement("div");
  asistencias.classList.add("asistencias");
  for (let i = 0; i < 4; i++) {
    const asistencia = document.createElement("div");
    asistencia.classList.add("asistencia");
    asistencias.appendChild(asistencia);
  }

  // Agregar los elementos a la sección "información"
  informacion.appendChild(h3Course);
  informacion.appendChild(botones);
  informacion.appendChild(asistencias);

  // Agregar las secciones "datos" e "información" a la tarjeta
  card.appendChild(datos);
  card.appendChild(informacion);

  // Agregar la tarjeta al contenedor principal
  contRegistro.appendChild(card);
};

let existeTarjeta = false;

agregar.addEventListener("click", () => {
  modal.style.display = "grid";
});

exitAgregar.addEventListener("click", () => {
  modal.style.display = "none";
});

let numTarjeta = 1;
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("agregarTarjeta").addEventListener("click", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const curso = document.getElementById("curso").value;

    modal.style.display = "none";
    crearTarjeta(nombre, curso, numTarjeta);

    document.getElementById("nombre").value = "";
    document.getElementById("curso").value = "";
    numTarjeta++;
  });

  contRegistro.addEventListener("click", (e) => {
    const pr = document.querySelectorAll(".pagoRealizado");
    const pc = document.getElementById("PC");
    const mp = document.getElementById("MP");
    if (e.target.classList.contains("pagoRealizado")) {
      modalPago.style.display = "grid";

      const pagoSeleccionado = e.target;

      pc.onclick = () => {
        pagoSeleccionado.style.color = "#fff";
        pagoSeleccionado.style.backgroundColor = colorVerde;
        modalPago.style.display = "none";
      };

      mp.onclick = () => {
        pagoSeleccionado.style.color = "#fff";
        pagoSeleccionado.style.backgroundColor = colorAmarillo;
        modalPago.style.display = "none";
      };
    }

    const asistencias = document.querySelectorAll(".asistencia");

    asistencias.forEach((asistencia) => {
      asistencia.addEventListener("click", () => {
        asistencia.style.backgroundColor = colorVerde;
      });
    });

    if (e.target.classList.contains("masInformacion")) {
    }

    // Reinciar tarjeta
    if (e.target.tagName === "I") {

      const tarjeta = e.target.closest('.informacion');

      const botonPr = tarjeta.querySelector('.pagoRealizado');
      const asistenciasPresionada = tarjeta.querySelectorAll('.asistencia')

      asistenciasPresionada.forEach((asistencia) => {
        asistencia.style.backgroundColor = "transparent";
      });

      console.log(asistenciasPresionada )

      botonPr.style.backgroundColor = "#ccc";
      botonPr.style.color = "#000";

    }
  });
});
