import React, { useState,useEffect } from "react";
import {RiEditLine} from 'react-icons/ri'
import {BsTrash} from 'react-icons/bs'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPage } from "../redux/actions/pageAction";
import axios from "axios";
import { API_HOST } from "../api_utils";
import { Modal, Button } from "react-bootstrap";
import "./pages.css"
const Pages = ({page}) => {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);
 const [CurrentUser, setCurrentUser] = useState("")

 const [loading,setloading]=useState(true)
const  [nameModal,setnameModal] =useState(false)
const [newName, setnewName] = useState("")
const [updateID, setupdateID] = useState({})
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
      // window.location.href='#name'
      window.location.reload()
     })
  }
  useEffect(() => {
    if(pages){
      setloading(false)
    }else
    {
    window.setTimeout(()=>{
      setloading(false)
        },2000)
      }
  }, [])
  
 const editName=()=>{
  axios.patch(`${API_HOST}pages/dashboard`,{data:{id:updateID,name:newName}}).then((res)=>{
    console.log("updated");
   
    // // const uid=JSON.parse(updateID)
    // console.log(updateID);
    // console.log(newName);
  })
  window.location.reload()
 }


  return (
    

    <div className="container" id="name">
      {loading ? (
      <><div class=" spinner-grow  " id="sppinerr" role="status">
               </div>
               <div class="spinner-grow  "    role="status">
               </div>
               <div class="spinner-grow  "    role="status">
               </div>
               </>)
               :
               (<div className="row">
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
                   <form id="create-page">
        <Modal
          show={nameModal}
          onHide={setnameModal}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          data-target=".bd-example-modal-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title className="page-being-created-change">Enter New Name</Modal.Title>
           
            <br />
          </Modal.Header>
          <Modal.Body>
            <div >
              <p className="please-wait">Please type new name and click Submit</p>
             
             
              <input className="input-change-name" placeholder="new name" name="name" value={newName} onChange={(e)=>setnewName(e.target.value)}></input>
         
              
 <button  className="go-there-btn-change" onClick={()=>editName()}>Submit Change</button>
            
             
            </div>
          </Modal.Body>
        </Modal>
      </form>
                     {pages && CurrentUser._id
                       ? pages.filter(CurElem=>CurElem.user === CurrentUser._id).map((page) => (
                           <tr key={page._id}>
                             <td>{page._id}</td>
                             <td>{page.name} <button onClick={()=>{setupdateID(page._id);setnameModal(true)}} className="edit-home btn btn-sm  "  >
                                <RiEditLine/></button></td>
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
             </div>)}
      
      
    </div>
  );
};

export default Pages;
