import type { Locale } from "@/lib/locale";

const es = {
  metadata: {
    title: "José Luis Rivera Viera | Portafolio",
    description: "José Luis Rivera Viera. Desarrollo de software multiplataforma, aplicaciones web y proyectos con propósito. Explora mi trabajo, experiencia y formación.",
  },
  common: { newTab: "abre en una nueva pestaña", close: "Cerrar", image: "imagen", video: "Video" },
  navigation: { skip: "Saltar al contenido", home: "JLRV.dev, inicio", label: "Navegación principal", projects: "Proyectos", about: "Sobre mí", contact: "Hablemos" },
  preferences: { label: "Preferencias de visualización", language: "Idioma", light: "Activar modo claro", dark: "Activar modo oscuro", updating: "Cambiando idioma…" },
  hero: {
    role: "Desarrollo software, de la idea a la experiencia.",
    description: "Soy desarrollador de software multiplataforma. Construyo aplicaciones web, conecto APIs y doy forma a productos que resuelven problemas reales.",
    projects: "Ver proyectos", connect: "Conectemos", availability: "Disponible para proyectos", portraitCaption: "Ideas que se convierten en código.", github: "GitHub de José Luis",
  },
  projects: { heading: "Proyectos seleccionados", intro: "Productos, colaboración y código.", selection: "Una selección de mi trabajo.", explore: "Explorar", gallery: "Explorar proyecto", galleryVideo: "Ver galería y video", visit: "Visitar sitio", site: "Ver sitio de", view: "Ver" },
  about: {
    heading: "La curiosidad, como punto de partida",
    paragraphs: [
      "Me gusta entender qué hay detrás de las cosas: qué las hace funcionar y cómo podrían funcionar mejor. Esa curiosidad me acercó al software y se convirtió en una manera de transformar preguntas en soluciones.",
      "Disfruto pasar de una idea a algo que alguien pueda usar. Empiezo por escuchar y entender el problema; después conecto diseño, código y datos. Me mueve aprender en el proceso, compartir lo que descubro y construir en equipo.",
    ],
    strengthsLabel: "Mi forma de trabajar",
    strengths: [
      { title: "Resolver con criterio", description: "Descomponer un reto, entender sus causas y elegir soluciones que se puedan mantener." },
      { title: "Aprender para avanzar", description: "Explorar herramientas, experimentar y adaptar lo aprendido a cada proyecto." },
      { title: "Construir en equipo", description: "Escuchar, comunicar ideas con claridad y cuidar el trabajo compartido." },
      { title: "Diseñar para las personas", description: "Buscar flujos claros e interfaces que ayuden a hacer las cosas con menos fricción." },
    ],
    technologies: "Tecnologías con las que trabajo",
    background: "Experiencia y formación", experience: "Experiencia", education: "Formación",
    jobs: [
      {
        title: "Konansa · Wallavi", role: "Desarrollador web · Estadía profesional", date: "Mayo — septiembre de 2025",
        points: [
          "Implementé tres módulos de presupuestos personales en producción con Next.js, React y MySQL, dentro de una arquitectura serverless.",
          "Integré APIs REST y persistencia en base de datos para actualizar la información de los presupuestos en tiempo real.",
          "Colaboré en un equipo de cinco personas, con sprints ágiles, control de versiones en Git/GitHub y entregas a producción.",
        ],
      },
      {
        title: "Orientación vocacional · UT de la Costa", role: "Desarrollo de plataforma web", date: "Septiembre — diciembre de 2025",
        points: [
          "Desarrollé una plataforma con Laravel, React e Inertia.js para gestionar y analizar encuestas, adoptada por el departamento de psicología.",
          "Automaticé reportes PDF con jsPDF e incorporé filtros, clasificación de carreras, autenticación y bitácora de accesos en MySQL.",
        ],
      },
      {
        title: "Civix · ExpoCiencias", role: "Desarrollo de producto · Proyecto académico", date: "Mayo de 2026",
        points: [
          "Construí una PWA de reportes ciudadanos con Next.js y React, geolocalización, evidencia fotográfica y seguimiento en tiempo real.",
          "Desarrollé el backend con Express y PostgreSQL e integré IA para validar evidencias. El proyecto obtuvo pase nacional en ExpoCiencias 2026.",
        ],
      },
    ],
    studies: [
      { title: "Ingeniería en Desarrollo y Gestión de Software", school: "Universidad Tecnológica de la Costa", date: "En curso · Egreso previsto: abril de 2027", description: "Continúo mi formación en ingeniería y la conecto con el desarrollo de aplicaciones, la integración de servicios y el trabajo en proyectos reales." },
      { title: "TSU en Desarrollo de Software Multiplataforma", school: "Universidad Tecnológica de la Costa", date: "2023 — 2025", description: "Formación técnica en desarrollo de software multiplataforma, aplicada a proyectos web, bases de datos e integración de APIs." },
    ],
  },
  contact: { question: "¿Tienes una idea?", heading: "Hablemos.", intro: "Cuéntame sobre tu proyecto.", description: "Me gustaría conocerlo y darle forma contigo.", linkedin: "También me encuentras en LinkedIn" },
  form: {
    label: "Enviar un mensaje a José Luis", name: "Nombre", namePlaceholder: "Tu nombre completo", email: "Correo electrónico", emailPlaceholder: "ejemplo@correo.com", message: "Mensaje", messagePlaceholder: "Escribe tu mensaje aquí…", submit: "Enviar mensaje", sending: "Enviando tu mensaje…",
    sent: "¡Mensaje enviado! Gracias por escribirme.", successTitle: "¡Mensaje enviado con éxito!", successDescription: "Gracias por contactarme. Te responderé lo antes posible.",
    sendError: "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme por LinkedIn.", errorTitle: "No se pudo enviar", errorDescription: "Inténtalo de nuevo o contáctame por LinkedIn.",
    networkError: "No se pudo conectar. Revisa tu conexión e inténtalo de nuevo.", networkTitle: "Error de conexión", networkDescription: "No se pudo conectar con el servidor.",
  },
  gallery: {
    open: "Ver galería", about: "Sobre el proyecto", content: "Contenido del proyecto", images: "Imágenes", filters: "Filtrar imágenes por vista", all: "Todas", region: "Imágenes de", keyboard: "Usa las flechas izquierda y derecha para navegar.",
    zoom: "Ampliar", zoomImage: "Ampliar imagen", previous: "Imagen anterior", next: "Imagen siguiente", select: "Seleccionar imagen", view: "Ver", empty: "Todavía no hay imágenes para este proyecto.", historical: "Presentaciones visuales y una captura histórica del proyecto.", videoTitle: "Video de presentación de", youtube: "Ver en YouTube", notifications: "Notificaciones",
  },
  footer: "Desarrollo de software, con propósito.",
};

export type Messages = typeof es;

const en: Messages = {
  metadata: {
    title: "José Luis Rivera Viera | Portfolio",
    description: "José Luis Rivera Viera. Multiplatform software development, web applications and purposeful projects. Explore my work, experience and education.",
  },
  common: { newTab: "opens in a new tab", close: "Close", image: "image", video: "Video" },
  navigation: { skip: "Skip to content", home: "JLRV.dev, home", label: "Main navigation", projects: "Projects", about: "About me", contact: "Let's talk" },
  preferences: { label: "Display preferences", language: "Language", light: "Switch to light mode", dark: "Switch to dark mode", updating: "Changing language…" },
  hero: {
    role: "Building software, from idea to experience.",
    description: "I'm a multiplatform software developer. I build web applications, connect APIs and shape products that solve real problems.",
    projects: "View projects", connect: "Let's connect", availability: "Available for projects", portraitCaption: "Ideas brought to life through code.", github: "José Luis on GitHub",
  },
  projects: { heading: "Selected projects", intro: "Products, collaboration and code.", selection: "A selection of my work.", explore: "Explore", gallery: "Explore project", galleryVideo: "View gallery and video", visit: "Visit website", site: "Visit website for", view: "View" },
  about: {
    heading: "It starts with curiosity",
    paragraphs: [
      "I like understanding what makes things work and how they could work better. That curiosity drew me to software and became a way to turn questions into solutions.",
      "I enjoy taking an idea and turning it into something people can use. I start by listening and understanding the problem, then bring design, code and data together. Learning along the way, sharing what I discover and building with others keep me moving forward.",
    ],
    strengthsLabel: "How I approach my work",
    strengths: [
      { title: "Thoughtful problem solving", description: "Break challenges down, understand their causes and choose solutions that are maintainable." },
      { title: "Learning with purpose", description: "Explore tools, experiment and put new knowledge to work in each project." },
      { title: "Building together", description: "Listen, communicate ideas clearly and take care of our shared work." },
      { title: "Designing for people", description: "Create clear flows and interfaces that help people get things done with less friction." },
    ],
    technologies: "Technologies I work with",
    background: "Experience and education", experience: "Experience", education: "Education",
    jobs: [
      {
        title: "Konansa · Wallavi", role: "Web developer · Professional internship", date: "May — September 2025",
        points: [
          "Implemented three personal budgeting modules in production using Next.js, React and MySQL within a serverless architecture.",
          "Integrated REST APIs and database persistence to keep budget information up to date in real time.",
          "Collaborated with a team of five through agile sprints, Git/GitHub version control and production releases.",
        ],
      },
      {
        title: "Career guidance · UT de la Costa", role: "Web platform development", date: "September — December 2025",
        points: [
          "Developed a survey management and analysis platform with Laravel, React and Inertia.js, adopted by the psychology department.",
          "Automated PDF reports with jsPDF and added filters, degree classification, authentication and MySQL access logs.",
        ],
      },
      {
        title: "Civix · ExpoCiencias", role: "Product development · Academic project", date: "May 2026",
        points: [
          "Built a citizen reporting PWA with Next.js and React, geolocation, photo evidence and real-time report tracking.",
          "Developed the Express and PostgreSQL backend and integrated AI to validate evidence. The project qualified for the national ExpoCiencias 2026 event.",
        ],
      },
    ],
    studies: [
      { title: "Engineering in Software Development and Management", school: "Universidad Tecnológica de la Costa", date: "In progress · Expected graduation: April 2027", description: "I'm continuing my engineering education and applying it to application development, service integration and hands-on projects." },
      { title: "Higher University Technician in Multiplatform Software Development", school: "Universidad Tecnológica de la Costa", date: "2023 — 2025", description: "Technical education in multiplatform software development, applied to web projects, databases and API integration." },
    ],
  },
  contact: { question: "Have an idea?", heading: "Let's talk.", intro: "Tell me about your project.", description: "I'd love to learn about it and help bring it to life.", linkedin: "You can also find me on LinkedIn" },
  form: {
    label: "Send José Luis a message", name: "Name", namePlaceholder: "Your full name", email: "Email address", emailPlaceholder: "you@example.com", message: "Message", messagePlaceholder: "Write your message here…", submit: "Send message", sending: "Sending your message…",
    sent: "Message sent! Thanks for reaching out.", successTitle: "Message sent successfully!", successDescription: "Thanks for getting in touch. I'll reply as soon as possible.",
    sendError: "Your message couldn't be sent. Please try again or contact me on LinkedIn.", errorTitle: "Message couldn't be sent", errorDescription: "Please try again or contact me on LinkedIn.",
    networkError: "Couldn't connect. Check your connection and try again.", networkTitle: "Connection error", networkDescription: "Couldn't connect to the server.",
  },
  gallery: {
    open: "View gallery", about: "About the project", content: "Project content", images: "Images", filters: "Filter images by view", all: "All", region: "Images of", keyboard: "Use the left and right arrow keys to browse.",
    zoom: "Enlarge", zoomImage: "Enlarge image", previous: "Previous image", next: "Next image", select: "Select an image", view: "View", empty: "There are no images for this project yet.", historical: "Visual presentations and a historical screenshot of the project.", videoTitle: "Presentation video for", youtube: "Watch on YouTube", notifications: "Notifications",
  },
  footer: "Software development, with purpose.",
};

export const messages: Record<Locale, Messages> = { es, en };
