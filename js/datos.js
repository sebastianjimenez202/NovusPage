/* ==================================================================
   DATOS.JS  -  AQUÍ SE EDITA EL CONTENIDO DE LA PÁGINA
   ==================================================================
   Este es el único archivo que el equipo necesita modificar para
   publicar proyectos nuevos, cambiar integrantes o actualizar el
   contacto. No hace falta tocar el HTML ni el CSS.

   REGLAS PARA NO ROMPER LA PÁGINA:
   1. Cada texto va entre comillas: "así".
   2. Entre un bloque { } y el siguiente va una COMA.
   3. Si un campo no aplica, déjalo vacío: "" (no lo borres).
   4. Después de editar, abre la página y revisa que se vea bien.
   ================================================================== */

const DATOS = {

  /* ---------- TEXTO PRINCIPAL (debajo del título) ---------- */
  heroTexto: "Desarrollamos software, páginas web y automatizaciones para que tu idea o tu negocio funcione mejor.",

  /* ---------- SERVICIOS ----------
     Para agregar uno: copia un bloque { } completo y cambia los textos. */
  servicios: [
    { titulo: "Desarrollo web",       texto: "Páginas, tiendas y aplicaciones web rápidas y fáciles de mantener." },
    { titulo: "Software a la medida", texto: "Herramientas que resuelven un problema concreto de tu operación." },
    { titulo: "Automatización",       texto: "Conectamos sistemas y eliminamos tareas repetitivas." },
    { titulo: "Asesoría técnica",     texto: "Te ayudamos a elegir la tecnología correcta antes de invertir." }
  ],

  /* ---------- PROYECTOS ----------
     Para agregar uno: copia un bloque { } completo, pégalo y cambia los datos.
       nombre       -> título de la tarjeta
       descripcion  -> 1 o 2 frases: qué problema resolvió y para quién
       tecnologias  -> lista entre corchetes, cada una entre comillas
       imagen       -> ruta de la captura. Ej: "img/proyectos/mi-proyecto.png"
                       (guarda la imagen en la carpeta img/proyectos/).
                       Si lo dejas "", se muestra un bloque de color.
       enlace       -> URL del proyecto o repositorio. Si lo dejas "", no sale botón.
       enlaceTexto  -> texto del botón. Ej: "Ver demo" o "Ver código" */
  proyectos: [
    {
      nombre: "Proyecto de ejemplo 1",
      descripcion: "Describe en dos líneas qué problema resolvió y para quién.",
      tecnologias: ["Python", "API REST", "PostgreSQL"],
      imagen: "",
      enlace: "",
      enlaceTexto: "Ver proyecto"
    },
    {
      nombre: "Proyecto de ejemplo 2",
      descripcion: "Otro proyecto: qué hace y qué resultado dio.",
      tecnologias: ["React", "Node.js"],
      imagen: "",
      enlace: "",
      enlaceTexto: "Ver proyecto"
    },
    {
      nombre: "Proyecto de ejemplo 3",
      descripcion: "Un tercer proyecto para mostrar variedad.",
      tecnologias: ["IoT", "Arduino"],
      imagen: "",
      enlace: "",
      enlaceTexto: "Ver proyecto"
    }
  ],

  /* ---------- EQUIPO ----------
     nombre -> nombre completo
     rol    -> ej: "Desarrollo backend"
     enlace -> LinkedIn o GitHub de la persona (o "" si no quiere ponerlo) */
  equipo: [
    { nombre: "Nombre Apellido", rol: "Desarrollo",      enlace: "" },
    { nombre: "Nombre Apellido", rol: "Diseño",          enlace: "" },
    { nombre: "Nombre Apellido", rol: "Infraestructura", enlace: "" }
  ],

  /* ---------- CONTACTO ---------- */
  correo: "contacto@novusworks.com",

  /* Redes sociales: agrega o quita líneas. Si no tienen, deja la lista vacía: [] */
  redes: [
    { nombre: "GitHub",   enlace: "https://github.com/" },
    { nombre: "LinkedIn", enlace: "https://www.linkedin.com/" }
  ]
};
