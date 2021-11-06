import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "./actions/movies";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeCard from "./components/HomeCard/HomeCard";
import Movies from "./components/Movies/Movies";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  return (
    <div className="app">
      <Header />
      <HomeCard />
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
