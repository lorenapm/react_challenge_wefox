import { Link } from "react-router-dom";
import "../stylesheets/header.css";
import logo from "../images/logo-1.png";

function Header() {
    return (
    <div className="header">
        <a href="/">
            <img className="header__logo" src={logo} alt="logo wefox travel"/>
        </a>
        <nav className="header__navbar">
           <div className="header__navbar--list">
             <li className="header__navbar--item">
               <Link to={"/cities"} className="navbar__item--link">
               Cities
               </Link>
             </li>
             <li className="navbar__item">
               <Link to={"/add"} className="navbar__item--link">
               Add City
               </Link>
             </li>
           </div>
         </nav>
    </div>
    )
}

export default Header
