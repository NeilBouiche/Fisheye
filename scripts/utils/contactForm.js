const modal = document.getElementById("contact_modal");
const main = document.querySelector("main");
const header = document.querySelector("header");
const form = document.querySelector("form");

function displayModal() {
  modal.style.display = "block";
  main.style.opacity = 0.3;
  header.style.opacity = 0.3;
}

function closeModal() {
  modal.style.display = "none";
  main.style.opacity = 1;
  header.style.opacity = 1;
}

let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let email = document.getElementById("email");
let message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(prenom.value);
  console.log(nom.value);
  console.log(email.value);
  console.log(message.value);
  return false;
});
