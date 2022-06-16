import React from 'react'
import { useState,useEffect } from 'react'
const useAuth = (initialValue) => {
    const [isAuth, setisAuth] = useState(initialValue)
//   const login= ()=>{
//         useEffect(() => {
//             const data=window.localStorage.getItem("islogin")
//             setisAuth(data)
//            }, [])
//     }
   
    
  return [isAuth]
   
}

export default useAuth