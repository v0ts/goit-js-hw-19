import { createFilmsLayout } from "../markup/getFilmsMarkup";

export const getFilmsAPI = async () => {
  try {
    return await fetch("http://localhost:3000/movies")
      .then((data) => data.json())
      .then((data) => createFilmsLayout(data));
  } catch (error) {
    console.log(error);
  }
};
getFilmsAPI();
