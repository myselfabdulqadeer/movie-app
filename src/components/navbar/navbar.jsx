import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        <img src="/icons8-menu (2).svg" />
      </button>
      {isOpen && (
        <div className="menu-options">
          <button className="close-btn" onClick={toggleMenu} ><img className="close-img" src="/icons8-close.svg" /></button>
          <div>
            <Link to="/movies/popular" style={{ textDecoration: "none" }}>
              <div>Popular</div>
            </Link>
          </div>

          <div>
            <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
              <div>Top Rated</div>
            </Link>
          </div>

          <div>
            <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
              <div>Upcoming</div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
