import axios from "axios";

const API_KEY = process.env.REACT_APP_MY_API_KEY;

const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const fetchPost = () => axios.get(URL);
