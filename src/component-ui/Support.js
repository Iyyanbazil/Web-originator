import React from "react";
import "./Support.css";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Doc from "./doc";
const Support = () => {
  const [search, setsearch] = useState("");
  const handleClick = () => {
    const res=search.replace(/ /g, '')
    // window.location.href = `#${search}`;
    window.location.href=`#${res}`
  };
  return (
    <>
      <div className="top-img-support">
        {/* <img className='support-img' src="/support/1.jpg"></img> */}

        <div className="img-top-div">
          {/* <h5 className='heading-main-support'>How we can help You ?</h5> */}

          <h2 className="heading-main-support">How we can help You? </h2>

          <input
            className="support-search"
            placeholder="Search"
            name="search"
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
              console.log(search);
            }}
          ></input>
          <button className="support-btn" onClick={handleClick}>
            Search
          </button>
          {/* <h5 className='heading-main-support'>How we can help You ?<br/> Search here on docs</h5> */}
        </div>
      </div>
      <div className="after-img-div">
        <h3>What do you need help with?</h3>
        <p className="after-img-div-para">we are here to help you</p>
      </div>
      <div className="support-logo">
        <div>
          <img src="/support/2.png" height="60px" with="60px"></img>
          <p>
            <b>Login</b>
          </p>
        </div>
        <div>
          <img src="/support/3.jpg" height="60px" with="60px"></img>
          <p className="chuku">
            <b>Unlimited pages</b>
          </p>
        </div>
        <div>
          <img src="/support/4.png" height="60px" with="60px"></img>
          <p>
            {" "}
            <b>Timeless</b>
          </p>
        </div>
        <div className="support-doc-nav-grid">
          <nav className="side-nav-support">
            <ul className="side-nav-ul">
              <li className="supprot-first">
                <a href="#wog">WOG</a>
              </li>
              <li>
                <div class="dropdown">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a class="dropdown-item" href="#createpages">
                        Create Page
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#deletePages">
                        Delete Page
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#editpages">
                        Edit Page
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#renamepages">
                        Rename Page
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="dropdown">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Template
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a class="dropdown-item" href="#preview">
                        Preview
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#usetemplate">
                        use Template
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#download">
                        download
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="dropdown">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Editor
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a class="dropdown-item" href="#modileview">
                        Mobile/PC view
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#undoredo">
                        Undo/Redo
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#save">
                        Save
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#delete">
                        Delete
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#previeweditor">
                        Preview
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="dropdown">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Tabs
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a class="dropdown-item" href="#blocks">
                        Blocks
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#style">
                        Style
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#layer">
                        Layers
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#traits">
                        Traits
                      </a>
                    </li>
                   
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
          <div className="support-doc">
         

            
            {Doc.map((curElem)=>{
return(
  <div className="support-doc-content">
  <h1 id={curElem.id} >{curElem.head}</h1>
  <p className="doc-sub-head">{curElem.subhead}</p>
  <p className="doc-sub-para"> {curElem.para}</p>
  {/* <img src={curElem.img} height="200px" className="support-img" ></img> */}
  </div>
)
           
             
            }
             
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
