import grapesjs from "grapesjs";
import gjsBlockBasic from "grapesjs-blocks-basic";
import $ from "jquery";
import grapesjsBlockBootstrap from "grapesjs-blocks-bootstrap4";
import grapesjsPluginExport from "grapesjs-plugin-export";
import grapesjsStyleBg from "grapesjs-style-bg";
import plugin from 'grapesjs-video-embed-manager';
import 'grapesjs/dist/css/grapes.min.css';
import {BiImageAdd} from 'react-icons/bi';
import {FiFacebook} from 'react-icons/fi'
import {
  addEditorCommand,
  deviceManager,
  layerManager,
  logoManger,
  panels,
  scripts,
  selectorManager,
  storageSetting,
  styleManager,
  styles,
  toggleSidebar,
  traitManager,
} from "./geditor_utils";
import tailwindComponent from "../plugins/tailwind";
import swiperComponent from "../plugins/swiper";
import blocks from "../plugins/swiper/blocks";

const geditorConfig = (assets, pageId) => {
  $(".panel__devices").html("");
  $(".panel__basic-actions").html("");
  $(".panel__editor").html("");
  $("#blocks").html("");
  $("#styles-container").html("");
  $("#layers-container").html("");
  $("#trait-container").html("");
  

  // Content for Preview
  const navbar = $("#navbar");
  const mainContent = $("#main-content");
  const panelTopBar = $("#main-content > .navbar-light");

  const editor = grapesjs.init({

    container: "#editor",
    
    allowScripts: 1,
    
    blockManager: {
      appendTo: "#blocks",
      
      blocks:[
        // {
         
        //   id:"logo",
        //   label:"logo",
        //   content:'<p>ayyan</p>',
        // },
//         {
//           id:'ayyan',
//           label:"Navbar",
//           media:`text`,
//           content:`
//           <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
//     <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Link</a>
//       </li>
//       <li class="nav-item">
//       <a class="nav-link" href="#">Link</a>
//     </li>
//     <li class="nav-item">
//     <a class="nav-link" href="#">Link</a>
//   </li>
     
//     </ul>
//     <form class="form-inline my-2 my-lg-0">
//       <input class="form-control mr-sm-2" type="search" placeholder="Search">
//       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
// </nav>

//           `,
          
//         },

//         {
//           id:'bazil',
//           label:"Portfolio",
//           media:`text`,
//           script:scripts,
//           content:`
//           <!DOCTYPE html>
//           <html lang="en">
//           <head>
//             <!-- Theme Made By www.w3schools.com -->
//             <title>Bootstrap Theme Company Page</title>
//             <meta charset="utf-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1">
//             <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
//             <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
//             <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
//             <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
//             <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
//             <style>
//             body {
//               font: 400 15px Lato, sans-serif;
//               line-height: 1.8;
//               color: #818181;
//             }
//             h2 {
//               font-size: 24px;
//               text-transform: uppercase;
//               color: #303030;
//               font-weight: 600;
//               margin-bottom: 30px;
//             }
//             h4 {
//               font-size: 19px;
//               line-height: 1.375em;
//               color: #303030;
//               font-weight: 400;
//               margin-bottom: 30px;
//             }  
//             .jumbotron {
//               background-color: #f4511e;
//               color: #fff;
//               padding: 100px 25px;
//               font-family: Montserrat, sans-serif;
//             }
//             .container-fluid {
//               padding: 60px 50px;
//             }
//             .bg-grey {
//               background-color: #f6f6f6;
//             }
//             .logo-small {
//               color: #f4511e;
//               font-size: 50px;
//             }
//             .logo {
//               color: #f4511e;
//               font-size: 200px;
//             }
//             .thumbnail {
//               padding: 0 0 15px 0;
//               border: none;
//               border-radius: 0;
//             }
//             .thumbnail img {
//               width: 100%;
//               height: 100%;
//               margin-bottom: 10px;
//             }
//             .carousel-control.right, .carousel-control.left {
//               background-image: none;
//               color: #f4511e;
//             }
//             .carousel-indicators li {
//               border-color: #f4511e;
//             }
//             .carousel-indicators li.active {
//               background-color: #f4511e;
//             }
//             .item h4 {
//               font-size: 19px;
//               line-height: 1.375em;
//               font-weight: 400;
//               font-style: italic;
//               margin: 70px 0;
//             }
//             .item span {
//               font-style: normal;
//             }
//             .panel {
//               border: 1px solid #f4511e; 
//               border-radius:0 !important;
//               transition: box-shadow 0.5s;
//             }
//             .panel:hover {
//               box-shadow: 5px 0px 40px rgba(0,0,0, .2);
//             }
//             .panel-footer .btn:hover {
//               border: 1px solid #f4511e;
//               background-color: #fff !important;
//               color: #f4511e;
//             }
//             .panel-heading {
//               color: #fff !important;
//               background-color: #f4511e !important;
//               padding: 25px;
//               border-bottom: 1px solid transparent;
//               border-top-left-radius: 0px;
//               border-top-right-radius: 0px;
//               border-bottom-left-radius: 0px;
//               border-bottom-right-radius: 0px;
//             }
//             .panel-footer {
//               background-color: white !important;
//             }
//             .panel-footer h3 {
//               font-size: 32px;
//             }
//             .panel-footer h4 {
//               color: #aaa;
//               font-size: 14px;
//             }
//             .panel-footer .btn {
//               margin: 15px 0;
//               background-color: #f4511e;
//               color: #fff;
//             }
//             .navbar {
//               margin-bottom: 0;
//               background-color: #f4511e;
//               z-index: 9999;
//               border: 0;
//               font-size: 12px !important;
//               line-height: 1.42857143 !important;
//               letter-spacing: 4px;
//               border-radius: 0;
//               font-family: Montserrat, sans-serif;
//             }
//             .navbar li a, .navbar .navbar-brand {
//               color: #fff !important;
//             }
//             .navbar-nav li a:hover, .navbar-nav li.active a {
//               color: #f4511e !important;
//               background-color: #fff !important;
//             }
//             .navbar-default .navbar-toggle {
//               border-color: transparent;
//               color: #fff !important;
//             }
//             footer .glyphicon {
//               font-size: 20px;
//               margin-bottom: 20px;
//               color: #f4511e;
//             }
//             .slideanim {visibility:hidden;}
//             .slide {
//               animation-name: slide;
//               -webkit-animation-name: slide;
//               animation-duration: 1s;
//               -webkit-animation-duration: 1s;
//               visibility: visible;
//             }
//             @keyframes slide {
//               0% {
//                 opacity: 0;
//                 transform: translateY(70%);
//               } 
//               100% {
//                 opacity: 1;
//                 transform: translateY(0%);
//               }
//             }
//             @-webkit-keyframes slide {
//               0% {
//                 opacity: 0;
//                 -webkit-transform: translateY(70%);
//               } 
//               100% {
//                 opacity: 1;
//                 -webkit-transform: translateY(0%);
//               }
//             }
//             @media screen and (max-width: 768px) {
//               .col-sm-4 {
//                 text-align: center;
//                 margin: 25px 0;
//               }
//               .btn-lg {
//                 width: 100%;
//                 margin-bottom: 35px;
//               }
//             }
//             @media screen and (max-width: 480px) {
//               .logo {
//                 font-size: 150px;
//               }
//             }
//             </style>
//           </head>
//           <body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
          
//           <nav class="navbar navbar-default ">
//             <div class="container">
//               <div class="navbar-header">
//                 <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
//                   <span class="icon-bar"></span>
//                   <span class="icon-bar"></span>
//                   <span class="icon-bar"></span>                        
//                 </button>
//                 <a class="navbar-brand" href="#myPage">Logo</a>
//               </div>
//               <div class="collapse navbar-collapse" id="myNavbar">
//                 <ul class="nav navbar-nav navbar-right">
//                   <li><a href="#about">ABOUT</a></li>
//                   <li><a href="#services">SERVICES</a></li>
//                   <li><a href="#portfolio">PORTFOLIO</a></li>
//                   <li><a href="#pricing">PRICING</a></li>
//                   <li><a href="#contact">CONTACT</a></li>
//                 </ul>
//               </div>
//             </div>
//           </nav>
          
//           <div class="jumbotron text-center">
//             <h1>Company</h1> 
//             <p>We specialize in blablabla</p> 
//             <form>
//               <div class="input-group">
//                 <input type="email" class="form-control" size="50" placeholder="Email Address" required>
//                 <div class="input-group-btn">
//                   <button type="button" class="btn btn-danger">Subscribe</button>
//                 </div>
//               </div>
//             </form>
//           </div>
          
//           <!-- Container (About Section) -->
//           <div id="about" class="container-fluid">
//             <div class="row">
//               <div class="col-sm-8">
//                 <h2>About Company Page</h2><br>
//                 <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//                 <br><button class="btn btn-default btn-lg">Get in Touch</button>
//               </div>
//               <div class="col-sm-4">
//                 <span class="glyphicon glyphicon-signal logo"></span>
//               </div>
//             </div>
//           </div>
          
//           <div class="container-fluid bg-grey">
//             <div class="row">
//               <div class="col-sm-4">
//                 <span class="glyphicon glyphicon-globe logo slideanim"></span>
//               </div>
//               <div class="col-sm-8">
//                 <h2>Our Values</h2><br>
//                 <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br>
//                 <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//               </div>
//             </div>
//           </div>
          
//           <!-- Container (Services Section) -->
//           <div id="services" class="container-fluid text-center">
//             <h2>SERVICES</h2>
//             <h4>What we offer</h4>
//             <br>
//             <div class="row slideanim">
//               <div class="col-sm-4">
//                 <span class="glyphicon glyphicon-signal  "></span>
//                 <h4>POWER</h4>
//                 <p>Lorem ipsum dolor sit amet..</p>
//               </div>
//               <div class="col-sm-4">
//                 <span class="glyphicon glyphicon-heart logo-small"></span>
//                 <h4>LOVE</h4>
//                 <p>Lorem ipsum dolor sit amet..</p>
//               </div>
//               <div class="col-sm-4">
//                 <span class="glyphicon glyphicon-lock logo-small"></span>
//                 <h4>JOB DONE</h4>
//                 <p>Lorem ipsum dolor sit amet..</p>
//               </div>
//             </div>
//             <br><br>
//             <div class="row slideanim">
//               <div class="col-sm-4">
//                 <span class="glyphicon glyphicon-leaf logo-small"></span>
//                 <h4>GREEN</h4>
//                 <p>Lorem ipsum dolor sit amet..</p>
//               </div>
//               <div class="col-sm-4">
//                 <span class="glyphicon glyphicon-certificate logo-small"></span>
//                 <h4>CERTIFIED</h4>
//                 <p>Lorem ipsum dolor sit amet..</p>
//               </div>
//               <div class="col-sm-4">
//                 <span class="glyphicon glyphicon-wrench logo-small"></span>
//                 <h4 style="color:#303030;">HARD WORK</h4>
//                 <p>Lorem ipsum dolor sit amet..</p>
//               </div>
//             </div>
//           </div>
          
//           <!-- Container (Portfolio Section) -->
//           <div id="portfolio" class="container-fluid text-center bg-grey">
//             <h2>Portfolio</h2><br>
//             <h4>What we have created</h4>
//             <div class="row text-center slideanim">
//               <div class="col-sm-4">
//                 <div class="thumbnail">
//                   <img src="paris.jpg" alt="Paris" width="400" height="300">
//                   <p><strong>Paris</strong></p>
//                   <p>Yes, we built Paris</p>
//                 </div>
//               </div>
//               <div class="col-sm-4">
//                 <div class="thumbnail">
//                   <img src="newyork.jpg" alt="New York" width="400" height="300">
//                   <p><strong>New York</strong></p>
//                   <p>We built New York</p>
//                 </div>
//               </div>
//               <div class="col-sm-4">
//                 <div class="thumbnail">
//                   <img src="sanfran.jpg" alt="San Francisco" width="400" height="300">
//                   <p><strong>San Francisco</strong></p>
//                   <p>Yes, San Fran is ours</p>
//                 </div>
//               </div>
//             </div><br>
            
//             <h2>What our customers say</h2>
//             <div id="myCarousel" class="carousel slide text-center" data-ride="carousel">
//               <!-- Indicators -->
//               <ol class="carousel-indicators">
//                 <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
//                 <li data-target="#myCarousel" data-slide-to="1"></li>
//                 <li data-target="#myCarousel" data-slide-to="2"></li>
//               </ol>
          
//               <!-- Wrapper for slides -->
//               <div class="carousel-inner" role="listbox">
//                 <div class="item active">
//                   <h4>"This company is the best. I am so happy with the result!"<br><span>Michael Roe, Vice President, Comment Box</span></h4>
//                 </div>
//                 <div class="item">
//                   <h4>"One word... WOW!!"<br><span>John Doe, Salesman, Rep Inc</span></h4>
//                 </div>
//                 <div class="item">
//                   <h4>"Could I... BE any more happy with this company?"<br><span>Chandler Bing, Actor, FriendsAlot</span></h4>
//                 </div>
//               </div>
          
//               <!-- Left and right controls -->
//               <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
//                 <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
//                 <span class="sr-only">Previous</span>
//               </a>
//               <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
//                 <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
//                 <span class="sr-only">Next</span>
//               </a>
//             </div>
//           </div>
          
//           <!-- Container (Pricing Section) -->
//           <div id="pricing" class="container-fluid">
//             <div class="text-center">
//               <h2>Pricing</h2>
//               <h4>Choose a payment plan that works for you</h4>
//             </div>
//             <div class="row slideanim">
//               <div class="col-sm-4 col-xs-12">
//                 <div class="panel panel-default text-center">
//                   <div class="panel-heading">
//                     <h1>Basic</h1>
//                   </div>
//                   <div class="panel-body">
//                     <p><strong>20</strong> Lorem</p>
//                     <p><strong>15</strong> Ipsum</p>
//                     <p><strong>5</strong> Dolor</p>
//                     <p><strong>2</strong> Sit</p>
//                     <p><strong>Endless</strong> Amet</p>
//                   </div>
//                   <div class="panel-footer">
//                     <h3>$19</h3>
//                     <h4>per month</h4>
//                     <button class="btn btn-lg">Sign Up</button>
//                   </div>
//                 </div>      
//               </div>     
//               <div class="col-sm-4 col-xs-12">
//                 <div class="panel panel-default text-center">
//                   <div class="panel-heading">
//                     <h1>Pro</h1>
//                   </div>
//                   <div class="panel-body">
//                     <p><strong>50</strong> Lorem</p>
//                     <p><strong>25</strong> Ipsum</p>
//                     <p><strong>10</strong> Dolor</p>
//                     <p><strong>5</strong> Sit</p>
//                     <p><strong>Endless</strong> Amet</p>
//                   </div>
//                   <div class="panel-footer">
//                     <h3>$29</h3>
//                     <h4>per month</h4>
//                     <button class="btn btn-lg">Sign Up</button>
//                   </div>
//                 </div>      
//               </div>       
//               <div class="col-sm-4 col-xs-12">
//                 <div class="panel panel-default text-center">
//                   <div class="panel-heading">
//                     <h1>Premium</h1>
//                   </div>
//                   <div class="panel-body">
//                     <p><strong>100</strong> Lorem</p>
//                     <p><strong>50</strong> Ipsum</p>
//                     <p><strong>25</strong> Dolor</p>
//                     <p><strong>10</strong> Sit</p>
//                     <p><strong>Endless</strong> Amet</p>
//                   </div>
//                   <div class="panel-footer">
//                     <h3>$49</h3>
//                     <h4>per month</h4>
//                     <button class="btn btn-lg">Sign Up</button>
//                   </div>
//                 </div>      
//               </div>    
//             </div>
//           </div>
          
//           <!-- Container (Contact Section) -->
//           <div id="contact" class="container-fluid bg-grey">
//             <h2 class="text-center">CONTACT</h2>
//             <div class="row">
//               <div class="col-sm-5">
//                 <p>Contact us and we'll get back to you within 24 hours.</p>
//                 <p><span class="glyphicon glyphicon-map-marker"></span> Chicago, US</p>
//                 <p><span class="glyphicon glyphicon-phone"></span> +00 1515151515</p>
//                 <p><span class="glyphicon glyphicon-envelope"></span> myemail@something.com</p>
//               </div>
//               <div class="col-sm-7 slideanim">
//                 <div class="row">
//                   <div class="col-sm-6 form-group">
//                     <input class="form-control" id="name" name="name" placeholder="Name" type="text" required>
//                   </div>
//                   <div class="col-sm-6 form-group">
//                     <input class="form-control" id="email" name="email" placeholder="Email" type="email" required>
//                   </div>
//                 </div>
//                 <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br>
//                 <div class="row">
//                   <div class="col-sm-12 form-group">
//                     <button class="btn btn-default pull-right" type="submit">Send</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <!-- Image of location/map -->
//           <img src="/w3images/map.jpg" class="w3-image w3-greyscale-min" style="width:100%">
          
//           <footer class="container-fluid text-center">
//             <a href="#myPage" title="To Top">
//               <span class="glyphicon glyphicon-chevron-up"></span>
//             </a>
//             <p>Bootstrap Theme Made By <a href="https://www.w3schools.com" title="Visit w3schools">www.w3schools.com</a></p>
//           </footer>
          
//           <script>
//           $(document).ready(function(){
//             // Add smooth scrolling to all links in navbar + footer link
//             $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
//               // Make sure this.hash has a value before overriding default behavior
//               if (this.hash !== "") {
//                 // Prevent default anchor click behavior
//                 event.preventDefault();
          
//                 // Store hash
//                 var hash = this.hash;
          
//                 // Using jQuery's animate() method to add smooth page scroll
//                 // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
//                 $('html, body').animate({
//                   scrollTop: $(hash).offset().top
//                 }, 900, function(){
             
//                   // Add hash (#) to URL when done scrolling (default click behavior)
//                   window.location.hash = hash;
//                 });
//               } // End if
//             });
            
//             $(window).scroll(function() {
//               $(".slideanim").each(function(){
//                 var pos = $(this).offset().top;
          
//                 var winTop = $(window).scrollTop();
//                   if (pos < winTop + 600) {
//                     $(this).addClass("slide");
//                   }
//               });
//             });
//           })
//           </script>
          
//           </body>
//           </html>
          

//           `,
          
//         },

//         {
//           id:'second',
//           label:"Resturnat",
//           media:`text`,
//           content:`
//           <!DOCTYPE html>
// <html>
// <head>
// <title>W3.CSS Template</title>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
// <style>
// body {font-family: "Times New Roman", Georgia, Serif;}
// h1, h2, h3, h4, h5, h6 {
//   font-family: "Playfair Display";
//   letter-spacing: 5px;
// }
// </style>
// </head>
// <body>

// <!-- Navbar (sit on top) -->
// <div class="w3-top">
//   <div class="w3-bar w3-white w3-padding w3-card" style="letter-spacing:4px;">
//     <a href="#home" class="w3-bar-item w3-button">Gourmet au Catering</a>
//     <!-- Right-sided navbar links. Hide them on small screens -->
//     <div class="w3-right w3-hide-small">
//       <a href="#about" class="w3-bar-item w3-button">About</a>
//       <a href="#menu" class="w3-bar-item w3-button">Menu</a>
//       <a href="#contact" class="w3-bar-item w3-button">Contact</a>
//     </div>
//   </div>
// </div>

// <!-- Header -->
// <header class="w3-display-container w3-content w3-wide" style="max-width:1600px;min-width:500px" id="home">
//   <img class="w3-image" src="/w3images/hamburger.jpg" alt="Hamburger Catering" width="1600" height="800">
//   <div class="w3-display-bottomleft w3-padding-large w3-opacity">
//     <h1 class="w3-xxlarge">Le Catering</h1>
//   </div>
// </header>

// <!-- Page content -->
// <div class="w3-content" style="max-width:1100px">

//   <!-- About Section -->
//   <div class="w3-row w3-padding-64" id="about">
//     <div class="w3-col m6 w3-padding-large w3-hide-small">
//      <img src="/w3images/tablesetting2.jpg" class="w3-round w3-image w3-opacity-min" alt="Table Setting" width="600" height="750">
//     </div>

//     <div class="w3-col m6 w3-padding-large">
//       <h1 class="w3-center">About Catering</h1><br>
//       <h5 class="w3-center">Tradition since 1889</h5>
//       <p class="w3-large">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span class="w3-tag w3-light-grey">seasonal</span> ingredients.</p>
//       <p class="w3-large w3-text-grey w3-hide-medium">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//     </div>
//   </div>
  
//   <hr>
  
//   <!-- Menu Section -->
//   <div class="w3-row w3-padding-64" id="menu">
//     <div class="w3-col l6 w3-padding-large">
//       <h1 class="w3-center">Our Menu</h1><br>
//       <h4>Bread Basket</h4>
//       <p class="w3-text-grey">Assortment of fresh baked fruit breads and muffins 5.50</p><br>
    
//       <h4>Honey Almond Granola with Fruits</h4>
//       <p class="w3-text-grey">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p><br>
    
//       <h4>Belgian Waffle</h4>
//       <p class="w3-text-grey">Vanilla flavored batter with malted flour 7.50</p><br>
    
//       <h4>Scrambled eggs</h4>
//       <p class="w3-text-grey">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p><br>
    
//       <h4>Blueberry Pancakes</h4>
//       <p class="w3-text-grey">With syrup, butter and lots of berries 8.50</p>    
//     </div>
    
//     <div class="w3-col l6 w3-padding-large">
//       <img src="/w3images/tablesetting.jpg" class="w3-round w3-image w3-opacity-min" alt="Menu" style="width:100%">
//     </div>
//   </div>

//   <hr>

//   <!-- Contact Section -->
//   <div class="w3-container w3-padding-64" id="contact">
//     <h1>Contact</h1><br>
//     <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
//     <p class="w3-text-blue-grey w3-large"><b>Catering Service, 42nd Living St, 43043 New York, NY</b></p>
//     <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
//     <form action="/action_page.php" target="_blank">
//       <p><input class="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name"></p>
//       <p><input class="w3-input w3-padding-16" type="number" placeholder="How many people" required name="People"></p>
//       <p><input class="w3-input w3-padding-16" type="datetime-local" placeholder="Date and time" required name="date" value="2020-11-16T20:00"></p>
//       <p><input class="w3-input w3-padding-16" type="text" placeholder="Message \ Special requirements" required name="Message"></p>
//       <p><button class="w3-button w3-light-grey w3-section" type="submit">SEND MESSAGE</button></p>
//     </form>
//   </div>
  
// <!-- End page content -->
// </div>

// <!-- Footer -->
// <footer class="w3-center w3-light-grey w3-padding-32">
//   <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">w3.css</a></p>
// </footer>

// </body>
// </html>

//           `
//         },
//         {
//           id:'third',
//           label:"Tour",
//           media:`text`,
//           content:`
//           <!DOCTYPE html>
// <html lang="en">
// <head>
// <title>W3.CSS Template</title>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
//           <style>
// body {font-family: "Lato", sans-serif}
// .mySlides {display: none}
// </style>
// </head>
// <body>

// <!-- Navbar -->
// <div class="w3-top">
//   <div class="w3-bar w3-black w3-card">
//     <a class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
//     <a href="#" class="w3-bar-item w3-button w3-padding-large">HOME</a>
//     <a href="#band" class="w3-bar-item w3-button w3-padding-large w3-hide-small">BAND</a>
//     <a href="#tour" class="w3-bar-item w3-button w3-padding-large w3-hide-small">TOUR</a>
//     <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT</a>
//     <div class="w3-dropdown-hover w3-hide-small">
//       <button class="w3-padding-large w3-button" title="More">MORE <i class="fa fa-caret-down"></i></button>     
//       <div class="w3-dropdown-content w3-bar-block w3-card-4">
//         <a href="#" class="w3-bar-item w3-button">Merchandise</a>
//         <a href="#" class="w3-bar-item w3-button">Extras</a>
//         <a href="#" class="w3-bar-item w3-button">Media</a>
//       </div>
//     </div>
//     <a href="javascript:void(0)" class="w3-padding-large w3-hover-red w3-hide-small w3-right"><i class="fa fa-search"></i></a>
//   </div>
// </div>

// <!-- Navbar on small screens (remove the onclick attribute if you want the navbar to always show on top of the content when clicking on the links) -->
// <div id="navDemo" class="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top" style="margin-top:46px">
//   <a href="#band" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">BAND</a>
//   <a href="#tour" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">TOUR</a>
//   <a href="#contact" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">CONTACT</a>
//   <a href="#" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">MERCH</a>
// </div>

// <!-- Page content -->
// <div class="w3-content" style="max-width:2000px;margin-top:46px">

//   <!-- Automatic Slideshow Images -->
//   <div class="mySlides w3-display-container w3-center">
//     <img src="/w3images/la.jpg" style="width:100%">
//     <div class="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
//       <h3>Los Angeles</h3>
//       <p><b>We had the best time playing at Venice Beach!</b></p>   
//     </div>
//   </div>
//   <div class="mySlides w3-display-container w3-center">
//     <img src="/w3images/ny.jpg" style="width:100%">
//     <div class="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
//       <h3>New York</h3>
//       <p><b>The atmosphere in New York is lorem ipsum.</b></p>    
//     </div>
//   </div>
//   <div class="mySlides w3-display-container w3-center">
//     <img src="/w3images/chicago.jpg" style="width:100%">
//     <div class="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
//       <h3>Chicago</h3>
//       <p><b>Thank you, Chicago - A night we won't forget.</b></p>    
//     </div>
//   </div>

//   <!-- The Band Section -->
//   <div class="w3-container w3-content w3-center w3-padding-64" style="max-width:800px" id="band">
//     <h2 class="w3-wide">THE BAND</h2>
//     <p class="w3-opacity"><i>We love music</i></p>
//     <p class="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
//       ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
//       adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//     <div class="w3-row w3-padding-32">
//       <div class="w3-third">
//         <p>Name</p>
//         <img src="/w3images/bandmember.jpg" class="w3-round w3-margin-bottom" alt="Random Name" style="width:60%">
//       </div>
//       <div class="w3-third">
//         <p>Name</p>
//         <img src="/w3images/bandmember.jpg" class="w3-round w3-margin-bottom" alt="Random Name" style="width:60%">
//       </div>
//       <div class="w3-third">
//         <p>Name</p>
//         <img src="/w3images/bandmember.jpg" class="w3-round" alt="Random Name" style="width:60%">
//       </div>
//     </div>
//   </div>

//   <!-- The Tour Section -->
//   <div class="w3-black" id="tour">
//     <div class="w3-container w3-content w3-padding-64" style="max-width:800px">
//       <h2 class="w3-wide w3-center">TOUR DATES</h2>
//       <p class="w3-opacity w3-center"><i>Remember to book your tickets!</i></p><br>

//       <ul class="w3-ul w3-border w3-white w3-text-grey">
//         <li class="w3-padding">September <span class="w3-tag w3-red w3-margin-left">Sold out</span></li>
//         <li class="w3-padding">October <span class="w3-tag w3-red w3-margin-left">Sold out</span></li>
//         <li class="w3-padding">November <span class="w3-badge w3-right w3-margin-right">3</span></li>
//       </ul>

//       <div class="w3-row-padding w3-padding-32" style="margin:0 -16px">
//         <div class="w3-third w3-margin-bottom">
//           <img src="/w3images/newyork.jpg" alt="New York" style="width:100%" class="w3-hover-opacity">
//           <div class="w3-container w3-white">
//             <p><b>New York</b></p>
//             <p class="w3-opacity">Fri 27 Nov 2016</p>
//             <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
//             <button class="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>
//           </div>
//         </div>
//         <div class="w3-third w3-margin-bottom">
//           <img src="/w3images/paris.jpg" alt="Paris" style="width:100%" class="w3-hover-opacity">
//           <div class="w3-container w3-white">
//             <p><b>Paris</b></p>
//             <p class="w3-opacity">Sat 28 Nov 2016</p>
//             <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
//             <button class="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>
//           </div>
//         </div>
//         <div class="w3-third w3-margin-bottom">
//           <img src="/w3images/sanfran.jpg" alt="San Francisco" style="width:100%" class="w3-hover-opacity">
//           <div class="w3-container w3-white">
//             <p><b>San Francisco</b></p>
//             <p class="w3-opacity">Sun 29 Nov 2016</p>
//             <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
//             <button class="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

//   <!-- Ticket Modal -->
//   <div id="ticketModal" class="w3-modal">
//     <div class="w3-modal-content w3-animate-top w3-card-4">
//       <header class="w3-container w3-teal w3-center w3-padding-32"> 
//         <span onclick="document.getElementById('ticketModal').style.display='none'" 
//        class="w3-button w3-teal w3-xlarge w3-display-topright">×</span>
//         <h2 class="w3-wide"><i class="fa fa-suitcase w3-margin-right"></i>Tickets</h2>
//       </header>
//       <div class="w3-container">
//         <p><label><i class="fa fa-shopping-cart"></i> Tickets, $15 per person</label></p>
//         <input class="w3-input w3-border" type="text" placeholder="How many?">
//         <p><label><i class="fa fa-user"></i> Send To</label></p>
//         <input class="w3-input w3-border" type="text" placeholder="Enter email">
//         <button class="w3-button w3-block w3-teal w3-padding-16 w3-section w3-right">PAY <i class="fa fa-check"></i></button>
//         <button class="w3-button w3-red w3-section" onclick="document.getElementById('ticketModal').style.display='none'">Close <i class="fa fa-remove"></i></button>
//         <p class="w3-right">Need <a href="#" class="w3-text-blue">help?</a></p>
//       </div>
//     </div>
//   </div>

//   <!-- The Contact Section -->
//   <div class="w3-container w3-content w3-padding-64" style="max-width:800px" id="contact">
//     <h2 class="w3-wide w3-center">CONTACT</h2>
//     <p class="w3-opacity w3-center"><i>Fan? Drop a note!</i></p>
//     <div class="w3-row w3-padding-32">
//       <div class="w3-col m6 w3-large w3-margin-bottom">
//         <i class="fa fa-map-marker" style="width:30px"></i> Chicago, US<br>
//         <i class="fa fa-phone" style="width:30px"></i> Phone: +00 151515<br>
//         <i class="fa fa-envelope" style="width:30px"> </i> Email: mail@mail.com<br>
//       </div>
//       <div class="w3-col m6">
//         <form action="/action_page.php" target="_blank">
//           <div class="w3-row-padding" style="margin:0 -16px 8px -16px">
//             <div class="w3-half">
//               <input class="w3-input w3-border" type="text" placeholder="Name" required name="Name">
//             </div>
//             <div class="w3-half">
//               <input class="w3-input w3-border" type="text" placeholder="Email" required name="Email">
//             </div>
//           </div>
//           <input class="w3-input w3-border" type="text" placeholder="Message" required name="Message">
//           <button class="w3-button w3-black w3-section w3-right" type="submit">SEND</button>
//         </form>
//       </div>
//     </div>
//   </div>
  
// <!-- End Page Content -->
// </div>

// <!-- Image of location/map -->
// <img src="/w3images/map.jpg" class="w3-image w3-greyscale-min" style="width:100%">

// <!-- Footer -->
// <footer class="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
//   <i class="fa fa-facebook-official w3-hover-opacity"></i>
//   <i class="fa fa-instagram w3-hover-opacity"></i>
//   <i class="fa fa-snapchat w3-hover-opacity"></i>
//   <i class="fa fa-pinterest-p w3-hover-opacity"></i>
//   <i class="fa fa-twitter w3-hover-opacity"></i>
//   <i class="fa fa-linkedin w3-hover-opacity"></i>
//   <p class="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
// </footer>

// <script>
// // Automatic Slideshow - change image every 4 seconds
// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 4000);    
// }

// // Used to toggle the menu on small screens when clicking on the menu button
// function myFunction() {
//   var x = document.getElementById("navDemo");
//   if (x.className.indexOf("w3-show") == -1) {
//     x.className += " w3-show";
//   } else { 
//     x.className = x.className.replace(" w3-show", "");
//   }
// }

// // When the user clicks anywhere outside of the modal, close it
// var modal = document.getElementById('ticketModal');
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// </script>

// </body>
// </html>

//           `

//         },
//         {
//           id:'fourth',
//           label:"blog",
//           media:`text`,
//           content:`
//           <!DOCTYPE html>
// <html>
// <head>
// <title>W3.CSS Template</title>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
// <style>
// body,h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif}
// </style>
// </head>
// <body class="w3-light-grey">

// <!-- w3-content defines a container for fixed size centered content, 
// and is wrapped around the whole page content, except for the footer in this example -->
// <div class="w3-content" style="max-width:1400px">

// <!-- Header -->
// <header class="w3-container w3-center w3-padding-32"> 
//   <h1><b>MY BLOG</b></h1>
//   <p>Welcome to the blog of <span class="w3-tag">unknown</span></p>
// </header>

// <!-- Grid -->
// <div class="w3-row">

// <!-- Blog entries -->
// <div class="w3-col l8 s12">
//   <!-- Blog entry -->
//   <div class="w3-card-4 w3-margin w3-white">
//     <img src="/w3images/woods.jpg" alt="Nature" style="width:100%">
//     <div class="w3-container">
//       <h3><b>TITLE HEADING</b></h3>
//       <h5>Title description, <span class="w3-opacity">April 7, 2014</span></h5>
//     </div>

//     <div class="w3-container">
//       <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed
//         tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
//       <div class="w3-row">
//         <div class="w3-col m8 s12">
//           <p><button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
//         </div>
//         <div class="w3-col m4 w3-hide-small">
//           <p><span class="w3-padding-large w3-right"><b>Comments  </b> <span class="w3-tag">0</span></span></p>
//         </div>
//       </div>
//     </div>
//   </div>
//   <hr>

//   <!-- Blog entry -->
//   <div class="w3-card-4 w3-margin w3-white">
//   <img src="/w3images/bridge.jpg" alt="Norway" style="width:100%">
//     <div class="w3-container">
//       <h3><b>BLOG ENTRY</b></h3>
//       <h5>Title description, <span class="w3-opacity">April 2, 2014</span></h5>
//     </div>

//     <div class="w3-container">
//       <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed
//         tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
//       <div class="w3-row">
//         <div class="w3-col m8 s12">
//           <p><button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
//         </div>
//         <div class="w3-col m4 w3-hide-small">
//           <p><span class="w3-padding-large w3-right"><b>Comments  </b> <span class="w3-badge">2</span></span></p>
//         </div>
//       </div>
//     </div>
//   </div>
// <!-- END BLOG ENTRIES -->
// </div>

// <!-- Introduction menu -->
// <div class="w3-col l4">
//   <!-- About Card -->
//   <div class="w3-card w3-margin w3-margin-top">
//   <img src="/w3images/avatar_g.jpg" style="width:100%">
//     <div class="w3-container w3-white">
//       <h4><b>My Name</b></h4>
//       <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
//     </div>
//   </div><hr>
  
//   <!-- Posts -->
//   <div class="w3-card w3-margin">
//     <div class="w3-container w3-padding">
//       <h4>Popular Posts</h4>
//     </div>
//     <ul class="w3-ul w3-hoverable w3-white">
//       <li class="w3-padding-16">
//         <img src="/w3images/workshop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
//         <span class="w3-large">Lorem</span><br>
//         <span>Sed mattis nunc</span>
//       </li>
//       <li class="w3-padding-16">
//         <img src="/w3images/gondol.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
//         <span class="w3-large">Ipsum</span><br>
//         <span>Praes tinci sed</span>
//       </li> 
//       <li class="w3-padding-16">
//         <img src="/w3images/skies.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
//         <span class="w3-large">Dorum</span><br>
//         <span>Ultricies congue</span>
//       </li>   
//       <li class="w3-padding-16 w3-hide-medium w3-hide-small">
//         <img src="/w3images/rock.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
//         <span class="w3-large">Mingsum</span><br>
//         <span>Lorem ipsum dipsum</span>
//       </li>  
//     </ul>
//   </div>
//   <hr> 
 
//   <!-- Labels / tags -->
//   <div class="w3-card w3-margin">
//     <div class="w3-container w3-padding">
//       <h4>Tags</h4>
//     </div>
//     <div class="w3-container w3-white">
//     <p><span class="w3-tag w3-black w3-margin-bottom">Travel</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">New York</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">London</span>
//       <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">IKEA</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">NORWAY</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">DIY</span>
//       <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Ideas</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Baby</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Family</span>
//       <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">News</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Clothing</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Shopping</span>
//       <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Sports</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Games</span>
//     </p>
//     </div>
//   </div>
  
// <!-- END Introduction Menu -->
// </div>

// <!-- END GRID -->
// </div><br>

// <!-- END w3-content -->
// </div>

// <!-- Footer -->
// <footer class="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
//   <button class="w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom">Previous</button>
//   <button class="w3-button w3-black w3-padding-large w3-margin-bottom">Next »</button>
//   <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
// </footer>

// </body>
// </html>
//           `
//         },
//         {
//             id:'fifth',
//             label:"blog food",
//             media:`text`,
//             content:`
//             <!DOCTYPE html>
// <html>
// <head>
// <title>W3.CSS Template</title>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karma">
// <style>
// body,h1,h2,h3,h4,h5,h6 {font-family: "Karma", sans-serif}
// .w3-bar-block .w3-bar-item {padding:20px}
// </style>
// </head>
// <body>

// <!-- Sidebar (hidden by default) -->
// <nav class="w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left" style="display:none;z-index:2;width:40%;min-width:300px" id="mySidebar">
//   <a href="javascript:void(0)" onclick="w3_close()"
//   class="w3-bar-item w3-button">Close Menu</a>
//   <a href="#food" onclick="w3_close()" class="w3-bar-item w3-button">Food</a>
//   <a href="#about" onclick="w3_close()" class="w3-bar-item w3-button">About</a>
// </nav>

// <!-- Top menu -->
// <div class="w3-top">
//   <div class="w3-white w3-xlarge" style="max-width:1200px;margin:auto">
//     <div class="w3-button w3-padding-16 w3-left" onclick="w3_open()">☰</div>
//     <div class="w3-right w3-padding-16">Mail</div>
//     <div class="w3-center w3-padding-16">My Food</div>
//   </div>
// </div>
  
// <!-- !PAGE CONTENT! -->
// <div class="w3-main w3-content w3-padding" style="max-width:1200px;margin-top:100px">

//   <!-- First Photo Grid-->
//   <div class="w3-row-padding w3-padding-16 w3-center" id="food">
//     <div class="w3-quarter">
//       <img src="/w3images/sandwich.jpg" alt="Sandwich" style="width:100%">
//       <h3>The Perfect Sandwich, A Real NYC Classic</h3>
//       <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
//     </div>
//     <div class="w3-quarter">
//       <img src="/w3images/steak.jpg" alt="Steak" style="width:100%">
//       <h3>Let Me Tell You About This Steak</h3>
//       <p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
//     </div>
//     <div class="w3-quarter">
//       <img src="/w3images/cherries.jpg" alt="Cherries" style="width:100%">
//       <h3>Cherries, interrupted</h3>
//       <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
//       <p>What else?</p>
//     </div>
//     <div class="w3-quarter">
//       <img src="/w3images/wine.jpg" alt="Pasta and Wine" style="width:100%">
//       <h3>Once Again, Robust Wine and Vegetable Pasta</h3>
//       <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
//     </div>
//   </div>
  
//   <!-- Second Photo Grid-->
//   <div class="w3-row-padding w3-padding-16 w3-center">
//     <div class="w3-quarter">
//       <img src="/w3images/popsicle.jpg" alt="Popsicle" style="width:100%">
//       <h3>All I Need Is a Popsicle</h3>
//       <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
//     </div>
//     <div class="w3-quarter">
//       <img src="/w3images/salmon.jpg" alt="Salmon" style="width:100%">
//       <h3>Salmon For Your Skin</h3>
//       <p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
//     </div>
//     <div class="w3-quarter">
//       <img src="/w3images/sandwich.jpg" alt="Sandwich" style="width:100%">
//       <h3>The Perfect Sandwich, A Real Classic</h3>
//       <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
//     </div>
//     <div class="w3-quarter">
//       <img src="/w3images/croissant.jpg" alt="Croissant" style="width:100%">
//       <h3>Le French</h3>
//       <p>Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
//     </div>
//   </div>

//   <!-- Pagination -->
//   <div class="w3-center w3-padding-32">
//     <div class="w3-bar">
//       <a href="#" class="w3-bar-item w3-button w3-hover-black">«</a>
//       <a href="#" class="w3-bar-item w3-black w3-button">1</a>
//       <a href="#" class="w3-bar-item w3-button w3-hover-black">2</a>
//       <a href="#" class="w3-bar-item w3-button w3-hover-black">3</a>
//       <a href="#" class="w3-bar-item w3-button w3-hover-black">4</a>
//       <a href="#" class="w3-bar-item w3-button w3-hover-black">»</a>
//     </div>
//   </div>
  
//   <hr id="about">

//   <!-- About Section -->
//   <div class="w3-container w3-padding-32 w3-center">  
//     <h3>About Me, The Food Man</h3><br>
//     <img src="/w3images/chef.jpg" alt="Me" class="w3-image" style="display:block;margin:auto" width="800" height="533">
//     <div class="w3-padding-32">
//       <h4><b>I am Who I Am!</b></h4>
//       <h6><i>With Passion For Real, Good Food</i></h6>
//       <p>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
//     </div>
//   </div>
//   <hr>
  
//   <!-- Footer -->
//   <footer class="w3-row-padding w3-padding-32">
//     <div class="w3-third">
//       <h3>FOOTER</h3>
//       <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
//       <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
//     </div>
  
//     <div class="w3-third">
//       <h3>BLOG POSTS</h3>
//       <ul class="w3-ul w3-hoverable">
//         <li class="w3-padding-16">
//           <img src="/w3images/workshop.jpg" class="w3-left w3-margin-right" style="width:50px">
//           <span class="w3-large">Lorem</span><br>
//           <span>Sed mattis nunc</span>
//         </li>
//         <li class="w3-padding-16">
//           <img src="/w3images/gondol.jpg" class="w3-left w3-margin-right" style="width:50px">
//           <span class="w3-large">Ipsum</span><br>
//           <span>Praes tinci sed</span>
//         </li> 
//       </ul>
//     </div>

//     <div class="w3-third w3-serif">
//       <h3>POPULAR TAGS</h3>
//       <p>
//         <span class="w3-tag w3-black w3-margin-bottom">Travel</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">New York</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Dinner</span>
//         <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Salmon</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">France</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Drinks</span>
//         <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Ideas</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Flavors</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Cuisine</span>
//         <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Chicken</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Dressing</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Fried</span>
//         <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Fish</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Duck</span>
//       </p>
//     </div>
//   </footer>

// <!-- End page content -->
// </div>

// <script>
// // Script to open and close sidebar
// function w3_open() {
//   document.getElementById("mySidebar").style.display = "block";
// }
 
// function w3_close() {
//   document.getElementById("mySidebar").style.display = "none";
// }
// </script>

// </body>
// </html>
//             `
//         },
//         {
//           id:'six',
//           label:"blog fashion",
//           media:`text`,
          
//           content:`
//           <!DOCTYPE html>
// <html>
// <head>
// <title>W3.CSS Template</title>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald">
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open Sans">
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
// <style>
// h1,h2,h3,h4,h5,h6 {font-family: "Oswald"}
// body {font-family: "Open Sans"}
// </style>
// </head>
// <body class="w3-light-grey">

// <!-- Navigation bar with social media icons -->
// <div class="w3-bar w3-black w3-hide-small">
//   <a href="#" class="w3-bar-item w3-button"><i class="fa fa-facebook-official"></i></a>
//   <a href="#" class="w3-bar-item w3-button"><i class="fa fa-instagram"></i></a>
//   <a href="#" class="w3-bar-item w3-button"><i class="fa fa-snapchat"></i></a>
//   <a href="#" class="w3-bar-item w3-button"><i class="fa fa-flickr"></i></a>
//   <a href="#" class="w3-bar-item w3-button"><i class="fa fa-twitter"></i></a>
//   <a href="#" class="w3-bar-item w3-button"><i class="fa fa-linkedin"></i></a>
//   <a href="#" class="w3-bar-item w3-button w3-right"><i class="fa fa-search"></i></a>
// </div>
  
// <!-- w3-content defines a container for fixed size centered content, 
// and is wrapped around the whole page content, except for the footer in this example -->
// <div class="w3-content" style="max-width:1600px">

//   <!-- Header -->
//   <header class="w3-container w3-center w3-padding-48 w3-white">
//     <h1 class="w3-xxxlarge"><b>JANE BLOGLIFE</b></h1>
//     <h6>Welcome to the blog of <span class="w3-tag">Jane's world</span></h6>
//   </header>

//   <!-- Image header -->
//   <header class="w3-display-container w3-wide" id="home">
//     <img class="w3-image" src="/w3images/jane.jpg" alt="Fashion Blog" width="1600" height="1060">
//     <div class="w3-display-left w3-padding-large">
//       <h1 class="w3-text-white">Jane's</h1>
//       <h1 class="w3-jumbo w3-text-white w3-hide-small"><b>FASHION BLOG</b></h1>
//       <h6><button class="w3-button w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off" onclick="document.getElementById('subscribe').style.display='block'">SUBSCRIBE</button></h6>
//     </div>
//   </header>

//   <!-- Grid -->
//   <div class="w3-row w3-padding w3-border">

//     <!-- Blog entries -->
//     <div class="w3-col l8 s12">
    
//       <!-- Blog entry -->
//       <div class="w3-container w3-white w3-margin w3-padding-large">
//         <div class="w3-center">
//           <h3>TITLE HEADING</h3>
//           <h5>Title description, <span class="w3-opacity">May 2, 2016</span></h5>
//         </div>

//         <div class="w3-justify">
//           <img src="/w3images/girl_hat.jpg" alt="Girl Hat" style="width:100%" class="w3-padding-16">
//           <p><strong>More Hats!</strong> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
//             magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
//           <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
//           <p class="w3-left"><button class="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
//           <p class="w3-right"><button class="w3-button w3-black" onclick="myFunction('demo1')" id="myBtn"><b>Replies  </b> <span class="w3-tag w3-white">1</span></button></p>
//           <p class="w3-clear"></p>
//           <div class="w3-row w3-margin-bottom" id="demo1" style="display:none">
//             <hr>
//               <div class="w3-col l2 m3">
//                 <img src="/w3images/avatar_smoke.jpg" style="width:90px;">
//               </div>
//               <div class="w3-col l10 m9">
//                 <h4>George <span class="w3-opacity w3-medium">May 3, 2015, 6:32 PM</span></h4>
//                 <p>Great blog post! Following</p>
//               </div>
//           </div>
//         </div>
//       </div>
//       <hr>

//       <!-- Blog entry -->
//       <div class="w3-container w3-white w3-margin w3-padding-large">
//         <div class="w3-center">
//           <h3>TITLE HEADING</h3>
//           <h5>Title description, <span class="w3-opacity">April 23, 2016</span></h5>
//         </div>

//         <div class="w3-justify">
//           <img src="/w3images/man_hat.jpg" alt="Men in Hats" style="width:100%" class="w3-padding-16">
//           <p><strong>Hats!</strong> The trend this summer is hats for men!</p>
//           <p>Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies
//             mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
//           <p class="w3-left"><button class="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
//           <p class="w3-right"><button class="w3-button w3-black" onclick="myFunction('demo2')"><b>Replies  </b> <span class="w3-tag w3-white">2</span></button></p>
//           <p class="w3-clear"></p>
          
//           <!-- Example of comment field -->
//           <div id="demo2" style="display:none">
//             <div class="w3-row">
//               <hr>
//               <div class="w3-col l2 m3">
//                 <img src="/w3images/girl_train.jpg" style="width:90px;">
//               </div>
//               <div class="w3-col l10 m9">
//                 <h4>Amber <span class="w3-opacity w3-medium">April 26, 2015, 10:52 PM</span></h4>
//                 <p>Love your blog page! Simply the best! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><br>
//               </div>
//             </div>
//             <div class="w3-row w3-margin-bottom">
//               <div class="w3-col l2 m3">
//                 <img src="/w3images/girl.jpg" style="width:90px;">
//               </div>
//               <div class="w3-col l10 m9">
//                 <h4>Angie <span class="w3-opacity w3-medium">April 23, 2015, 9:12 PM</span></h4>
//                 <p>Love hats!!</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <!-- Blog entry -->
//       <div class="w3-container w3-white w3-margin w3-padding-large">
//         <div class="w3-center">
//           <h3>TITLE HEADING</h3>
//           <h5>Title description, <span class="w3-opacity">April 7, 2016</span></h5>
//         </div>

//         <div class="w3-justify">
//           <img src="/w3images/runway.jpg" alt="Runway" style="width:100%" class="w3-padding-16">
//           <p><strong>Dont miss!</strong> The runway in New York City this weekend is gonna be legendary!</p>
//           <p>Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies
//             mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
//           <p class="w3-left"><button class="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
//           <p class="w3-right"><button class="w3-button w3-black" onclick="myFunction('demo3')"><b>Replies  </b> <span class="w3-tag w3-white">3</span></button></p>
//           <p class="w3-clear"></p>
          
//           <!-- Example of comment field -->
//           <div id="demo3" style="display:none">
//             <hr>
//             <div class="w3-row w3-margin-bottom">
//               <div class="w3-col l2 m3">
//                 <img src="/w3images/girl_mountain.jpg" style="width:90px;">
//               </div>
//               <div class="w3-col l10 m9">
//                 <h4>Jane <span class="w3-opacity w3-medium">April 10, 2015, 7:22 PM</span></h4>
//                 <p>That was a great runway show! Thanks for everything.</p>
//               </div>
//             </div>
//             <div class="w3-row w3-margin-bottom">
//               <div class="w3-col l2 m3">
//                 <img src="/w3images/boy.jpg" style="width:90px;">
//               </div>
//               <div class="w3-col l10 m9">
//                 <h4>John <span class="w3-opacity w3-medium">April 8, 2015, 10:32 PM</span></h4>
//                 <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
//               </div>
//             </div>
//             <div class="w3-row w3-margin-bottom">
//               <div class="w3-col l2 m3">
//                 <img src="/w3images/girl_hood.jpg" style="width:90px;">
//               </div>
//               <div class="w3-col l10 m9">
//                 <h4>Anja <span class="w3-opacity w3-medium">April 7, 2015, 9:12 PM</span></h4>
//                 <p>Cant wait for the runway to start!</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//     <!-- END BLOG ENTRIES -->
//     </div>

//     <!-- About/Information menu -->
//     <div class="w3-col l4">
//       <!-- About Card -->
//       <div class="w3-white w3-margin">
//         <img src="/w3images/avatar_girl2.jpg" alt="Jane" style="width:100%" class="w3-grayscale">
//         <div class="w3-container w3-black">
//           <h4>My Name</h4>
//           <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
//         </div>
//       </div>
//       <hr>

//       <!-- Posts -->
//       <div class="w3-white w3-margin">
//         <div class="w3-container w3-padding w3-black">
//           <h4>Popular Posts</h4>
//         </div>
//         <ul class="w3-ul w3-hoverable w3-white">
//           <li class="w3-padding-16">
//             <img src="/w3images/avatar_smoke.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
//             <span class="w3-large">Denim</span>
//             <br>
//             <span>Sed mattis nunc</span>
//           </li>
//           <li class="w3-padding-16">
//             <img src="/w3images/bandmember.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
//             <span class="w3-large">Sweaters</span>
//             <br>
//             <span>Praes tinci sed</span>
//           </li>
//           <li class="w3-padding-16">
//             <img src="/w3images/workshop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
//             <span class="w3-large">Workshop</span>
//             <br>
//             <span>Ultricies congue</span>
//           </li>
//           <li class="w3-padding-16">
//             <img src="/w3images/avatar_smoke.jpg" alt="Image" class="w3-left w3-margin-right w3-sepia" style="width:50px">
//             <span class="w3-large">Trends</span>
//             <br>
//             <span>Lorem ipsum dipsum</span>
//           </li>
//         </ul>
//       </div>
//       <hr>

//       <!-- Advertising -->
//       <div class="w3-white w3-margin">
//         <div class="w3-container w3-padding w3-black">
//           <h4>Advertise</h4>
//         </div>
//         <div class="w3-container w3-white">
//           <div class="w3-container w3-display-container w3-light-grey w3-section" style="height:200px">
//             <span class="w3-display-middle">Your AD Here</span>
//           </div>
//         </div>
//       </div>
//       <hr>

//       <!-- Tags -->
//       <div class="w3-white w3-margin">
//         <div class="w3-container w3-padding w3-black">
//           <h4>Tags</h4>
//         </div>
//         <div class="w3-container w3-white">
//           <p>
//             <span class="w3-tag w3-black w3-margin-bottom">Fashion</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">New York</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">London</span>
//             <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Hats</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Norway</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Sweaters</span>
//             <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Ideas</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Deals</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Accessories</span>
//             <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">News</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Clothing</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Shopping</span>
//             <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Jeans</span> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Trends</span>
//           </p>
//         </div>
//       </div>
//       <hr>

//       <!-- Inspiration -->
//       <div class="w3-white w3-margin">
//         <div class="w3-container w3-padding w3-black">
//           <h4>Inspiration</h4>
//         </div>
//         <div class="w3-row-padding w3-white">
//           <div class="w3-col s6">
//             <p><img src="/w3images/jeans.jpg" alt="Jeans" style="width:100%"></p>
//             <p><img src="/w3images/team1.jpg" alt="Jeans" style="width:100%"></p>
//           </div>
//           <div class="w3-col s6">
//             <p><img src="/w3images/avatar_hat.jpg" alt="Men in Hats" style="width:100%" class="w3-grayscale"></p>
//             <p><img src="/w3images/team4.jpg" alt="Jeans" style="width:100%"></p>
//          </div>
//         </div>
//       </div>
//       <hr>

//       <div class="w3-white w3-margin">
//         <div class="w3-container w3-padding w3-black">
//           <h4>Follow Me</h4>
//         </div>
//         <div class="w3-container w3-xlarge w3-padding">
//           <i class="fa fa-facebook-official w3-hover-opacity"></i>
//           <i class="fa fa-instagram w3-hover-opacity"></i>
//           <i class="fa fa-snapchat w3-hover-opacity"></i>
//           <i class="fa fa-pinterest-p w3-hover-opacity"></i>
//           <i class="fa fa-twitter w3-hover-opacity"></i>
//           <i class="fa fa-linkedin w3-hover-opacity"></i>
//         </div>
//       </div>
//       <hr>
      
//       <!-- Subscribe -->
//       <div class="w3-white w3-margin">
//         <div class="w3-container w3-padding w3-black">
//           <h4>Subscribe</h4>
//         </div>
//         <div class="w3-container w3-white">
//           <p>Enter your e-mail below and get notified on the latest blog posts.</p>
//           <p><input class="w3-input w3-border" type="text" placeholder="Enter e-mail" style="width:100%"></p>
//           <p><button type="button" onclick="document.getElementById('subscribe').style.display='block'" class="w3-button w3-block w3-red">Subscribe</button></p>
//         </div>
//       </div>

//     <!-- END About/Intro Menu -->
//     </div>

//   <!-- END GRID -->
//   </div>

// <!-- END w3-content -->
// </div>

// <!-- Subscribe Modal -->
// <div id="subscribe" class="w3-modal w3-animate-opacity">
//   <div class="w3-modal-content" style="padding:32px">
//     <div class="w3-container w3-white">
//       <i onclick="document.getElementById('subscribe').style.display='none'" class="fa fa-remove w3-transparent w3-button w3-xlarge w3-right"></i>
//       <h2 class="w3-wide">SUBSCRIBE</h2>
//       <p>Join my mailing list to receive updates on the latest blog posts and other things.</p>
//       <p><input class="w3-input w3-border" type="text" placeholder="Enter e-mail"></p>
//       <button type="button" class="w3-button w3-block w3-padding-large w3-red w3-margin-bottom" onclick="document.getElementById('subscribe').style.display='none'">Subscribe</button>
//     </div>
//   </div>
// </div>

// <!-- Footer -->
// <footer class="w3-container w3-dark-grey" style="padding:32px">
//   <a href="#" class="w3-button w3-black w3-padding-large w3-margin-bottom"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>
//   <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
// </footer>

// <script>
// // Toggle between hiding and showing blog replies/comments
// document.getElementById("myBtn").click();
// function myFunction(id) {
//   var x = document.getElementById(id);
//   if (x.className.indexOf("w3-show") == -1) {
//     x.className += " w3-show";
//   } else { 
//     x.className = x.className.replace(" w3-show", "");
//   }
// }

// function likeFunction(x) {
//   x.style.fontWeight = "bold";
//   x.innerHTML = "✓ Liked";
// }
// </script>

// </body>
// </html>
//           `,
    
//         },
//         {
//           id:"seventh",
//           label:"portfolio 2",
//           content:
//           `
//           <!DOCTYPE html>
// <html>
// <head>
// <title>W3.CSS Template</title>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
// <style>
// body,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", sans-serif}
// </style>
// </head>
// <body class="w3-light-grey w3-content" style="max-width:1600px">

// <!-- Sidebar/menu -->
// <nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style="z-index:3;width:300px;" id="mySidebar"><br>
//   <div class="w3-container">
//     <a href="#" onclick="w3_close()" class="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
//       <i class="fa fa-remove"></i>
//     </a>
//     <img src="/w3images/avatar_g2.jpg" style="width:45%;" class="w3-round"><br><br>
//     <h4><b>PORTFOLIO</b></h4>
//     <p class="w3-text-grey">Template by W3.CSS</p>
//   </div>
//   <div class="w3-bar-block">
//     <a href="#portfolio" onclick="w3_close()" class="w3-bar-item w3-button w3-padding w3-text-teal"><i class="fa fa-th-large fa-fw w3-margin-right"></i>PORTFOLIO</a> 
//     <a href="#about" onclick="w3_close()" class="w3-bar-item w3-button w3-padding"><i class="fa fa-user fa-fw w3-margin-right"></i>ABOUT</a> 
//     <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button w3-padding"><i class="fa fa-envelope fa-fw w3-margin-right"></i>CONTACT</a>
//   </div>
//   <div class="w3-panel w3-large">
//     <i class="fa fa-facebook-official w3-hover-opacity"></i>
//     <i class="fa fa-instagram w3-hover-opacity"></i>
//     <i class="fa fa-snapchat w3-hover-opacity"></i>
//     <i class="fa fa-pinterest-p w3-hover-opacity"></i>
//     <i class="fa fa-twitter w3-hover-opacity"></i>
//     <i class="fa fa-linkedin w3-hover-opacity"></i>
//   </div>
// </nav>

// <!-- Overlay effect when opening sidebar on small screens -->
// <div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

// <!-- !PAGE CONTENT! -->
// <div class="w3-main" style="margin-left:300px">

//   <!-- Header -->
//   <header id="portfolio">
//     <a href="#"><img src="/w3images/avatar_g2.jpg" style="width:65px;" class="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"></a>
//     <span class="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" onclick="w3_open()"><i class="fa fa-bars"></i></span>
//     <div class="w3-container">
//     <h1><b>My Portfolio</b></h1>
//     <div class="w3-section w3-bottombar w3-padding-16">
//       <span class="w3-margin-right">Filter:</span> 
//       <button class="w3-button w3-black">ALL</button>
//       <button class="w3-button w3-white"><i class="fa fa-diamond w3-margin-right"></i>Design</button>
//       <button class="w3-button w3-white w3-hide-small"><i class="fa fa-photo w3-margin-right"></i>Photos</button>
//       <button class="w3-button w3-white w3-hide-small"><i class="fa fa-map-pin w3-margin-right"></i>Art</button>
//     </div>
//     </div>
//   </header>
  
//   <!-- First Photo Grid-->
//   <div class="w3-row-padding">
//     <div class="w3-third w3-container w3-margin-bottom">
//       <img src="/w3images/mountains.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
//       <div class="w3-container w3-white">
//         <p><b>Lorem Ipsum</b></p>
//         <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
//       </div>
//     </div>
//     <div class="w3-third w3-container w3-margin-bottom">
//       <img src="/w3images/lights.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
//       <div class="w3-container w3-white">
//         <p><b>Lorem Ipsum</b></p>
//         <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
//       </div>
//     </div>
//     <div class="w3-third w3-container">
//       <img src="/w3images/nature.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
//       <div class="w3-container w3-white">
//         <p><b>Lorem Ipsum</b></p>
//         <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
//       </div>
//     </div>
//   </div>
  
//   <!-- Second Photo Grid-->
//   <div class="w3-row-padding">
//     <div class="w3-third w3-container w3-margin-bottom">
//       <img src="/w3images/p1.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
//       <div class="w3-container w3-white">
//         <p><b>Lorem Ipsum</b></p>
//         <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
//       </div>
//     </div>
//     <div class="w3-third w3-container w3-margin-bottom">
//       <img src="/w3images/p2.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
//       <div class="w3-container w3-white">
//         <p><b>Lorem Ipsum</b></p>
//         <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
//       </div>
//     </div>
//     <div class="w3-third w3-container">
//       <img src="/w3images/p3.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
//       <div class="w3-container w3-white">
//         <p><b>Lorem Ipsum</b></p>
//         <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
//       </div>
//     </div>
//   </div>

//   <!-- Pagination -->
//   <div class="w3-center w3-padding-32">
//     <div class="w3-bar">
//       <a href="#" class="w3-bar-item w3-button w3-hover-black">«</a>
//       <a href="#" class="w3-bar-item w3-black w3-button">1</a>
//       <a href="#" class="w3-bar-item w3-button w3-hover-black">2</a>
//       <a href="#" class="w3-bar-item w3-button w3-hover-black">3</a>
//       <a href="#" class="w3-bar-item w3-button w3-hover-black">4</a>
//       <a href="#" class="w3-bar-item w3-button w3-hover-black">»</a>
//     </div>
//   </div>

//   <!-- Images of Me -->
//   <div class="w3-row-padding w3-padding-16" id="about">
//     <div class="w3-col m6">
//       <img src="/w3images/avatar_g.jpg" alt="Me" style="width:100%">
//     </div>
//     <div class="w3-col m6">
//       <img src="/w3images/me2.jpg" alt="Me" style="width:100%">
//     </div>
//   </div>

//   <div class="w3-container w3-padding-large" style="margin-bottom:32px">
//     <h4><b>About Me</b></h4>
//     <p>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
//     <hr>
    
//     <h4>Technical Skills</h4>
//     <!-- Progress bars / Skills -->
//     <p>Photography</p>
//     <div class="w3-grey">
//       <div class="w3-container w3-dark-grey w3-padding w3-center" style="width:95%">95%</div>
//     </div>
//     <p>Web Design</p>
//     <div class="w3-grey">
//       <div class="w3-container w3-dark-grey w3-padding w3-center" style="width:85%">85%</div>
//     </div>
//     <p>Photoshop</p>
//     <div class="w3-grey">
//       <div class="w3-container w3-dark-grey w3-padding w3-center" style="width:80%">80%</div>
//     </div>
//     <p>
//       <button class="w3-button w3-dark-grey w3-padding-large w3-margin-top w3-margin-bottom">
//         <i class="fa fa-download w3-margin-right"></i>Download Resume
//       </button>
//     </p>
//     <hr>
    
//     <h4>How much I charge</h4>
//     <!-- Pricing Tables -->
//     <div class="w3-row-padding" style="margin:0 -16px">
//       <div class="w3-third w3-margin-bottom">
//         <ul class="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
//           <li class="w3-black w3-xlarge w3-padding-32">Basic</li>
//           <li class="w3-padding-16">Web Design</li>
//           <li class="w3-padding-16">Photography</li>
//           <li class="w3-padding-16">1GB Storage</li>
//           <li class="w3-padding-16">Mail Support</li>
//           <li class="w3-padding-16">
//             <h2>$ 10</h2>
//             <span class="w3-opacity">per month</span>
//           </li>
//           <li class="w3-light-grey w3-padding-24">
//             <button class="w3-button w3-teal w3-padding-large w3-hover-black">Sign Up</button>
//           </li>
//         </ul>
//       </div>
      
//       <div class="w3-third w3-margin-bottom">
//         <ul class="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
//           <li class="w3-teal w3-xlarge w3-padding-32">Pro</li>
//           <li class="w3-padding-16">Web Design</li>
//           <li class="w3-padding-16">Photography</li>
//           <li class="w3-padding-16">50GB Storage</li>
//           <li class="w3-padding-16">Endless Support</li>
//           <li class="w3-padding-16">
//             <h2>$ 25</h2>
//             <span class="w3-opacity">per month</span>
//           </li>
//           <li class="w3-light-grey w3-padding-24">
//             <button class="w3-button w3-teal w3-padding-large w3-hover-black">Sign Up</button>
//           </li>
//         </ul>
//       </div>
      
//       <div class="w3-third">
//         <ul class="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
//           <li class="w3-black w3-xlarge w3-padding-32">Premium</li>
//           <li class="w3-padding-16">Web Design</li>
//           <li class="w3-padding-16">Photography</li>
//           <li class="w3-padding-16">Unlimited Storage</li>
//           <li class="w3-padding-16">Endless Support</li>
//           <li class="w3-padding-16">
//             <h2>$ 25</h2>
//             <span class="w3-opacity">per month</span>
//           </li>
//           <li class="w3-light-grey w3-padding-24">
//             <button class="w3-button w3-teal w3-padding-large w3-hover-black">Sign Up</button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>
  
//   <!-- Contact Section -->
//   <div class="w3-container w3-padding-large w3-grey">
//     <h4 id="contact"><b>Contact Me</b></h4>
//     <div class="w3-row-padding w3-center w3-padding-24" style="margin:0 -16px">
//       <div class="w3-third w3-dark-grey">
//         <p><i class="fa fa-envelope w3-xxlarge w3-text-light-grey"></i></p>
//         <p>email@email.com</p>
//       </div>
//       <div class="w3-third w3-teal">
//         <p><i class="fa fa-map-marker w3-xxlarge w3-text-light-grey"></i></p>
//         <p>Chicago, US</p>
//       </div>
//       <div class="w3-third w3-dark-grey">
//         <p><i class="fa fa-phone w3-xxlarge w3-text-light-grey"></i></p>
//         <p>512312311</p>
//       </div>
//     </div>
//     <hr class="w3-opacity">
//     <form action="/action_page.php" target="_blank">
//       <div class="w3-section">
//         <label>Name</label>
//         <input class="w3-input w3-border" type="text" name="Name" required>
//       </div>
//       <div class="w3-section">
//         <label>Email</label>
//         <input class="w3-input w3-border" type="text" name="Email" required>
//       </div>
//       <div class="w3-section">
//         <label>Message</label>
//         <input class="w3-input w3-border" type="text" name="Message" required>
//       </div>
//       <button type="submit" class="w3-button w3-black w3-margin-bottom"><i class="fa fa-paper-plane w3-margin-right"></i>Send Message</button>
//     </form>
//   </div>

//   <!-- Footer -->
//   <footer class="w3-container w3-padding-32 w3-dark-grey">
//   <div class="w3-row-padding">
//     <div class="w3-third">
//       <h3>FOOTER</h3>
//       <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
//       <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
//     </div>
  
//     <div class="w3-third">
//       <h3>BLOG POSTS</h3>
//       <ul class="w3-ul w3-hoverable">
//         <li class="w3-padding-16">
//           <img src="/w3images/workshop.jpg" class="w3-left w3-margin-right" style="width:50px">
//           <span class="w3-large">Lorem</span><br>
//           <span>Sed mattis nunc</span>
//         </li>
//         <li class="w3-padding-16">
//           <img src="/w3images/gondol.jpg" class="w3-left w3-margin-right" style="width:50px">
//           <span class="w3-large">Ipsum</span><br>
//           <span>Praes tinci sed</span>
//         </li> 
//       </ul>
//     </div>

//     <div class="w3-third">
//       <h3>POPULAR TAGS</h3>
//       <p>
//         <span class="w3-tag w3-black w3-margin-bottom">Travel</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">New York</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">London</span>
//         <span class="w3-tag w3-grey w3-small w3-margin-bottom">IKEA</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">NORWAY</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">DIY</span>
//         <span class="w3-tag w3-grey w3-small w3-margin-bottom">Ideas</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">Baby</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">Family</span>
//         <span class="w3-tag w3-grey w3-small w3-margin-bottom">News</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">Clothing</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">Shopping</span>
//         <span class="w3-tag w3-grey w3-small w3-margin-bottom">Sports</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">Games</span>
//       </p>
//     </div>

//   </div>
//   </footer>
  
//   <div class="w3-black w3-center w3-padding-24">Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-opacity">w3.css</a></div>

// <!-- End page content -->
// </div>

// <script>
// // Script to open and close sidebar
// function w3_open() {
//     document.getElementById("mySidebar").style.display = "block";
//     document.getElementById("myOverlay").style.display = "block";
// }
 
// function w3_close() {
//     document.getElementById("mySidebar").style.display = "none";
//     document.getElementById("myOverlay").style.display = "none";
// }
// </script>

// </body>
// </html>

//           `
//         },
//         {
//           id:"eighth",
//           label:"portfolio 3",
//           content:`
//           <!DOCTYPE html>
// <html lang="en">
// <head>
// <title>W3.CSS Template</title>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
// <style>
// body,h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif}
// .w3-third img{margin-bottom: -6px; opacity: 0.8; cursor: pointer}
// .w3-third img:hover{opacity: 1}
// </style>
// </head>
// <body class="w3-light-grey w3-content" style="max-width:1600px">

// <!-- Sidebar/menu -->
// <nav class="w3-sidebar w3-bar-block w3-white w3-animate-left w3-text-grey w3-collapse w3-top w3-center" style="z-index:3;width:300px;font-weight:bold" id="mySidebar"><br>
//   <h3 class="w3-padding-64 w3-center"><b>SOME<br>NAME</b></h3>
//   <a href="javascript:void(0)" onclick="w3_close()" class="w3-bar-item w3-button w3-padding w3-hide-large">CLOSE</a>
//   <a href="#" onclick="w3_close()" class="w3-bar-item w3-button">PORTFOLIO</a> 
//   <a href="#about" onclick="w3_close()" class="w3-bar-item w3-button">ABOUT ME</a> 
//   <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button">CONTACT</a>
// </nav>

// <!-- Top menu on small screens -->
// <header class="w3-container w3-top w3-hide-large w3-white w3-xlarge w3-padding-16">
//   <span class="w3-left w3-padding">SOME NAME</span>
//   <a href="javascript:void(0)" class="w3-right w3-button w3-white" onclick="w3_open()">☰</a>
// </header>

// <!-- Overlay effect when opening sidebar on small screens -->
// <div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

// <!-- !PAGE CONTENT! -->
// <div class="w3-main" style="margin-left:300px">

//   <!-- Push down content on small screens --> 
//   <div class="w3-hide-large" style="margin-top:83px"></div>
  
//   <!-- Photo grid -->
//   <div class="w3-row">
//     <div class="w3-third">
//       <img src="/w3images/natureboy.jpg" style="width:100%" onclick="onClick(this)" alt="A boy surrounded by beautiful nature">
//       <img src="/w3images/girl_mountain.jpg" style="width:100%" onclick="onClick(this)" alt="What a beautiful scenery this sunset">
//       <img src="/w3images/girl.jpg" style="width:100%" onclick="onClick(this)" alt="The Beach. Me. Alone. Beautiful">
//     </div>

//     <div class="w3-third">
//       <img src="/w3images/boy.jpg" style="width:100%" onclick="onClick(this)" alt="Quiet day at the beach. Cold, but beautiful">
//       <img src="/w3images/man_bench.jpg" style="width:100%" onclick="onClick(this)" alt="Waiting for the bus in the desert">
//       <img src="/w3images/natureboy.jpg" style="width:100%" onclick="onClick(this)" alt="Nature again.. At its finest!">
//     </div>
    
//     <div class="w3-third">
//       <img src="/w3images/girl.jpg" style="width:100%" onclick="onClick(this)" alt="Canoeing again">
//       <img src="/w3images/girl_train.jpg" style="width:100%" onclick="onClick(this)" alt="A girl, and a train passing">
//       <img src="/w3images/closegirl.jpg" style="width:100%" onclick="onClick(this)" alt="What a beautiful day!">
//     </div>
//   </div>

//   <!-- Pagination -->
//   <div class="w3-center w3-padding-32">
//     <div class="w3-bar">
//       <a href="#" class="w3-bar-item w3-button w3-hover-black">«</a>
//       <a href="#" class="w3-bar-item w3-black w3-button">1</a>
//       <a href="#" class="w3-bar-item w3-button w3-hover-black">2</a>
//       <a href="#" class="w3-bar-item w3-button w3-hover-black">3</a>
//       <a href="#" class="w3-bar-item w3-button w3-hover-black">4</a>
//       <a href="#" class="w3-bar-item w3-button w3-hover-black">»</a>
//     </div>
//   </div>
  
//   <!-- Modal for full size images on click-->
//   <div id="modal01" class="w3-modal w3-black" style="padding-top:0" onclick="this.style.display='none'">
//     <span class="w3-button w3-black w3-xlarge w3-display-topright">×</span>
//     <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
//       <img id="img01" class="w3-image">
//       <p id="caption"></p>
//     </div>
//   </div>

//   <!-- About section -->
//   <div class="w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32" id="about">
//     <h4><b>About Me</b></h4>
//     <img src="/w3images/avatar_hat.jpg" alt="Me" class="w3-image w3-padding-32" width="600" height="650">
//     <div class="w3-content w3-justify" style="max-width:600px">
//       <h4>My Name</h4>
//       <p>Some text about me. I love taking photos of PEOPLE. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//         dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
//         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//       </p>
//       <p>mail: example@example.com</p>
//       <p>tel: 5353 35531</p>
//       <hr class="w3-opacity">
//       <h4 class="w3-padding-16">Technical Skills</h4>
//       <p class="w3-wide">Photography</p>
//       <div class="w3-white">
//         <div class="w3-container w3-padding-small w3-center w3-grey" style="width:95%">95%</div>
//       </div>
//       <p class="w3-wide">Web Design</p>
//       <div class="w3-white">
//         <div class="w3-container w3-padding-small w3-center w3-grey" style="width:85%">85%</div>
//       </div>
//       <p class="w3-wide">Photoshop</p>
//       <div class="w3-white">
//         <div class="w3-container w3-padding-small w3-center w3-grey" style="width:80%">80%</div>
//       </div>
//       <p><button class="w3-button w3-light-grey w3-padding-large w3-margin-top w3-margin-bottom">Download Resume</button></p>
//       <hr class="w3-opacity">

//       <h4 class="w3-padding-16">How much I charge</h4>
//       <div class="w3-row-padding" style="margin:0 -16px">
//         <div class="w3-half w3-margin-bottom">
//           <ul class="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
//             <li class="w3-black w3-xlarge w3-padding-32">Basic</li>
//             <li class="w3-padding-16">Web Design</li>
//             <li class="w3-padding-16">Photography</li>
//             <li class="w3-padding-16">5GB Storage</li>
//             <li class="w3-padding-16">Mail Support</li>
//             <li class="w3-padding-16">
//               <h2>$ 10</h2>
//               <span class="w3-opacity">per month</span>
//             </li>
//             <li class="w3-light-grey w3-padding-24">
//               <button class="w3-button w3-white w3-padding-large">Sign Up</button>
//             </li>
//           </ul>
//         </div>
        
//         <div class="w3-half">
//           <ul class="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
//             <li class="w3-black w3-xlarge w3-padding-32">Pro</li>
//             <li class="w3-padding-16">Web Design</li>
//             <li class="w3-padding-16">Photography</li>
//             <li class="w3-padding-16">50GB Storage</li>
//             <li class="w3-padding-16">Endless Support</li>
//             <li class="w3-padding-16">
//               <h2>$ 25</h2>
//               <span class="w3-opacity">per month</span>
//             </li>
//             <li class="w3-light-grey w3-padding-24">
//               <button class="w3-button w3-white w3-padding-large">Sign Up</button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>

//   <!-- Contact section -->
//   <div class="w3-container w3-light-grey w3-padding-32 w3-padding-large" id="contact">
//     <div class="w3-content" style="max-width:600px">
//       <h4 class="w3-center"><b>Contact Me</b></h4>
//       <p>Do you want me to photograph you? Fill out the form and fill me in with the details :) I love meeting new people!</p>
//       <form action="/action_page.php" target="_blank">
//         <div class="w3-section">
//           <label>Name</label>
//           <input class="w3-input w3-border" type="text" name="Name" required>
//         </div>
//         <div class="w3-section">
//           <label>Email</label>
//           <input class="w3-input w3-border" type="text" name="Email" required>
//         </div>
//         <div class="w3-section">
//           <label>Message</label>
//           <input class="w3-input w3-border" type="text" name="Message" required>
//         </div>
//         <button type="submit" class="w3-button w3-block w3-black w3-margin-bottom">Send Message</button>
//       </form>
//     </div>
//   </div>

//   <!-- Footer -->
//   <footer class="w3-container w3-padding-32 w3-grey">  
//     <div class="w3-row-padding">
//       <div class="w3-third">
//         <h3>INFO</h3>
//         <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>      
//       </div>
    
//       <div class="w3-third">
//         <h3>BLOG POSTS</h3>
//         <ul class="w3-ul">
//           <li class="w3-padding-16 w3-hover-black">
//             <img src="/w3images/workshop.jpg" class="w3-left w3-margin-right" style="width:50px">
//             <span class="w3-large">Lorem</span><br>
//             <span>Sed mattis nunc</span>
//           </li>
//           <li class="w3-padding-16 w3-hover-black">
//             <img src="/w3images/gondol.jpg" class="w3-left w3-margin-right" style="width:50px">
//             <span class="w3-large">Ipsum</span><br>
//             <span>Praes tinci sed</span>
//           </li> 
//         </ul>
//       </div>

//       <div class="w3-third">
//         <h3>POPULAR TAGS</h3>
//         <p>
//           <span class="w3-tag w3-black w3-margin-bottom">Travel</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">New York</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">London</span>
//           <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">IKEA</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">NORWAY</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">DIY</span>
//           <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Ideas</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Baby</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Family</span>
//           <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">News</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Clothing</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Shopping</span>
//           <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Sports</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Games</span>
//         </p>
//       </div>
//     </div>
//   </footer>
  
//   <div class="w3-black w3-center w3-padding-24">Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-opacity">w3.css</a></div>

// <!-- End page content -->
// </div>

// <script>
// // Script to open and close sidebar
// function w3_open() {
//   document.getElementById("mySidebar").style.display = "block";
//   document.getElementById("myOverlay").style.display = "block";
// }
 
// function w3_close() {
//   document.getElementById("mySidebar").style.display = "none";
//   document.getElementById("myOverlay").style.display = "none";
// }

// // Modal Image Gallery
// function onClick(element) {
//   document.getElementById("img01").src = element.src;
//   document.getElementById("modal01").style.display = "block";
//   var captionText = document.getElementById("caption");
//   captionText.innerHTML = element.alt;
// }

// </script>


// </body>
// </html>

//           `
//         },
//         {
//           id:"nine",
//           label:"resturant 2",
//           content:`
//           <!DOCTYPE html>
//           <html>
//           <head>
//           <title>W3.CSS Template</title>
//           <meta charset="UTF-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1">
//           <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
//           <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC">
//           <style>
//           body, html {height: 100%}
//           body,h1,h2,h3,h4,h5,h6 {font-family: "Amatic SC", sans-serif}
//           .menu {display: none}
//           .bgimg {
//             background-repeat: no-repeat;
//             background-size: cover;
//             background-image: url("/w3images/pizza.jpg");
//             min-height: 90%;
//           }
//           </style>
//           </head>
//           <body>
          
//           <!-- Navbar (sit on top) -->
//           <div class="w3-top w3-hide-small">
//             <div class="w3-bar w3-xlarge w3-black w3-opacity w3-hover-opacity-off" id="myNavbar">
//               <a href="#" class="w3-bar-item w3-button">HOME</a>
//               <a href="#menu" class="w3-bar-item w3-button">MENU</a>
//               <a href="#about" class="w3-bar-item w3-button">ABOUT</a>
//               <a href="#myMap" class="w3-bar-item w3-button">CONTACT</a>
//             </div>
//           </div>
            
//           <!-- Header with image -->
//           <header class="bgimg w3-display-container w3-grayscale-min" id="home">
//             <div class="w3-display-bottomleft w3-padding">
//               <span class="w3-tag w3-xlarge">Open from 10am to 12pm</span>
//             </div>
//             <div class="w3-display-middle w3-center">
//               <span class="w3-text-white w3-hide-small" style="font-size:100px">thin<br>CRUST PIZZA</span>
//               <span class="w3-text-white w3-hide-large w3-hide-medium" style="font-size:60px"><b>thin<br>CRUST PIZZA</b></span>
//               <p><a href="#menu" class="w3-button w3-xxlarge w3-black">Let me see the menu</a></p>
//             </div>
//           </header>
          
//           <!-- Menu Container -->
//           <div class="w3-container w3-black w3-padding-64 w3-xxlarge" id="menu">
//             <div class="w3-content">
            
//               <h1 class="w3-center w3-jumbo" style="margin-bottom:64px">THE MENU</h1>
//               <div class="w3-row w3-center w3-border w3-border-dark-grey">
//                 <a href="javascript:void(0)" onclick="openMenu(event, 'Pizza');" id="myLink">
//                   <div class="w3-col s4 tablink w3-padding-large w3-hover-red">Pizza</div>
//                 </a>
//                 <a href="javascript:void(0)" onclick="openMenu(event, 'Pasta');">
//                   <div class="w3-col s4 tablink w3-padding-large w3-hover-red">Salads</div>
//                 </a>
//                 <a href="javascript:void(0)" onclick="openMenu(event, 'Starter');">
//                   <div class="w3-col s4 tablink w3-padding-large w3-hover-red">Starter</div>
//                 </a>
//               </div>
          
//               <div id="Pizza" class="w3-container menu w3-padding-32 w3-white">
//                 <h1><b>Margherita</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$12.50</span></h1>
//                 <p class="w3-text-grey">Fresh tomatoes, fresh mozzarella, fresh basil</p>
//                 <hr>
             
//                 <h1><b>Formaggio</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$15.50</span></h1>
//                 <p class="w3-text-grey">Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)</p>
//                 <hr>
                
//                 <h1><b>Chicken</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$17.00</span></h1>
//                 <p class="w3-text-grey">Fresh tomatoes, mozzarella, chicken, onions</p>
//                 <hr>
          
//                 <h1><b>Pineapple'o'clock</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$16.50</span></h1>
//                 <p class="w3-text-grey">Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil</p>
//                 <hr>
          
//                 <h1><b>Meat Town</b> <span class="w3-tag w3-red w3-round">Hot!</span><span class="w3-right w3-tag w3-dark-grey w3-round">$20.00</span></h1>
//                 <p class="w3-text-grey">Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken</p>
//                 <hr>
          
//                 <h1><b>Parma</b> <span class="w3-tag w3-grey w3-round">New</span><span class="w3-right w3-tag w3-dark-grey w3-round">$21.50</span></h1>
//                 <p class="w3-text-grey">Fresh tomatoes, mozzarella, parma, bacon, fresh arugula</p>
//               </div>
          
//               <div id="Pasta" class="w3-container menu w3-padding-32 w3-white">
//                 <h1><b>Lasagna</b> <span class="w3-tag w3-grey w3-round">Popular</span> <span class="w3-right w3-tag w3-dark-grey w3-round">$13.50</span></h1>
//                 <p class="w3-text-grey">Special sauce, mozzarella, parmesan, ground beef</p>
//                 <hr>
             
//                 <h1><b>Ravioli</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$14.50</span></h1>
//                 <p class="w3-text-grey">Ravioli filled with cheese</p>
//                 <hr>
                
//                 <h1><b>Spaghetti Classica</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$11.00</span></h1>
//                 <p class="w3-text-grey">Fresh tomatoes, onions, ground beef</p>
//                 <hr>
          
//                 <h1><b>Seafood pasta</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$25.50</span></h1>
//                 <p class="w3-text-grey">Salmon, shrimp, lobster, garlic</p>
//               </div>
          
          
//               <div id="Starter" class="w3-container menu w3-padding-32 w3-white">
//                 <h1><b>Today's Soup</b> <span class="w3-tag w3-grey w3-round">Seasonal</span><span class="w3-right w3-tag w3-dark-grey w3-round">$5.50</span></h1>
//                 <p class="w3-text-grey">Ask the waiter</p>
//                 <hr>
             
//                 <h1><b>Bruschetta</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$8.50</span></h1>
//                 <p class="w3-text-grey">Bread with pesto, tomatoes, onion, garlic</p>
//                 <hr>
                
//                 <h1><b>Garlic bread</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$9.50</span></h1>
//                 <p class="w3-text-grey">Grilled ciabatta, garlic butter, onions</p>
//                 <hr>
                
//                 <h1><b>Tomozzarella</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$10.50</span></h1>
//                 <p class="w3-text-grey">Tomatoes and mozzarella</p>
//               </div><br>
          
//             </div>
//           </div>
          
//           <!-- About Container -->
//           <div class="w3-container w3-padding-64 w3-red w3-grayscale w3-xlarge" id="about">
//             <div class="w3-content">
//               <h1 class="w3-center w3-jumbo" style="margin-bottom:64px">About</h1>
//               <p>The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//               <p><strong>The Chef?</strong> Mr. Italiano himself<img src="/w3images/chef.jpg" style="width:150px" class="w3-circle w3-right" alt="Chef"></p>
//               <p>We are proud of our interiors.</p>
//               <img src="/w3images/onepage_restaurant.jpg" style="width:100%" class="w3-margin-top w3-margin-bottom" alt="Restaurant">
//               <h1><b>Opening Hours</b></h1>
              
//               <div class="w3-row">
//                 <div class="w3-col s6">
//                   <p>Mon & Tue CLOSED</p>
//                   <p>Wednesday 10.00 - 24.00</p>
//                   <p>Thursday 10:00 - 24:00</p>
//                 </div>
//                 <div class="w3-col s6">
//                   <p>Friday 10:00 - 12:00</p>
//                   <p>Saturday 10:00 - 23:00</p>
//                   <p>Sunday Closed</p>
//                 </div>
//               </div>
              
//             </div>
//           </div>
          
//           <!-- Image of location/map -->
//           <img src="/w3images/map.jpg" class="w3-image w3-greyscale" style="width:100%;" id="myMap">
          
//           <!-- Contact -->
//           <div class="w3-container w3-padding-64 w3-blue-grey w3-grayscale-min w3-xlarge">
//             <div class="w3-content">
//               <h1 class="w3-center w3-jumbo" style="margin-bottom:64px">Contact</h1>
//               <p>Find us at some address at some place or call us at 05050515-122330</p>
//               <p><span class="w3-tag">FYI!</span> We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.</p>
//               <p class="w3-xxlarge"><strong>Reserve</strong> a table, ask for today's special or just send us a message:</p>
//               <form action="/action_page.php" target="_blank">
//                 <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name"></p>
//                 <p><input class="w3-input w3-padding-16 w3-border" type="number" placeholder="How many people" required name="People"></p>
//                 <p><input class="w3-input w3-padding-16 w3-border" type="datetime-local" placeholder="Date and time" required name="date" value="2020-11-16T20:00"></p>
//                 <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Message \ Special requirements" required name="Message"></p>
//                 <p><button class="w3-button w3-light-grey w3-block" type="submit">SEND MESSAGE</button></p>
//               </form>
//             </div>
//           </div>
          
//           <!-- Footer -->
//           <footer class="w3-center w3-black w3-padding-48 w3-xxlarge">
//             <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">w3.css</a></p>
//           </footer>
          
//           <script>
//           // Tabbed Menu
//           function openMenu(evt, menuName) {
//             var i, x, tablinks;
//             x = document.getElementsByClassName("menu");
//             for (i = 0; i < x.length; i++) {
//                x[i].style.display = "none";
//             }
//             tablinks = document.getElementsByClassName("tablink");
//             for (i = 0; i < x.length; i++) {
//                tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
//             }
//             document.getElementById(menuName).style.display = "block";
//             evt.currentTarget.firstElementChild.className += " w3-red";
//           }
//           document.getElementById("myLink").click();
//           </script>
          
//           </body>
//           </html>
          
//           `
//         }, 
//         {
//           id:"tenth",
//           label :"resturant 3",
//           content:
//           `
//           <!DOCTYPE html>
// <html>
// <head>
// <title>W3.CSS Template</title>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
// <style>
// body {font-family: "Times New Roman", Georgia, Serif;}
// h1, h2, h3, h4, h5, h6 {
//   font-family: "Playfair Display";
//   letter-spacing: 5px;
// }
// </style>
// </head>
// <body>

// <!-- Navbar (sit on top) -->
// <div class="w3-top">
//   <div class="w3-bar w3-white w3-padding w3-card" style="letter-spacing:4px;">
//     <a href="#home" class="w3-bar-item w3-button">Gourmet au Catering</a>
//     <!-- Right-sided navbar links. Hide them on small screens -->
//     <div class="w3-right w3-hide-small">
//       <a href="#about" class="w3-bar-item w3-button">About</a>
//       <a href="#menu" class="w3-bar-item w3-button">Menu</a>
//       <a href="#contact" class="w3-bar-item w3-button">Contact</a>
//     </div>
//   </div>
// </div>

// <!-- Header -->
// <header class="w3-display-container w3-content w3-wide" style="max-width:1600px;min-width:500px" id="home">
//   <img class="w3-image" src="/w3images/hamburger.jpg" alt="Hamburger Catering" width="1600" height="800">
//   <div class="w3-display-bottomleft w3-padding-large w3-opacity">
//     <h1 class="w3-xxlarge">Le Catering</h1>
//   </div>
// </header>

// <!-- Page content -->
// <div class="w3-content" style="max-width:1100px">

//   <!-- About Section -->
//   <div class="w3-row w3-padding-64" id="about">
//     <div class="w3-col m6 w3-padding-large w3-hide-small">
//      <img src="/w3images/tablesetting2.jpg" class="w3-round w3-image w3-opacity-min" alt="Table Setting" width="600" height="750">
//     </div>

//     <div class="w3-col m6 w3-padding-large">
//       <h1 class="w3-center">About Catering</h1><br>
//       <h5 class="w3-center">Tradition since 1889</h5>
//       <p class="w3-large">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span class="w3-tag w3-light-grey">seasonal</span> ingredients.</p>
//       <p class="w3-large w3-text-grey w3-hide-medium">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//     </div>
//   </div>
  
//   <hr>
  
//   <!-- Menu Section -->
//   <div class="w3-row w3-padding-64" id="menu">
//     <div class="w3-col l6 w3-padding-large">
//       <h1 class="w3-center">Our Menu</h1><br>
//       <h4>Bread Basket</h4>
//       <p class="w3-text-grey">Assortment of fresh baked fruit breads and muffins 5.50</p><br>
    
//       <h4>Honey Almond Granola with Fruits</h4>
//       <p class="w3-text-grey">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p><br>
    
//       <h4>Belgian Waffle</h4>
//       <p class="w3-text-grey">Vanilla flavored batter with malted flour 7.50</p><br>
    
//       <h4>Scrambled eggs</h4>
//       <p class="w3-text-grey">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p><br>
    
//       <h4>Blueberry Pancakes</h4>
//       <p class="w3-text-grey">With syrup, butter and lots of berries 8.50</p>    
//     </div>
    
//     <div class="w3-col l6 w3-padding-large">
//       <img src="/w3images/tablesetting.jpg" class="w3-round w3-image w3-opacity-min" alt="Menu" style="width:100%">
//     </div>
//   </div>

//   <hr>

//   <!-- Contact Section -->
//   <div class="w3-container w3-padding-64" id="contact">
//     <h1>Contact</h1><br>
//     <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
//     <p class="w3-text-blue-grey w3-large"><b>Catering Service, 42nd Living St, 43043 New York, NY</b></p>
//     <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
//     <form action="/action_page.php" target="_blank">
//       <p><input class="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name"></p>
//       <p><input class="w3-input w3-padding-16" type="number" placeholder="How many people" required name="People"></p>
//       <p><input class="w3-input w3-padding-16" type="datetime-local" placeholder="Date and time" required name="date" value="2020-11-16T20:00"></p>
//       <p><input class="w3-input w3-padding-16" type="text" placeholder="Message \ Special requirements" required name="Message"></p>
//       <p><button class="w3-button w3-light-grey w3-section" type="submit">SEND MESSAGE</button></p>
//     </form>
//   </div>
  
// <!-- End page content -->
// </div>

// <!-- Footer -->
// <footer class="w3-center w3-light-grey w3-padding-32">
//   <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">w3.css</a></p>
// </footer>

// </body>
// </html>
          
//           `
//         },
//         {
// id:"eleven",
// label:"portfolio 4",
// content:
// `
// <!DOCTYPE html>
// <html>
// <head>
// <title>W3.CSS Template</title>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
// <style>
// body,h1,h2{font-family: "Raleway", sans-serif}
// body, html {height: 100%}
// p {line-height: 2}
// .bgimg, .bgimg2 {
//   min-height: 100%;
//   background-position: center;
//   background-size: cover;
// }
// .bgimg {background-image: url("/w3images/wedding_couple.jpg")}
// .bgimg2 {background-image: url("/w3images/flowers.jpg")}
// </style>
// </head>
// <body>

// <!-- Header / Home-->
// <header class="w3-display-container w3-wide bgimg w3-grayscale-min" id="home">
//   <div class="w3-display-middle w3-text-white w3-center">
//     <h1 class="w3-jumbo">Jane & John</h1>
//     <h2>Are getting married</h2>
//     <h2><b>17.07.2017</b></h2>
//   </div>
// </header>

// <!-- Navbar (sticky bottom) -->
// <div class="w3-bottom w3-hide-small">
//   <div class="w3-bar w3-white w3-center w3-padding w3-opacity-min w3-hover-opacity-off">
//     <a href="#home" style="width:25%" class="w3-bar-item w3-button">Home</a>
//     <a href="#us" style="width:25%" class="w3-bar-item w3-button">Jane & John</a>
//     <a href="#wedding" style="width:25%" class="w3-bar-item w3-button">Wedding</a>
//     <a href="#rsvp" style="width:25%" class="w3-bar-item w3-button w3-hover-black">RSVP</a>
//   </div>
// </div>

// <!-- About / Jane And John -->
// <div class="w3-container w3-padding-64 w3-pale-red w3-grayscale-min" id="us">
//   <div class="w3-content">
//     <h1 class="w3-center w3-text-grey"><b>Jane & John</b></h1>
//     <img class="w3-round w3-grayscale-min" src="/w3images/wedding_couple2.jpg" style="width:100%;margin:32px 0">
//     <p><i>You all know us. And we all know you. We are getting married lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
//       occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
//       laboris nisi ut aliquip ex ea commodo consequat.</i>
//     </p><br>
//     <p class="w3-center"><a href="#wedding" class="w3-button w3-black w3-round w3-padding-large w3-large">Wedding Details</a></p>
//   </div>
// </div>

// <!-- Background photo -->
// <div class="w3-display-container bgimg2">
//   <div class="w3-display-middle w3-text-white w3-center">
//     <h1 class="w3-jumbo">You Are Invited</h1><br>
//     <h2>Of course..</h2>
//   </div>
// </div>

// <!-- Wedding information -->
// <div class="w3-container w3-padding-64 w3-pale-red w3-grayscale-min w3-center" id="wedding">
//   <div class="w3-content">
//     <h1 class="w3-text-grey"><b>THE WEDDING</b></h1>
//     <img class="w3-round-large w3-grayscale-min" src="/w3images/wedding_location.jpg" style="width:100%;margin:64px 0">
//     <div class="w3-row">
//       <div class="w3-half">
//         <h2>When</h2>
//         <p>Wedding Ceremony - 2:00pm</p>
//         <p>Reception & Dinner - 5:00pm</p>
//       </div>
//       <div class="w3-half">
//         <h2>Where</h2>
//         <p>Some place, an address</p>
//         <p>Some where, some address</p>
//       </div>
//     </div>
//   </div>
// </div>

// <!-- RSVP section -->
// <div class="w3-container w3-padding-64 w3-pale-red w3-center w3-wide" id="rsvp">
//   <h1>HOPE YOU CAN MAKE IT!</h1>
//   <p class="w3-large">Kindly Respond By January, 2017</p>
//   <p class="w3-xlarge">
//     <button onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-round w3-red w3-opacity w3-hover-opacity-off" style="padding:8px 60px">RSVP</button>
//   </p>
// </div>

// <!-- RSVP modal -->
// <div id="id01" class="w3-modal">
//   <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="padding:32px;max-width:600px">
//     <div class="w3-container w3-white w3-center">
//       <h1 class="w3-wide">CAN YOU COME?</h1>
//       <p>We really hope you can make it.</p>
//       <form>
//         <input class="w3-input w3-border" type="text" placeholder="Name(s)" name="name">
//       </form>
//       <p><i>Sincerely, John & Jane</i></p>
//       <div class="w3-row">
//         <div class="w3-half">
//           <button onclick="document.getElementById('id01').style.display='none'" type="button" class="w3-button w3-block w3-green">Going</button>
//         </div>
//         <div class="w3-half">
//           <button onclick="document.getElementById('id01').style.display='none'" type="button" class="w3-button w3-block w3-red">Can't come</button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// <!-- Footer -->
// <footer class="w3-center w3-black w3-padding-16">
//   <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">w3.css</a></p>
// </footer>
// <div class="w3-hide-small" style="margin-bottom:32px"> </div>

// </body>
// </html>

// `
//         },
//         {
// id:"twelve",
// label:"Tour 2",
// content:`
// <!DOCTYPE html>
// <html>
// <head>
// <title>W3.CSS Template</title>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
// <style>
// body,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", Arial, Helvetica, sans-serif}
// .myLink {display: none}
// </style>
// </head>
// <body class="w3-light-grey">

// <!-- Navigation Bar -->
// <div class="w3-bar w3-white w3-border-bottom w3-xlarge">
//   <a href="#" class="w3-bar-item w3-button w3-text-red w3-hover-red"><b><i class="fa fa-map-marker w3-margin-right"></i>Logo</b></a>
//   <a href="#" class="w3-bar-item w3-button w3-right w3-hover-red w3-text-grey"><i class="fa fa-search"></i></a>
// </div>

// <!-- Header -->
// <header class="w3-display-container w3-content w3-hide-small" style="max-width:1500px">
//   <img class="w3-image" src="/w3images/london2.jpg" alt="London" width="1500" height="700">
//   <div class="w3-display-middle" style="width:65%">
//     <div class="w3-bar w3-black">
//       <button class="w3-bar-item w3-button tablink" onclick="openLink(event, 'Flight');"><i class="fa fa-plane w3-margin-right"></i>Flight</button>
//       <button class="w3-bar-item w3-button tablink" onclick="openLink(event, 'Hotel');"><i class="fa fa-bed w3-margin-right"></i>Hotel</button>
//       <button class="w3-bar-item w3-button tablink" onclick="openLink(event, 'Car');"><i class="fa fa-car w3-margin-right"></i>Rental</button>
//     </div>

//     <!-- Tabs -->
//     <div id="Flight" class="w3-container w3-white w3-padding-16 myLink">
//       <h3>Travel the world with us</h3>
//       <div class="w3-row-padding" style="margin:0 -16px;">
//         <div class="w3-half">
//           <label>From</label>
//           <input class="w3-input w3-border" type="text" placeholder="Departing from">
//         </div>
//         <div class="w3-half">
//           <label>To</label>
//           <input class="w3-input w3-border" type="text" placeholder="Arriving at">
//         </div>
//       </div>
//       <p><button class="w3-button w3-dark-grey">Search and find dates</button></p>
//     </div>

//     <div id="Hotel" class="w3-container w3-white w3-padding-16 myLink">
//       <h3>Find the best hotels</h3>
//       <p>Book a hotel with us and get the best fares and promotions.</p>
//       <p>We know hotels - we know comfort.</p>
//       <p><button class="w3-button w3-dark-grey">Search Hotels</button></p>
//     </div>

//     <div id="Car" class="w3-container w3-white w3-padding-16 myLink">
//       <h3>Best car rental in the world!</h3>
//       <p><span class="w3-tag w3-deep-orange">DISCOUNT!</span> Special offer if you book today: 25% off anywhere in the world with CarServiceRentalRUs</p>
//       <input class="w3-input w3-border" type="text" placeholder="Pick-up point">
//       <p><button class="w3-button w3-dark-grey">Search Availability</button></p>
//     </div>
//   </div>
// </header>

// <!-- Page content -->
// <div class="w3-content" style="max-width:1100px;">

//   <!-- Good offers -->
//   <div class="w3-container w3-margin-top">
//     <h3>Good Offers Right Now</h3>
//     <h6>Up to <strong>50%</strong> discount.</h6>
//   </div>
//   <div class="w3-row-padding w3-text-white w3-large">
//     <div class="w3-half w3-margin-bottom">
//       <div class="w3-display-container">
//         <img src="/w3images/cinqueterre.jpg" alt="Cinque Terre" style="width:100%">
//         <span class="w3-display-bottomleft w3-padding">Cinque Terre</span>
//       </div>
//     </div>
//     <div class="w3-half">
//       <div class="w3-row-padding" style="margin:0 -16px">
//         <div class="w3-half w3-margin-bottom">
//           <div class="w3-display-container">
//             <img src="/w3images/newyork2.jpg" alt="New York" style="width:100%">
//             <span class="w3-display-bottomleft w3-padding">New York</span>
//           </div>
//         </div>
//         <div class="w3-half w3-margin-bottom">
//           <div class="w3-display-container">
//             <img src="/w3images/sanfran.jpg" alt="San Francisco" style="width:100%">
//             <span class="w3-display-bottomleft w3-padding">San Francisco</span>
//           </div>
//         </div>
//       </div>
//       <div class="w3-row-padding" style="margin:0 -16px">
//         <div class="w3-half w3-margin-bottom">
//           <div class="w3-display-container">
//             <img src="/w3images/pisa.jpg" alt="Pisa" style="width:100%">
//             <span class="w3-display-bottomleft w3-padding">Pisa</span>
//           </div>
//         </div>
//         <div class="w3-half w3-margin-bottom">
//           <div class="w3-display-container">
//             <img src="/w3images/paris.jpg" alt="Paris" style="width:100%">
//             <span class="w3-display-bottomleft w3-padding">Paris</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

//   <!-- Explore Nature -->
//   <div class="w3-container">
//     <h3>Explore Nature</h3>
//     <p>Travel with us and see nature at its finest.</p>
//   </div>
//   <div class="w3-row-padding">
//     <div class="w3-half w3-margin-bottom">
//       <img src="/w3images/ocean2.jpg" alt="Norway" style="width:100%">
//       <div class="w3-container w3-white">
//         <h3>West Coast, Norway</h3>
//         <p class="w3-opacity">Roundtrip from $79</p>
//         <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
//         <button class="w3-button w3-margin-bottom">Buy Tickets</button>
//       </div>
//     </div>
//     <div class="w3-half w3-margin-bottom">
//       <img src="/w3images/mountains2.jpg" alt="Austria" style="width:100%">
//       <div class="w3-container w3-white">
//         <h3>Mountains, Austria</h3>
//         <p class="w3-opacity">One-way from $39</p>
//         <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
//         <button class="w3-button w3-margin-bottom">Buy Tickets</button>
//       </div>
//     </div>
//   </div>

//   <!-- Newsletter -->
//   <div class="w3-container">
//     <div class="w3-panel w3-padding-16 w3-black w3-opacity w3-card w3-hover-opacity-off">
//       <h2>Get the best offers first!</h2>
//       <p>Join our newsletter.</p>
//       <label>E-mail</label>
//       <input class="w3-input w3-border" type="text" placeholder="Your Email address">
//       <button type="button" class="w3-button w3-red w3-margin-top">Subscribe</button>
//     </div>
//   </div>
  
//   <!-- Contact -->
//   <div class="w3-container">
//     <h2>Contact</h2>
//     <p>Let us book your next trip!</p>
//     <i class="fa fa-map-marker" style="width:30px"></i> Chicago, US<br>
//     <i class="fa fa-phone" style="width:30px"></i> Phone: +00 151515<br>
//     <i class="fa fa-envelope" style="width:30px"> </i> Email: mail@mail.com<br>
//     <form action="/action_page.php" target="_blank">
//       <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name"></p>
//       <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Email" required name="Email"></p>
//       <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Message" required name="Message"></p>
//       <p><button class="w3-button w3-black w3-padding-large" type="submit">SEND MESSAGE</button></p>
//     </form>
//   </div>
  
// <!-- End page content -->
// </div>

// <!-- Footer -->
// <footer class="w3-container w3-center w3-opacity w3-margin-bottom">
//   <h5>Find Us On</h5>
//   <div class="w3-xlarge w3-padding-16">
//     <i class="fa fa-facebook-official w3-hover-opacity"></i>
//     <i class="fa fa-instagram w3-hover-opacity"></i>
//     <i class="fa fa-snapchat w3-hover-opacity"></i>
//     <i class="fa fa-pinterest-p w3-hover-opacity"></i>
//     <i class="fa fa-twitter w3-hover-opacity"></i>
//     <i class="fa fa-linkedin w3-hover-opacity"></i>
//   </div>
//   <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" class="w3-hover-text-green">w3.css</a></p>
// </footer>

// <script>
// // Tabs
// function openLink(evt, linkName) {
//   var i, x, tablinks;
//   x = document.getElementsByClassName("myLink");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablink");
//   for (i = 0; i < x.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
//   }
//   document.getElementById(linkName).style.display = "block";
//   evt.currentTarget.className += " w3-red";
// }

// // Click on the first tablink on load
// document.getElementsByClassName("tablink")[0].click();
// </script>

// </body>
// </html>
// `
//         },
//         {
// id:"thirteen",
// label:"Tour 3",
// content:`
// <!DOCTYPE html>
// <html>
// <head>
// <title>W3.CSS Template</title>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
// </head>
// <body>

// <div class="w3-display-container" style="margin-bottom:50px">
//   <img src="/w3images/beach3.jpg" style="width:100%">
//   <div class="w3-display-bottomleft w3-container w3-amber w3-hover-orange w3-hide-small"
//    style="bottom:10%;opacity:0.7;width:70%">
//   <h2><b>4 Good Reasons<br>For travelling with us</b></h2>
// </div>
// </div>

// <div class="w3-row w3-container" style="margin:50px 0">
// <div class="w3-half w3-container">
//   <div class="w3-topbar w3-border-amber">
//     <img src="/w3images/cellphone.jpg" style="width:100%">
//     <h2>Smart Vacation</h2>
//     <p>Full vacation control from your cell phone.</p>
//   </div>
// </div>

// <div class="w3-half w3-container">
//   <div class="w3-topbar w3-border-amber">
//     <img src="/w3images/sealions.jpg" style="width:100%">
//     <h2>Super Offers</h2>
//     <p>Up to 50% offers. Always 25% student offers.</p>
//   </div>
// </div>
// </div>

// <div class="w3-row w3-container" style="margin:50px 0">
// <div class="w3-half w3-container">
//   <div class="w3-topbar w3-border-orange">
//     <img src="/w3images/truck.jpg" style="width:100%">
//     <h2>Car Rental Included</h2>
//     <p>Wherever you travel our car rental is included.</p>
//   </div>
// </div>

// <div class="w3-half w3-container">
//   <div class="w3-topbar w3-border-orange">
//     <img src="/w3images/nowornever.jpg" style="width:100%">
//     <h2>Realize Your Dreams</h2>
//     <p>Don't wait until it is to late.</p>
//     </div>
// </div>
// </div>

// </body>
// </html>
// `
//         },
//         {
// id:"fourteen",
// label:"Portfolio cv",
// content:
// `
// <!DOCTYPE html>
// <html>
// <head>
// <title>W3.CSS Template</title>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
// <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
// <style>
// html,body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif}
// </style>
// </head>
// <body class="w3-light-grey">

// <!-- Page Container -->
// <div class="w3-content w3-margin-top" style="max-width:1400px;">

//   <!-- The Grid -->
//   <div class="w3-row-padding">
  
//     <!-- Left Column -->
//     <div class="w3-third">
    
//       <div class="w3-white w3-text-grey w3-card-4">
//         <div class="w3-display-container">
//           <img src="/w3images/avatar_hat.jpg" style="width:100%" alt="Avatar">
//           <div class="w3-display-bottomleft w3-container w3-text-black">
//             <h2>Jane Doe</h2>
//           </div>
//         </div>
//         <div class="w3-container">
//           <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Designer</p>
//           <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>London, UK</p>
//           <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>ex@mail.com</p>
//           <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>1224435534</p>
//           <hr>

//           <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
//           <p>Adobe Photoshop</p>
//           <div class="w3-light-grey w3-round-xlarge w3-small">
//             <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:90%">90%</div>
//           </div>
//           <p>Photography</p>
//           <div class="w3-light-grey w3-round-xlarge w3-small">
//             <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:80%">
//               <div class="w3-center w3-text-white">80%</div>
//             </div>
//           </div>
//           <p>Illustrator</p>
//           <div class="w3-light-grey w3-round-xlarge w3-small">
//             <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:75%">75%</div>
//           </div>
//           <p>Media</p>
//           <div class="w3-light-grey w3-round-xlarge w3-small">
//             <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:50%">50%</div>
//           </div>
//           <br>

//           <p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
//           <p>English</p>
//           <div class="w3-light-grey w3-round-xlarge">
//             <div class="w3-round-xlarge w3-teal" style="height:24px;width:100%"></div>
//           </div>
//           <p>Spanish</p>
//           <div class="w3-light-grey w3-round-xlarge">
//             <div class="w3-round-xlarge w3-teal" style="height:24px;width:55%"></div>
//           </div>
//           <p>German</p>
//           <div class="w3-light-grey w3-round-xlarge">
//             <div class="w3-round-xlarge w3-teal" style="height:24px;width:25%"></div>
//           </div>
//           <br>
//         </div>
//       </div><br>

//     <!-- End Left Column -->
//     </div>

//     <!-- Right Column -->
//     <div class="w3-twothird">
    
//       <div class="w3-container w3-card w3-white w3-margin-bottom">
//         <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
//         <div class="w3-container">
//           <h5 class="w3-opacity"><b>Front End Developer / w3schools.com</b></h5>
//           <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 - <span class="w3-tag w3-teal w3-round">Current</span></h6>
//           <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
//           <hr>
//         </div>
//         <div class="w3-container">
//           <h5 class="w3-opacity"><b>Web Developer / something.com</b></h5>
//           <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012 - Dec 2014</h6>
//           <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
//           <hr>
//         </div>
//         <div class="w3-container">
//           <h5 class="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5>
//           <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2010 - Mar 2012</h6>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br>
//         </div>
//       </div>

//       <div class="w3-container w3-card w3-white">
//         <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
//         <div class="w3-container">
//           <h5 class="w3-opacity"><b>W3Schools.com</b></h5>
//           <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>
//           <p>Web Development! All I need to know in one place</p>
//           <hr>
//         </div>
//         <div class="w3-container">
//           <h5 class="w3-opacity"><b>London Business School</b></h5>
//           <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6>
//           <p>Master Degree</p>
//           <hr>
//         </div>
//         <div class="w3-container">
//           <h5 class="w3-opacity"><b>School of Coding</b></h5>
//           <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2010 - 2013</h6>
//           <p>Bachelor Degree</p><br>
//         </div>
//       </div>

//     <!-- End Right Column -->
//     </div>
    
//   <!-- End Grid -->
//   </div>
  
//   <!-- End Page Container -->
// </div>

// <footer class="w3-container w3-teal w3-center w3-margin-top">
//   <p>Find me on social media.</p>
//   <i class="fa fa-facebook-official w3-hover-opacity"></i>
//   <i class="fa fa-instagram w3-hover-opacity"></i>
//   <i class="fa fa-snapchat w3-hover-opacity"></i>
//   <i class="fa fa-pinterest-p w3-hover-opacity"></i>
//   <i class="fa fa-twitter w3-hover-opacity"></i>
//   <i class="fa fa-linkedin w3-hover-opacity"></i>
//   <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
// </footer>

// </body>
// </html>`


//         },

// {
// id:"about",
// label:"about",
// content:
// `
// <!DOCTYPE html>
// <html>
// <head>
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <style>
// body, html {
//   height: 100%;
//   font-family: Arial, Helvetica, sans-serif;
// }

// * {
//   box-sizing: border-box;
// }

// .bg-img {
//   /* The image used */
//   background-image: url("data:image/jpeg;base64,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");

//   min-height: 380px;

//   /* Center and scale the image nicely */
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   position: relative;
// }

// /* Add styles to the form container */
// .container {
//   position: absolute;
//   right: 0;
//   margin: 20px;
//   max-width: 300px;
//   padding: 16px;
//   background-color: white;
// }

// /* Full-width input fields */
// input[type=text], input[type=password] {
//   width: 100%;
//   padding: 15px;
//   margin: 5px 0 22px 0;
//   border: none;
//   background: #f1f1f1;
// }

// input[type=text]:focus, input[type=password]:focus {
//   background-color: #ddd;
//   outline: none;
// }

// /* Set a style for the submit button */
// .btn {
//   background-color: #04AA6D;
//   color: white;
//   padding: 16px 20px;
//   border: none;
//   cursor: pointer;
//   width: 100%;
//   opacity: 0.9;
// }

// .btn:hover {
//   opacity: 1;
// }
// </style>
// </head>
// <body>
// <div class="bg-img">
//   <form action="/action_page.php" class="container">
//     <h1>Login</h1>

//     <label for="email"><b>Email</b></label>
//     <input type="text" placeholder="Enter Email" name="email" required>

//     <label for="psw"><b>Password</b></label>
//     <input type="password" placeholder="Enter Password" name="psw" required>

//     <button type="submit" class="btn">Login</button>
//   </form>
// </div>

// </body>
// </html>

// `
// },
{
id:"hero-img",
label:"Button over Image",
category:"Images",
media:`<?xml version="1.0" ?><svg enable-background="new 0 0 32 32" height="47px" id="svg2" version="1.1" viewBox="0 0 32 32" width="47px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg"><g id="background"><rect fill="none" height="32" width="32"/></g><g id="text_x5F_bold"><path d="M24,10V8c0,0,0-6-6-6H7.938v28H18.03C24,30,24,24,24,24v-2c0-6-6-6-6-6S24,16,24,10z M16,24h-2v-4h2c0,0,2,0,2,2   S16,24,16,24z M16,12h-2V8h2c0,0,2,0,2,2S16,12,16,12z"/></g></svg>`,
content:`
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body, html {
  height: 100%;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.hero-image {
 
  height: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.hero-text button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
}

.hero-text button:hover {
  background-color: #555;
  color: white;
}
</style>
</head>
<body>

<div class="hero-image">
<img></img>
  <div class="hero-text">
    <h1 style="font-size:50px">I am John Doe</h1>
    <p>And I'm a Photographer</p>
    <button>Hire me</button>
  </div>
</div>

<p>Page Content..</p>

</body>
</html>
`
},
{
  id:"image-text",
  label:`Image +text`,
  category:"Images",
media:`<?xml version="1.0" ?><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="M0 0h24v24H0z" fill="none"/><path d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993v9.349A5.99 5.99 0 0 0 20 13V5H4l.001 14 9.292-9.293a.999.999 0 0 1 1.32-.084l.093.085 3.546 3.55a6.003 6.003 0 0 0-3.91 7.743L2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016zM8 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></g></svg>`,
  content:`
  <style>
body {font-family: "Times New Roman", Georgia, Serif;}
h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display";
  letter-spacing: 5px;
}
</style>
<header class="w3-display-container w3-content w3-wide" style="max-width:1500px;" id="home">
  <img class="w3-image" src="/w3images/architect.jpg" alt="Architecture" width="1500" height="300">
  <div class="w3-display-middle w3-margin-top w3-center">
    <h1 class="w3-xxlarge w3-text-white"><span class="w3-padding w3-black w3-opacity-min"><b>BR</b></span> <span class="w3-hide-small w3-text-light-grey">Architects</span></h1>
  </div>
</header>

  `
},
{
id:"avatar",
label:"avatar",
media:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
<path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>`,
category:"Images",
content:`
<style>
.round {
  border-radius: 50%;
}
</style>
</head>
<body>

<h2>Rounded Images</h2>

<img class="round" src="img_avatar.png" alt="Avatar" >

</body>
`
},
{
id:"fb",
label:"Facebook",
media:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>`,
category:"Social button",
content:`
<style>
.fa {
  padding: 20px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  display:block;
}

.fa:hover {
    opacity: 0.7;
}

.fa-facebook {
  background: #3B5998;
  color: white;
}
</style>
<body>
<a href="#" class="fa fa-facebook"></a>
</body>
`
},
{
  id:"twitter",
  label:"twitter",
  category:"Social button",
  media:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg>`,
  content:`
  <style>
  .fa {
    padding: 20px;
    font-size: 30px;
    width: 50px;
    text-align: center;
    text-decoration: none;
    margin: 5px 2px;
  }
  
  .fa:hover {
      opacity: 0.7;
  }
  
  .fa-twitter {
    background: #3B5998;
    color: white;
  }
  </style>
  <body>
  <a href="#" class="fa fa-twitter"></a>
  </body>
  `
  },
  {
    id:"google",
    label:"Google",
    category:"Social button",
    media:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
  </svg>`,
    content:`
    <style>
    .fa {
      padding: 20px;
      font-size: 30px;
      width: 50px;
      text-align: center;
      text-decoration: none;
      margin: 5px 2px;
    }
    
    .fa:hover {
        opacity: 0.7;
    }
    
    .fa-google {
      background: #3B5998;
      color: white;
    }
    </style>
    <body>
    <a href="#" class="fa fa-google"></a>
    </body>
    `
    },
    {
      id:"linkedin",
      label:"Linkedin",
      category:"Social button",
      media:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
    </svg>`,
      content:`
      <style>
      .fa {
        padding: 20px;
        font-size: 30px;
        width: 50px;
        text-align: center;
        text-decoration: none;
        margin: 5px 2px;
      }
      
      .fa:hover {
          opacity: 0.7;
      }
      
      .fa-linkedin {
        background: #3B5998;
        color: white;
      }
      </style>
      <body>
      <a href="#" class="fa fa-linkedin"></a>
      </body>
      `
      },
      {
        id:"youtube",
        label:"Youtube",
        category:"Social button",
        media:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
      </svg>`,
        content:`
        <style>
        .fa {
          padding: 20px;
          font-size: 30px;
          width: 50px;
          text-align: center;
          text-decoration: none;
          margin: 5px 2px;
        }
        
        .fa:hover {
            opacity: 0.7;
        }
        
        .fa-youtube {
          background: #3B5998;
          color: white;
        }
        </style>
        <body>
        <a href="#" class="fa fa-youtube"></a>
        </body>
        `
        },
        {
          id:"yahoo",
          label:"yahoo",
          category:"Social button",
          media:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-currency-yen" viewBox="0 0 16 16">
          <path d="M8.75 14v-2.629h2.446v-.967H8.75v-1.31h2.445v-.967H9.128L12.5 2h-1.699L8.047 7.327h-.086L5.207 2H3.5l3.363 6.127H4.778v.968H7.25v1.31H4.78v.966h2.47V14h1.502z"/>
        </svg>`,
          content:`
          <style>
          .fa {
            padding: 20px;
            font-size: 30px;
            width: 50px;
            text-align: center;
            text-decoration: none;
            margin: 5px 2px;
          }
          
          .fa:hover {
              opacity: 0.7;
          }
          
          .fa-yahoo {
            background: #3B5998;
            color: white;
          }
          </style>
          <body>
          <a href="#" class="fa fa-yahoo"></a>
          </body>
          `
          },
          {
            id:"button",
            label:"Button",
            category:"Buttons",
            content:`
            <button class="button button1">Click Me</button>
            `,
          },
          {
            id:"home",
            label:"Home",
            media:`
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
</svg>
            `,
            category:"Icons",
            content:`
            <style>
.btn-home{
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  display:inline-block;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: RoyalBlue;
}
</style>
<body>
<button class="btn-home"><i class="fa fa-home"></i></button>
      </body>
            `
          },
          {
            id:"bar",
            label:"Bars",
            media:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-bar-chart-steps" viewBox="0 0 16 16">
            <path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0zM2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1z"/>
          </svg>`,
            category:"Icons",
            content:`
            <style>
.btn-bar {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: RoyalBlue;
}
</style>
<body>
<button class="btn-bar"><i class="fa fa-bars"></i></button>
      </body>
            `
          },
          {
            id:"trash",
            label:"Trash",
            media:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
          </svg>`,
            category:"Icons",
            content:`
            <style>
.btn-trash {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: RoyalBlue;
}
</style>
<body>
<button class="btn-trash"><i class="fa fa-trash"></i></button>
      </body>
            `
          },
          {
            id:"close",
            label:"Close",
            media:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>`,
            category:"Icons",
            content:`
            <style>
.btn-close{
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: RoyalBlue;
}
</style>
<body>
<button class="btn-close"><i class="fa fa-close"></i></button>
      </body>
            `
          },
          {
            id:"folder",
            label:"folder",
            media:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-folder2" viewBox="0 0 16 16">
            <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z"/>
          </svg>`,
            category:"Icons",
            content:`
            <style>
.btn-folder {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: RoyalBlue;
}
</style>
<body>
<button class="btn-folder"><i class="fa fa-folder"></i></button>
      </body>
            `
          },


{
id:"Team-cards",
label:"Team cards",
category:"Card",
media:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
<path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
</svg>`,
content:`
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}
</style>
</head>
<body>

<h2>Responsive "Meet The Team" Section</h2>
<p>Resize the browser window to see the effect.</p>
<br>

<div class="row">
  <div class="column">
    <div class="card">
      <img src="/w3images/team1.jpg" alt="Jane" style="width:100%">
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/w3images/team2.jpg" alt="Mike" style="width:100%">
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <img src="/w3images/team3.jpg" alt="John" style="width:100%">
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>

</body>
</html>

`
},
{
  id:"side-img",
  label:"3 images",
  category:"Images",
  media:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
  <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
  <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
</svg>`,
  content:`
  <!DOCTYPE html>
<html>
<head>
<style>
* {
  box-sizing: border-box;
}

.column {
  float: left;
 
  padding: 5px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>
</head>
<body>

<h2>Images Side by Side</h2>
<p>How to create side-by-side images with the CSS float property:</p>

<div class="row">
  <div class="column">
    <img src="img_snow.jpg" alt="Snow" >
  </div>
  <div class="column">
    <img src="img_forest.jpg" alt="Forest" >
  </div>
  <div class="column">
    <img src="img_mountains.jpg" alt="Mountains" >
  </div>
</div>

</body>
</html>
  `
},
{
  id:"image-btn",
  label:"Name Header",
  category:"Images",
  media:`<?xml version="1.0" ?><svg enable-background="new 0 0 32 32" height="47px" id="svg2" version="1.1" viewBox="0 0 32 32" width="47px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg"><g id="background"><rect fill="none" height="32" width="32"/></g><g id="text_x5F_bold"><path d="M24,10V8c0,0,0-6-6-6H7.938v28H18.03C24,30,24,24,24,24v-2c0-6-6-6-6-6S24,16,24,10z M16,24h-2v-4h2c0,0,2,0,2,2   S16,24,16,24z M16,12h-2V8h2c0,0,2,0,2,2S16,12,16,12z"/></g></svg>`,
  content:`
  <header class="w3-container w3-center w3-padding-48 w3-white">
  <h1 class="w3-xxxlarge"><b>JANE BLOGLIFE</b></h1>
  <h6>Welcome to the blog of <span class="w3-tag">Jane's world</span></h6>
</header>
  `
},
{
  id:"text-image",
  label:"text over image",
  category:"Images",
  media:`<?xml version="1.0" ?><svg viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg"><title/><g id="Web"><circle cx="38" cy="41" r="3"/><path d="M87,22V17a7.0085,7.0085,0,0,0-7-7H8a7.0085,7.0085,0,0,0-7,7v5ZM52,15H80a1,1,0,0,1,0,2H52a1,1,0,0,1,0-2ZM26,13a3,3,0,1,1-3,3A3.0033,3.0033,0,0,1,26,13Zm-8,0a3,3,0,1,1-3,3A3.0033,3.0033,0,0,1,18,13Zm-8,0a3,3,0,1,1-3,3A3.0033,3.0033,0,0,1,10,13Z"/><circle cx="26" cy="16" r="1"/><circle cx="18" cy="16" r="1"/><circle cx="10" cy="16" r="1"/><path d="M56,38.4141,39.707,54.707a1,1,0,0,1-1.414-1.414l17-17a.9994.9994,0,0,1,1.414,0L78,57.5859V31H10V60.5859L25.293,45.293a.9994.9994,0,0,1,1.414,0l17,17a1,1,0,1,1-1.414,1.414L26,47.4141l-16,16V69H78V60.4141ZM33,41a5,5,0,1,1,5,5A5.0059,5.0059,0,0,1,33,41Z"/><path d="M1,24V71a7.0085,7.0085,0,0,0,7,7H80a7.0085,7.0085,0,0,0,7-7V24ZM80,70a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V30a1,1,0,0,1,1-1H79a1,1,0,0,1,1,1Z"/></g></svg>`,
  content:`
  <div  >
  <img class="w3-image" src="/w3images/architect.jpg" alt="Architecture" width="400px" height="300px">
  <div class="w3-display-topleft w3-text-white" style="padding:24px 48px">
    <h1 class="w3-jumbo w3-hide-small">New arrivals</h1>
    <h1 class="w3-hide-large w3-hide-medium">New arrivals</h1>
    <h1 class="w3-hide-small">COLLECTION 2016</h1>
    <p><a href="#jeans" class="w3-button w3-black w3-padding-large w3-large">SHOP NOW</a></p>
  </div>
</div>


  `
},
{
  id:"navbar",
  label:"NavBar",
  category:"Navbar",
  media:`<?xml version="1.0" ?><svg id="Outlined" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g id="Fill"><rect height="2" width="22" x="3" y="15"/><rect height="2" width="26" x="3" y="21"/><rect height="2" width="26" x="3" y="9"/></g></svg>`,
  content:`
  <!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>


<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

</body>
</html>
  `,
},
{
  id:"list",
  label:"list",
  category:"List",
  media:`<?xml version="1.0" ?><svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M4 34h4v1h-2v2h2v1h-4v2h6v-8h-6v2zm2-18h2v-8h-4v2h2v6zm-2 6h3.6l-3.6 4.2v1.8h6v-2h-3.6l3.6-4.2v-1.8h-6v2zm10-12v4h28v-4h-28zm0 28h28v-4h-28v4zm0-12h28v-4h-28v4z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>`,
  content:`<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`
},
{
  id:"own-slider",
  label:"slider",
  category:"Crousel",
  media:`
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-file-slides" viewBox="0 0 16 16">
  <path d="M5 4a.5.5 0 0 0-.496.438l-.5 4A.5.5 0 0 0 4.5 9h3v2.016c-.863.055-1.5.251-1.5.484 0 .276.895.5 2 .5s2-.224 2-.5c0-.233-.637-.429-1.5-.484V9h3a.5.5 0 0 0 .496-.562l-.5-4A.5.5 0 0 0 11 4H5zm2 3.78V5.22c0-.096.106-.156.19-.106l2.13 1.279a.125.125 0 0 1 0 .214l-2.13 1.28A.125.125 0 0 1 7 7.778z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
</svg>
  `,
  
  content:`
  
  <!DOCTYPE html>
<html>
<title>W3.CSS</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<style>
.mySlides {display:none;}
</style>
<body>

<div class="w3-content w3-display-container">
  <img class="mySlides" src="" >
  <img class="mySlides" src="" >
  <img class="mySlides" src="" >
 

  <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
  <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
</div>

<script>
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
</script>

</body>
</html>
  `
},
{
  id:"chat",
  label:"Chat tab",
  category:"Pop ups",
  media:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
</svg>`,
  content:`
  <!DOCTYPE html>
  <html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
  body {font-family: Arial, Helvetica, sans-serif;}
  * {box-sizing: border-box;}
  
  /* Button used to open the chat form - fixed at the bottom of the page */
  .open-button {
    background-color: #555;
    color: white;
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    opacity: 0.8;
  
    right: 28px;
    width: 280px;
  }
  
  /* The popup chat - hidden by default */
  .chat-popup {
    display: none;
   
    right: 15px;
    border: 3px solid #f1f1f1;
    z-index: 9;
  }
  
  /* Add styles to the form container */
  .form-container {
    max-width: 300px;
    padding: 10px;
    background-color: white;
  }
  
  /* Full-width textarea */
  .form-container textarea {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    background: #f1f1f1;
   
   
  }
  
  /* When the textarea gets focus, do something */
  .form-container textarea:focus {
    background-color: #ddd;
    outline: none;
  }
  
  /* Set a style for the submit/send button */
  .form-container .btn {
    background-color: #04AA6D;
    color: white;
    padding: 16px 20px;
    border: none;
    cursor: pointer;
  
    margin-bottom:10px;
    opacity: 0.8;
  }
  
  /* Add a red background color to the cancel button */
  .form-container .cancel {
    background-color: red;
  }
  
  /* Add some hover effects to buttons */
  .form-container .btn:hover, .open-button:hover {
    opacity: 1;
  }
  </style>
  </head>
  <body>
  
  <button class="open-button" onclick="openForm()">Chat</button>
  
  <div class="chat-popup" id="myForm">
    <form action="/action_page.php" class="form-container">
      <h1>Chat</h1>
  
      <label for="msg"><b>Message</b></label>
      <textarea placeholder="Type message.." name="msg" required></textarea>
  
      <button type="submit" class="btn">Send</button>
      <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
    </form>
  </div>
  
  <script>
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  </script>
  
  </body>
  </html>
  `
},
// {
//   id:"split",
//   label:"Split foreground",
//   category:"Basic",
//   media:`
//   <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-terminal-split" viewBox="0 0 16 16">
//   <path d="M2.146 3.146a.5.5 0 0 1 .708 0l.823.824a.75.75 0 0 1 0 1.06l-.823.824a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708ZM4 6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1A.5.5 0 0 1 4 6Zm6.354-2.854a.5.5 0 0 0-.708.708l.647.646-.647.646a.5.5 0 1 0 .708.708l.823-.824a.75.75 0 0 0 0-1.06l-.823-.824ZM12 5.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z"/>
//   <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3Zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.5V2H2Zm6.5 0v12H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8.5Z"/>
// </svg>
//   `,
//   content:`
//   <style>
// body {
//   font-family: Arial;
//   color: white;
// }

// .split {
  
 
//   position: fixed;

//   top: 0;
//   overflow-x: hidden;
//   padding-top: 20px;
// }

// .left {
//   left: 0;
//   background-color: #111;
// }

// .right {
//   right: 0;
//   background-color: red;
// }

// .centered {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
// }

// .centered img {

//   border-radius: 50%;
// }
// </style>
// </head>
// <body>

// <div class="split left">
//   <div class="centered">
//     <img src="img_avatar2.png" alt="Avatar woman">
//     <h2>Jane Flex</h2>
//     <p>Some text.</p>
//   </div>
// </div>

// <div class="split right">
//   <div class="centered">
//     <img src="img_avatar.png" alt="Avatar man">
//     <h2>John Doe</h2>
//     <p>Some text here too.</p>
//   </div>
// </div>
     
// </body>
//   `
// },
{
  id:"stat",
  label:"Counter",
  category:"Counter",
  media:`
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-calculator" viewBox="0 0 16 16">
  <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
  <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
</svg>
  `,
  content:`
  <style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 5px;
}

.row {margin: 0 -5px;}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 10px;
  }
}

/* Style the counter cards */
.card-counter {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #444;
  color: white;
}

.fa {font-size:50px;}
</style>
</head>
<body>

<h2>Responsive Section Counter</h2>
<p>Resize the browser window to see the effect.</p>
<br>

<div class="row">
  <div class="column">
    <div class="card-counter">
      <p><i class="fa fa-user"></i></p>
      <h3>11+</h3>
      <p>Partners</p>
    </div>
  </div>

  <div class="column">
    <div class="card-counter">
      <p><i class="fa fa-check"></i></p>
      <h3>55+</h3>
      <p>Projects</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card-counter">
      <p><i class="fa fa-smile-o"></i></p>
      <h3>100+</h3>
      <p>Happy Clients</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card-counter">
      <p><i class="fa fa-coffee"></i></p>
      <h3>100+</h3>
      <p>Meetings</p>
    </div>
  </div>
</div>

</body>
  `
},
{
  id:"text-show",
  label:"Text-slider",
  category:"Crousel",
  media:`
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-code-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
</svg>
  `,
  content:`
  <style>
* {box-sizing: border-box}
body {font-family: Verdana, sans-serif; margin:0}

/* Slideshow container */
.slideshow-container {
  position: relative;
  background: #f1f1f1f1;
}

/* Slides */
.mySlides {
  display: none;
  padding: 80px;
  text-align: center;
}

/* Next & previous buttons */
.prev{
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -30px;
  padding: 16px;
  color: #888;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
}
.next{
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -30px;
  padding: 16px;
  color: #888;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  right:0%
}

/* Position the "next button" to the right */
.next {
  position: absolute;
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
  color: white;
}

/* The dot/bullet/indicator container */
.dot-container {
    text-align: center;
    padding: 20px;
    background: #ddd;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

/* Add a background color to the active dot/circle */
.active, .dot:hover {
  background-color: #717171;
}

/* Add an italic font style to all quotes */
q {font-style: italic;}

/* Add a blue color to the author */
.author {color: cornflowerblue;}
</style>
</head>
<body>

<div class="slideshow-container">

<div class="mySlides">
  <q>I love you the more in that I believe you had liked me for my own sake and for nothing else</q>
  <p class="author">- John Keats</p>
</div>

<div class="mySlides">
  <q>But man is not made for defeat. A man can be destroyed but not defeated.</q>
  <p class="author">- Ernest Hemingway</p>
</div>

<div class="mySlides">
  <q>I have not failed. I've just found 10,000 ways that won't work.</q>
  <p class="author">- Thomas A. Edison</p>
</div>

<a class="prev" onclick="plusSlides(-1)">❮</a>
<a class="next" onclick="plusSlides(1)">❯</a>

</div>

<div class="dot-container">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span> 
</div>

<script>
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
</script>

</body>
  `
},
{
  id:"verticalLine",
  label:"Line-y",
  media:"Line",
  category:"Line",
  content:`
  <style>
.vl {
  border-left: 3px solid black;
  height: 500px;
}
</style>
</head>
<body>

<div class="vl"></div>

</body>
  `
},{
  id:"dark-mode",
  label:"Dark-mode",
  category:"Togglers",
  media:`
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>
  `,
  content:`
  <style>
body {
  padding: 25px;
  background-color: white;
  color: black;
  font-size: 25px;
}

.dark-mode {
  background-color: black;
  color: white;
}
</style>
</head>
<body>

<h2>Toggle Dark/Light Mode</h2>

<button onclick="myFunction()">Cick me to Toggle dark mode</button>

<script>
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
</script>

</body>
  
  `
},{
  id:"toggel-show",
  label:"Show/Hide",
  category:"Togglers",
  media:`
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-toggles" viewBox="0 0 16 16">
  <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm2.45 0A3.49 3.49 0 0 1 8 3.5 3.49 3.49 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5H6.95zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7z"/>
</svg>
  `,
  content:`
  <style>
#myDIV {
 
  padding: 50px 0;
  text-align: center;
  background-color: lightblue;
  margin-top: 20px;
}
</style>
</head>
<body>

<button onclick="myFunctionDiv()">Open Div</button>

<div id="myDIV">
This is my DIV element.
</div>

<p><b>Note:</b> The element will not take up any space when the display property set to "none".</p>

<script>
function myFunctionDiv() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
</script>

</body>
  `
},
{
  id:"toggel-like",
  label:"Like/Dislike",
  category:"Togglers",
  media:`
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
</svg>
  `,
  content:`
  <style>
  .fa {
    font-size: 50px;
    cursor: pointer;
    user-select: none;
  }
  
  .fa:hover {
    color: darkblue;
  }
  </style>
  </head>
  <body>
  
  <p>Click on the icon to toggle between thumbs-up and thumbs-down (like/dislike):</p>
  
  <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>
  
  <script>
  function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }
  </script>
  
  </body>
  `
},
{
  id:"toggel-div",
  label:"Down-popup",
  category:"Pop ups",
  media:`
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-caret-down-square-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6H4z"/>
</svg>
  `,
  content:`
  <style>
#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom:130px;
  font-size: 17px;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;} 
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;} 
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
</style>
</head>
<body>


<p>Click on the button to show the snackbar. It will disappear after 3 seconds.</p>

<button onclick="myFunction()">Show Down</button>

<div id="snackbar">Some text some message..</div>

<script>
function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
</script>

</body>
  `
},
{
  id:"footer",
  label:"Footer",
  category:"Footer",
  media:`
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-file-break" viewBox="0 0 16 16">
  <path d="M0 10.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zM12 0H4a2 2 0 0 0-2 2v7h1V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7h1V2a2 2 0 0 0-2-2zm2 12h-1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2H2v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2z"/>
</svg>
  `,
  content:`
  <style>
.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: red;
   color: white;
   text-align: center;
}
</style>
</head>
<body>

<h2>Fixed/Sticky Footer Example</h2>
<p>The footer is placed at the bottom of the page.</p>

<div class="footer">
  <p>Footer</p>
</div>

</body>
  `
},
{
  id:"new-list",
  label:"Closeable-list",
  category:"List",
  media:`
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
  `,
  content:`
  <style>
* {
  box-sizing: border-box;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

ul li {
  border: 1px solid #ddd;
  margin-top: -1px; /* Prevent double borders */
  background-color: #f6f6f6;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  color: black;
  display: block;
  position: relative;
}

ul li:hover {
  background-color: #eee;
}

.close {
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0%;
  padding: 12px 16px;
  transform: translate(0%, -50%);
}

.close:hover {background: #bbb;}
</style>
</head>
<body>

<h2>Closable List Items</h2>
<p>Click on the "x" symbol to the right of the list item to close/hide it.</p>

<ul>
  <li>Adele</li>
  <li>Agnes<span class="close">&times;</span></li>

  <li>Billy<span class="close">&times;</span></li>
  <li>Bob<span class="close">&times;</span></li>

  <li>Calvin<span class="close">&times;</span></li>
  <li>Christina<span class="close">&times;</span></li>
  <li>Cindy</li>
</ul>

<script>
var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}
</script>

</body>
  `
},

{
  id:"todo-list",
  label:"Todo-List",
  category:"List",
  media:`
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
</svg>
  `,
  content:`
  <style>
body {
  margin: 0;
  min-width: 250px;
}

/* Include the padding and border in an element's total width and height */
* {
  box-sizing: border-box;
}

/* Remove margins and padding from the list */
ul {
  margin: 0;
  padding: 0;
}

/* Style the list items */
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  list-style-type: none;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;
  
  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Set all odd list items to a different color (zebra-stripes) */
ul li:nth-child(odd) {
  background: #f9f9f9;
}

/* Darker background-color on hover */
ul li:hover {
  background: #ddd;
}

/* When clicked on, add a background color and strike out text */
ul li.checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}

/* Add a "checked" mark when clicked on */
ul li.checked::before {
  content: '';
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}

/* Style the close button */
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}

/* Style the header */
.header {
  background-color: #f44336;
  padding: 30px 40px;
  color: white;
  text-align: center;
}

/* Clear floats after the header */
.header:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the input */
input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

/* Style the "Add" button */
.addBtn {
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

.addBtn:hover {
  background-color: #bbb;
}
</style>
</head>
<body>

<div id="myDIV" class="header">
  <h2 style="margin:5px">My To Do List</h2>
  <input type="text" id="myInput" placeholder="Title...">
  <span onclick="newElement()" class="addBtn">Add</span>
</div>

<ul id="myUL">
  <li>Hit the gym</li>
  <li class="checked">Pay bills</li>
  <li>Meet George</li>
  <li>Buy eggs</li>
  <li>Read a book</li>
  <li>Organize office</li>
</ul>

<script>
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
</script>

</body>
  `
},
{
  id:"pop-ups",
  label:"Pop-screen",
  category:"Pop ups",
  media:`
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
</svg>
  `,
  content:`
  <style>
  body {font-family: Arial, Helvetica, sans-serif;}
  
  /* The Modal (background) */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }
  
  /* Modal Content */
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  
  /* The Close Button */
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  </style>
  </head>
  <body>

  <!-- Trigger/Open The Modal -->
  <button id="myBtn">Open Modal</button>
  
  <!-- The Modal -->
  <div id="myModal" class="modal">
  
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <p>Some text in the Modal..</p>
    </div>
  
  </div>
  
  <script>
  // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  </script>
  
  </body>
  `
},
{
  id:"select",
  label:"CheckBox",
  category:"Dropdown",
  media:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-ui-checks" viewBox="0 0 16 16">
  <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
</svg>`,

  content:`
  <style>
  /* The container */
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }
  
  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }
  
  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #2196F3;
  }
  
  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }
  
  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  </style>
  <body>
  
  <h1>Checkboxes</h1>
  <label class="container">One
    <input type="checkbox" checked="checked">
    <span class="checkmark"></span>
  </label>
  <label class="container">Two
    <input type="checkbox">
    <span class="checkmark"></span>
  </label>
  <label class="container">Three
    <input type="checkbox">
    <span class="checkmark"></span>
  </label>

  
  </body>
  `
},{

id:"input-navbar",
label:"With Input",
category:"Navbar",
media:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>`,
content:`
<style>
* {box-sizing: border-box;}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #e9e9e9;
}

.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #2196F3;
  color: white;
}

.topnav .search-container {
  float: right;
}

.topnav input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

.topnav .search-container button {
  float: right;
  padding: 6px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.topnav .search-container button:hover {
  background: #ccc;
}

@media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav a, .topnav input[type=text], .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type=text] {
    border: 1px solid #ccc;  
  }
}
</style>
</head>
<body>

<div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search">
      <button type="submit">Submit</button>
    </form>
  </div>
</div>

<div style="padding-left:16px">
  <h2>Responsive Input Field in Navbar</h2>
  <p>Navigation bar with a search box and a submit button inside of it.</p>
  <p>Resize the browser window to see the responsive effect.</p>
</div>

</body>
`
},
{

  id:"search",
  label:"Search-Bar",
  category:"Search",
  media:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>`,
  content:`
  <style>
body {
  font-family: Arial;
}

* {
  box-sizing: border-box;
}

form.example input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  
  background: #f1f1f1;
}

form.example button {
  float: left;
 
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
}

form.example button:hover {
  background: #0b7dda;
}

form.example::after {
  content: "";
  clear: both;
  display: table;
}
</style>
</head>
<body>


<form class="example" action="/action_page.php">
  <input type="text" placeholder="Search.." name="search">
  <button type="submit"><i class="fa fa-search"></i></button>
</form>



</body>
  `
},
{
  id:"toggel-div-login",
  label:"Pop-Form",
  category:"Pop ups",
  media:`
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-aspect-ratio" viewBox="0 0 16 16">
  <path d="M0 12.5v-9A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5zM2.5 4a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0V5h2.5a.5.5 0 0 0 0-1h-3zm11 8a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0V11h-2.5a.5.5 0 0 0 0 1h3z"/>
</svg>
  `,
  content:`
  <style>
  body {font-family: Arial, Helvetica, sans-serif;}
  
  /* Full-width input fields */
  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  
  /* Set a style for all buttons */
  button {
    background-color: #04AA6D;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }
  
  button:hover {
    opacity: 0.8;
  }
  
  /* Extra styles for the cancel button */
  .cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
  }
  
  /* Center the image and position the close button */
  .imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
    position: relative;
  }
  
  img.avatar {
    width: 40%;
    border-radius: 50%;
  }
  
  .container {
    padding: 16px;
  }
  
  span.psw {
    float: right;
    padding-top: 16px;
  }
  
  /* The Modal (background) */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    padding-top: 60px;
  }
  
  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
  }
  
  /* The Close Button (x) */
  .close {
    position: absolute;
    right: 25px;
    top: 0;
    color: #000;
    font-size: 35px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: red;
    cursor: pointer;
  }
  
  /* Add Zoom Animation */
  .animate {
    -webkit-animation: animatezoom 0.6s;
    animation: animatezoom 0.6s
  }
  
  @-webkit-keyframes animatezoom {
    from {-webkit-transform: scale(0)} 
    to {-webkit-transform: scale(1)}
  }
    
  @keyframes animatezoom {
    from {transform: scale(0)} 
    to {transform: scale(1)}
  }
  
  /* Change styles for span and cancel button on extra small screens */
  @media screen and (max-width: 300px) {
    span.psw {
       display: block;
       float: none;
    }
    .cancelbtn {
       width: 100%;
    }
  }
  </style>
  </head>
  <body>
  
  <h2>Modal Login Form</h2>
  
  <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>
  
  <div id="id01" class="modal">
    
    <form class="modal-content animate" action="/action_page.php" method="post">
      <div class="imgcontainer">
        <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
        <img src="img_avatar2.png" alt="Avatar" class="avatar">
      </div>
  
      <div class="container">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required>
  
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>
          
        <button type="submit">Login</button>
        <label>
          <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
      </div>
  
      <div class="container" style="background-color:#f1f1f1">
        <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
        <span class="psw">Forgot <a href="#">password?</a></span>
      </div>
    </form>
  </div>
  
  <script>
  // Get the modal
  var modal = document.getElementById('id01');
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  </script>
  
  </body>
  
  `
},
{
  id:"register",
  label:"register-form",
  category:"form",
  content:`<style>
  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: black;
  }
  
  * {
    box-sizing: border-box;
  }
  
  /* Add padding to containers */
  .container {
    padding: 16px;
    background-color: white;
  }
  
  /* Full-width input fields */
  input[type=text], input[type=password] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
  }
  
  input[type=text]:focus, input[type=password]:focus {
    background-color: #ddd;
    outline: none;
  }
  
  /* Overwrite default styles of hr */
  hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
  }
  
  /* Set a style for the submit button */
  .registerbtn {
    background-color: #04AA6D;
    color: white;
    padding: 16px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
  }
  
  .registerbtn:hover {
    opacity: 1;
  }
  
  /* Add a blue text color to links */
  a {
    color: dodgerblue;
  }
  
  /* Set a grey background color and center the text of the "sign in" section */
  .signin {
    background-color: #f1f1f1;
    text-align: center;
  }
  </style>
  </head>
  <body>
  
  <form action="/action_page.php">
    <div class="container">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>
  
      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" id="email" required>
  
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
  
      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
      <hr>
      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
  
      <button type="submit" class="registerbtn">Register</button>
    </div>
    
    <div class="container signin">
      <p>Already have an account? <a href="#">Sign in</a>.</p>
    </div>
  </form>
  
  </body>`
  
},
]
      
      
    },
  
 
    styleManager: styleManager,
    layerManager: layerManager,
    // storageManager:StorageManager,
    traitManager: traitManager,
    selectorManager: selectorManager,
    panels: panels,
    deviceManager: deviceManager,
    assetManager: { assets:assets, upload:false},
    storageManager: storageSetting(pageId),
    canvas: {
      styles: styles,
      scripts: scripts,
    },
    plugins: [
      tailwindComponent,
      gjsBlockBasic,
      swiperComponent,
      grapesjsBlockBootstrap,
      grapesjsPluginExport,
      grapesjsStyleBg,
      // editor => ['grapesjs-video-embed-manager'](editor, { /* options */ })
      // plugin,
    ],
    // plugins: [],
    pluginsOpts: {
      tailwindComponent: {},
      gjsBlockBasic: {},
      swiperComponent: {},
      grapesjsBlockBootstrap: {},
      grapesjsPluginExport: {},
      grapesjsStyleBg: {},
    
  }
  });

  addEditorCommand(editor);

  editor.on("run:preview", () => {
    console.log("It will trigger when we click on preview icon");
    // This will be used to hide border
    editor.stopCommand("sw-visibility");
    // This will hide the sidebar view
    navbar.removeClass("sidebar");
    // This will make the main-content to be full width
    mainContent.removeClass("main-content");

    // This will hide top panel where we have added the button
    panelTopBar.addClass("d-none");
  });
 
  editor.on("stop:preview", () => {
    // This event is reverse of the above event.
    console.log("It will trigger when we click on cancel preview icon");
    editor.runCommand("sw-visibility");
    navbar.addClass("sidebar");
    mainContent.addClass("main-content");
    panelTopBar.removeClass("d-none");
  });
  editor.on("component:selected", (component) => {
    console.log("component :>> ", component);
    toggleSidebar(!!component);
  });

  setTimeout(() => {
    let categories = editor.BlockManager.getCategories();
    categories.each((category) => category.set("open", false));
  }, 1000);
  return editor;
};

export default geditorConfig;
