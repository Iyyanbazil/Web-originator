import { Link,useParams } from "react-router-dom";
import { API_HOST } from "../api_utils";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
function PageDetail({ page }) {
  const [curID, setcurID] = useState("")
  const { name,_id } = page;
  const dispatch = useDispatch();
   const deletePage= async()=>{

     axios.delete(`${API_HOST}pages/${page._id}`).then(()=>{
      console.log("delted");
      window.location.href='/'
    //   window.location.reload()
     })


   }
   const {pageId}=useParams();
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
       <div  className={pageId===page._id ?"active-page-now name-page-set":"not-active-now name-page-set" }>
      {name}
       </div>
       {/* editor-id */}
      {/* <Link className="text-decoration-none " to={`/editor/${page._id}`}>
       
       
      </Link> */}
      <div>
        <Link className="btn btn-sm btn-outline-primary btn-page-create" onClick={(e)=>setcurID(page._id)} to={`/editor/${page._id}`} >
        
         <i className="fa fa-pencil"></i> 
        </Link>
        <button className="btn btn-sm btn-outline-danger"onClick={deletePage}  >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default PageDetail;
