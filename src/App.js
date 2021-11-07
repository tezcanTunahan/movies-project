import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "./actions/movies";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeCard from "./components/HomeCard/HomeCard";
import Movies from "./components/Movies/Movies";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <HomeCard />
                <Movies />
              </div>
            }
          />
          {/* <Route path="/" element={<Movies />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/detail/:movieId" element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
