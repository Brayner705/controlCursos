import { guardarDatos, obtenerDatos, crearTarjeta } from "./scripts/saveDates.js";

const agregar = document.getElementById("agregar");
const modal = document.querySelector(".modal");
const modalPago = document.querySelector(".modalPago");
const exitAgregar = document.getElementById("salirAgregar");
const contRegistro = document.querySelector(".registros");

const colorVerde = "#008f39";
const colorAmarillo = "#FFDE21";

window.addEventListener('load', ()=>{
  obtenerDatos();
  const cargarDatos = JSON.parse(sessionStorage .getItem('datosDB'))
  try{
    cargarDatos.forEach(card => {
      contRegistro.appendChild(crearTarjeta(card.nombre,card.curso));
    });
  } catch(e){
    console.error('No existen registros guardados');
  }
})

agregar.addEventListener("click", () => {
  modal.style.display = "grid";
});

exitAgregar.addEventListener("click", () => {
  document.getElementById("nombre").value = "";
  document.getElementById("curso").value = "";
  modal.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("agregarTarjeta").addEventListener("click", (e) => {
    e.preventDefault();

    if (document.getElementById("nombre").value.trim() != "" && document.getElementById('curso').value.trim() != "") {
      const nombre = document.getElementById("nombre").value;
      const curso = document.getElementById("curso").value;

      modal.style.display = "none";

      contRegistro.appendChild(crearTarjeta(nombre, curso));

      guardarDatos(nombre,curso);

      document.getElementById("nombre").value = "";
      document.getElementById("curso").value = "";

    }else alert('Ambos campos son requeridos');

  });

  contRegistro.addEventListener("click", (e) => {

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
      const tarjeta = e.target.closest(".informacion");

      const botonPr = tarjeta.querySelector(".pagoRealizado");
      const asistenciasPresionada = tarjeta.querySelectorAll(".asistencia");

      asistenciasPresionada.forEach((asistencia) => {
        asistencia.style.backgroundColor = "transparent";
      });

      console.log(asistenciasPresionada);

      botonPr.style.backgroundColor = "#ccc";
      botonPr.style.color = "#000";
    }
  });
});