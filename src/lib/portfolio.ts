import type { ProjectImage } from "@/components/project-modal";

export interface PortfolioProject {
  title: string;
  category: string;
  image: string;
  alt: string;
  description: string;
  href?: string;
  recognition?: string;
  stack?: string[];
  images?: ProjectImage[];
  videoId?: string;
  sourceNote?: string;
  screens?: string[];
  tone?: "civix" | "armonyx" | "antoja";
}

export const socialLinks = {
  github: "https://github.com/JoseLuisRiveraViera",
  linkedin: "https://www.linkedin.com/in/jose-luis-rivera-viera/",
};

export const konansaVideoId = "m_L6e_WbdYo";

export const konansaImages = [
  {
    src: "/imagenes/konansa/producto-v2.webp",
    alt: "Presentación recompuesta de las interfaces móviles originales de Konansa y su asistente",
    caption: "La experiencia móvil",
    note: "Composición de presentación",
  },
  {
    src: "/imagenes/konansa/panel-v2.webp",
    alt: "Presentación recompuesta de Konansa con los paneles originales en laptop, tablet y teléfono",
    caption: "El panel financiero",
    note: "Composición de presentación",
  },
  {
    src: "/imagenes/konansa.png",
    alt: "Captura conservada de la antigua página de presentación de Konansa",
    caption: "La página original",
  },
];

export const projects: PortfolioProject[] = [
  {
    title: "Civix",
    category: "PWA · Reportes ciudadanos",
    image: "/imagenes/civix/inicio.webp",
    alt: "Civix en móvil: inicio ciudadano y mapa de riesgo urbano",
    description: "PWA de reportes ciudadanos construida con Next.js, React y TypeScript. Integra geolocalización, evidencia fotográfica, apoyo vecinal y seguimiento de incidencias. El backend en Express y PostgreSQL organiza los reportes por zona y alimenta un índice de riesgo urbano; la validación de fotografías incorpora inteligencia artificial.",
    recognition: "Pase nacional en ExpoCiencias 2026",
    stack: ["Next.js", "React", "TypeScript", "Express", "PostgreSQL"],
    screens: ["/imagenes/civix/inicio.webp", "/imagenes/civix/mapa.webp"],
    tone: "civix",
    sourceNote: "Interfaz móvil original con datos del entorno local de demostración: mapa, filtros, detalle y seguimiento de reportes.",
    images: [
      { src: "/imagenes/civix/inicio.webp", alt: "Inicio de Civix con el índice de riesgo de la colonia y reportes cercanos", caption: "El riesgo de tu zona, a primera vista", format: "portrait" },
      { src: "/imagenes/civix/mapa.webp", alt: "Mapa móvil de Civix con reportes geolocalizados y filtros por categoría", caption: "Reportes sobre el territorio", format: "portrait" },
      { src: "/imagenes/civix/mapa-agua-v5.webp", alt: "Mapa de Civix con el filtro Agua activo y reportes del entorno local", caption: "Filtra lo que pasa en tu ciudad", format: "portrait" },
      { src: "/imagenes/civix/mapa-detalle-v5.webp", alt: "Incidencia seleccionada en el mapa con su categoría, estado, riesgo y acceso al detalle", caption: "Del mapa al reporte", format: "portrait" },
      { src: "/imagenes/civix/detalle-v5.webp", alt: "Detalle de un reporte de falta de agua con riesgo, apoyos vecinales y ubicación", caption: "Cada incidencia tiene contexto", format: "portrait" },
      { src: "/imagenes/civix/seguimiento-v5.webp", alt: "Línea de tiempo de una incidencia, desde su recepción hasta la asignación a una brigada municipal", caption: "Del reporte a la respuesta", format: "portrait" },
    ],
  },
  {
    title: "ArmonyX",
    category: "Web móvil · Comunidad residencial",
    image: "/imagenes/armonyx/inicio-v4.webp",
    alt: "Vistas móviles de ArmonyX para comunidades residenciales",
    description: "Plataforma residencial con interfaces en Next.js y TypeScript para residentes, administración y vigilancia. Reúne incidencias vecinales, invitaciones y organización de accesos sobre un mapa de la comunidad. Una API en Express y PostgreSQL gestiona usuarios, organizaciones y reportes, con comunicación en tiempo real mediante Socket.IO.",
    stack: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Socket.IO"],
    screens: ["/imagenes/armonyx/inicio-v4.webp","/imagenes/armonyx/mapa-v4.webp"],
    tone: "armonyx",
    sourceNote: "Vistas móviles de Las Fincas Residencial: mapa, reportes vecinales e invitaciones en el entorno local de demostración.",
    images: [
          {
                "src": "/imagenes/armonyx/inicio-v4.webp",
                "alt": "Panel de inicio del residente en Las Fincas Residencial.",
                "caption": "Tu residencial, al día",
                "format": "portrait"
          },
          {
                "src": "/imagenes/armonyx/mapa-v4.webp",
                "alt": "Mapa de Las Fincas con las residencias del trazado existente y el estilo real de ArmonyX.",
                "caption": "Las Fincas, casa por casa",
                "format": "portrait"
          },
          {
                "src": "/imagenes/armonyx/leyenda-v4.webp",
                "alt": "Leyenda y capas del mapa residencial.",
                "caption": "Un mapa que se entiende",
                "format": "portrait"
          },
          {
                "src": "/imagenes/armonyx/reportes-v4.webp",
                "alt": "Listado de reportes vecinales de demostración.",
                "caption": "Lo que pasa en tu comunidad",
                "format": "portrait"
          },
          {
                "src": "/imagenes/armonyx/detalle-v4.webp",
                "alt": "Detalle de una incidencia, ubicación y seguimiento.",
                "caption": "Cada reporte tiene contexto",
                "format": "portrait"
          },
          {
                "src": "/imagenes/armonyx/invitacion-v4.webp",
                "alt": "Formulario real de invitaciones para visitantes, sin generar un QR activo.",
                "caption": "Visitas, con acceso organizado",
                "format": "portrait"
          }
    ],
  },
  {
    title: "Antoja",
    category: "Flutter · Delivery de comida",
    href: "https://antoja.com.mx/",
    image: "/imagenes/antoja/cliente-inicio-v4.webp",
    alt: "Antoja en móvil: catálogo de restaurantes y carta de productos",
    description: "Ecosistema de delivery con tres experiencias: cliente, negocio y repartidor. Desarrollado en Flutter y Dart, comparte una base de código con gestión de estado en Riverpod. La API en Node.js y Express, con Prisma y PostgreSQL, conecta el catálogo, los pedidos, las ventas y las entregas; Socket.IO permite comunicar cambios en tiempo real.",
    stack: ["Flutter", "Dart", "Riverpod", "Express", "Prisma", "PostgreSQL"],
    screens: ["/imagenes/antoja/cliente-inicio-v4.webp","/imagenes/antoja/negocio-panel-v4.webp","/imagenes/antoja/repartidor-entregas-v4.webp"],
    tone: "antoja",
    sourceNote: "Interfaz Flutter original en web móvil, con catálogo de demostración y fotografías gastronómicas ilustrativas creadas para esta presentación.",
    images: [
          {
                "src": "/imagenes/antoja/cliente-inicio-v4.webp",
                "alt": "Inicio del cliente con categorías y restaurantes de demostración.",
                "caption": "Encuentra tu próximo antojo",
                "format": "portrait",
                "category": "Cliente"
          },
          {
                "src": "/imagenes/antoja/cliente-carta-v4.webp",
                "alt": "Carta del restaurante y selección de platillos.",
                "caption": "Del menú a tu pedido",
                "format": "portrait",
                "category": "Cliente"
          },
          {
                "src": "/imagenes/antoja/cliente-pedidos-v4.webp",
                "alt": "Seguimiento e historial de pedidos del cliente.",
                "caption": "Tus pedidos, en un lugar",
                "format": "portrait",
                "category": "Cliente"
          },
          {
                "src": "/imagenes/antoja/negocio-panel-v4.webp",
                "alt": "Panel de ventas, métricas y pedidos del negocio.",
                "caption": "Tu negocio, en tiempo real",
                "format": "portrait",
                "category": "Negocio"
          },
          {
                "src": "/imagenes/antoja/negocio-pedidos-v4.webp",
                "alt": "Bandeja de pedidos con estados y acceso al detalle.",
                "caption": "Cada pedido, bajo control",
                "format": "portrait",
                "category": "Negocio"
          },
          {
                "src": "/imagenes/antoja/negocio-menu-v4.webp",
                "alt": "Categorías, precios y disponibilidad de los platillos.",
                "caption": "Un menú fácil de administrar",
                "format": "portrait",
                "category": "Negocio"
          },
          {
                "src": "/imagenes/antoja/negocio-reportes-v4.webp",
                "alt": "Reportes de ingresos y resumen por día.",
                "caption": "Tus ventas, más claras",
                "format": "portrait",
                "category": "Negocio"
          },
          {
                "src": "/imagenes/antoja/repartidor-entregas-v4.webp",
                "alt": "Ofertas de entrega con ganancias, distancias y condiciones.",
                "caption": "Entregas con información clara",
                "format": "portrait",
                "category": "Repartidor"
          },
          {
                "src": "/imagenes/antoja/repartidor-ganancias-v4.webp",
                "alt": "Ganancias semanales y actividad del repartidor.",
                "caption": "Tu trabajo, en números",
                "format": "portrait",
                "category": "Repartidor"
          },
          {
                "src": "/imagenes/antoja/repartidor-perfil-v4.webp",
                "alt": "Perfil de demostración del repartidor y herramientas de cuenta.",
                "caption": "Todo listo para repartir",
                "format": "portrait",
                "category": "Repartidor"
          }
    ],
  },
  {
    title: "Konansa",
    category: "Estadía profesional · Finanzas",
    image: "/imagenes/konansa/panel-v2.webp",
    alt: "Presentación del panel financiero de Konansa en varios dispositivos",
    description: "Plataforma de finanzas personales en la que trabajé durante mi estadía en Wallavi. Implementé tres módulos de presupuestos con Next.js, React y MySQL en una arquitectura serverless, integrando APIs REST y persistencia de datos. Colaboré con un equipo de cinco personas mediante sprints y entregas a producción. La web original ya no está disponible; la galería conserva su presentación.",
    stack: ["Next.js", "React", "MySQL", "APIs REST", "Serverless"],
    images: konansaImages,
    videoId: konansaVideoId,
  },
  {
    title: "BlueSense",
    category: "IoT · Calidad del agua",
    image: "/imagenes/bluesense/mapa-v6.webp",
    alt: "Mapa original de BlueSense con puntos de monitoreo de calidad del agua",
    description: "Prototipo IoT y web para visualizar información sobre la calidad del agua en ríos. Combina PHP y Chart.js para presentar mediciones en gráficas, con un mapa interactivo en Leaflet que sitúa puntos de monitoreo e identifica sus indicadores. El sitio original conserva la presentación del proyecto y la explicación de sus estados de calidad.",
    stack: ["PHP", "JavaScript", "Chart.js", "Leaflet"],
    recognition: "Mención honorífica en Hackbox Hackathon",
    href: "https://joseluisrivera.neocities.org/BlueSense/",
    sourceNote: "Capturas del sitio original de BlueSense: presentación y vistas del prototipo de monitoreo de agua.",
    images: [
      { src: "/imagenes/bluesense/mapa-v6.webp", alt: "Mapa de BlueSense con puntos de monitoreo y cartografía de OpenStreetMap", caption: "La calidad del agua, en el mapa" },
      { src: "/imagenes/bluesense/presentacion-v6.webp", alt: "Portada original de BlueSense con su logotipo y presentación NOVA·Sense", caption: "Tecnología para cuidar el agua" },
      { src: "/imagenes/bluesense/propuesta-v6.webp", alt: "Sección original que presenta la propuesta tecnológica de BlueSense", caption: "Una propuesta de monitoreo" },
      { src: "/imagenes/bluesense/leyenda-v6.webp", alt: "Leyenda original del prototipo con los indicadores Safe, Caution y Danger", caption: "Cada indicador tiene un significado" },
    ],
  },
  {
    title: "Ramírez Plaza",
    category: "Desarrollo web comercial",
    image: "/imagenes/proyectos/ramirez-plaza.webp",
    alt: "Página de presentación de la plaza comercial Ramírez Plaza",
    description: "Sitio comercial construido con HTML, CSS y JavaScript para presentar Ramírez Plaza y dar visibilidad a sus negocios. Organiza un directorio visual de locales, servicios e información de la plaza, con navegación adaptable y fotografías que ayudan a explorar cada espacio. Utiliza jQuery para las interacciones del sitio.",
    stack: ["HTML", "CSS", "JavaScript", "jQuery"],
    href: "https://joseluisriveraviera.github.io/Ram-rez-Plaza/",
    images: [
      { src: "/imagenes/proyectos/ramirez-plaza.webp", alt: "Presentación de Ramírez Plaza y sus negocios", caption: "Un lugar para descubrir negocios" },
      { src: "/imagenes/proyectos/ramirez-conocenos.webp", alt: "Sección Conócenos del sitio de Ramírez Plaza", caption: "Conocer la plaza" },
      { src: "/imagenes/proyectos/ramirez-negocios.webp", alt: "Presentación de Leori Store en el directorio de Ramírez Plaza", caption: "Los negocios de la plaza" },
      { src: "/imagenes/proyectos/ramirez-servicios.webp", alt: "Heladería Frida en el sitio de Ramírez Plaza", caption: "Servicios con identidad propia" },
    ],
  },
  {
    title: "Nova-Sense",
    category: "Monitoreo · Datos en tiempo real",
    image: "/imagenes/proyectos/nova-sense.webp",
    alt: "Panel de Nova-Sense con datos y alertas de calidad del agua",
    description: "Aplicación web de monitoreo que reúne mediciones, un mapa de puntos, alertas y estadísticas sobre la calidad del agua. Su interfaz en Next.js y React organiza la consulta de datos y su visualización en un panel. Incluye una vista de asistente para explorar información del sistema; la galería recorre sus principales módulos.",
    stack: ["Next.js", "React", "JavaScript", "Visualización de datos"],
    href: "https://nova-sense.vercel.app/presentation",
    images: [
      { src: "/imagenes/proyectos/nova-presentation.webp", alt: "Página de presentación de Nova-Sense", caption: "Información para cuidar el agua" },
      { src: "/imagenes/proyectos/nova-dashboard.webp", alt: "Panel de monitoreo de Nova-Sense", caption: "Cada medición, en contexto" },
      { src: "/imagenes/proyectos/nova-map.webp", alt: "Mapa de puntos de monitoreo de Nova-Sense", caption: "Monitoreo sobre el territorio" },
      { src: "/imagenes/proyectos/nova-alerts.webp", alt: "Alertas de calidad del agua en Nova-Sense", caption: "Detectar cambios a tiempo" },
      { src: "/imagenes/proyectos/nova-statistics.webp", alt: "Gráficas y estadísticas de Nova-Sense", caption: "Del dato a la tendencia" },
      { src: "/imagenes/proyectos/nova-chat.webp", alt: "Asistente de consulta de Nova-Sense", caption: "Una conversación con los datos" },
    ],
  },
  {
    title: "Echo",
    category: "Automatización del trabajo",
    image: "/imagenes/proyectos/echo.webp",
    alt: "Página de Echo, una plataforma de automatización del trabajo",
    description: "Plataforma orientada a automatizar tareas repetitivas y sincronizar información. Su interfaz en Next.js y React permite recorrer el panel de automatizaciones y configurar sincronizaciones desde un formulario. La galería documenta la presentación y la demostración pública del producto, con datos de ejemplo que permiten conocer su funcionamiento.",
    stack: ["Next.js", "React", "JavaScript"],
    href: "https://echo-omega-lovat.vercel.app/",
    sourceNote: "Presentación del producto y vistas de su demostración pública. El panel muestra datos de ejemplo.",
    images: [
      { src: "/imagenes/proyectos/echo.webp", alt: "Presentación de Echo y sus automatizaciones", caption: "Menos tareas repetitivas" },
      { src: "/imagenes/proyectos/echo-dashboard.webp", alt: "Panel de automatizaciones de la demostración pública de Echo", caption: "El panel de automatizaciones" },
      { src: "/imagenes/proyectos/echo-manual-sync.webp", alt: "Formulario de configuración de sincronización de Echo", caption: "Configurar una sincronización" },
    ],
  },
];
