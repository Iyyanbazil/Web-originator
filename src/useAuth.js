import React from "react";
import { useState, useEffect } from "react";
const useAuth = (initialValue) => {
  const [isAuth, setisAuth] = useState(initialValue);
  const loginn = () => {
    setisAuth(true);
  };

  return [isAuth,setisAuth,loginn];
};

export default useAuth;
