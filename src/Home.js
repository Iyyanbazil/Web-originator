import React, { useState,useEffect } from "react";
import {RiEditLine} from 'react-icons/ri'
import {BsTrash} from 'react-icons/bs'
import { Link,Redirect,Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPage } from "./redux/actions/pageAction";
import axios from "axios";
import { API_HOST } from "./api_utils";
const Home = ({page}) => {
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
        <div className="col-12 mt-5">
          <form id="create-page">
            <div className="modal-header">
              <h5 className="modal-title" id="addPageModalLabel">
                Create Page
              </h5>
              {/* <p>{CurrentUser._id}</p> */}
            </div>
            <div className="modal-body">
              <div className="col-auto">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control form-control-sm ${
                    isValid ? "" : "is-invalid"
                  }`}
                  id="name"
                  name="name"
                  placeholder="Name of Page"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {!isValid && (
                  <div className="invalid-feedback">
                    Please provide a valid name.
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-bs-dismiss="modal"
                onClick={handleClear}
              >
                Clear
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                // onClick={handleSubmit}
                onClick={()=>{handleSubmit();setName("")}}
              >
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 my-2">
          <h6 >Click on Edit/Pencil button from action to navigate to the editor </h6>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Used as</td>
                <td>Action</td>
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

export default Home;
