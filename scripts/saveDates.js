let datosGuardar = [];

export const guardarDatos = (nombre, curso) => {
  // hacia la base de datos

  let objetoDatos = { nombre: nombre, cursoTomado: curso };

  const url = "http://localhost:8000/api/dataPost";

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(objetoDatos),
  })
    .then((response) => response.json())
    .then((res) => console.log(res));
};

export const obtenerDatos = () => {
  const url = "http://localhost:8000/api/data";
  let datos;

  fetch(url)
    .then((response) => response.json())
    .then((res) => {
      sessionStorage.setItem("datosDB", JSON.stringify(res));
    })
    .catch((err) => console.log("Ha ocurrido un error: ", err));
};

export const crearTarjeta = (nombre, curso) => {
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
  return card;
};

export const cargarDatosAlmacenados = () => {};
