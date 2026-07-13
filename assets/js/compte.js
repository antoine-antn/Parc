// Espace « Mon Compte » : connexion + affichage de la réservation
(() => {
  const cfg = CACALAND_CONFIG;
  const ecranConnexion = document.getElementById("ecran-connexion");
  const espaceClient = document.getElementById("espace-client");
  const form = document.getElementById("form-connexion");
  const erreur = document.getElementById("erreur-connexion");

  function remplirReservation() {
    document.getElementById("salutation").textContent = `Bonjour ${cfg.holderFirstName} !`;
    document.getElementById("resa-ref").textContent = `Réf. ${cfg.bookingRef}`;
    document.getElementById("resa-hotel").textContent = cfg.hotelName;
    document.getElementById("resa-etoiles").textContent = cfg.hotelStars;
    document.getElementById("resa-arrivee").textContent = cfg.checkIn;
    document.getElementById("resa-depart").textContent = cfg.checkOut;
    document.getElementById("resa-chambre").textContent = cfg.roomType;
    document.getElementById("resa-voyageurs").textContent =
      `${cfg.adults} adultes, ${cfg.children} enfants — ${cfg.nights} nuits`;
    document.getElementById("resa-prix").textContent = cfg.totalPrice;
    document.getElementById("resa-date-paiement").textContent = cfg.bookedOn;
  }

  function ouvrirSession() {
    remplirReservation();
    ecranConnexion.style.display = "none";
    espaceClient.style.display = "block";
    window.scrollTo(0, 0);
  }

  // Session déjà ouverte dans cet onglet ?
  if (sessionStorage.getItem("cacaland_session") === "ouverte") {
    ouvrirSession();
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const mdp = document.getElementById("motdepasse").value;
    if (email === cfg.loginEmail.toLowerCase() && mdp === cfg.loginPassword) {
      sessionStorage.setItem("cacaland_session", "ouverte");
      ouvrirSession();
    } else {
      erreur.style.display = "block";
    }
  });

  document.getElementById("btn-deconnexion").addEventListener("click", () => {
    sessionStorage.removeItem("cacaland_session");
    location.reload();
  });
})();
