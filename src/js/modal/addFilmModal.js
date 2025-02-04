import { addFilmAPI } from "../services/addFilmAPI";
import { getFilmsAPI } from "../services/getFilmsAPI";

const modal = document.querySelector(".modal");
const form = document.querySelector(".form");
const modalClose = document.querySelector(".form-close");
const modalOpen = document.querySelector(".add-film");

modalOpen.addEventListener("click", (e) => {
  modal.classList.remove("is-hidden");
});

modalClose.addEventListener("click", (e) => {
  modal.classList.add("is-hidden");
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const toAdd = {
    title: e.target.elements.title.value,
    genre: e.target.elements.genre.value,
    director: e.target.elements.director.value,
    year: e.target.elements.year.value,
  };
  await addFilmAPI(toAdd);
  await getFilmsAPI();
  modal.classList.add("is-hidden");
});
