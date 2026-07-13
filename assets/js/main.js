// Comportements communs à toutes les pages
// NB : le basculement image manquante → placeholder .svg est dans fallback.js,
// chargé dans le <head> pour intercepter les erreurs avant le parsing des <img>.

document.addEventListener("DOMContentLoaded", () => {
  // Menu mobile
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }

  // Bandeau cookies
  const banner = document.querySelector(".cookie-banner");
  if (banner) {
    if (localStorage.getItem("cacaland_cookies") === "ok") {
      banner.classList.add("hidden");
    }
    banner.querySelector("button").addEventListener("click", () => {
      localStorage.setItem("cacaland_cookies", "ok");
      banner.classList.add("hidden");
    });
  }

  // Année du pied de page
  document.querySelectorAll(".annee").forEach((el) => (el.textContent = "2026"));
});
