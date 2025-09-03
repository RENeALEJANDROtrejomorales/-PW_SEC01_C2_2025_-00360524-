let columnasVerticales = false;
let tituloCambiado = false;
let colorCambiado = false;
let imagenAgregada = false;

// 1️⃣ Ordenar columnas
function OrdenarContenido() {
  const columnas = document.querySelector('.Columnas');
  if (!columnasVerticales) {
    columnas.style.flexDirection = 'column';
    columnasVerticales = true;
  } else {
    columnas.style.flexDirection = 'row';
    columnasVerticales = false;
  }
}

// 2️⃣ Cambiar título
function CambiarTitulo() {
  const titulo = document.querySelector('h1');
  if (!tituloCambiado) {
    titulo.textContent = 'Dominando HTML y CSS desde cero';
    tituloCambiado = true;
  } else {
    titulo.textContent = 'HTML & CSS: Curso práctico avanzado';
    tituloCambiado = false;
  }
}

// 3️⃣ Cambiar colores
function CambiarColor() {
  const subtitulo = document.querySelector('.subtitulo h2');
  const texto = document.querySelector('.textoDescriptivo p');

  if (!colorCambiado) {
    subtitulo.style.color = '#1000f7ff'; // azul
    texto.style.color = '#0019faff';     // azul oscuro
    colorCambiado = true;
  } else {
    subtitulo.style.color = ''; // vuelve al color original (CSS)
    texto.style.color = '';
    colorCambiado = false;
  }
}

// 4️⃣ Agregar imagen debajo de los Datos del libro
function agregarImagen() {
  if (!imagenAgregada) {
    const seccionDatos = document.querySelectorAll('main section')[2]; // sección de Datos del libro
    const nuevaImagen = document.createElement('img');
    nuevaImagen.src = 'Imagen.jpg'; // puedes cambiar por URL si deseas
    nuevaImagen.alt = 'Imagen relacionada al libro';
    nuevaImagen.style.maxWidth = '300px';
    nuevaImagen.style.display = 'block';
    nuevaImagen.style.margin = '10px auto';
    nuevaImagen.style.border = '1px solid #ccc';
    seccionDatos.appendChild(nuevaImagen);
    imagenAgregada = true;
  } else {
    // Si ya está agregada, opcionalmente se puede ocultar
    const seccionDatos = document.querySelectorAll('main section')[2];
    const img = seccionDatos.querySelector('img');
    if (img.style.display === 'none') {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  }
}
