import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const Login = () => {
    const [user, setuser] = useState({})
    const [login, setlogin] = useState({
email:"",
password:""
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setlogin({
            ...login,
            [name]:value
        })
        console.log(login);
    }
    const handleSubmit=()=>{
        axios.post('/login',login).then(res=>{
            setuser(res.user);
        })
    }
    return (
        <>
      
        <div className= "loginbody">
           
          
        
        
        <div className='input_labels' >
        <h1 className='h1_login'>LOGIN PAGE</h1> 
        <hr/>
            {/* <label className='label1'>Email</label> */}
            <input className="input1" type ="email" placeholder="Email" name="email" value={login.email} onChange={handleChange}/>
            {/* <label className='label2'>Password</label> */}
            <input className="input2" type = "password" placeholder='Password' name='password' value={login.password}  onChange={handleChange}/>
            <div className='links_login'>
            <Link to="#" className="loginBtn" onClick={handleSubmit}>Login</Link><br/>
            

        </div>
        <br/>
        <div>
        <Link to="/login/signup" className='new_account'>New?Create Account</Link>
        {/* <a href="https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><img src="google-icon.png" className='google_image'></img></a>
        <a href="https://www.facebook.com/"><img src="facebook-icon.png" className='fb_image'></img></a> */}
        </div>
        </div>
      
        </div> 
        </>
    )
}

export default Login
