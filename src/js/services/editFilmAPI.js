export const editFilmsAPI = async (toDelete, id) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(toDelete),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  try {
    return await fetch(`https://67a727f0510789ef0dfd2245.mockapi.io/movies/movies/${id}`, options)
  } catch (error) {
    console.log(error);
  }
};
