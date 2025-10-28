// --- Datos de consejos o tipos de ansiedad digital ---
const productos = [
  {
    id: 1,
    nombre: "Nomofobia",
    categoria: "bienestar",
    descripcion:
      "Ansiedad al no tener el celular cerca o estar sin conexión. Provoca inquietud, estrés y necesidad constante de revisar el teléfono.",
  },
  {
    id: 2,
    nombre: "FOMO (Fear of Missing Out)",
    categoria: "organizacion",
    descripcion:
      "Miedo a perderse de algo en redes sociales. Las personas sienten ansiedad si no revisan constantemente las notificaciones.",
    
  },
  {
    id: 3,
    nombre: "Doomscrolling",
    categoria: "descanso",
    descripcion:
      "Hábito de desplazarse por noticias negativas en redes sociales sin poder detenerse. Aumenta el estrés y afecta el sueño.",
    
  },
  {
    id: 4,
    nombre: "Sobrecarga Informativa",
    categoria: "organizacion",
    descripcion:
      "Exceso de información digital que provoca dificultad para concentrarse y fatiga mental.",
    
  },
  {
    id: 5,
    nombre: "Dependencia de Validación",
    categoria: "bienestar",
    descripcion:
      "Necesidad de obtener 'likes' o comentarios positivos para sentirse valioso. Afecta la autoestima y el bienestar emocional.",
    
  },
  {
    id: 6,
    nombre: "Insomnio Tecnológico",
    categoria: "descanso",
    descripcion:
      "Uso del celular o pantallas antes de dormir que altera el ciclo del sueño por la luz azul y el exceso de estímulos.",
    
  },
];
// Obtener los contenedores y botones del DOM
const perrosContainer = document.getElementById("perros-container");
const filterButtons = document.querySelectorAll(".filter-btn");

// Función para renderizar las tarjetas de los perros
function renderPerros(genero) {
    let perrosToRender = [];
    if (genero === "all") {
        perrosToRender = perros;
    } else {
        perrosToRender = perros.filter(perro => perro.genero === genero);
    }

    // Limpia el contenedor antes de renderizar
    perrosContainer.innerHTML = '';

    if (!perrosToRender || perrosToRender.length === 0) {
        perrosContainer.innerHTML = '<p class="text-center w-100">No hay perritos disponibles para esta categoría.</p>';
        return;
    }

    // Crea y agrega las tarjetas de los perros
    perrosToRender.forEach(perro => {
        const cardHtml = `
            <figure class="perro-card" data-gender="${perro.genero}">
                <img src="${perro.image}" alt="Perro en adopción, nombre: ${perro.name}">
                <figcaption>
                ${perro.name}
            </figcaption>
                <div class="card-description">
                    <p>${perro.description}</p>
                </div>
            </figure>
        `;
        perrosContainer.innerHTML += cardHtml;
    });
}

// Agrega event listeners a los botones de filtro
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const genero = button.dataset.category;

        // Remueve la clase 'active' de todos los botones
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // Agrega la clase 'active' al botón clickeado
        button.classList.add("active");
        
        // Renderiza las tarjetas con el filtro seleccionado
        renderPerros(genero);
    });
});

// Renderizar todos los perros al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    renderPerros('all');
});

// Función para el botón de volver al inicio
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// --- Datos de consejos o tipos de ansiedad digital ---
document.addEventListener('DOMContentLoaded', () => {
  // Datos de consejos
  const consejos = [
    { id: 1, title: 'Pausas regulares', category: 'descanso', text: 'Haz pequeños descansos cada hora: levántate, estira y mira a lo lejos.',  },
    { id: 2, title: 'Modo no molestar', category: 'organizacion', text: 'Configura periodos sin notificaciones para trabajar o descansar.',  },
    { id: 3, title: 'Rutina de sueño', category: 'bienestar', text: 'Apaga pantallas 1 hora antes de dormir y mantén horarios regulares.',  },
    { id: 4, title: 'Regla 20-20-20', category: 'descanso', text: 'Cada 20 minutos mira algo a 6 m de distancia por 20 segundos.',  },
    { id: 5, title: 'Lista de tareas', category: 'organizacion', text: 'Usa listas breves para concentrarte en lo importante y reducir ansiedad.',  },
    { id: 6, title: 'Respiración consciente', category: 'bienestar', text: 'Practica 5 minutos de respiración lenta cuando sientas tensión.',  }
  ];

  // Selectores del DOM (comprobar que existan en el HTML)
  const container = document.getElementById('consejos-container');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!container) {
    console.warn('No se encontró #consejos-container en el DOM.');
    return;
  }

  // Fallback genérico para imágenes que no carguen
  const placeholder = 'IMG/placeholder.png'; // crea este archivo o cambia por uno existente

  function createCard(c) {
    const article = document.createElement('article');
    article.className = 'consejo-card';
    article.dataset.category = c.category;

    // Imagen con fallback
    const img = document.createElement('img');
    img.alt = c.title;
    img.src = c.image || placeholder;
    img.onerror = () => { img.src = placeholder; };
    img.className = 'consejo-img';

    const h4 = document.createElement('h4');
    h4.textContent = c.title;

    const p = document.createElement('p');
    p.textContent = c.text;

    article.appendChild(img);
    article.appendChild(h4);
    article.appendChild(p);

    return article;
  }

  function render(list) {
    container.innerHTML = '';
    if (!list || list.length === 0) {
      container.innerHTML = '<p>No hay elementos para esta categoría.</p>';
      return;
    }
    const fragment = document.createDocumentFragment();
    list.forEach(c => fragment.appendChild(createCard(c)));
    container.appendChild(fragment);
  }

  // Inicializar mostrando todos
  render(consejos);

  // Conectar botones de filtro (si existen)
  if (filterBtns && filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.dataset.category;
        const filtered = (cat === 'all') ? consejos : consejos.filter(item => item.category === cat);
        render(filtered);
      });
    });
  } else {
    console.warn('No se encontraron botones .filter-btn en el DOM.');
  }

  // Botón volver arriba (si existe en HTML usa la función global)
  window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
});