// 1. Salutation selon l'heure
const salutation = document.getElementById("salutation");
const heure = new Date().getHours();

if (heure < 12) {
  salutation.textContent = "Bonjour ! 👋";
} else if (heure < 18) {
  salutation.textContent = "Bon après-midi ! 👋";
} else {
  salutation.textContent = "Bonsoir ! 👋";
}
salutation.style.color = "white"; // sinon invisible sur ton fond foncé

// 2. Bouton "Changer de thème" (sans toucher au CSS)
const btnTheme = document.getElementById("btn-theme");
const sections = document.querySelectorAll("section");
let sombre = false;

btnTheme.addEventListener("click", function () {
  sombre = !sombre;
  document.body.style.background = sombre ? "black" : "rgb(10, 10, 27)";

  sections.forEach(function (section) {
    section.style.background = sombre ? "#1c1c3a" : "white";
    section.style.color = sombre ? "white" : "black";
  });
});

// 3. Formulaire de contact
const formulaire = document.querySelector("#contact form");
const retour = document.createElement("p");
formulaire.appendChild(retour);

formulaire.addEventListener("submit", function (event) {
  event.preventDefault(); // empêche le rechargement de la page

  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (nom === "" || email === "" || message === "") {
    retour.textContent = "Remplis tous les champs.";
    retour.style.color = "red";
  } else {
    retour.textContent = "Merci " + nom + ", message envoyé !";
    retour.style.color = "green";
    formulaire.reset();
  }
});