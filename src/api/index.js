import axios from "axios";

const API_KEY = process.env.REACT_APP_MY_API_KEY;

const URL = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;
export const fetchPost = () => axios.get(URL);
