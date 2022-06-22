import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "./signup.css";
import { useState,useEffect } from "react";

import axios from "axios";
const Signup = () => {
  const [showpass, setshowpass] = useState(false);
  const [email,setemail]=useState(false)
  const [sign, setsign] = useState({
    Fname: "",
    Lname: "",
    email: "",
    password: "",
    Cpassword: "",
  });
  useEffect(() => {
    if(sign.password!= "" && sign.Cpassword!="" &&sign.password!=sign.Cpassword){
      setshowpass(true)
    }else{
      setshowpass(false)
    }
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    // if(sign.password!=""){
    //   if(sign.email.includes("@") && sign.email.includes(".com") &&sign.email.includes(".pk")&& sign.email!="" ){
    //     setemail(false)
    //   }else{
    //     setemail(true)
    //   }
    // }
     if(sign.email.match(mailformat)){
      setemail(true)
      }else{
      setemail(false)
      }
    // if(sign.email.includes("@") && sign.email.includes(".com") &&sign.email.includes(".pk") && sign.email!="" ){
    //   setemail(false)
    // }
    // if(sign.email.includes("@")){
    //   setemail(false)
    // }else{
    //   if(sign.email!=""){
    //     setemail(true)
    //   }else{
    //     setemail(false)
    //   }
      
    // }
    
  }, [sign])
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setsign({
      ...sign,
      [name]: value,
    });
   
    console.log(sign);
  };
  const submitForm =async () => {
    if (
      sign.Fname != "" &&
      sign.Lname != "" &&
      sign.email != "" &&
      sign.password != "" &&
      sign.Cpassword != ""
    ) {
      
      if (sign.password === sign.Cpassword) {
        const res= await axios
          .post("/Signup", sign)
          // .then((res) => console.log(res) );
          console.log(res.data);
          if(res.data==="user exist"){
            alert("Email already taken")
          }else{
            document.getElementById("Fname").value = "";
            document.getElementById("Lname").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("Cpassword").value = "";
            window.location.href = "http://localhost:3000/login";
          }
          // if(res.data==="user created"){
        
          // }
          
      
          // else{
     
          // }
       
      } else {
        setshowpass(true);
      }
    } else {
      alert("please fill the form");
    }
  };
  return (
    <>
      <h2 className="wog-sign">WOG</h2>
      <h6 className="web">Web Originator</h6>

      <div className="main">
        <p className="create">Create a new account</p>
        <h4 className="easy">its very Easy</h4>
        <hr />
        <div className="all_input">
          <div className="name">
            <input
              className="first_name_input"
              id="Fname"
              type="text"
              value={sign.Fname}
              name="Fname"
              placeholder="First Name"
              onChange={handleChange}
            />
            <input
              className="last_name_input"
              id="Lname"
              type="text"
              placeholder="Last Name"
              value={sign.Lname}
              name="Lname"
              onChange={handleChange}
            />
          </div>
          <div className="email_div">
            <input
              type="email"
              placeholder="example@.com"
              id="email"
              onChange={handleChange}
              value={sign.email}
              name="email"
            />
            {email && (<p>Invalid Email</p>)}
          </div>
          <div className="pass_div">
            <input
              className="password_div"
              type="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              value={sign.password}
              name="password"
            />
            <input
              className="password_div_con"
              type="password"
              placeholder=" Confirm Password"
              id="Cpassword"
              value={sign.Cpassword}
              name="Cpassword"
              onChange={handleChange}
            />
            {showpass && (<p className="pass-not-match">*Password not matched</p>)}
          </div>
          <div className="dob_div">
            <h6>Date Of Birth*</h6>

            <input type="date" />
          </div>
         
          <p className="policies">
            By clicking signup you agree to our terms data policy and cookies
            policy you may recieve SMS notification from us and can opt out
          </p>
          <button className="submit-sign" onClick={submitForm}>
            {" "}
            submit
          </button>
  

          <Link to="/login" className="Already">Already have a account?</Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
