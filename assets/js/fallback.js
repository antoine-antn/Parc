// Chargé dans le <head> : si une image .jpg/.png n'existe pas encore
// (visuels Gemini pas encore ajoutés), on bascule sur le placeholder .svg du même nom.
document.addEventListener(
  "error",
  (e) => {
    const img = e.target;
    if (img.tagName === "IMG" && /\.(png|jpe?g)$/i.test(img.src) && !img.dataset.fallbackDone) {
      img.dataset.fallbackDone = "1";
      img.src = img.src.replace(/\.(png|jpe?g)$/i, ".svg");
    }
  },
  true
);
