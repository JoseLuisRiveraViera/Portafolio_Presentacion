# Material visual de Konansa

## Presentaciones actuales

La galería actual utiliza `producto-v2.webp` y `panel-v2.webp`, composiciones de presentación editadas con la herramienta integrada ImageGen a partir de los fotogramas originales de 00:31.50, 00:36 y 00:39.70, y de la captura histórica de la web. Se conserva la identidad visual y la referencia de la interfaz; las composiciones se identifican como tales en la galería. No se presentan como capturas originales de la aplicación.

Dirección de edición: producto sobre fondo neutro claro; dispositivos completos, materiales y perspectiva consistentes, iluminación de estudio y sombras suaves; mayor definición y encuadre; interfaz e identidad del material original como referencia. Sin elementos decorativos ni textos comerciales añadidos. Cada escena corresponde a un prompt de edición independiente (producto móvil / panel en varios dispositivos), mediante la herramienta integrada, sin CLI de generación.

Los originales editados se conservan en `$CODEX_HOME/generated_images/01a13be0-dd60-76a2-904c-1d3d0c2bbaf7/`:

- `exec-54191229-33d7-4063-ad3d-155dd868daea.png`: experiencia móvil.
- `exec-c2f8b110-e4a0-4779-8023-306b5b88dec8.png`: panel financiero.

Los WebP de esta carpeta son las copias que consume el sitio. La tercera imagen de la galería es `../konansa.png`, captura histórica sin edición. El video original continúa disponible en el reproductor y mediante su enlace a YouTube.

## Fotogramas conservados de la primera versión

Fotogramas extraídos del video original compartido por el autor del portafolio:
https://www.youtube.com/watch?v=m_L6e_WbdYo

| Archivo | Instante |
| --- | --- |
| presentacion.webp | 00:36 |
| balance.webp | 01:00 |
| whatsapp.webp | 01:12 |
| movimientos.webp | 01:24 |
| presupuestos.webp | 01:36 |

Fuente: video de 1920 × 1080. Capturas guardadas en WebP a 1600 × 900, sin recortes, imágenes añadidas ni cambios de color. La grabación completa queda fuera del sitio; se ofrece mediante el reproductor de YouTube.

Los títulos, textos alternativos y el video están definidos en `src/lib/portfolio.ts`. Los fotogramas anteriores se conservan como archivo, pero ya no forman la galería activa.
