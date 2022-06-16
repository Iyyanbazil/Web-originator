import React from "react";
import { createContext,useState } from "react";

export const loginContext=createContext()
export const LoginProvider=(props)=>{

   const [logger, setlogger] = useState(false);

    return(
    
        <loginContext.Provider value={[logger,setlogger,]}>
          {props.children}
        </loginContext.Provider>
        
    )
}