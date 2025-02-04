export const deleteFilmAPI = async (id) => {
  try {
    return await fetch(`http://localhost:3000/movies/${id}`, {
      method: "DELETE",
    })
  } catch (error) {
    console.log(error);
  }
};
