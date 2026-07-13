# 💩 Cacaland Paris — site officiel (de la blague)

Faux site de parc d'attractions, 100 % statique (HTML/CSS/JS), inspiré des sites de grands parcs.
Objectif : faire croire à un séjour du **19 au 21 août 2026** à l'hôtel **« C'est joli mais ça sent mauvais »**.

## 🔑 Accès « Mon Compte »

La page `mon-compte.html` est protégée par identifiants (définis dans `assets/js/config.js`) :

- **E-mail :** `sineau.antoine@gmail.com`
- **Mot de passe :** `Cacaland2026`

Une fois connecté, la page affiche la réservation confirmée (hôtel, dates, voyageurs, prix,
mention « non annulable, non remboursable » — pratique pour la blague).

Tout se modifie dans `assets/js/config.js` : identifiants, prénoms, dates, prix, n° de réservation.

> ⚠️ C'est une protection côté navigateur, largement suffisante pour une blague familiale,
> mais ne mettez aucune vraie donnée sensible sur ce site.

## 🖼️ Ajouter les visuels générés avec Gemini

Déposez vos images dans `assets/img/` **avec exactement ces noms** (les placeholders SVG
s'effacent automatiquement dès que le fichier existe) :

| Fichier | Contenu attendu | Format conseillé |
|---|---|---|
| `logo.png` | Logo du parc avec la mascotte caca souriant | Carré, fond transparent |
| `hero.jpg` | Entrée principale du parc (grande photo) | Paysage large (16:7) |
| `mascotte.jpg` | Cacahuète, la mascotte, dans le parc | Carré ou portrait |
| `attraction-chasse-deau.jpg` | Attraction aquatique « La Grande Chasse d'Eau » | Paysage |
| `attraction-turbo-prout.jpg` | Montagnes russes « Turbo-Prout » | Paysage |
| `attraction-lagune.jpg` | Barques sur la « Lagune Brune » | Paysage |
| `hotel.jpg` | Façade de l'hôtel | Paysage |
| `hotel-chambre.jpg` | Chambre familiale de l'hôtel | Paysage |

## 🚀 Mettre le site en ligne

Le plus simple : **GitHub Pages**.

1. Sur GitHub : *Settings → Pages → Source : Deploy from a branch*, choisir la branche et `/ (root)`.
2. Le site sera servi sur `https://<compte>.github.io/<repo>/`.

Pour un test local : `python3 -m http.server` dans le dossier, puis http://localhost:8000.

## 📄 Pages

- `index.html` — accueil (héro, chiffres clés, attractions phares, mascotte, avis clients)
- `attractions.html` — les 14 attractions (dont plusieurs « fermées », évidemment)
- `hotels.html` — l'hôtel, la chambre, les tarifs 2026
- `mon-compte.html` — connexion + espace client avec la réservation
