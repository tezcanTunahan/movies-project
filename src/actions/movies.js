import * as api from "../api/index";

export const getMovies = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPost();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};
