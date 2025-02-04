export const editFilmsAPI = async (toDelete, id) => {
  const options = {
    method: "PATCH",
    body: JSON.stringify(toDelete),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  try {
    return await fetch(`http://localhost:3000/movies/${id}`, options)
  } catch (error) {
    console.log(error);
  }
};
