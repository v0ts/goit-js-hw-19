export const addFilmAPI = async (toAdd) => {
  const options = {
    method: "POST",
    body: JSON.stringify(toAdd),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  try {
    return await fetch("http://localhost:3000/movies", options)
  } catch (error) {
    console.log(error);
  }
};
