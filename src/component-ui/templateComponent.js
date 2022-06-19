import React, {
    useState,
    useRef,
    useEffect,
    setTimeout,
    useReducer,
  } from "react";
  import ClipLoader from "react-spinners/ClipLoader";
  import TemplatePage from "./templatePage";
  import Login from "./login";
  const TemplateComponent = ()=>{
    const [loading,setloading]=useState(false)
    useEffect(() => {
     setloading(true)
     setTimeout(() => {
      setloading(false)
     },8000);
    }, [])
    return(
        <>
       {loading && (
        <h1>this is loading</h1>
       )}
       {!loading && (
        <h1>after loading</h1>
       )}
    
           
       
        </>
    )
  }
 export default TemplateComponent