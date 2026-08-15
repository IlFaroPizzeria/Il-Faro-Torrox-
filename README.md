# Il Faro Ristorante Pizzeria — Web

Web estática (HTML + CSS + JS, sin frameworks) para **Il Faro Ristorante Pizzeria**, Torrox (Málaga).
Incluye: sección de Carta con enlace directo (`#carta`), galería, reseñas de Google, y selector de idioma **ES / EN / DE / IT** (fácil de ampliar).

```
il-faro-torrox/
├── index.html
├── css/styles.css
├── js/i18n.js        ← todos los textos, por idioma
├── js/main.js
├── img/               ← tus fotos van aquí (ver abajo)
│   ├── restaurante.jpg
│   ├── favicon.png
│   └── gallery/
│       ├── foto-1.jpg ... foto-6.jpg
└── README.md
```

Mientras no subas tus fotos, cada hueco de imagen muestra un marcador de posición
elegante con el nombre del archivo que espera — nada se ve roto.

---

## 1. Abrir el proyecto en VS Code

1. Descarga/descomprime esta carpeta `il-faro-torrox`.
2. Abre VS Code → `Archivo > Abrir carpeta…` → selecciona `il-faro-torrox`.
3. Instala la extensión **Live Server** (de Ritwick Dey) desde el panel de extensiones.
4. Clic derecho sobre `index.html` → **"Open with Live Server"**. Se abrirá en tu
   navegador con recarga automática cada vez que guardes un cambio.

---

## 2. Añadir tus fotos y logo reales

Coloca tus archivos con estos nombres exactos (o cámbialos también en `index.html`):

| Archivo | Uso |
|---|---|
| `img/favicon.png` | icono de la pestaña del navegador |
| `img/restaurante.jpg` | foto de la sección "Nosotros" |
| `img/gallery/foto-1.jpg` … `foto-6.jpg` | galería (6 fotos, formato cuadrado recomendado) |
| `img/logo.png` | opcional: si quieres sustituir el logo dibujado por tu logo real, dímelo y lo integro |

Recomendación: exporta las fotos a un tamaño razonable (máx. ~1600 px de ancho) para
que la web cargue rápido — herramientas como Squoosh.app lo hacen gratis en segundos.

---

## 3. Carta / menú real

Abre `js/i18n.js`. Ahí están todos los textos de la web, incluidos los platos de
ejemplo (`menu.item.*`) y los precios (directamente en `index.html`, buscando
`<span data-i18n="menu.item...">`). Sustituye:

- Los nombres de plato en `js/i18n.js` (en las 4 secciones `es`, `en`, `de`, `it`).
- Los precios en `index.html`, dentro de `<section id="carta">`, en las etiquetas `<b>`.

Puedes añadir o quitar platos copiando una línea `<li>` del mismo bloque.

---

## 4. Reseñas reales de Google

Por ley de derechos de autor, no puedo copiar el texto de reseñas ajenas escritas
por vuestros clientes en Google/Tripadvisor. La mejor solución (gratuita) son
estas dos cosas, que ya están montadas en la web:

**A) Botón directo a vuestras reseñas reales de Google** ✅ ya incluido
   Enlaza a `https://maps.app.goo.gl/qT5vMoULCiohNijX7` — vuestra ficha real.

**B) Widget en vivo con las reseñas reales** (para que aparezcan las estrellas y
comentarios dentro de la propia web, actualizándose solos):

1. Ve a [elfsight.com/google-reviews-widget](https://elfsight.com/google-reviews-widget/)
   (o alternativas gratuitas: EmbedSocial, Trustindex, Tagembed).
2. Crea una cuenta gratuita y conecta vuestro perfil de Google Business
   ("Il Faro Ristorante Pizzeria", Torrox).
3. Elfsight te dará un `<script>` para pegar. Sustituye en `index.html` el bloque:
   ```html
   <div id="google-reviews-widget" class="reviews-widget-slot">
     ...
   </div>
   ```
   por el código que te den (puedes dejar el mismo `id` si quieres mantener el estilo).
4. Cuando el widget esté activo, puedes borrar las 3 tarjetas de ejemplo
   (`<div class="review-cards">…</div>`) marcadas como "Ejemplo — sustituir por reseña real".

---

## 5. Idiomas

Todo el texto vive en `js/i18n.js`, organizado por idioma (`es`, `en`, `de`, `it`).
Para añadir uno nuevo (por ejemplo francés):

1. Copia el bloque `it: { ... }` completo dentro de `I18N`.
2. Cámbiale la clave a `fr` y traduce cada valor.
3. En `index.html`, dentro de `<div class="lang-switch" id="langSwitch">`, añade:
   ```html
   <button type="button" data-lang="fr" class="lang-btn">FR</button>
   ```

No hace falta tocar nada más — `main.js` detecta los botones automáticamente.

---

## 6. Subir a GitHub

1. Crea un repositorio nuevo en [github.com/new](https://github.com/new) (por ejemplo
   `il-faro-torrox`), sin README ni .gitignore (ya los tenemos).
2. En VS Code, abre una terminal (`Terminal > Nueva terminal`) dentro de la carpeta
   del proyecto y ejecuta:
   ```bash
   git init
   git add .
   git commit -m "Primera versión de la web de Il Faro"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/il-faro-torrox.git
   git push -u origin main
   ```
   (Sustituye `TU-USUARIO` por tu usuario de GitHub; VS Code también tiene un botón
   "Publish to GitHub" en la pestaña de Control de código fuente si prefieres no usar
   la terminal).

---

## 7. Publicar en Vercel

1. Entra en [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. Clic en **"Add New… > Project"**.
3. Selecciona el repositorio `il-faro-torrox`.
4. Como es HTML/CSS/JS puro, Vercel lo detecta como proyecto **estático**:
   deja el "Framework Preset" en `Other` y no hace falta configurar ningún
   "Build Command" — clic en **Deploy**.
5. En 30–60 segundos tendrás una URL tipo `il-faro-torrox.vercel.app`.
6. Para usar vuestro propio dominio (p. ej. `ilfarotorrox.com`), ve a
   **Project Settings > Domains** en Vercel y sigue los pasos para apuntar el DNS.

A partir de aquí, cada vez que hagas `git push` a `main`, Vercel volverá a publicar
la web automáticamente con los cambios.

---

## 8. El enlace directo a "Carta"

La sección de la carta tiene el `id="carta"`, así que cualquier enlace terminado en
`#carta` (por ejemplo `https://ilfarotorrox.com/#carta`) lleva directo a ella y
muestra el rectángulo grande **"CARTA"**. Es el enlace ideal para poner en la
biografía de Instagram o en un cartel con QR. Además, hay un botón flotante
"Carta" siempre visible en la esquina inferior derecha que hace lo mismo.

---

## Datos de contacto usados en la web

- Dirección: Paseo Marítimo de Ferrara (Av. el Faro, 18), 29793 Torrox, Málaga
- Coordenadas del mapa: 36.727652, -3.958769 (verificadas — el pin apunta al local, no solo a la calle)
- Teléfono: +34 675 30 15 23
- Email: ilfaroristorantepizzeria@gmail.com
- Instagram: instagram.com/ilfaro.ristorantepizzeria

Revisa que el horario mostrado en la sección "Contacto" sea el actual — lo he
tomado de vuestras redes, pero puede variar por temporada. El código postal
aparece como 29770 en algunas fuentes y 29793 en otras (probablemente por un
cambio de numeración postal en la zona) — confirma cuál usáis vosotros y
ajústalo en `index.html` si hace falta.
