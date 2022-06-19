import React, {
  useState,
  useRef,
  setInterval,
  useEffect,
  setTimeout,
  useReducer,
} from "react";
import "./templatePage.css";
import Navbar from "./navbar";
import Catagory from "./Data/catagory";
import { Modal, Button } from "react-bootstrap";
import { RiEditLine } from "react-icons/ri";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPage } from "../redux/actions/pageAction";
import axios from "axios";
import { API_HOST } from "../api_utils";
import ClipLoader from "react-spinners/ClipLoader";
// import "./pages.css"



const TemplatePage = ({ page }) => {
  // useEffect(() => {
  //   console.log('i am from useeffect');
  //  }, [])
  //  setTimeout(() => {
  //   console.log("i sm from settimeout")
  // }, 3000)
  // ****** to displaypages ****
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useReducer((show) => !show, false);
  const [isValid, setIsValid] = useState(true);
  const [CurrentUser, setCurrentUser] = useState("");
  const [select, setselect] = useState("");
  const [content, setcontent] = useState({});
  const [loading, setloading] = useState(false);

useEffect(() => {

  if(show === true){
    console.log("i am from use effect");
    //   setTimeout(() => {
    //   console.log("i sm from settimeout");
    // }, 3000)
  }
  
}, [show])

 
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

  return (
    <>
      {/* <Navbar /> */}
      {/* {loading ? ():()} */}
      <form id="create-page">
        <Modal
          show={show}
          onHide={setShow}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Your Page is being created</Modal.Title>
            <br />
          </Modal.Header>
          <Modal.Body>
            <div className="col-auto">
              <p>Please wait a moment</p>
              <div class="spinner-border m-5" role="status">
                <span class="sr-only"></span>
              </div>
              <label htmlFor="name" className="form-label">
                {name}
              </label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
      <div className="categoryDiv">Select Category:</div>
      {/* <p>{JSON.stringify(content)}</p> */}
      <input
        placeholder="Select Category"
        value={select.toLowerCase()}
        className="Selected"
        onChange={(e) => setselect(e.target.value)}
      />
      <div className="Choice">
        {/* <div className="input-choice-div"> */}

        {/* </div> */}
        <ul className="choice-list">
          <li onClick={() => setselect("news")}>News</li>
          <li onClick={() => setselect("blogs")}>Blogs</li>
          <li onClick={() => setselect("portfolio")}>Portfolio</li>
          <li onClick={() => setselect("resturant")}>Resturant</li>
          <li onClick={() => setselect("tour")}>Tour</li>
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
                <img height="80px" width="130px" src={page.img}></img>
                <p className="title-web-store">{page.name}</p>
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
