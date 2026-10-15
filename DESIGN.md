---
name: "Portafolio de José Luis Rivera Viera"
description: "Proyectos reales en una composición abierta, clara y granate."
colors:
  primary: "#800000"
  background: "#fafafa"
  foreground: "#242327"
  primary-foreground: "#ffffff"
  muted: "#f0eff1"
  muted-foreground: "#66636b"
  accent: "#f5e9e9"
  border: "#dfdde1"
  on-primary-muted: "#f0c7c7"
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
spacing:
  tight-gap: "8px"
  detail-gap: "10px"
  compact-gap: "16px"
  action-inset: "22px"
  panel-inset: "24px"
  layout-gap: "32px"
  section-compact: "56px"
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
    backgroundColor: "{colors.primary-foreground}"
    textColor: "{colors.primary}"
    typography: "{typography.contact-action}"
    rounded: "{rounded.control}"
    height: "46px"
    padding: "8px 22px"
  button-contact-hover:
    backgroundColor: "{colors.accent}"
  field-contact:
    backgroundColor: "transparent"
    textColor: "{colors.primary-foreground}"
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
    width: "40px"
    height: "44px"
  gallery-panel:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.panel}"
    padding: "30px"
    width: "calc(100% - 40px)"
---

# Design System: Portafolio de José Luis Rivera Viera

## Overview

**Creative North Star: "Documentación de ingeniería"**

El sistema construido presenta el trabajo como un archivo abierto: fondo claro, tinta neutra, imágenes de proyectos y granate para la identidad y la interacción. La composición tiene aire y una jerarquía precisa, coherentes con el carácter minimalista y profesional registrado en PRODUCT.md.

Manrope sostiene toda la superficie, desde el nombre de gran tamaño hasta los metadatos. La separación se obtiene con espacio, líneas finas y cambios de tono. Las capturas principales mantienen el artefacto completo; el retrato y las miniaturas tienen el recorte específico que requiere su función.

La página permanece plana durante la lectura. La galería introduce una capa modal delimitada por un fondo atenuado y una sombra difusa. El granate también forma superficies completas para la muestra inicial y el contacto, con texto y controles claros sobre él.

**Key Characteristics:**

- Un solo acento granate sobre neutros claros.
- Una sola familia tipográfica y jerarquía por tamaño, peso y espaciado.
- Artículos abiertos con capturas completas y metadatos próximos al proyecto.
- Controles discretos, foco visible y estados de envío explícitos.

**The Complete Image Rule.** Las imágenes principales de proyectos se muestran completas. El recorte queda limitado al retrato y a las miniaturas de navegación.

Este documento registra la superficie construida. La autoridad de los valores es [globals.css](src/app/globals.css), con la fuente cargada en [el layout raíz](src/app/layout.tsx). Los patrones se observan en [la página](src/app/(presentation)/page.tsx), [su layout](src/app/(presentation)/layout.tsx), [la galería](src/components/project-modal.tsx) y [el formulario](src/components/contact-form.tsx). El frontmatter contiene los valores normativos; la prosa describe su aplicación. La estructura sigue [el formato DESIGN.md](https://raw.githubusercontent.com/google-labs-code/design.md/main/docs/spec.md).

## Colors

La paleta combina un acento profundo con una base neutra clara. Los nombres de esta sección corresponden a las claves del frontmatter.

### Primary

| Token | Carácter y uso observado |
| --- | --- |
| primary | Granate: marca, acentos en titulares, acciones, enlaces, selección y superficies de muestra y contacto. |
| primary-foreground | Blanco: texto y controles sobre granate; fondo del botón de envío. |
| accent | Tinte de granate: respuesta al pasar el puntero sobre el envío y las flechas de galería. |
| on-primary-muted | Rosa claro: texto auxiliar, metadatos y estados sobre granate. |

### Neutral

| Token | Carácter y uso observado |
| --- | --- |
| background | Blanco neutral: página, cabecera, pie y panel de galería. |
| foreground | Tinta: texto principal y enlaces neutrales. |
| muted | Gris de superficie: bloque biográfico y marcos de proyectos. |
| muted-foreground | Gris de lectura: descripciones, categorías, pies y metadatos. |
| border | Gris de estructura: separadores de la cabecera, proyectos y controles de galería. |

Las imágenes conservan sus propios colores. Los fondos específicos de sus marcos acompañan el contenido y no introducen acentos nuevos para la navegación.

**The Single Accent Rule.** El granate reúne identidad, enlaces, selección y acción. También puede ocupar una superficie completa cuando los contenidos se invierten a claro.

## Typography

**Display Font:** Manrope.
**Body Font:** Manrope, cargada mediante next/font/google con el fallback generado por Next.js y visualización swap.

La familia tiene una presencia sobria y legible. Los titulares emplean un espaciado apretado; el texto descriptivo dispone de mayor interlineado. La escala responde a funciones y anchos de pantalla, sin una razón matemática única.

| Rol del frontmatter | Uso observado |
| --- | --- |
| display | Nombre del autor; tamaño fluido y segunda línea granate. |
| headline | Titulares de proyectos y biografía. |
| title | Títulos de los artículos de proyecto. |
| body | Descripciones de proyectos y texto de contacto. |
| label | Navegación y acción principal. |
| label-strong | Enlaces de texto y selección de Capturas/Video. |
| contact-action | Texto del botón de envío. |
| control | Campos y botones de contenido de la galería en reposo. |
| caption | Metadatos y texto auxiliar de menor tamaño. |

El texto introductorio usa un cuerpo más amplio (16px); la biografía usa un tamaño intermedio (15px). Las descripciones extensas de proyectos y biografía limitan su línea (65ch). El texto de la galería admite una línea más larga (72ch). El contador de imágenes usa números tabulares.

En el rango intermedio, el nombre queda fijo (3.5rem). En móvil usa una escala fluida distinta (clamp(2.6rem, 9vw, 4rem)) y un interlineado (1.1). Los titulares de sección se fijan (29px) y los títulos de proyecto se compactan (21px). El contacto tiene su propia escala de titular (clamp(2rem, 4.2vw, 3rem)) y pasa a un tamaño fijo en móvil (36px).

**The One Typeface Rule.** Manrope cubre titulares, texto y controles. La jerarquía cambia con tamaño, peso y espaciado, sin introducir una segunda familia.

## Layout

El contenedor central combina ancho máximo (1160px) y margen flexible. En escritorio ocupa el ancho de ventana menos un espacio total (96px), equivalente a un margen lateral (48px). La cabecera permanece visible y utiliza una altura amplia (88px); las anclas tienen una compensación de desplazamiento (100px).

La composición inicial y el proyecto destacado emplean dos columnas con proporción (1.15fr / 1fr). La lista restante utiliza dos columnas iguales, con separación horizontal (40px) y vertical (56px). Los artículos permanecen abiertos. La biografía combina retrato y texto; el contacto combina texto y formulario sobre una banda granate.

El ritmo reúne distancias cortas para controles y metadatos, distancias medias para grupos y espacios amplios entre secciones. La lista de tecnologías fluye en líneas de texto y se envuelve según el espacio disponible.

| Rango observado | Adaptación construida |
| --- | --- |
| De 761px a 1050px | Mantiene dos columnas, reduce huecos y rellenos, apila título/categoría y ajusta la cabecera de la muestra. |
| Hasta 760px | El contenedor deja márgenes laterales (20px); cabecera (72px); composición inicial, destacado, lista, biografía y contacto pasan a una columna. Las secciones acortan su espacio vertical. |
| Hasta 400px | Los márgenes laterales se reducen (16px), la navegación se compacta y los dos campos iniciales del formulario pasan a una columna. |

La galería cabe en la ventana mediante ancho y altura limitados, con desplazamiento vertical dentro del panel. En escritorio deja una separación exterior total (40px), usa ancho máximo (1040px) y relleno (30px). En móvil deja una separación exterior total (24px) y relleno (20px). Las miniaturas se desplazan horizontalmente cuando exceden el espacio.

**The Responsive Flow Rule.** Cuando el ancho deja de sostener dos columnas, los contenidos pasan a una secuencia vertical y conservan su orden de lectura.

## Elevation & Depth

La página usa superficies planas: líneas finas separan regiones y los cambios de tono delimitan biografía, muestra y contacto. Los artículos no tienen sombra. La profundidad aparece en la galería, cuyo panel claro se superpone a un fondo negro atenuado (50%).

La única sombra distintiva de esta superficie es modal: amplia, suave y desplazada hacia abajo. Su valor exacto está registrado en el sidecar como modal-gallery. El panel se abre y cierra con fundido y un cambio breve de escala; ese movimiento pertenece al diálogo.

**The Modal Depth Rule.** La sombra expresa la superposición de la galería. Los proyectos de la página se separan con espacio, líneas y tono.

## Shapes

Las esquinas suavizadas siguen la función: pequeñas en acciones, mayores en marcos de imagen y aún mayores en el panel modal y la muestra inicial. Los campos de contacto son rectos y se delimitan mediante una única línea inferior. Los separadores de sección son finos (1px).

La galería conserva esquinas propias en el área de imagen y video (8px) y en las miniaturas (4px). Las flechas de proyecto se apoyan en un círculo pequeño (38px); no definen la silueta del artículo.

Los marcos de proyectos usan proporción panorámica (16:9), con una variante destacada de escritorio (16:10). El retrato tiene una proporción vertical (4:4.5) y pasa a cuadrado en móvil. Las imágenes principales de proyectos usan ajuste completo; el retrato y las miniaturas usan recorte.

**The Open Article Rule.** La captura puede tener esquinas suaves; el artículo completo no necesita una caja exterior. Título, categoría, descripción y enlace permanecen fuera del marco de la imagen.

## Components

### Buttons and links

La acción principal es un enlace granate con texto blanco, flecha y esquinas pequeñas. Su color se oscurece al pasar el puntero. Los enlaces de texto usan granate, peso fuerte y subrayado al pasar el puntero; los enlaces sociales dentro del contenido pueden usar tinta.

El envío invierte la acción sobre la banda de contacto: blanco con texto granate. Al pasar el puntero adopta el tinte de granate. Durante el envío queda deshabilitado y atenuado, con icono de carga y el texto Enviando. Los iconos de la interfaz proceden de Lucide y acompañan texto o nombres accesibles.

### Navigation

La cabecera reúne una marca textual y tres enlaces de ancla. La marca mezcla granate y tinta; Hablemos usa granate y una flecha. Los enlaces cambian a granate al pasar el puntero. La navegación permanece visible en móvil y ajusta su tamaño y sus huecos; en el ancho más estrecho se retira la flecha de Hablemos.

El enlace Saltar al contenido se muestra al recibir foco. El pie reúne autoría y accesos sociales; su texto auxiliar se retira en móvil.

### Project articles and image frames

Cada artículo reúne captura, título, categoría, descripción y enlace. El reconocimiento, cuando existe, se presenta con un icono y texto granate. Los metadatos siguen al título; ambos pueden apilarse cuando el ancho se reduce. La captura enlazada tiene una flecha circular y un aumento de escala leve al pasar el puntero (1.025).

La muestra inicial es un panel granate con la captura histórica de Konansa y un acceso a la galería. El proyecto destacado incorpora una captura del video, su descripción y la explicación de que su web ya no está disponible. La galería ocupa el lugar de ese destino externo.

### Contact fields and feedback

Los campos conservan etiquetas visibles de nombre, correo y mensaje. Nombre y correo se presentan juntos cuando el ancho lo permite; el mensaje ocupa la fila completa. Los campos son transparentes sobre granate, con texto y cursor blancos, una línea inferior rosada y texto de ayuda más claro. El foco vuelve blanca la línea inferior y añade una variación tonal tenue. El mensaje permite cambiar su altura.

El formulario conserva el envío existente mediante Formspree: validación de campos requeridos y correo, petición JSON, bloqueo de campos y acción durante la carga, confirmación o error visible y notificación mediante Sonner. El texto de estado utiliza una región de anuncio cortés. El éxito limpia los campos; el fallo conserva el mensaje para reintentar y ofrece LinkedIn como alternativa. El endpoint no forma parte del sistema visual.

### Project gallery

El diálogo utiliza título, descripción, cierre con nombre accesible y controles de Capturas/Video. La vista inicial muestra imágenes locales; el reproductor se incorpora al elegir Video. Capturas y Video se indican mediante texto e icono; la selección añade granate, peso fuerte y línea inferior.

La imagen activa se muestra completa en un marco panorámico y tiene pie con título, instante cuando existe y contador. El pie anuncia sus cambios de forma cortés. Las flechas anterior/siguiente recorren la colección de forma circular. La región de capturas admite las flechas izquierda/derecha del teclado.

Las miniaturas seleccionan directamente una captura y marcan la activa con un contorno granate. Sus imágenes sí se recortan para la navegación. En escritorio miden (86 × 52px); en móvil (66 × 44px) y pueden desplazarse horizontalmente. Las flechas tienen altura táctil (44px) y llegan a un ancho (44px) en móvil.

El diálogo conserva la gestión de foco de Radix, el cierre mediante Escape y la devolución de foco al acceso que lo abrió. Al cerrarlo vuelve a la primera captura y a la vista Capturas. La ausencia de imágenes tiene un mensaje propio. El enlace de fuente permite abrir el video original.

Konansa reúne cinco fotogramas locales WebP (1600 × 900px) del video m_L6e_WbdYo y la captura histórica de su página. La fuente, los instantes y la conservación de la imagen completa están registrados en [el README de capturas](public/imagenes/konansa/README.md); las etiquetas y textos alternativos residen en [los datos del portafolio](src/lib/portfolio.ts).

**The Contextual Focus Rule.** El foco usa granate sobre la base clara y blanco sobre superficies granate. Los campos de contacto señalan el foco con su línea inferior blanca.

Los cambios de color de acciones, navegación y enlaces sociales son breves (180ms, ease). Las imágenes de proyecto usan un cambio de escala más pausado (420ms, cubic-bezier(0.16, 1, 0.3, 1)); el diálogo usa una duración breve (200ms). La preferencia de movimiento reducido elimina el desplazamiento suave y reduce transiciones y animaciones a una duración mínima (0.01ms), con una sola repetición. Estas extensiones están registradas en el sidecar.

## Do's and Don'ts

### Do

- Do conservar Manrope, los neutros claros y el granate como vocabulario de esta superficie.
- Do mostrar las capturas principales completas, con texto alternativo y una descripción próxima.
- Do mantener el foco visible, los nombres accesibles de los controles y los mensajes de estado del formulario.
- Do conservar la adaptación de columnas, el desplazamiento de miniaturas y la preferencia de movimiento reducido.

### Don't

- Don't recortar las capturas principales para llenar su marco; el retrato y las miniaturas tienen una función distinta.
- Don't encerrar cada proyecto en un panel con fondo y sombra; los artículos construidos se organizan mediante imagen, tipografía y espacio.
- Don't reemplazar las etiquetas de los campos ni los nombres accesibles de las flechas por iconos sin descripción.

Las rampas tonales del sidecar son muestras generadas para el panel de diseño; no amplían la paleta usada por esta página.

