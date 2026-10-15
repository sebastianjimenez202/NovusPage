/* ==================================================================
   MAIN.JS  -  DIBUJA LA PÁGINA USANDO LOS DATOS DE datos.js
   ==================================================================
   Normalmente NO hay que editar este archivo. Solo se toca si se
   quiere cambiar la estructura de una tarjeta (por ejemplo, agregar
   un campo nuevo como "año" o "cliente").
   ================================================================== */

/* Protege la página: convierte caracteres especiales (< > & ") en texto
   seguro, para que un dato mal escrito no rompa el HTML. */
function esc(texto) {
  return String(texto).replace(/[&<>"]/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

/* Atajo: busca un elemento de la página por su id */
const $ = id => document.getElementById(id);

/* ---------- Texto principal ---------- */
$("hero-texto").textContent = DATOS.heroTexto;

/* ---------- Servicios ---------- */
$("lista-servicios").innerHTML = DATOS.servicios.map(s => `
  <div class="service">
    <h3>${esc(s.titulo)}</h3>
    <p>${esc(s.texto)}</p>
  </div>`).join("");

/* ---------- Proyectos ---------- */
$("lista-proyectos").innerHTML = DATOS.proyectos.map(p => {
  /* Si hay imagen la muestra; si no, usa el nombre sobre un fondo de color */
  const captura = p.imagen
    ? `<img src="${esc(p.imagen)}" alt="Captura del proyecto ${esc(p.nombre)}" loading="lazy">`
    : `<span>${esc(p.nombre)}</span>`;

  /* El botón solo aparece si el proyecto tiene enlace */
  const boton = p.enlace
    ? `<a class="card-link" href="${esc(p.enlace)}" target="_blank" rel="noopener">${esc(p.enlaceTexto || "Ver proyecto")}</a>`
    : "";

  return `
    <article class="card">
      <div class="card-shot">${captura}</div>
      <div class="card-body">
        <h3>${esc(p.nombre)}</h3>
        <p>${esc(p.descripcion)}</p>
        <ul class="tags">${p.tecnologias.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
        ${boton}
      </div>
    </article>`;
}).join("");

/* ---------- Equipo ---------- */
$("lista-equipo").innerHTML = DATOS.equipo.map(m => {
  /* Las iniciales se generan solas a partir del nombre */
  const iniciales = m.nombre.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase();
  const nombre = m.enlace
    ? `<a href="${esc(m.enlace)}" target="_blank" rel="noopener">${esc(m.nombre)}</a>`
    : esc(m.nombre);
  return `
    <div class="member">
      <div class="avatar" aria-hidden="true">${esc(iniciales)}</div>
      <strong>${nombre}</strong>
      <span>${esc(m.rol)}</span>
    </div>`;
}).join("");

/* ---------- Contacto ---------- */
const correo = $("contacto-correo");
correo.href = "mailto:" + DATOS.correo;
correo.textContent = DATOS.correo;

$("contacto-redes").innerHTML = DATOS.redes.map(r =>
  `<a href="${esc(r.enlace)}" target="_blank" rel="noopener">${esc(r.nombre)}</a>`).join("");

/* ---------- Año del pie de página (se actualiza solo) ---------- */
$("anio").textContent = new Date().getFullYear();
