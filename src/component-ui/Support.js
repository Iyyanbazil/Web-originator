import React from 'react'
import './Support.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import { userContext } from './userContext'
import { useContext } from 'react'
const Support = () => {
  //  *********to save user******
  // const [user,setuser]=useContext(userContext)
  // useEffect(() => {
  //   const data=window.localStorage.getItem('user')
  //   setuser(JSON.parse(data))
  //    }, [])
     
  //  useEffect(() => {
  //    window.localStorage.setItem('user',JSON.stringify(user))
  //  }, [user])
    return (
        <>
      
{/* <Navbar /> */}
          <div className='main-support'>
            <div className='first-support'>
              <img src='./Images/support.jpg' className='support-image' />
            </div>
            <div className='second-support'>
              
              <h1 className='heading-techincal'>Technical Support</h1>
             {/* {console.log(user)} */}
             {/* <h1>{user.Fname}</h1> */}
              <p className='para-support'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem laudantium quibusdam culpa suscipit repellat officiis maxime alias ducimus quasi quis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sit eveniet, sint ad commodi totam natus iure minima nostrum minus.</p>
              <Link to="" className='link-support'>Learn more</Link>
            </div>
          </div>  
        </>
    )
}

export default Support
