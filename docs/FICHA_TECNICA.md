## Ficha técnica — Proyecto: tucuBank

Última actualización: 2025-10-28

Descripción breve
-----------------

`tucuBank` es un sitio web estático que sirve como interfaz estática de presentación (landing) para un proyecto bancario de ejemplo. Está implementado con HTML, CSS y JavaScript puro, sin framework de front-end. El proyecto contiene páginas estáticas, hojas de estilo, scripts de comportamiento y activos (imágenes).

Objetivo de esta ficha
---------------------

Proveer a nuevos desarrolladores una referencia técnica completa para entender, ejecutar, mantener y extender el proyecto. Incluye: estructura del repositorio, decisiones tecnológicas, instrucciones de desarrollo local, convenciones de código, tareas comunes y checklist de incorporación.

Contenido
--------

- Resumen del proyecto
- Estructura del repositorio
- Tecnologías y dependencias
- Cómo ejecutar localmente
- Convenciones y buenas prácticas
- Guía de contribución (ramas, commits, PR)
- Despliegue y hosting sugerido
- Checklist para nuevos desarrolladores
- Contactos y siguientes pasos

## Estructura del repositorio

Raíz del proyecto (resumen):

- `index.html` — página principal.
- `pages/404.html` — página 404.
- `styles/` — hojas de estilo:
	- `style.css` — estilos principales.
	- `switch.css` — estilos alternativos / persistencia de tema.
- `js/` — scripts de cliente:
	- `theme.js` — control del tema (modo claro/oscuro) u otras interacciones del UI.
- `img/` — activos gráficos:
	- `card1.avif`, `img_sliders/` — imágenes para la UI y sliders.
- `FICHA_TECNICA.md` — este documento.

Nota: Esta es la estructura visible en el workspace; si se agregan nuevas carpetas o build tools, actualice esta sección.

## Tecnologías y dependencias

- HTML5 (estático)
- CSS3
- JavaScript (vanilla)
- Formatos de activos: AVIF y formatos web-friendly

Dependencias externas: Ninguna explícita en el repositorio (no hay `package.json`, `requirements.txt` ni bundler). Herramientas opcionales para desarrollo local: Python, Node.js (para `npx serve`) o cualquier servidor HTTP estático.

## Contrato mínimo y expectativas (inputs/outputs)

- Input: cambios en HTML/CSS/JS y/o activos (imágenes).
- Output: sitio estático servido (navegador) que mantiene accesibilidad y rendimiento adecuados.
- Modos de error: archivos faltantes en `img/` o rutas incorrectas; enlaces rotos entre páginas; cargas JS no ejecutadas por errores sintácticos.

## Cómo ejecutar el proyecto localmente

Requisitos mínimos: navegador moderno y alguna forma de servir archivos estáticos.

Opciones rápidas:

1) Usar Python (incluido en la mayoría de los entornos):

```bash
# desde la raíz del proyecto
python -m http.server 8000
# luego abrir http://localhost:8000
```

2) Usar Node.js (si está instalado) con `serve` (opcional):

```bash
# instalar serve si no está (una sola vez)
npm install -g serve
serve -s .
```

Comprobaciones rápidas al abrir el sitio:

- Abrir `http://localhost:8000` y verificar que `index.html` carga correctamente.
- Probar cambio de tema / interacciones del archivo `js/theme.js`.
- Verificar que las imágenes en `img/` se muestran y que los sliders (si los hay) funcionan.

## Convenciones de código y buenas prácticas

- HTML
	- Usar estructura semántica (header, main, footer, nav, section, article) cuando se agreguen nuevas páginas.
	- Mantener meta tags básicos (charset, viewport, description) en `index.html`.

- CSS
	- Agrupar reglas por componente/propósito en `style.css`.
	- Evitar estilos globales no intencionales (prefiera clases específicas para componentes).
	- Documentar bloques complejos con comentarios breves.

- JavaScript
	- Código en `js/` debe ser modular y documentado; evitar contaminaciones globales (use IIFE o módulos si se adopta bundler).
	- Manejo de errores: atrapar excepciones en eventos críticos para evitar romper la UX.

- Assets
	- Mantener imágenes optimizadas; preferir formatos modernos (AVIF/WebP) y proveer fallback razonable.

## Guía de contribución

- Flujos de ramas:
	- Rama por defecto: `dev` (actual rama por defecto del repo).
	- Flujo sugerido: crear ramas de feature/bugfix con prefijo: `feature/<descripcion>` o `fix/<descripcion>`.

- Commits:
	- Mensajes en inglés o español técnico, formato corto + descripción (ej: `feat: agregar slider en home` o `fix: corregir ruta imagen hero`).
	- Mantener commits pequeños y con propósito único.

- Pull Requests:
	- Abrir PR contra `dev`.
	- Incluir descripción del cambio, archivos clave modificados y pasos para revisar localmente.

## Revisión y QA

- Revisar en al menos dos navegadores (Chromium y Firefox) y en modo móvil (responsive).
- Comprobaciones manuales:
	- Validar enlaces internos y recursos (p. ej. inspector de red para 404).
	- Probar accesibilidad básica (contraste, navegación por teclado).

## Despliegue sugerido

Al ser un sitio estático, opciones sencillas y gratuitas/low-cost:

- GitHub Pages (si el repo se aloja en GitHub): configuración para rama `dev` o `gh-pages`.
- Netlify / Vercel — arrastrar y soltar o conectar repo para deploy automático.
- Cualquier hosting estático que sirva `index.html`.

Recomendación: configurar despliegue automático desde la rama `dev` o crear pipeline para `main/master` cuando se estabilice la versión para producción.

## Seguridad y privacidad

- No almacenar credenciales en el repositorio.
- No hay código del lado servidor ni lógica sensible en este repo; si se añade, documentar flujo de autenticación y secretos gestionados externamente.

## Performance

- Mantener imágenes optimizadas y lazy-loading cuando sea aplicable.
- Minimizar el uso de scripts pesados; actualmente `js/theme.js` debe ser ligero.

## Checklist para nuevos desarrolladores

Cuando te incorpores, completa los siguientes pasos:

1. Clonar el repositorio y abrir `index.html` en local.
2. Levantar servidor estático (ver sección "Cómo ejecutar...").
3. Revisar la estructura del proyecto y abrir `js/theme.js` y `styles/style.css`.
4. Ejecutar pruebas manuales de UI en desktop y móvil.
5. Crear una rama de prueba `feature/test-setup` y agregar un cambio menor (p. ej. comentario o ajuste de estilo) para validar el flujo de PR.

## Plantilla de issues/PR sugerida

- Título claro: `feat: descripción corta` o `fix: descripción corta`.
- Descripción:
	- Resumen del problema o feature.
	- Pasos para reproducir (si aplica).
	- Cambios realizados (archivos y motivos).
	- Checklist de verificación (navegadores, responsive, accessibility).

## Archivos clave y propósito (rápida referencia)

- `index.html` — entrada principal del sitio.
- `styles/style.css` — estilos principales.
- `styles/switch.css` — estilos para cambios de tema o variantes.
- `js/theme.js` — lógica de temas y comportamientos front-end.
- `img/` — imágenes y recursos gráficos.

## Siguientes pasos recomendados (mejoras técnicas)

1. Añadir `package.json` y scripts de desarrollo (lint, format, test) si el proyecto crece.
2. Implementar integración continua (GitHub Actions) para builds y chequeos automáticos.
3. Añadir pruebas de interfaz mínima (visual regression o snapshots) si aparecen componentes reutilizables.