# AngryLove SMP — Web oficial

Web estática (HTML + Tailwind CSS) de la red de Minecraft Java **AngryLove**.
IP pública: `angrylove-node.duckdns.org` (puerto 25565).

## Páginas
- `index.html` — Inicio: hero, IP con botón **Copiar IP**, tarjetas Lobby/SMP/Comunidad, pasos.
- `smp.html` — AngryLove SMP y acceso desde el Lobby.
- `como-jugar.html` — Guía paso a paso y FAQ.

## Configuración editable
Todo en `assets/js/config.js`. Los campos en `null` (versión, Discord, email, estado) **no se muestran** hasta que los completes:
- `minecraftVersion`: versión verificada de Minecraft.
- `discordUrl`, `publicEmail`: enlaces de comunidad.
- `statusEndpoint`: endpoint propio que devuelva `{"online":true,"players":0}`. Si es `null`, no se muestra estado.

## Desarrollo
```bash
npm install
npm run dev      # Tailwind en modo watch
npm run serve    # servidor local en http://localhost:8080
npm run build    # genera assets/css/styles.css (minificado)
```
`assets/css/styles.css` se incluye ya compilado, así que se puede desplegar sin build.

## Despliegue
Es un sitio 100 % estático: sube la carpeta tal cual a GitHub Pages, Netlify, Cloudflare Pages o cualquier hosting estático (sirve desde la raíz). Aloja la web aparte de tu servidor de Minecraft/Pterodactyl. Si usas GitHub Pages: Settings → Pages → rama a publicar, carpeta `/ (root)`.

## Pendiente
- Logo oficial, capturas reales e imagen Open Graph.
- Versión de Minecraft, Discord, reglas, whitelist/acceso y características del SMP (no se anuncian hasta confirmarlos).
- `canonical` y `sitemap.xml` cuando se conozca el dominio real de la web.
- Bedrock: no se anuncia compatibilidad.
