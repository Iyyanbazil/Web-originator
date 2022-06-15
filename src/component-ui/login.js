import React, { useEffect } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { createUser } from "../redux/actions/pageAction";
import axios from "axios";
import { useContext } from "react";
import { userContext } from "./userContext";
import { contains } from "jquery";
const Login = () => {
  const [user, setuser] = useContext(userContext);
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const [message, setmessage] = useState("");
  const [islogin, setislogin] = useState(false)
  useEffect(() => {
    if(login.email !="" && login.password != ""){
        if(message === "login"){
            window.localStorage.setItem('user', JSON.stringify(user));
        }
  }
  }, [user]);
  //  const msg=""
  // useEffect(() => {
  //   const data=window.localStorage.getItem('user')
  //   setuser(JSON.parse(data))

  //   // const logger=window.localStorage.getItem('islogin')
  //   // setislogin(logger)
  //   }, [])



  // useEffect(() => {
  //   window.localStorage.setItem("islogin",islogin)
  // }, [islogin])
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setlogin({
      ...login,
      [name]: value,
    });
    console.log(login);
  };
  const handleSubmit = async () => {
    if (login.email != "" && login.password != "") {
      // ****** correct**********
      const res = await axios.post("/login", login);
      console.log(res);
      setmessage(res.data.message);
      setuser(res.data.user);
      const loged=res.data.message
     
      setislogin(true)
      if (loged === "login") {
        window.localStorage.setItem("islogin",true);
        // window.localStorage.setItem("user",JSON.stringify(user));
        window.location.href = "http://localhost:3000/";
     
      }
    } else {
      alert("please fil the form");
    }
   
  };
  return (
    <>
      <div className="loginbody">
        <div className="input_labels">
          <h1 className="h1_login">LOGIN PAGE</h1>

          {/* <h1>{user.Fname}</h1> */}
          <hr />
          {/* <label className='label1'>Email</label> */}
          <h4 className="email-pass">Email</h4>
          <input
            className="input1"
            type="email"
            placeholder="Email"
            name="email"
            value={login.email}
            onChange={handleChange}
          />
          {/* <label className='label2'>Password</label> */}
          <h4 className="email-pass">Password</h4>
          <input
            className="input2"
            type="password"
            placeholder="Password"
            name="password"
            value={login.password}
            onChange={handleChange}
          />
          <p className="email-pass"> ***{message}</p>

          <div className="links_login">
            {/* {message ==="Password not match" && message ==="No such user exist" && (
          <Link to="#" className="loginBtn" onClick={handleSubmit}>
          Login
        </Link>
         )} */}
            <button className="loginBtn" onClick={handleSubmit}>
              Login
            </button>
            <br />
          </div>
          <br />
          <div>
            <Link className="new_account"  to="/Signup" >
              New?Create Account
            </Link>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
