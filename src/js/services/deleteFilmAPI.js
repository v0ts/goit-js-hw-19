export const deleteFilmAPI = async (id) => {
  try {
    return await fetch(`https://67a727f0510789ef0dfd2245.mockapi.io/movies/movies/${id}`, {
      method: "DELETE",
    })
  } catch (error) {
    console.log(error);
  }
};
