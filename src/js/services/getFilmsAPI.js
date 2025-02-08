import { createFilmsLayout } from "../markup/getFilmsMarkup";

export const getFilmsAPI = async () => {
  try {
    return await fetch("https://67a727f0510789ef0dfd2245.mockapi.io/movies/movies")
      .then((data) => data.json())
      .then((data) => createFilmsLayout(data));
  } catch (error) {
    console.log(error);
  }
};
getFilmsAPI();
