import React from "react";
import { Link } from "react-router-dom";
import Support from "./Support";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import "./navbar.css";
const NavBar = () => {
  return (
    <>
      <nav className="navbar-main">
{/* <h3 className="main_logo"></h3> */}
<img src="/images/OG.png"  className="logo-image"/>
        <div className="navbarLinks">
          <Link to="/" className="Home">
            <AiOutlineHome className="style_icon" />
          </Link>
          {/* <Link to="/webstore" className="Home">Web Store</Link> */}
          <Link to="/Support" className="Home">
            <BiSupport className="style_icon" />
          </Link>
          <Link to="/login" className="Home">
            <BiUserCircle className="style_icon" />
          </Link>
          {/* <Link to='/Login'className="home-login">Login</Link> */}
          <Link to='/Signup' className="home-signup">Sign Up</Link>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
