/*
 * Configuración pública y editable de AngryLove SMP.
 * Cambia aquí los datos; no pongas nunca secretos, IPs internas ni enlaces de administración.
 * Los campos en null no se muestran en la web hasta que los completes.
 */
window.ANGRYLOVE = {
  brand: "AngryLove",
  modeName: "AngryLove SMP",
  edition: "Minecraft Java Edition",
  joinAddress: "angrylove-node.duckdns.org",
  joinPort: 25565,
  initialDestination: "Lobby",
  smpCommand: "/server smp",

  // Pendientes de confirmar: déjalos en null para ocultarlos.
  minecraftVersion: null, // p. ej. "1.21.x" (solo cuando esté verificada)
  discordUrl: null,       // p. ej. "https://discord.gg/xxxx"
  publicEmail: null,      // p. ej. "contacto@tudominio.com"

  // Estado de la red (opcional). Requiere un endpoint propio o un servicio verificado
  // que devuelva JSON { "online": true|false, "players": 0, "max": 0 }.
  // Si es null, el indicador no se muestra.
  statusEndpoint: null,
};
