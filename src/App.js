import "./App.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeCard from "./components/HomeCard/HomeCard";

function App() {
  return (
    <div className="app">
      <Header />
      <HomeCard />
      <Content />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
