# Capturas y presentaciones de proyectos

## Vistas móviles

Las pantallas de Civix, ArmonyX y Antoja se capturaron en sus aplicaciones locales a 390 × 844 píxeles. Las copias WebP conservan la captura completa. Los marcos de teléfono y fondos de las portadas y galerías se construyen en CSS; no se regeneraron interfaces ni textos con IA. Cada imagen de la galería recibe un titular y un marco de teléfono o navegador; «Ampliar» abre la captura original. Antoja permite filtrar por Cliente, Negocio y Repartidor.

- Civix: seis capturas. Conserva `../civix/inicio.webp` y `../civix/mapa.webp` y añade `mapa-agua-v5.webp`, `mapa-detalle-v5.webp`, `detalle-v5.webp` y `seguimiento-v5.webp`. Cuenta ciudadana de demostración, selección de Tepic y reportes del entorno local. Origen: http://localhost:3101/ciudadano.
- ArmonyX: seis imágenes `../armonyx/*-v4.webp`: inicio, mapa, leyenda, reportes, detalle e invitación. Sustituyen las dos vistas de la versión anterior. Origen: http://127.0.0.1:3102/residente, aplicación residencial original del worktree existente `C:/Users/uakid/Desktop/videocoder/armonyx-app-reference/front`, commit `0b6072f` (`origin/mergeInvitacionGuardia2`). Usa MapLibre, OpenFreeMap Liberty y los GeoJSON originales de Las Fincas Residencial: 335 polígonos de casas/edificios, áreas verdes y amenidades. La API local no devuelve coordenadas individuales de casas asignadas; el componente original distribuye los códigos del coto sobre los polígonos cuando faltan esas coordenadas. Las capturas documentan el trazado y la interfaz, sin certificar la posición de los códigos. La invitación muestra únicamente el formulario, sin generar un QR activo.
- Antoja: diez imágenes `../antoja/*-v4.webp`: Cliente (inicio, carta, pedidos), Negocio (panel, pedidos, menú, reportes) y Repartidor (entregas, ganancias, perfil). Aplicación Flutter original compilada a web, con repositorios y personas ficticias de demostración mediante el mismo patrón de overrides que los tests existentes. Orígenes: http://127.0.0.1:3103/?rol=cliente#/home, http://127.0.0.1:3104/?rol=negocio#/home y http://127.0.0.1:3105/?rol=repartidor#/home. No se solicitó la ubicación real ni se creó ningún pedido. Se excluyó la vista de navegación porque el SDK web de Google Maps no está configurado; no se publica un mapa vacío.

Las imágenes históricas de BlueSense, Ramírez Plaza, Nova-Sense y Echo se convirtieron a WebP, con un máximo de 1600 × 1200 píxeles manteniendo su proporción. Los PNG originales permanecen intactos. BlueSense ahora utiliza las capturas nuevas del sitio en Neocities descritas abajo. La procedencia del material de Konansa está en `../konansa/README.md`.

## Ampliación de galerías · 15 de octubre de 2026

- Nova-Sense: seis capturas originales conservadas en el repositorio, convertidas sin recortar a `nova-presentation`, `nova-dashboard`, `nova-map`, `nova-alerts`, `nova-statistics` y `nova-chat` (`.webp`).
- Ramírez Plaza: cuatro imágenes en total. Se añadieron `ramirez-conocenos.webp`, `ramirez-negocios.webp` (Leori Store) y `ramirez-servicios.webp` (Heladería Frida), capturadas mediante navegación de https://joseluisriveraviera.github.io/Ram-rez-Plaza/.
- Echo: tres imágenes en total. Se añadieron `echo-dashboard.webp` y `echo-manual-sync.webp` desde su demo pública en https://echo-omega-lovat.vercel.app/dashboard. El panel muestra valores de demostración; el formulario se conservó sin enviar.
- Konansa: tres materiales distintos, con sus composiciones identificadas y acceso al video histórico.
- Civix quedó ampliado a seis capturas al completar su ejecución local: inicio, mapa, filtro de agua, incidencia seleccionada, detalle y línea de tiempo. El bloqueo de arranque de la primera ampliación ya está resuelto.
- BlueSense reúne ahora cuatro capturas del enlace en Neocities facilitado por el autor. El problema de certificado correspondía al enlace anterior y no se evadió; el nuevo sitio permite la navegación normal.

Los JPEG originales de la ampliación se conservan fuera del repositorio, en `C:/Users/uakid/.codex/tmp/portfolio-media/v4-captures/` y `v4-public/`. Las 16 capturas móviles nuevas se exportaron a WebP calidad 92, sin cambiar dimensiones, con 565 KB en total. Todos los cambios se realizaron mediante sesiones de demostración y lectura de datos; no se enviaron formularios, invitaciones, pedidos ni modificaciones a bases de datos.

### Cierre de la ampliación de Civix

Se añadieron cuatro capturas móviles de 390 × 844, convertidas a WebP calidad 92 sin recortar ni regenerar la interfaz. Los JPEG y su manifiesto están en `C:/Users/uakid/.codex/tmp/portfolio-media/v5-civix/`. La vista de detalle y su línea de tiempo corresponden al mismo reporte de demostración, `TEC-2026-0154`, en estado En proceso.

Para esta sesión se usó la opción existente `INEGI_CATALOG_ENABLED=false`, que limita el catálogo a los municipios guardados en la base local y evita esperar al servicio externo. El mapa conserva la opción OSM de la vista previa y su atribución. No se cambiaron archivos de Civix ni variables de entorno persistentes, no se crearon reportes ni se añadieron apoyos vecinales. El flujo de creación requiere ubicación precisa y no forma parte de las capturas nuevas.

### BlueSense y continuidad de Antoja

BlueSense enlaza a https://joseluisrivera.neocities.org/BlueSense/. Se capturaron cuatro vistas originales: mapa con atribución de OpenStreetMap, portada con la marca NOVA·Sense que conserva el sitio, propuesta tecnológica y leyenda de indicadores. Están en `../bluesense/*-v6.webp`. Son vistas del prototipo original, no mediciones verificadas de producción. Las capturas completas se convierten a WebP calidad 92 sin recortar ni regenerar textos o interfaces; su presentación utiliza el marco de navegador de la galería. Las cuatro imágenes suman 445 016 bytes. Los JPEG y el manifiesto permanecen en `C:/Users/uakid/.codex/tmp/portfolio-media/v6-bluesense/`.

Se descartaron las tomas de un diálogo con el fondo del mapa vacío y de una gráfica con encabezado incompleto. La captura histórica anterior se conserva en el repositorio. No se enviaron formularios ni se modificó el sitio remoto.

Antoja comparte el token CSS `--antoja-surface: #fff1e9` entre su portada y sus diez imágenes de galería, con titulares oscuros `#242327`. El botón «Visitar sitio» abre la landing pública https://antoja.com.mx/.

## Fotografías ilustrativas del catálogo de Antoja

Los mocks originales no incluían fotografías. Se crearon cuatro fotos gastronómicas originales con la herramienta integrada ImageGen, usadas exclusivamente como contenido ilustrativo del catálogo demo externo. No representan los platos reales de un negocio y no alteran la interfaz Flutter. La nota de origen de la galería lo indica.

Prompt común: fotografía gastronómica profesional horizontal, plato centrado con margen para recortes de la aplicación, ingredientes y porciones realistas, luz natural suave, mesa beige neutra, sin manos, personas, marcas, precios, texto ni collage; imagen original ilustrativa para un menú de demostración, sin imitar un restaurante real.

Variaciones:
- Tacos: tres tacos de carne asada en tortilla de maíz, cebolla, cilantro, limones y salsa en recipiente de barro.
- Sushi: rolls con salmón, aguacate y pepino, algunos nigiri, plato cerámico oscuro y soja al lado.
- Pizza: pizza napolitana margarita con borde aireado, mozzarella, tomate y albahaca.
- Hamburguesa: carne a la parrilla, cheddar, lechuga, tomate, pan brioche y papas fritas.

Originales PNG guardados por ImageGen (se conservan sin modificación):
- tacos: `C:/Users/uakid/.codex/generated_images/01a13be0-dd60-76a2-904c-1d3d0c2bbaf7/exec-58c44aa5-ccd1-44d8-8915-cd35da621a9e.png`
- sushi: `C:/Users/uakid/.codex/generated_images/01a13be0-dd60-76a2-904c-1d3d0c2bbaf7/exec-27829816-8a2a-44c1-b9c1-be9a0018e5df.png`
- pizza: `C:/Users/uakid/.codex/generated_images/01a13be0-dd60-76a2-904c-1d3d0c2bbaf7/exec-bf817715-acb2-4053-890d-e804c7c1bcaf.png`
- burger: `C:/Users/uakid/.codex/generated_images/01a13be0-dd60-76a2-904c-1d3d0c2bbaf7/exec-a448b909-ab85-4fc1-89f4-afa61f9f17e2.png`

Las copias WebP para el servidor de demostración están fuera del portafolio en `C:/Users/uakid/.codex/tmp/portfolio-media/antoja/demo-food/`. El portafolio solo incluye las capturas finales con esas fotos dentro de la UI.

## Ajustes de la captura anterior (v3)

Civix y ArmonyX tenían URLs de CARTO sin API key que devolvían una marca de error sobre el mapa. Se añadió una opción `NEXT_PUBLIC_MAP_TILE_PROVIDER=osm`, elegida solo en los procesos de vista previa, con atribución visible de OpenStreetMap. CARTO permanece como opción predeterminada. No se guardaron cambios de variables de entorno ni se modificaron datos.

Las imágenes v4 de ArmonyX ya no proceden de ese checkout heredado: se capturaron desde la implementación residencial MapLibre indicada arriba, sin cambiar su mapa ni estilo.

Archivos acotados:
- `C:/Users/uakid/Desktop/CIVIX-Front/lib/mapTiles.ts`, `components/citizen/CitizenMap.tsx` y `components/citizen/MiniMap.tsx`.
- `C:/Users/uakid/Desktop/CIVIX-Front/components/citizen/CitizenApp.tsx`: respaldo de ciudad al restaurar una cuenta sin ciudad, equivalente al respaldo que ya existía en el inicio de sesión.
- `C:/Users/uakid/Desktop/ArmonyX_Front/lib/mapTiles.ts`, `components/residente/ResidenteMap.tsx` y `components/residente/MiniMap.tsx`.
- Antoja: shell `web/` generado para poder compilar la aplicación existente a web. Los overrides de demostración están fuera del repositorio; no se modificó `lib/`.

Se inicializó un índice `.codegraph/` propio en cada checkout consultado, conforme a las instrucciones del espacio de trabajo. No se ejecutaron seeds, migraciones, pedidos ni escrituras de datos. El PDF del CV y las credenciales no se copiaron al sitio.

