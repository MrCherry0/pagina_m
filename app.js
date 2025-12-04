// Contraseña correcta (formato: día y mes)
const CORRECT_PASSWORD = "0312" // Cambia esto a tu fecha (ejemplo: 03/12)

// Base de datos de poemas para cada photocard
const poems = [
  {
    title: "1. Gurren Lagan",
    text: [ 
      "No creas en mí que creo en ti, ",
      "cree en el yo que cree en ti"
    ],
    author: " Kamina",
  },
    {
    title: "2. Pienso que en este momento",
    text: [ 
      "Pienso que en este momento",
      "tal vez nadie en el universo piensa en mí,",
      "que solo yo me pienso",
      "y si ahora muriese,",
      "nadie, ni yo, me pensaría.",
      " ",
      "Y aquí empieza el abismo,",
      "como cuando me duermo.",
      "Soy mi propio sostén y me lo quito.",
      "Contribuyo a tapizar de ausencia todo.",
      " ",
      "Tal vez sea por esto",
      "que pensar en un hombre",
      "se parece a salvarlo."
    ],
    author: "Roberto Juarroz",
  },
  {
    title: "3. Frieren mas haya del viaje",
    text: [ 
      "Todo el que se esfuerza es un guerrero"
    ],
    author: "Eisen",
  },
  {
    title: "4. Te matan",
    text: [ 
      "Te matan y después",
      "piden perdón al cadáver"
    ],
    author: "Gloria Fuentes",
  },
  {
    title: "5. Lo volvería",
    text: [ 
      "Te confieso que",
      "Lo volveria a hacer de nuevo, amor",
      "con lo bueno y con lo malo"
    ],
    author: "Juan Pablo Vega",
  },
  {
    title: "6. Rip PETE",
    text: [ 
      "No es pa' cualquiera",
      "Si fuera fácil, cualquier pеndejo ya lo tuviera",
      "Eso lo dice tu papá y él lo sabе de primera, word"
    ],
    author: "NSQK",
  },
  {
    title: "7. Huracanes",
    text: [ 
      "Te va a destruir de la manera más bella.",
      "Y cuando se vaya,",
      "finalmente entenderás por qué los huracanes",
      "tienen nombres de personas"
    ],
    author: "Mario benedetti",
  },
    {
    title: "8. Vaquero espacial",
    text: [ 
      "Flor de loto y flor de amapola",
      "Más palma de gitana en la cacerola",
      "Me robaste el karma y la camisola",
      "Ladrona de caderas sin usar pistolas"
    ],
    author: "Charles ans",
  },
    {
    title: "9. OWN MY MIND",
    text: [ 
      "In my civilization, you're the king and the queen",
      "I'm praying at your altar if you know what I mean",
      "Yeah, everything I've been missing",
      "You've been serving up in your kitchen",
      "No, I'm not even supеrstitious",
      "But I'm feeling you're something vicious, yeah"
    ],
    author: "Maneskin",
  },
    {
    title: "10. Yo siempre contesto",
    text: [ 
      "Si me muero",
      "Ven a buscarme",
      "Tan pronto tengas otro cuerpo",
      "Y otra forma de mirarme"
    ],
    author: "Latin mafia",
  },
    {
    title: "11. Tengo miedo",
    text: [ 
      "Tengo miedo de morir sin haber",
      "amado bastante"
    ],
    author: "Gloria Fuertes",
  },
    {
    title: "12. Estrellas",
    text: [ 
      "Contigo no necesito",
      "esconder mi pasión",
      "por las estrellas.", 
      "a ti también",
      "te gustan las ",
      "cosas que a",
      "nadie más le interesa."
    ],
    author: "Jaime Sabines",
  },
    {
    title: "13, Mob Psycho 100",
    text: [ 
      "Tener poder no lo soluciona todo.",
      "Hay que vivir eligiendo lo que importa,",
      "porque cada uno es el protagonista de su vida"
    ],
    author: "Mob",
  },
    {
    title: "14. El tiempo que necesites",
    text: [ 
    "Y están en la edad exacta de la desesperación,",
    "ca'ón. O sea, nunca, nunca me sentí más viejo, más acabado que a los veintitantos,",
    "ca'ón, ¿sí? Decía yo: Ya valió madre, ya me pasó la vida, no hice nada;",
    "y por eso estoy aquí para decirles: No, no",
    "y tienen un chingo de tiempo, güey."
    ],
    author: "Guillermo del toro",
  },
  {
    title: "15. No es que muera de amor",
    text: [
      "No es que muera de amor, muero de ti.",
      "Muero de ti, amor, de amor de ti,",
      "de urgencia mía de mi piel de ti,",
      "de mi alma, de ti y de mi boca",
      "y del insoportable que yo soy sin ti.",
        " ",
      "Muero de ti y de mi, muero de ambos,",
      "de nosotros, de ese,",
      "desgarrado, partido,",
      "me muero, te muero, lo morimos.",
        " ",
      "Morimos en mi cuarto en que estoy solo,",
      "en mi cama en que faltas,",
      "en la calle donde mi brazo va vacío,",
      "los lugares donde mi hombro",
      "acostumbra tu cabeza",
      "y mi mano tu mano",
      "y todo yo te sé como yo mismo.",

    ],
    author: "Jaime Sabines",
  },  {
    title: "16. Arcane",
    text: [ 
      "- ¿Alguna vez haz deseado quedarte en un moemnto?",
      "- A veces para dar un paso hacia delante",
      "hay que dejar cosas en el pasado",
      "- ¿Podemos hacer de cuenta que es la primera vez?"
    ],
    author: "Ekko y Powder",
  },
    {
    title: "17. Estuve pensando",
    text: [ 
      "Estuve pensando que nadie me",
      "piensa. Que estoy absolutamente",
      "sola. Que nadie, nadie siente mi",
      "rostro dentro de si ni mi nombre",
      "correr por su sangre. Nadie actúa",
      "invocándome, nadie construye su",
      "vida incluyéndome. He pensado",
      "tanto en estas cosas"
    ],
    author: "Alejandra Pizarnik",
  },
    {
    title: "18. Mi foto fav",
    text: [ 
      "Eres tan bonita",
      "que eso es lo de menos"
    ],
    author: "A.",
  },
    {
    title: "19. La sociedad de los poetas muertos",
    text: [ 
      "No leemos ni escribimos poesía porque sea bonita.",
      "Leemos y escribimos poesía porque somos miembros de la raza humana.",
      "Y la raza humana está llena de pasión.",
      "Y la medicina, el derecho, los negocios,",
      "la ingeniería, son actividades nobles y necesarias para la vida.",
      "Pero la poesía, la belleza, el romanticismo, el amor,",
      "son las cosas que nos mantienen vivos"
    ],
    author: "Robin Williams",
  },
  {
    title: "20. Espero existan mas personas como tu",
    text: [ 
      "Este es un mensaje mio",
      "Ultimamente pense que existen personas",
      "que me recuerdan que vale la pena conocer personas",
      "quiero que sepas que tu existencia es una de esas personas",
      "a veces no se escribir muy bien espero se entienda la idea"
    ],
    author: "Jose (cherry)",
  }
]

async function loadPhotocards() {
  const grid = document.getElementById("photocards-grid")

  // Array de imágenes desde la carpeta photocards
  // Ajusta las rutas según tu estructura de carpetas
  const imageUrls = [
    "photocards/merli_1.jpeg",
    "photocards/merli_2.jpeg",
    "photocards/merli_3.jpeg",
    "photocards/merli_4.jpeg",
    "photocards/merli_5.jpeg",
    "photocards/merli_6.jpeg",
    "photocards/merli_7.jpeg",
    "photocards/merli_8.jpeg",
    "photocards/merli_9.jpeg",
    "photocards/merli_10.jpeg",
    "photocards/merli_11.jpeg",
    "photocards/merli_12.jpeg",
    "photocards/merli_13.jpeg",
    "photocards/merli_14.jpeg",
    "photocards/merli_15.jpeg",
    "photocards/merli_16.jpeg",
    "photocards/merli_17.jpeg",
    "photocards/merli_18.jpeg",
    "photocards/merli_19.jpeg",
    "photocards/merli_20.jpeg",
  ]

  // Generar photocards dinámicamente
  imageUrls.forEach((imageUrl, index) => {
    const photocard = document.createElement("div")
    photocard.className = "photocard"
    photocard.onclick = () => openPhotocard(index)

    photocard.innerHTML = `
            <div class="photocard-frame">
                <img src="${imageUrl}" alt="Photocard ${index + 1}" onerror="this.src='https://via.placeholder.com/300x350?text=Photo+${index + 1}'">
                <div class="heart">❤</div>
            </div>
        `

    grid.appendChild(photocard)
  })
}

function setHeroBackground() {
  const heroBackground = document.getElementById("heroBackground")
  // Cambia la URL a tu imagen de fondo preferida
  heroBackground.style.backgroundImage = "url('nube.png')"
}

// Función para verificar la contraseña en index.html
function checkPassword() {
  const input = document.getElementById("passwordInput")
  const errorMessage = document.getElementById("errorMessage")
  const password = input.value

  if (password === CORRECT_PASSWORD) {
    // Contraseña correcta, redirigir a home
    window.location.href = "home.html"
  } else {
    // Contraseña incorrecta
    errorMessage.textContent = "Son 4 dígitos xx/xx día y mes"
    errorMessage.style.display = "block"
    input.value = ""

    // Animación de error
    input.classList.add("shake")
    setTimeout(() => {
      input.classList.remove("shake")
    }, 500)
  }
}

// Permitir presionar Enter para enviar
if (document.getElementById("passwordInput")) {
  document.getElementById("passwordInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      checkPassword()
    }
  })
}

// Funciones para las photocards en home.html
function openPhotocard(cardNumber) {
  const modal = document.getElementById("photocardModal")
  const modalImg = document.getElementById("modalImage")
  const poemTitle = document.getElementById("poemTitle")
  const poemText = document.getElementById("poemText")
  const poemAuthor = document.getElementById("poemAuthor")

  // Obtener la imagen de la photocard clicada
  const photocards = document.querySelectorAll(".photocard img")
  const clickedImg = photocards[cardNumber]

  // Obtener el poema correspondiente
  const poem = poems[cardNumber]

  // Actualizar contenido del modal
  modalImg.src = clickedImg.src
  poemTitle.textContent = poem.title
  poemText.innerHTML = poem.text.map((line) => `<p>${line}</p>`).join("")
  poemAuthor.textContent = poem.author

  modal.style.display = "flex"

  // Prevenir que el body haga scroll
  document.body.style.overflow = "hidden"
}

function closePhotocard() {
  const modal = document.getElementById("photocardModal")
  modal.style.display = "none"
  document.body.style.overflow = "auto"
}

// Cerrar modal con tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePhotocard()
  }
})

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("photocards-grid")) {
    loadPhotocards()
    setHeroBackground()
  }
})
