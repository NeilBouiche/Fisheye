/* eslint-disable no-use-before-define */
const modal = document.getElementById("contact_modal");
const main = document.querySelector("main");
const header = document.querySelector("header");
const modalBox = document.querySelector(".modal");
const form = document.querySelector("form");
const closeContact = document.querySelector(".close-contact");
let modalOpen = false;

function displayModal() {
  modal.style.display = "block";
  main.style.display = "none";
  header.style.opacity = 0.5;
  document.getElementById("prenom").focus();
  modalOpen = true;
  if (modalOpen === true) {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    });
  }
}

function closeModal() {
  modal.style.display = "none";
  main.style.display = "block";
  header.style.opacity = 1;
  modalOpen = false;
}

const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(prenom.value);
  console.log(nom.value);
  console.log(email.value);
  console.log(message.value);
  return false;
});
