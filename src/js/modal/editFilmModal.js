import { editFilmsAPI } from "../services/editFilmAPI";
import { getFilmsAPI } from "../services/getFilmsAPI";

const modal = document.querySelector(".edit-modal");

export const editFilmsModal = (director, genre, title, year, id) => {
  const form = document.querySelector(".edit-form");
  const closeButton = document.querySelector(".edit-close");
  const directorEl = document.querySelector(".edit-director");
  const genreEl = document.querySelector(".edit-genre");
  const titleEl = document.querySelector(".edit-title");
  const yearEl = document.querySelector(".edit-year");

  directorEl.value = director.textContent;
  genreEl.value = genre.textContent;
  titleEl.value = title.textContent;
  yearEl.value = year.textContent;

  closeButton.addEventListener("click", (e) => {
    modal.classList.add("is-hidden");
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const toDelete = {
      title: e.target.elements.title.value,
      genre: e.target.elements.genre.value,
      director: e.target.elements.director.value,
      year: e.target.elements.year.value,
    };
    await editFilmsAPI(toDelete, id);
	await getFilmsAPI()
    modal.classList.add("is-hidden");
  });
};

export const openButtonFunction = () => {
  modal.classList.remove("is-hidden");
};
