import "./header.css";
import { Link } from "react-router-dom";
// import { useRef, useState } from 'react';


export const Header = () => {

    // const [ isOpen, setIsOpen ] = useState(false)
    // const menuRef = useRef(null);

    // console.log(isOpen)
    // // console.log(menuRef.current)

    // const toggleMenu = () => {
    //     if (!isOpen){
    //         menuRef.current.style.display = 'block';
    //     }else{
    //         menuRef.current.style.display = 'none';
    //     }
    // }


  return (
    <div className="header">
      <div className="headerLeft">

        <Link to="/">
          <img
            className="header__icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
          />
        </Link>

        <div className="nav">

          <Link to="/movies/popular" style={{ textDecoration: "none" }}>
            <span>Popular</span>
          </Link>

          <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
            <span>Top Rated</span>
          </Link>

          <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
            <span>Upcoming</span>
          </Link>

        </div>
        
      </div>
      {/* burger menu section */}
      <div>
        <img className="menu-icon"   src="https://img.icons8.com/ios/50/FAB005/menu--v1.png" />
      </div>

        <div  className="menu-items-container">
            {/* <div className="items-nav"> */}
            <img className="close-btn" src="/icons8-close.svg"/>
            <Link to="/movies/popular" style={{ textDecoration: "none" }}>
            <div>Popular</div>
            </Link>
            <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
                <div style={{textAlign: "center"}}>Top Rated</div>
            </Link>
            <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
                <div>Upcoming</div>
            </Link>
            {/* </div> */}
        </div>

    </div>
  );
};
