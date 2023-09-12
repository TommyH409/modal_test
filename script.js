"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const closedModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModel = function () {
  //console.log("button clicked");
  // do not use the dot, just pass in the name of the class
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  // modal.style.display = 'block';
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModel);
}

btnCloseModal.addEventListener("click", closedModal);
overlay.addEventListener("click", closedModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closedModal();
  }
});
