import React from "react";
import { createContext,useState } from "react";

export const userContext=createContext()
export const UserProvider=(props)=>{
const [user, setuser] = useState({
    Fname:"",
    Lname:"",
    email:"",
    password:"",
    Cpassword:"",
})
const [userlogin,setuserlogin]=useState(null)
    return(
    
        <userContext.Provider value={[user,setuser,]}>
          {props.children}
        </userContext.Provider>
        
    )
}