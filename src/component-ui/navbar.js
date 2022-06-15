import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Support from "./Support";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import "./navbar.css";

const NavBar = (props) => {
  const [data, setdata] = useState("");
  const [isloged,setisloged]=useState(false)

  // ********for displaying user name ***********
  useEffect(() => {
    const userData= window.localStorage.getItem('user')
    setdata(JSON.parse(userData))
  }, []);
  // ***********end***********



// ************ for toggle login & signup *********
  useEffect(() => {
    const logger= window.localStorage.getItem('islogin')
    setisloged(JSON.parse(logger))
  }, []);

useEffect(() => {
  window.localStorage.setItem("islogin",isloged)
 
}, [isloged])
// *************end********
const logout=()=>{
  setisloged(false)
   window.localStorage.setItem("user",JSON.stringify({
    Fname:"",
    Lname:"",
    email:"",
    password:"",
    Cpassword:""
  }))
}
  return (
    <>
      <nav className="navbar-main">
        {/* <h3 className="main_logo"></h3> */}
        <img src="/images/OG.png" className="logo-image" />
        <div className="navbarLinks">
          <Link to="/" className="Home">
            <AiOutlineHome className="style_icon" />
          </Link>
          {/* <Link to="/webstore" className="Home">Web Store</Link> */}
          <Link to="/Support" className="Home">
            <BiSupport className="style_icon" />
          </Link>
          {isloged ? (
            <div class="dropdown">
              <button
               className="button-name-nav"
                class="btn  dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
               
              >
                {data.Fname}
              
              </button>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link class="dropdown-item" to="#">
                    Profile
                  </Link>
                </li>
                <li >
                  <a class="dropdown-item" href="/" onClick={()=>logout()} >
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          ): (
            <div>
                 <Link to="/login" className="Home">
                <BiUserCircle className="style_icon" />
              </Link>
              <Link to="/Signup" className="home-signup">
                Sign up
              </Link>
           
            </div>
          )
          }
        
        </div>
      </nav>
    </>
  );
};
export default NavBar;
