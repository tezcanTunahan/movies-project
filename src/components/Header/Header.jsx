import { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

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
          <NavLink className="link" to="/about">
            <h3>ABOUT</h3>
          </NavLink>
          <NavLink className="link" to="/">
            <h3>MENU</h3>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
