(function () {
  var C = window.ANGRYLOVE || {};

  // ---- Datos desde la configuración ----
  document.querySelectorAll("[data-cfg='address']").forEach(function (el) {
    el.textContent = C.joinAddress;
  });
  if (C.minecraftVersion) {
    document.querySelectorAll("[data-cfg='version']").forEach(function (el) {
      el.textContent = C.minecraftVersion;
    });
    document.querySelectorAll("[data-show-if='version']").forEach(function (el) { el.hidden = false; });
  }
  if (C.discordUrl) {
    document.querySelectorAll("[data-cfg='discord']").forEach(function (el) { el.href = C.discordUrl; });
    document.querySelectorAll("[data-show-if='discord']").forEach(function (el) { el.hidden = false; });
  }
  if (C.publicEmail) {
    document.querySelectorAll("[data-cfg='email']").forEach(function (el) {
      el.href = "mailto:" + C.publicEmail;
      el.textContent = C.publicEmail;
    });
    document.querySelectorAll("[data-show-if='email']").forEach(function (el) { el.hidden = false; });
  }
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // ---- Menú móvil ----
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.hidden;
      menu.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
    });
    menu.querySelectorAll("a, button").forEach(function (el) {
      el.addEventListener("click", function () { menu.hidden = true; toggle.setAttribute("aria-expanded", "false"); });
    });
  }

  // ---- Copiar IP ----
  var live = document.getElementById("copy-live");
  function announce(msg) {
    if (!live) return;
    live.textContent = "";
    setTimeout(function () { live.textContent = msg; }, 30);
  }
  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
    return ok;
  }
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function () { return true; }, function () { return fallbackCopy(text); });
    }
    return Promise.resolve(fallbackCopy(text));
  }
  document.querySelectorAll("[data-copy-ip]").forEach(function (btn) {
    var label = btn.querySelector("[data-label]");
    var original = label ? label.textContent : "";
    btn.addEventListener("click", function () {
      copyText(C.joinAddress).then(function (ok) {
        var msg = ok ? "¡IP copiada!" : "No se pudo copiar. Selecciónala manualmente: " + C.joinAddress;
        if (label) label.textContent = ok ? "¡IP copiada!" : "Copia manual";
        announce(msg);
        setTimeout(function () { if (label) label.textContent = original; }, 2200);
      });
    });
  });

  // ---- Estado de la red (opcional) ----
  var box = document.getElementById("server-status");
  if (box && C.statusEndpoint) {
    box.hidden = false;
    var dot = box.querySelector("[data-dot]");
    var text = box.querySelector("[data-text]");
    var ctrl = new AbortController();
    var t = setTimeout(function () { ctrl.abort(); }, 5000);
    fetch(C.statusEndpoint, { signal: ctrl.signal, headers: { Accept: "application/json" } })
      .then(function (r) { if (!r.ok) throw new Error("http"); return r.json(); })
      .then(function (d) {
        if (typeof d.online !== "boolean") throw new Error("bad");
        dot.className = "h-2 w-2 rounded-full " + (d.online ? "bg-emerald-400" : "bg-red-400");
        text.textContent = d.online
          ? "Red online" + (typeof d.players === "number" ? " · " + d.players + " jugadores" : "")
          : "Red offline";
      })
      .catch(function () {
        dot.className = "h-2 w-2 rounded-full bg-slate-500";
        text.textContent = "Estado no disponible";
      })
      .finally(function () { clearTimeout(t); });
  }
})();
