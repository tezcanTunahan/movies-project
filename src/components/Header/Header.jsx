import { useState } from "react";
import "./header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <header className={isScrolled ? "header scrolled" : "header"}>
      <div className="header__container">
        <div className="left">
          <h1>MOVIES</h1>
        </div>
        <div className="right">
          <h3>MENU</h3>
        </div>
      </div>
    </header>
  );
}

export default Header;
