import React from "react";
import { useState, useEffect } from "react";
import "./userData.css";

const UserData = () => {
  const [store, setstore] = useState("");

  useEffect(() => {
    const data = window.localStorage.getItem("user");
    setstore(JSON.parse(data));
    //  if(data){
    //   setuser(data)
    //  }
  }, []);

  return (
    <div className="main-comp">
      {/* <h1 className="profile-main-head">Profile</h1> */}
      <p className="profile-welcome">
        Welcome  {store.Fname}
      </p>

      <div className="profile-gird">
        <div className="profile-grid-first">
          <span className="name-span">
            <h3 className="profile-name">First Name :</h3>
            <p>{store.Fname}</p>
          </span>
        </div>
        <div className=" profile-grid-second">
          <span className="name-span">
            <h3 className="profile-name">Last Name :</h3>
            <p>{store.Lname}</p>
          </span>
        </div>
      </div>
      <div className="email-div">
        <h3 className="email">Email:</h3>
        <p className="email-span">{store.email}</p>
      </div>
      <div className="profile-pass-div">
        <h3 className="profile-pass">Password</h3>
        <p className="profile-span">{store.password}</p>
      </div>
    </div>
  );
};

export default UserData;
