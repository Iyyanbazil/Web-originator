import React from "react";
import { AiOutlineCamera } from "react-icons/ai";
import "./dashboard.css";
import { Link,NavLink } from "react-router-dom";
import { useState,useHistory } from "react";
import Navbar from "./navbar";
import UserData from "../dashComponents/userData";
import Domain from "../dashComponents/Domain";
import Pages from '../dashComponents/pages'

const DashBoard = () => {
  const [image, setImage] = useState(null);
  const [clicked, setclicked] = useState("webpage");
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
 
  return (
    <>
      {/* <Navbar/> */}
      <div className="main_dashboard">
      

        <div className="options">
          <ul>
            <li
              className="dashboard_list"
              onClick={() => setclicked("profile")}
            >
              {" "}
              <Link to="#"  className={clicked==="profile" ? "active-dashboard" :"dashboard_link"}>
                Profile
              </Link>
            </li>
            <li className="dashboard_list"   onClick={() => setclicked("webpage")}>
              {" "}
              <Link to="#"  className={clicked==="webpage" ? "active-dashboard" :"dashboard_link"}>
                Webpage
              </Link>
            </li>
            <li className="dashboard_list" onClick={() => setclicked("domain")}>
              {" "}
              <Link to="#" className={clicked==="domain" ? "active-dashboard" :"dashboard_link"}>
                Domains
              </Link>
            </li>
          
          </ul>
        </div>
        <div className="Show-component">
          {clicked === "profile" && <UserData />}
          {clicked === "webpage" && <Pages />}
          {clicked === "domain" && <Domain />}
          {/* <UserData/> */}
        </div>
      </div>
    </>
  );
};

export default DashBoard;
