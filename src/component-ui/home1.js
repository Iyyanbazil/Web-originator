import React from 'react';
import './home1.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import data from "./Data/dataHome"
import Carousel from 'react-material-ui-carousel'
import {GoLocation} from 'react-icons/go'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineLinkedin} from "react-icons/ai"
import {RiFacebookCircleLine} from 'react-icons/ri'
const Home1 = () => {
  var items = [
    {
        name: "./home/2.jpg",
        description: "this is blog image"
    },
    {
        name: "./home/3.jpg",
        description: "this is gallery image"
    },
    {
      name: "./home/4.jpg",
      description: "this is pizza image"
  },
  {
    name: "./home/5.jpg",
    description: "this is portfolio image"
},
  ]
  const newData = data.map((data) => {
    return (
      <div className='grid' key={data.id}>
        <div className='grid-col1'>{data.para}</div>
        <div className='grid-col2'>
          <img className='grid-img' src={data.image} />
        </div>
      </div>
    );
  });

  return (
    <>
     
      <div className='home_main' id="create">
        {/* <h1 className='main_heading'>Start Creating Website.</h1> */}
        <img src="/images/5.gif" className='home-img-create'/>
        {/* <div className='home-create-btn-img'> */}
       

<Link to='/create' className='create_link' >   Create </Link>
       
      </div>

      {/* <img src="/DND images/Capture.PNG" alt="" /> */}

    <div>
      {/* <img src="https://inwise.com/wp-content/uploads/2019/01/screen_animazia_muzik_160119_ENG.gif" height="300px" width="300px"></img> */}
      <div className='home-carousel'>
      <Carousel duration="500">
            {
                items.map( (item, i) => (
                  <img src={item.name} height="250px" width="800px" className='home-carousel-img'></img>
                ) )
            }
        </Carousel>
        </div>
      {/* <img src="https://uploads-ssl.webflow.com/5daaade3e3e3f0d01b1daa77/606589b25b7d42a3ee8151b1_UnlayerHeroAnimation.gif"></img> */}
        <h2 className='home_h2'>
          Effortless webpage building for  people.
        </h2>
      </div>

      {/* Grid Display */}
      <div className='home_grid'>
        <div className='home_grid_column1'>
          <p>
            <b>Built-in Templates</b>
          </p>
          <br />
          <p>
            just one click <br /> and tempate will be {' '}
            <br />
            ready for you
          </p>
        </div>
        <div className='home_grid_column2'>
          <p>
            <b>Simple & Easy to use</b>
          </p>
          <br />
          <p>
            Alurring customizable templates <br /> Drag & Drop feature from
            scratch.
          </p>
        </div>
        <div className='home_grid_column3'>
          <p>
            <b>Zero Experience Required</b>
          </p>
          <br />
          <p>
            Warm hearted welcome to coders but no coding is required. 
            
          </p>
        </div>
      </div>

      {/* images and secription from JSON file */}

      {newData}

      {/* How to create website */}
      <div className='how_to'>
        <div className='how_to_h2'>
          <h2>Simple way to create your own website</h2>
        </div>

        {/* How to grid */}
        <div className='how_to_grid'>
          <div className='how_to_grid_column1'>
            <div className='how_column1_div1'>
              <p>
                <b>Login</b>
              </p>
              <br />
              <p>
                Login in your account by using your email, name and password. No
                other requirements.
              </p>
            </div>
            <div className='how_column1_div2'>
              <p>
                <b>Add more</b>
              </p>
              <br />
              <p>
                Add videos, images and other links to your website. Customize
                website the way you want.
              </p>
            </div>
          </div>
          <div className='how_to_grid_column2'>
            <div className='how_column2_div1'>
              <p>
                <b>No account then Register</b>
              </p>
              <br />
              <p>
                Create an account by using your email, name and password and
                some other requirements for your own security
              </p>
            </div>
            <div className='how_column2_div2'>
              <p>
                <b>Edit Templates</b>
              </p>
              <br />
              <p>
               Edit built in tempates according to your needs and customize & style them as you want
              </p>
            </div>
          </div>
          <div className='how_to_grid_column3'>
            <div className='how_column3_div1'>
              <p>
                <b>Pick design</b>
              </p>
              <br />
              <p>
                Just pick and existing Template OR either just customize your
                web from scratch through Drag & Drop.
              </p>
            </div>
            <div className='how_column3_div2'>
              <p>
                <b>Ultimate Goal(Bussiness growth)</b>
              </p>
              <br />
              <p>
                After publishing your website just do paid promotions of your
                website for enhancing perception in people mind.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className='footer-home'>
<div className='main-grid-footer'>
  <div className='footer-col1'>
    <h3><b>WEB ORIGINATOR</b></h3>
    <p><GoLocation size="1.2rem"/>Sir Syed College of Computer Science Gulber III Lahore</p>
    <p><AiOutlineMail size="1.2rem"/>ayyanbazil000@gmail.com</p>
    <p className='rights-footer'><b>All rights 2022 @WOG</b></p>
    </div>
  <div className='footer-col2'>
<h3><b>Find Us at</b></h3>
<ul>
  <li className='footer-list'><a className='footer-list' href="https://github.com/Iyyanbazil" target='blank'><AiFillGithub size="2rem"/> GitHub</a></li>
  <li className='footer-list'><a className='footer-list' href="https://www.linkedin.com/in/ayyan-bazil-82a88a219/" target='blank'><AiOutlineLinkedin size="2rem"/> LinekdIn</a></li>
  <li className='footer-list'><a className='footer-list' href="https://www.facebook.com/profile.php?id=100014813775072" target='blank'><RiFacebookCircleLine size="2rem"/>Facebook</a></li>
  </ul>



  <a  href="#create" className='footer-to-top'><u>Back to top ^</u></a>
  </div>

</div>

      </footer>
    </>
  );
};

export default Home1;
