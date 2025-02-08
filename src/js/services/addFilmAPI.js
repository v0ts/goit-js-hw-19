export const addFilmAPI = async (toAdd) => {
  const options = {
    method: "POST",
    body: JSON.stringify(toAdd),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  try {
    return await fetch("https://67a727f0510789ef0dfd2245.mockapi.io/movies/movies", options)
  } catch (error) {
    console.log(error);
  }
};
