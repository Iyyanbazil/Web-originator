import React from "react";
import { AiOutlineCamera } from "react-icons/ai";
import "./dashboard.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./navbar";
import UserData from "../dashComponents/userData";
import Domain from "../dashComponents/Domain";
import Pages from '../dashComponents/pages'
const DashBoard = () => {
  const [image, setImage] = useState(null);
  const [clicked, setclicked] = useState("profile");
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <>
      {/* <Navbar/> */}
      <div className="main_dashboard">
        {/* <div className="dsb_image">
       
          <img src= {image || "/Avatar.png"} alt="preview image" className='DsBimg' ></img>
        </div> */}

        {/* <div >
       <input id='f02' type="file" onChange={onImageChange} className="selector"  />
       <label for="f02"><AiOutlineCamera size="2em"/></label>
         
        </div> */}

        {/* <div className="profile_img">
    
      </div> */}

        <div className="options">
          <ul>
            <li
              className="dashboard_list"
              onClick={() => setclicked("profile")}
            >
              {" "}
              <Link to="#" className="dashboard_link">
                Profile
              </Link>
            </li>
            <li className="dashboard_list"   onClick={() => setclicked("webpage")}>
              {" "}
              <Link to="#" className="dashboard_link">
                Webpage
              </Link>
            </li>
            <li className="dashboard_list" onClick={() => setclicked("domain")}>
              {" "}
              <Link to="#" className="dashboard_link">
                Domains
              </Link>
            </li>
            {/* <li className="dashboard_list">
              {" "}
              <Link to="" className="dashboard_link">
                Setting
              </Link>
            </li>
            <li className="dashboard_list">
              {" "}
              <Link to="" className="dashboard_link">
                Hosting
              </Link>
            </li>
            <li className="dashboard_list">
              {" "}
              <Link to="" className="dashboard_link">
                Logout
              </Link>
            </li> */}
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
