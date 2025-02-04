import { getFilmsAPI } from "../services/getFilmsAPI";
import { deleteFilmAPI } from "../services/deleteFilmAPI";
import { editFilmsModal, openButtonFunction } from "../modal/editFilmModal";

const listEL = document.querySelector(".get-films-list");

export const createFilmsLayout = (data) => {
  listEL.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const li = document.createElement("li");
    const directorBox = document.createElement("div");
    const directorTitle = document.createElement("p");
    const director = document.createElement("p");
    const genreBox = document.createElement("div");
    const genreTitle = document.createElement("p");
    const genre = document.createElement("p");
    const titleBox = document.createElement("div");
    const titleTitle = document.createElement("p");
    const title = document.createElement("p");
    const yearBox = document.createElement("div");
    const yearTitle = document.createElement("p");
    const year = document.createElement("p");
    const buttonBox = document.createElement("div");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");

    li.dataset.id = data[i].id;

    li.classList.add("item");
    directorBox.classList.add("box");
    genreBox.classList.add("box");
    titleBox.classList.add("box");
    yearBox.classList.add("box");
    buttonBox.classList.add("box");

    director.textContent = data[i].director;
    directorTitle.textContent = "Director: ";
    genre.textContent = data[i].genre;
    genreTitle.textContent = "Genre: ";
    title.textContent = data[i].title;
    titleTitle.textContent = "Title: ";
    year.textContent = data[i].year;
    yearTitle.textContent = "Year: ";
    deleteButton.textContent = "delete film";
    editButton.textContent = "edit film information";

    directorBox.append(directorTitle, director);
    genreBox.append(genreTitle, genre);
    titleBox.append(titleTitle, title);
    yearBox.append(yearTitle, year);
    buttonBox.append(deleteButton, editButton);

    li.append(titleBox, genreBox, directorBox, yearBox, buttonBox);
    listEL.append(li);

    deleteButton.addEventListener("click", async (e) => {
      await deleteFilmAPI(li.dataset.id);
      await getFilmsAPI();
    });

    editButton.addEventListener("click", (e) => {
      openButtonFunction();
      editFilmsModal(director, genre, title, year, li.dataset.id);
    });
  }
};
