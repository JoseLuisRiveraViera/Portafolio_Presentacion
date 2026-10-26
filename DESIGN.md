---
name: "Portafolio de José Luis Rivera Viera"
description: "Identidad personal y proyectos reales en una composición abierta, clara y granate."
colors:
  primary: "#800000"
  background: "#fafafa"
  foreground: "#242327"
  antoja-surface: "#fff1e9"
  antoja-foreground: "#242327"
  action: "#800000"
  action-hover: "#650000"
  action-foreground: "#ffffff"
  about-surface: "#f0eff1"
  primary-foreground: "#ffffff"
  muted: "#f0eff1"
  muted-foreground: "#66636b"
  accent: "#f5e9e9"
  border: "#dfdde1"
  contact-surface: "#f4f2f3"
  contact-placeholder: "#70666d"
  contact-border: "#bcb4b9"
typography:
  display:
    fontFamily: "Manrope"
    fontSize: "clamp(3rem, 5.5vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope"
    fontSize: "clamp(1.8rem, 3.4vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.65
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.85
  project-body:
    fontFamily: "Manrope"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.85
  about-body:
    fontFamily: "Manrope"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.9
  background-title:
    fontFamily: "Manrope"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.6
  label:
    fontFamily: "Manrope"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.65
  label-strong:
    fontFamily: "Manrope"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.65
  contact-action:
    fontFamily: "Manrope"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.65
  control:
    fontFamily: "Manrope"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.65
  caption:
    fontFamily: "Manrope"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  field: "0px"
  control: "6px"
  media: "12px"
  panel: "16px"
  device: "22px"
  device-screen: "17px"
spacing:
  tight-gap: "8px"
  detail-gap: "10px"
  compact-gap: "16px"
  action-inset: "22px"
  panel-inset: "24px"
  layout-gap: "32px"
  section-compact: "56px"
  project-row-gap: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "#650000"
  link-text:
    textColor: "{colors.primary}"
    typography: "{typography.label-strong}"
    padding: "10px 0px"
  button-contact:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.contact-action}"
    rounded: "{rounded.control}"
    height: "46px"
    padding: "8px 22px"
  button-contact-hover:
    backgroundColor: "#650000"
  field-contact:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    typography: "{typography.control}"
    rounded: "{rounded.field}"
    height: "46px"
    width: "100%"
    padding: "10px 0px"
  navigation:
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
  project-article:
    textColor: "{colors.foreground}"
  mobile-project-cover:
    backgroundColor: "#e8ede9"
    rounded: "{rounded.media}"
    width: "100%"
  gallery-tab:
    textColor: "{colors.muted-foreground}"
    typography: "{typography.control}"
    padding: "10px 0px 12px"
  gallery-tab-selected:
    textColor: "{colors.primary}"
    typography: "{typography.label-strong}"
  gallery-arrow:
    textColor: "{colors.primary}"
    rounded: "{rounded.control}"
    width: "44px"
    height: "44px"
  gallery-panel:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.panel}"
    padding: "24px"
    width: "calc(100% - 40px)"
---

# Design System: Portafolio de José Luis Rivera Viera

## Overview

**Creative North Star: "Documentación de ingeniería"**

El sistema construido presenta al autor y su trabajo como un archivo abierto: fondo claro, tinta neutra, retrato personal, imágenes de proyectos y granate para la identidad y la interacción. La composición tiene aire y una jerarquía precisa, coherentes con el carácter minimalista y profesional registrado en PRODUCT.md.

Manrope sostiene toda la superficie, desde el nombre de gran tamaño hasta los metadatos. La separación se obtiene con espacio, líneas finas y cambios de tono. Las capturas principales mantienen el artefacto completo; el retrato y las miniaturas tienen el recorte específico que requiere su función.

La portada reúne nombre, presentación profesional y retrato; los proyectos aparecen después como artículos de igual jerarquía. La página permanece plana durante la lectura. Los teléfonos de las portadas móviles tienen una sombra localizada y la galería introduce una capa modal delimitada por un fondo atenuado y una sombra difusa. El granate se concentra en acciones, selección y detalles: un trazo bajo el nombre, el progreso de lectura y el acento de contacto. El movimiento presenta el contenido una vez y responde a la interacción con gestos breves.

**Key Characteristics:**

- Un solo acento granate sobre neutros claros.
- Una sola familia tipográfica y jerarquía por tamaño, peso y espaciado.
- Presentación personal con retrato y una selección de proyectos de igual jerarquía.
- Artículos abiertos con capturas completas y metadatos próximos al proyecto.
- Controles discretos, foco visible y estados de envío explícitos.
- Entradas sutiles, trazo de firma y progreso de lectura sin animaciones en bucle.

**The Complete Image Rule.** Las galerías y sus miniaturas muestran las capturas completas. Las portadas móviles enmarcan capturas originales con proporción de teléfono; el recorte editorial se reserva al retrato.

Este documento registra la superficie construida. La autoridad de los valores es [globals.css](src/app/globals.css), con la fuente cargada en [el layout raíz](src/app/layout.tsx). Los patrones se observan en [la página](src/app/(presentation)/page.tsx), [su layout](src/app/(presentation)/layout.tsx), [la galería](src/components/project-modal.tsx) y [el formulario](src/components/contact-form.tsx). El frontmatter contiene los valores normativos; la prosa describe su aplicación. La estructura sigue [el formato DESIGN.md](https://raw.githubusercontent.com/google-labs-code/design.md/main/docs/spec.md).

## Colors

La paleta combina un acento profundo con una base neutra clara. Los nombres de esta sección corresponden a las claves del frontmatter.

### Primary

| Token | Carácter y uso observado |
| --- | --- |
| primary | Granate: marca, trazo del nombre, acentos en titulares, acciones, enlaces, selección y progreso de lectura. |
| primary-foreground | Blanco: texto de las acciones con fondo granate, incluido el envío. |
| accent | Tinte de granate: respuesta al pasar el puntero sobre las flechas de galería. |

### Neutral

| Token | Carácter y uso observado |
| --- | --- |
| background | Blanco neutral: página, cabecera, pie y panel de galería. |
| foreground | Tinta: texto principal y enlaces neutrales. |
| muted | Gris de superficie: bloque biográfico, retrato y marcos de proyectos. |
| muted-foreground | Gris de lectura: descripciones, categorías, pies y metadatos. |
| border | Gris de estructura: separadores de la cabecera, proyectos y controles de galería. |
| contact-surface | Neutro suave: banda de contacto que mantiene la lectura en tinta. |
| contact-placeholder | Gris de ayuda: texto de ejemplo en campos de contacto. |
| contact-border | Gris de campo: línea inferior de los campos en reposo. |

Las imágenes conservan sus propios colores. Las portadas móviles utilizan tonos vinculados a cada producto: gris verdoso para Civix, lavanda para ArmonyX y melocotón para Antoja. Esos fondos pertenecen a la presentación de los artefactos y no introducen acentos nuevos para la navegación.

**The Single Accent Rule.** El granate reúne identidad, enlaces, selección y acción. En esta superficie se reserva a controles y detalles; la presentación personal y el contacto conservan fondos neutros.

## Typography

**Display Font:** Manrope.
**Body Font:** Manrope, cargada mediante next/font/google con el fallback generado por Next.js y visualización swap.

La familia tiene una presencia sobria y legible. Los titulares emplean un espaciado apretado; el texto descriptivo dispone de mayor interlineado. La escala responde a funciones y anchos de pantalla, sin una razón matemática única.

| Rol del frontmatter | Uso observado |
| --- | --- |
| display | Nombre del autor en tinta; tamaño fluido y trazo granate bajo la segunda línea. |
| headline | Titulares de proyectos y biografía. |
| title | Títulos de los artículos de proyecto. |
| body | Descripciones de proyectos y texto de contacto. |
| label | Navegación y acción principal. |
| label-strong | Enlaces de texto y selección de Imágenes/Video. |
| contact-action | Texto del botón de envío. |
| control | Campos y botones de contenido de la galería en reposo. |
| caption | Metadatos y texto auxiliar de menor tamaño. |

El rol profesional utiliza un cuerpo destacado (20px, peso 600) y la introducción un cuerpo más amplio (16px); la biografía usa un tamaño intermedio (15px). El pie del retrato presenta una frase sobre el desarrollo (12px) y un acceso a GitHub, sin localidad. La experiencia combina fecha auxiliar (11px), título (15px, peso 600) y descripción (13px). Las descripciones extensas de proyectos y biografía limitan su línea (65ch). El texto de la galería admite una línea más larga (72ch). El contador de imágenes usa números tabulares.

En el rango intermedio, el nombre queda fijo (3.5rem). En móvil usa una escala fluida distinta (clamp(2.6rem, 9vw, 4rem)) y un interlineado (1.1). Los titulares de sección se fijan (29px) y los títulos de proyecto se compactan (21px). El contacto tiene su propia escala de titular (clamp(2rem, 4.2vw, 3rem)) y pasa a un tamaño fijo en móvil (36px).

**The One Typeface Rule.** Manrope cubre titulares, texto y controles. La jerarquía cambia con tamaño, peso y espaciado, sin introducir una segunda familia.

## Layout

El contenedor central combina ancho máximo (1160px) y margen flexible. En escritorio ocupa el ancho de ventana menos un espacio total (96px), equivalente a un margen lateral (48px). La cabecera permanece visible y utiliza una altura amplia (88px); las anclas tienen una compensación de desplazamiento (100px).

La composición inicial emplea dos columnas con proporción (1.6fr / .85fr), separación amplia (96px) y espacio vertical (96px arriba, 88px abajo). El nombre y la presentación profesional ocupan la columna principal; el retrato se alinea a la derecha con ancho máximo (340px), frase breve y enlace social. Los ocho proyectos utilizan dos columnas iguales, con separación horizontal (40px) y vertical (64px). Todos conservan el mismo marco y jerarquía de artículo, sin una fila destacada de Konansa. La biografía y la experiencia ocupan dos columnas iguales separadas (100px); el contacto combina texto y formulario sobre una banda neutra suave.

El ritmo reúne distancias cortas para controles y metadatos, distancias medias para grupos y espacios amplios entre secciones. La lista de tecnologías fluye en líneas de texto y se envuelve según el espacio disponible.

| Rango observado | Adaptación construida |
| --- | --- |
| De 761px a 1050px | Mantiene dos columnas, reduce huecos y rellenos y apila título/categoría. |
| Hasta 760px | El contenedor deja márgenes laterales (20px); cabecera (72px); presentación, proyectos, biografía y contacto pasan a una columna. El retrato se convierte en una pieza compacta junto a su frase y enlace social. Las secciones acortan su espacio vertical. |
| Hasta 400px | Los márgenes laterales se reducen (16px), la navegación se compacta y los dos campos iniciales del formulario pasan a una columna. |

La galería cabe en la ventana mediante ancho y altura limitados, con desplazamiento vertical dentro del panel. En escritorio deja una separación exterior total (40px), usa ancho máximo (980px) y relleno (24px). En móvil deja una separación exterior total (20px) y relleno (16px). Las miniaturas se desplazan horizontalmente cuando exceden el espacio.

**The Responsive Flow Rule.** Cuando el ancho deja de sostener dos columnas, los contenidos pasan a una secuencia vertical y conservan su orden de lectura.

## Elevation & Depth

La página usa superficies planas: líneas finas separan regiones y los cambios de tono delimitan biografía y contacto. La presentación personal permanece abierta sobre el fondo de página. Los artículos no tienen sombra exterior. Los marcos de teléfono incorporan una sombra breve para separar el dispositivo de su fondo. La galería añade profundidad funcional: su panel claro se superpone a un fondo negro atenuado (50%).

Las dos sombras distintivas están registradas en el sidecar: device-frame delimita el teléfono y modal-gallery expresa una superposición amplia y suave. El panel se abre y cierra con fundido y un cambio breve de escala; ese movimiento pertenece al diálogo.

**The Modal Depth Rule.** La sombra expresa la superposición de la galería y el relieve localizado de los teléfonos. Los artículos de proyecto se separan con espacio, líneas y tono.

## Shapes

Las esquinas suavizadas siguen la función: pequeñas en acciones, mayores en marcos de imagen y aún mayores en el panel modal. La presentación personal no lleva una caja exterior. Los campos de contacto son rectos y se delimitan mediante una única línea inferior. Los separadores de sección son finos (1px).

La galería conserva esquinas propias en el póster (10px), el video (8px) y las miniaturas (4px). Las capturas móviles utilizan un teléfono de borde oscuro (6px), esquinas exteriores (28px; 26px en móvil) e interiores (22px). Las panorámicas tienen un marco de navegador y una barra superior discreta. Las flechas de proyecto se apoyan en un círculo pequeño (38px); no definen la silueta del artículo.

Los marcos de todos los proyectos usan proporción panorámica (16:10). Civix y ArmonyX enmarcan dos capturas de portada y Antoja tres, en teléfonos con proporción (390:844), borde oscuro y esquinas exteriores (22px) e interiores (17px); en móvil se compactan (16px y 12px). El retrato inicial tiene proporción vertical (.87), esquinas (16px) y un recorte centrado en el rostro; en móvil mide (76 × 86px), con esquinas (12px). Las galerías y sus miniaturas usan ajuste completo; el retrato usa recorte. El trazo bajo el nombre es una línea curva granate fina (2px), ligeramente inclinada.

**The Open Article Rule.** La captura puede tener esquinas suaves; el artículo completo no necesita una caja exterior. Título, categoría, descripción y enlace permanecen fuera del marco de la imagen.

## Components

### Buttons and links

La acción principal es un enlace granate con texto blanco, flecha y esquinas pequeñas. Su color se oscurece al pasar el puntero. Los enlaces de texto usan granate, peso fuerte y subrayado al pasar el puntero; los enlaces sociales dentro del contenido pueden usar tinta.

El envío usa fondo granate y texto blanco sobre la banda neutra de contacto; al pasar el puntero se oscurece. Durante el envío queda deshabilitado y atenuado, con icono de carga y el texto Enviando. Los iconos de la interfaz proceden de Lucide y acompañan texto o nombres accesibles. Las flechas de los accesos se desplazan ligeramente en la dirección de la acción al pasar el puntero (2px, 240ms).

### Navigation

La cabecera reúne una marca textual, tres enlaces de ancla, un selector Español/English y una acción de tema con iconos de luna/sol y nombres accesibles. El selector usa Radix Select con un panel de 168px, radio de 12px y sombra suave; sus opciones miden 44px de alto. La opción elegida tiene fondo granate tenue y una marca de verificación. El panel hereda las superficies de ambos temas, admite flechas, selección por teclado, Escape y cierre exterior; aparece con un desplazamiento de 4px durante 160ms y respeta movimiento reducido. La marca mezcla granate y tinta; Hablemos usa granate y una flecha. Los enlaces cambian a granate al pasar el puntero; el subrayado se dibuja al pasar el puntero o recibir foco. Una línea granate fina (2px) indica el avance de lectura bajo la cabecera. En móvil, marca y preferencias ocupan la primera fila y los tres enlaces permanecen visibles en una segunda fila. Las acciones de preferencias miden al menos 44px de alto y admiten teclado.

El enlace Saltar al contenido se muestra al recibir foco. El pie reúne autoría y accesos sociales; su texto auxiliar se retira en móvil.

### Project articles and image frames

Cada artículo reúne captura, título, categoría, descripción y enlace. El reconocimiento, cuando existe, se presenta con un icono y texto granate. Los metadatos siguen al título; ambos pueden apilarse cuando el ancho se reduce. La captura enlazada tiene una flecha circular y un aumento de escala leve al pasar el puntero (1.025).

Los ocho proyectos comparten estructura: imagen, título, categoría, descripción y acciones; la tecnología y el reconocimiento aparecen cuando existen datos. Las portadas de Civix y ArmonyX presentan dos capturas móviles reales; Antoja presenta tres, una por rol. Los teléfonos se inclinan de forma opuesta y se organizan mediante CSS. La interfaz capturada no se regenera. Todas las portadas abren una galería con un titular y un marco decorado por imagen, y sus notas indican el contexto de demostración.

Las fotografías gastronómicas de Antoja son cuatro imágenes ilustrativas creadas con ImageGen para completar el catálogo demo, que originalmente carecía de fotos. Se incorporan como contenido del entorno externo antes de capturar la aplicación Flutter original. La nota de fuente distingue esta intervención del diseño y la interfaz del producto; las capturas del portafolio no regeneran pantallas mediante IA.

Konansa ocupa un artículo de la misma selección. Su portada utiliza una composición del panel financiero; la galería conserva dos composiciones recompuestas, identificadas como presentaciones, la captura histórica y el video original. La galería ocupa el lugar de su sitio desaparecido. La presentación del autor utiliza su retrato y descripción profesional, sin mostrar su localidad.

La banda biográfica abre con un texto personal sobre curiosidad y construcción de productos. A su lado, cuatro cualidades se presentan como una lista abierta con iconos Lucide; las tecnologías siguen debajo, sin cajas individuales. La introducción se apila hasta 1050px para dar espacio de lectura a las cualidades; estas usan una columna hasta 400px. «Experiencia y formación» tiene un título propio y dos columnas: experiencia con fechas, puesto y contribuciones concretas, y formación con programa, institución y periodo. La línea divisoria de 1px desaparece al apilarse en móvil. Las contribuciones y fechas proceden del CV; las descripciones de los ocho proyectos explican también sus tecnologías.

### Language and color preferences

El primer HTML se genera en español o inglés según `Accept-Language`, con prioridad para la cookie funcional `jlrv-locale` si existe. La selección manual actualiza el contenido del servidor sin navegar a otra página; el proveedor mantiene el atributo `lang` sincronizado. No se sustituye texto después de hidratar para detectar el idioma. La traducción comprende navegación, contenido, metadatos, mensajes del formulario, controles accesibles, notas y pies de las 42 imágenes. Las capturas conservan los textos originales de los proyectos.

El modo claro conserva sus superficies y el granate #800000. El oscuro utiliza fondo #171517, superficie biográfica #211d21 y contacto #251e23, texto #f2ebed y secundario #bcb1b8. Los enlaces y el foco usan un tinte de granate #f0a0af; las acciones sólidas usan #8b263c con texto blanco y #a33850 al pasar el puntero. `next-themes` conserva la elección en `jlrv-theme` y aplica la clase antes de mostrar la página. El modo inicial es claro; al cambiar se desactivan las transiciones globales para evitar destellos de color. Los controles renderizan una estructura estable entre servidor y cliente.

El selector de idioma adapta el ancho a sus etiquetas. Las secciones permiten el crecimiento de las traducciones y utilizan propiedades lógicas para la separación. Las galerías adaptan su superficie exterior al tema. El durazno de Antoja (#fff1e9) y su tinta (#242327) son colores propios del proyecto y permanecen iguales en ambos modos.

### Contact fields and feedback

Los campos conservan etiquetas visibles de nombre, correo y mensaje. Nombre y correo se presentan juntos cuando el ancho lo permite; el mensaje ocupa la fila completa. Los campos son transparentes sobre el neutro de contacto, con etiquetas y texto en tinta, cursor granate y línea inferior gris. El texto de ejemplo usa el gris de ayuda. El foco vuelve granate la línea inferior, añade una línea de énfasis y una variación tonal tenue. El mensaje permite cambiar su altura. El titular de contacto conserva tinta y acentúa Hablemos en granate.

El formulario conserva el envío existente mediante Formspree: validación de campos requeridos y correo, petición JSON, bloqueo de campos y acción durante la carga, confirmación o error visible y notificación mediante Sonner. El texto de estado utiliza una región de anuncio cortés. El éxito limpia los campos; el fallo conserva el mensaje para reintentar y ofrece LinkedIn como alternativa. El endpoint no forma parte del sistema visual.

### Project gallery

El diálogo utiliza título, descripción, cierre con nombre accesible y controles de Imágenes/Video. La vista inicial muestra imágenes locales; el reproductor se incorpora al elegir Video. Imágenes y Video se indican mediante texto e icono; la selección añade granate, peso fuerte y línea inferior.

La imagen activa se presenta en un póster de altura acotada (clamp(340px, 58dvh, 600px)), con titular centrado y marco de teléfono o navegador. Cada proyecto tiene un fondo propio: durazno para Antoja, índigo para ArmonyX, verde para Civix y tonos discretos asociados a los otros cinco productos. Antoja comparte el token --antoja-surface (#fff1e9) entre portada y galería, con titulares en tinta (#242327). Estos fondos pertenecen al artefacto; el granate sigue identificando la navegación del portafolio. La captura completa usa object-fit: contain y «Ampliar» abre el recurso original. Las flechas anterior/siguiente recorren la colección de forma circular. La región de capturas admite las flechas izquierda/derecha del teclado.

Las miniaturas seleccionan directamente una captura completa y marcan la activa con un contorno granate. En escritorio miden (76 × 50px); en móvil (60 × 44px) y pueden desplazarse horizontalmente. La activa se desplaza automáticamente a la zona visible. Las flechas miden (44 × 44px). Antoja ofrece filtros Todas, Cliente, Negocio y Repartidor; cambiar de filtro vuelve a su primera imagen y limita el contador y la navegación a esa selección.

El diálogo conserva la gestión de foco de Radix, el cierre mediante Escape y la devolución de foco al acceso que lo abrió. Al cerrarlo vuelve a la primera imagen y a la vista Imágenes. La ausencia de imágenes tiene un mensaje propio. El enlace de fuente permite abrir el video original.

La galería de Konansa reúne dos composiciones locales WebP, producto-v2.webp y panel-v2.webp, y la captura histórica de su página. Las composiciones mejoran la presentación a partir del material original y llevan la nota Composición de presentación. Los cinco fotogramas del video m_L6e_WbdYo permanecen como material fuente documentado en [el README de capturas](public/imagenes/konansa/README.md); las etiquetas y textos alternativos residen en [los datos del portafolio](src/lib/portfolio.ts).

**The Contextual Focus Rule.** El foco usa granate sobre las superficies claras. Los campos de contacto señalan el foco con su línea inferior y cursor granate.

Los cambios de color de acciones, navegación y enlaces sociales son breves (180ms, ease). Las imágenes de proyecto usan un cambio de escala más pausado (420ms, cubic-bezier(0.16, 1, 0.3, 1)); el diálogo usa una duración breve (200ms). El cambio de imagen en la galería emplea un fundido (280ms).

La entrada inicial presenta el nombre (650ms) y el retrato (850ms); el trazo granate se dibuja una sola vez (720ms). Los teléfonos responden al pasar el puntero con cambios cortos de inclinación y desplazamiento (480ms). Durante la lectura, PortfolioMotion descubre los medios (620ms) y el texto marcado (460ms) con desplazamientos cortos y una curva común (cubic-bezier(0.16, 1, 0.3, 1)). El contenido base permanece visible y cada entrada se ejecuta una vez. El motor excluye controles interactivos y deja el contenido legible si no dispone de las APIs de animación.

**The Purposeful Motion Rule.** El movimiento presenta contenido o confirma una interacción. Las entradas ocurren una vez, sin bucles, y la preferencia de movimiento reducido conserva una lectura estática.

La preferencia de movimiento reducido elimina el desplazamiento suave, desactiva las entradas, el trazo y el fundido de galería, cancela las entradas gestionadas por PortfolioMotion y retira los desplazamientos de respuesta. Las transiciones restantes se reducen a una duración mínima (0.01ms), con una sola repetición. El progreso bajo la cabecera refleja el desplazamiento sin una animación autónoma. Estas extensiones están registradas en el sidecar.

## Do's and Don'ts

### Do

- Do conservar Manrope, los neutros claros y el granate como vocabulario de esta superficie.
- Do mostrar las capturas principales completas, con texto alternativo y una descripción próxima.
- Do mantener el foco visible, los nombres accesibles de los controles y los mensajes de estado del formulario.
- Do conservar la adaptación de columnas, el desplazamiento de miniaturas y la preferencia de movimiento reducido.

### Don't

- Don't recortar las capturas o miniaturas para llenar su marco; el retrato tiene una función distinta.
- Don't encerrar cada proyecto en un panel con fondo y sombra; los artículos construidos se organizan mediante imagen, tipografía y espacio.
- Don't convertir la presentación personal o el contacto en grandes superficies granate; el acento se concentra en detalles y acciones.
- Don't añadir animaciones en bucle ni ocultar contenido detrás de una entrada obligatoria.
- Don't reemplazar las etiquetas de los campos ni los nombres accesibles de las flechas por iconos sin descripción.

Las rampas tonales del sidecar son muestras generadas para el panel de diseño; no amplían la paleta usada por esta página.

