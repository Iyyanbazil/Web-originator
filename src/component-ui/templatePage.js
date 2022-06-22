import React, {
  useState,
  useRef,
  setInterval,
  useEffect,
  setTimeout,
  useReducer,
} from "react";

import "./templatePage.css";
import logo from "./logo.png"
import Catagory from "./Data/catagory";
import { Modal, Button } from "react-bootstrap";
import {GrView } from "react-icons/gr";

import { useSelector, useDispatch } from "react-redux";
import { createPage } from "../redux/actions/pageAction";
import axios from "axios";
import { API_HOST } from "../api_utils";
import ClipLoader from "react-spinners/ClipLoader";
// import "./pages.css"

const TemplatePage = ({ page }) => {
  // ****** to displaypages ****
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useReducer((show) => !show, false);
  const [isValid, setIsValid] = useState(true);
  const [CurrentUser, setCurrentUser] = useState("");
  const [select, setselect] = useState("");
  const [content, setcontent] = useState({});
  const [loading, setloading] = useState(false);
  const [showBtn,setshowBtn]=useState(false)
  const [imageModal, setimageModal] = useState(false)
  const [temImg, settemImg] = useState("")
  useEffect(() => {
  
      window.setTimeout(() => {
        setshowBtn(true);

        // window.location.href = "/dashboard";
      }, 5000);
  setshowBtn(false)
  }, [show]);

  if (select === "") {
    var newFun = Catagory;
  } else {
    var newFun = Catagory.filter((elem) => {
      return elem.name.toLowerCase().includes(select);
    });
  }

  // *************** page function *******
  useEffect(() => {
    const userData = window.localStorage.getItem("user");
    setCurrentUser(JSON.parse(userData));
    console.log(CurrentUser);
  }, []);

  const dispatch = useDispatch();

  const { pageStore } = useSelector((state) => state);
  const { pages } = pageStore;

  const handleSubmit = async (name, id) => {
    if (!name) {
      setIsValid(false);
      return;
    }
    const closeModal = () => {
      setName("");
      setError("");
      setShow(false);
    };
    const req = pages.filter((elem) => elem._id === id);
    // console.log(req[0].content);
    const content = req[0].content;
    console.log(content);
    await createPage(name, CurrentUser._id, content)(dispatch);
    console.log(name);

    // window.location.href="/"
  };
  const handleClear = () => {
    setName("");
    // window.location.href="/"
    window.location.reload();
  };

  const deletePage = (id) => {
    axios.delete(`${API_HOST}pages/`, { data: { id: id } }).then(() => {
      console.log("delted");
      // window.location.href='/'
      window.location.reload();
    });
  };
  const getpage= async()=>{
axios.get(`${API_HOST}pages/create/byTemplate`).then((res)=>{
  console.log(res)
  const data=res.data._id
  window.location.href=`/editor/${data}`
})
  }

  return (
    <>
      {/* <Navbar /> */}
      {/* {loading ? ():()} */}
      <form id="create-page">

        {/* ********** image modal***** */}
        <Modal
        show={imageModal}
        onHide={() => setimageModal(false)}
        dialogClassName="modal-200w"
        aria-labelledby="example-custom-modal-styling-title"
        fullscreen='xxl-down'
        className="modal-image"
      >
        <Modal.Header closeButton className="btn-close-modal">
          <Modal.Title id="example-custom-modal-styling-title">
           Preview
          </Modal.Title>
          <button onClick={()=>{setimageModal(false)}} className="close-btn-modal-img">Close</button>
        </Modal.Header>
        <Modal.Body>
          <img src={temImg} height="4000px" width="1000px" className="modal-image-show"/>
        </Modal.Body>
      </Modal>
        {/* ***** image modal end ******** */}
        <Modal
          show={show}
          onHide={setShow}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          data-target=".bd-example-modal-sm"
        >
          <Modal.Header closeButton>
           {!showBtn ? ( <Modal.Title className="page-being-created">Your Page is being created</Modal.Title>):( <Modal.Title className="page-being-created">Your Page is created Enjoy!</Modal.Title>)}
           
            <br />
          </Modal.Header>
          <Modal.Body>
            <div >
              <p className="please-wait">Please wait a moment</p>
              {!showBtn && (
 <div class="spinner-border " id="please-wait-spiner" role="status">
 <span class="sr-only"></span>
</div>
              )}
             
              <p>Fact:approximately 175 new websites are created every minute! </p>
              {/* <div class="progress">
                <div
                  class="progress-bar progress-bar-striped bg-danger"
                  role="progressbar"
                  style="width: 100%"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div> */}
              <label htmlFor="name" className="form-label">
                {name}
              </label>
              {showBtn &&(
 <button  className="go-there-btn" onClick={()=>getpage()}>Go there</button>
              )}
             
            </div>
          </Modal.Body>
        </Modal>
      </form>
      <div className="categoryDiv">Select Category:</div>
      {/* <p>{JSON.stringify(content)}</p> */}
      <input
        placeholder="Search Category"
        value={select.toLowerCase()}
        className="Selected"
        onChange={(e) => setselect(e.target.value)}
      />
      <div className="Choice">
        {/* <div className="input-choice-div"> */}

        {/* </div> */}
        <ul className="choice-list">
          {/* <li onClick={() => setselect("Education")} className={select ==="news"? "active-choice":"not-active-choice" }>Education</li> */}
          <li onClick={() => setselect("blogs")} className={select ==="blogs"? "active-choice":"not-active-choice" }>Blogs</li>
          <li onClick={() => setselect("portfolio")} className={select ==="portfolio"? "active-choice":"not-active-choice" }>Portfolio</li>
          <li onClick={() => setselect("resturant")} className={select ==="resturant"? "active-choice":"not-active-choice" }>Resturant</li>
          <li onClick={() => setselect("travel")} className={select ==="tour"? "active-choice":"not-active-choice" }>Travel</li>
        </ul>
      </div>

      <div className="nomi">
        {pages
          .filter(
            (CurElem) =>
              CurElem.user === "62ac66ada22029660b0c5e53" &&
              CurElem.name.toLowerCase().includes(select)
          )
          .map((page) => {
            return (
              <div className="grid-data">
                <img height="140px" width="246px" src={page.img} className="template-col-image"></img>
                <p className="title-web-store">{page.name}</p>
                <button className="preview-btn"  data-toggle="modal" onClick={()=>{setimageModal(true);settemImg(page.img)}}>Preview <GrView/></button>
                <a
                  onClick={() => {
                    setShow(!show);
                    handleSubmit(page.name, page._id);
                  }}
                  // copyContent(page._id);

                  className="template-page-link"
                  href="#"
                >
                  Use Templete
                </a>
              </div>
            );
          })}

        {/* <div>first</div>
          <div>second</div>
          <div>third</div> */}
      </div>
    </>
  );
};

export default TemplatePage;
