# Portafolio de José Luis Rivera Viera

<!-- impeccable:product-schema 1 -->

## Platform

web

## Product Purpose

Portafolio personal de desarrollo de software: presenta al autor, su formación, sus tecnologías y sus proyectos; permite explorar el trabajo y contactar mediante el formulario existente o LinkedIn.

## Capabilities and Constraints

- Proyecto existente en Next.js, React, TypeScript y Tailwind CSS.
- Conservar la identidad, los contenidos profesionales, los enlaces sociales y el envío existente mediante Formspree.
- Conservar íntegramente el bloque comentado «Para imagenes» como plantilla para futuras galerías.
- La portada presenta al autor: nombre, descripción profesional y retrato propio. No mostrar su localidad. Los proyectos pertenecen a su sección y no sustituyen la identidad personal en la presentación inicial.
- La selección reúne ocho proyectos con la misma jerarquía de artículo: Civix, ArmonyX, Antoja, Konansa, BlueSense, Ramírez Plaza, Nova-Sense y Echo.
- Civix, ArmonyX y Antoja se presentan mediante capturas reales en vista móvil, enmarcadas con CSS en la selección y completas en su galería vertical. Las notas de fuente indican el entorno local o los datos de demostración; no presentar esas cuentas o catálogos como actividad de producción.
- El catálogo demo de Antoja no incluía fotos. Para esta presentación se incorporaron cuatro fotografías gastronómicas ilustrativas creadas con ImageGen al entorno demo externo y se capturó la interfaz Flutter original. Identificar esas imágenes como ilustrativas y no como fotografías originales de los restaurantes.
- Konansa ya no tiene una página disponible, según el usuario. Su enlace externo se sustituye por una galería local y el video https://www.youtube.com/watch?v=m_L6e_WbdYo.
- La galería de Konansa presenta dos composiciones recompuestas a partir de material original, identificadas como composiciones de presentación, junto con la captura histórica y el acceso al video original.
- Todas las galerías presentan cada captura con un titular y un marco de teléfono o navegador sobre un fondo propio del proyecto. La imagen se conserva completa y puede abrirse mediante «Ampliar».
- ArmonyX muestra seis vistas de Las Fincas Residencial, incluido su mapa original con polígonos de residencias y amenidades. Antoja reúne diez vistas filtrables: Cliente (3), Negocio (4) y Repartidor (3).
- Civix reúne seis vistas móviles auténticas: inicio, mapa, filtro de agua, incidencia seleccionada, detalle y seguimiento.
- Antoja conserva el mismo fondo durazno (#fff1e9) en portada y galería, con texto oscuro. Su botón «Visitar sitio» abre la landing https://antoja.com.mx/.
- BlueSense enlaza a https://joseluisrivera.neocities.org/BlueSense/ y muestra cuatro capturas nuevas del sitio original, con marcos de navegador y sin regenerar su interfaz.
- El sitio ofrece español e inglés. La primera petición negocia `Accept-Language`; la elección manual de la cabecera prevalece y se conserva en la cookie funcional `jlrv-locale`. Un idioma no compatible utiliza español como respaldo. El HTML, los metadatos, las galerías, los textos alternativos y el formulario corresponden al idioma seleccionado.
- El modo claro sigue siendo el inicial. La cabecera permite alternar con un modo oscuro de carbón cálido y acentos derivados del granate; la preferencia se guarda como `jlrv-theme`. El fondo durazno y el texto oscuro de Antoja se conservan en ambos modos, al igual que las interfaces originales capturadas.
- «Sobre mí» describe curiosidad, resolución de problemas, aprendizaje, colaboración y atención a las personas. La sección específica «Experiencia y formación» separa la trayectoria profesional de los estudios, con detalles de Konansa basados en el CV. No añadir promedios ni distinciones académicas no documentados.
- Los ocho proyectos explican propósito, módulos y tecnologías verificadas. Todas las galerías conservan sus imágenes; los textos y las notas se localizan sin regenerar las capturas.
- El CV adjunto sirve como evidencia profesional. No publicar el PDF, el teléfono, el correo u otros datos personales del documento; conservar el formulario y los enlaces profesionales existentes como vías de contacto.

## Brand Commitments

El usuario solicita un rediseño minimalista y profesional e integrar rojo granate, con la muestra de color adjunta como referencia. Delega la elección de base clara u oscura y el criterio visual.

En el refinamiento, conserva el granate de referencia (#800000) como acento en acciones y detalles. Prefiere superficies neutras amplias, mayor creatividad mediante movimiento sutil y una presentación más cuidada de las imágenes de Konansa. El movimiento respeta la preferencia de movimiento reducido y evita bucles.

La revisión posterior confirma que la presentación debe sentirse como un portafolio personal. Rechaza que Konansa aparezca junto a su nombre como protagonista de la portada. Aporta el portafolio de un amigo como referencia, su CV y los repositorios locales de Civix, ArmonyX y Antoja para ampliar la selección con material auténtico.

## Evidence on Hand

El código conserva BlueSense, Ramírez Plaza, Konansa, Nova-Sense y Echo y añade Civix, ArmonyX y Antoja desde los proyectos locales proporcionados. `public/imagenes/` contiene el retrato y el material visual de cada proyecto. Las capturas de Civix y ArmonyX proceden de sus interfaces web móviles; Antoja se ejecutó como aplicación Flutter en web móvil con su catálogo de demostración y las fotografías gastronómicas ilustrativas añadidas para esta presentación. Los PNG originales generados se conservan fuera del repositorio, en `.codex/generated_images`; el portafolio incorpora las capturas WebP. La composición de teléfonos no regenera ni sustituye las interfaces.

La biografía y experiencia se apoyan en el CV: TSU en Desarrollo de Software Multiplataforma; Ingeniería en Desarrollo y Gestión de Software en la Universidad Tecnológica de la Costa con egreso previsto en abril de 2027; estadía en Konansa / Wallavi de mayo a septiembre de 2025; plataforma de orientación vocacional para la UT de la Costa de septiembre a diciembre de 2025; Civix con pase nacional en ExpoCiencias 2026. Los detalles concretos de módulos, equipo y tecnologías que aparecen en la página corresponden al documento suministrado.

ArmonyX contiene una plataforma para comunidades residenciales con roles y módulos de accesos e incidencias; se ejecuta en el entorno local y el autor facilitó acceso de residente para explorar su interfaz. No incluir credenciales en la página, capturas, recursos ni documentación pública. Antoja contiene aplicaciones de delivery para clientes, restaurantes y repartidores; las capturas muestran los tres roles con datos demo y fotografías ilustrativas, sin regenerar su UI. Describir los productos y la evidencia disponible sin atribuir al autor funciones específicas, métricas, clientes, adopción o resultados no documentados.

## Open Decisions

Audiencia principal inferida de la función del portafolio: personas interesadas en evaluar el trabajo o contactar al autor. No se ha definido un cambio de público ni de posicionamiento.
