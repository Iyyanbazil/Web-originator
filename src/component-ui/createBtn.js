import React from 'react'
import "./createBtn.css"
import {Link} from 'react-router-dom'
import Navbar from './navbar'
import { useState,useEffect } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import TemplatePage from './templatePage';
const CreateBtn = () => {
    const [islogin, setislogin] = useState(false)
useEffect(() => {
const userlog=window.localStorage.getItem('islogin')
const parselog=JSON.parse(userlog)
setislogin(parselog)
}, [])

    return (
        <>
        {/* <Navbar/> */}
        <h4 className='heading-selection'><u>Select Your Own Way</u></h4>
            <div className='grid-main'>
                <div className='first-grid'>
                    <h2><b>Create by <br/>Templates</b></h2>
                    <p className='para-after-head'>Select the templete of your choice and make changes according to your need its all Free!</p>
                    {islogin && (
                       <Link to="/create/byTemplate"  className="create_link2">Create</Link>
                    )}
                    {!islogin && (
                             <Link to="/login"  className="create_link2">Create</Link>
                    )}
                    {/* <Link to="/create/byTemplate"  className="create_link2">Create</Link> */}
                    <br/><br/>
                    <a href="/Support#renamepages" className='link-learn'>Learn More?</a>
                </div>
                <div className='second-grid'>

                    <h2><b>Create by <br/>Drag & Drop</b></h2>
                    <p className="para-after-head">Design from blank page use editor and many built in components.Style them and many more for Free!</p>
                    {islogin && (
                    <Link to="/createPage" className="create_link2">Create</Link>
                    )}
                    {!islogin && (
                            <Link to="/login" className="create_link2">Create</Link>
                    )}
                    <br/><br/>
                      
                        
                
                    {/* <Link to="/login" target="_blank" className="create_link2">Create</Link><br/><br/> */}
                    <a href="/Support/#download" className='link-learn'>Learn More?</a>
                </div>
            </div>

        </>
    )
}

export default CreateBtn
