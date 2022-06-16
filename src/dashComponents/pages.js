import React, { useState,useEffect } from "react";
import {RiEditLine} from 'react-icons/ri'
import {BsTrash} from 'react-icons/bs'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPage } from "../redux/actions/pageAction";
import axios from "axios";
import { API_HOST } from "../api_utils";
import "./pages.css"
const Pages = ({page}) => {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);
 const [CurrentUser, setCurrentUser] = useState("")

 useEffect(() => {
  const userData= window.localStorage.getItem('user')
  setCurrentUser(JSON.parse(userData))
  }, [])
 
  const dispatch = useDispatch();

  const { pageStore } = useSelector((state) => state);
  const { pages } = pageStore;

  const handleSubmit = async () => {
    if (!name) {
      setIsValid(false);
      return;
    }
    createPage(name,CurrentUser._id)(dispatch);
    console.log(name);
    // window.location.href="/"
  };
  const handleClear = () => {
    setName("");
    // window.location.href="/"
    window.location.reload();
  };

  const deletePage= (id)=>{

 
     axios.delete(`${API_HOST}pages/`,{data:{id:id}}).then(()=>{
      
      console.log("delted");
      // window.location.href='/'
      window.location.reload()
     })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="pages-allpages">
        <h1 className="allpages-head">All Pages</h1>
        <p>Pages you created will be displayed here. the pages that are created through editor or by the home page will be show here you can edit and delete the page by clicking on respective button</p>
        </div>
        <div className="col-12 my-2">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <td> Page ID</td>
                <td> Page Name</td>
                <td>Used as</td>
                <td>Action (edit &delete)</td>
              </tr>
            </thead>
            <tbody>
              
              {pages && CurrentUser._id
                ? pages.filter(CurElem=>CurElem.user === CurrentUser._id).map((page) => (
                    <tr key={page._id}>
                      <td>{page._id}</td>
                      <td>{page.name}</td>
                      <td>{page.slug}</td>
                      <td>
                        <Link to={`/editor/${page._id}`} className="edit-home btn btn-sm btn-outline-primary "  >
                         <RiEditLine/>
                        </Link>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          // onClick={()=>{setNumber(page._id);deletePage()}}
                          onClick={()=>deletePage(page._id)}
                        >
                          <BsTrash/>
                          
                        </button>
                        
                      </td>
                    </tr>
                  ))
                : "No Page"}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};

export default Pages;
