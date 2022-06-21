import grapesjs from "grapesjs";
import gjsBlockBasic from "grapesjs-blocks-basic";
import $ from "jquery";
import grapesjsBlockBootstrap from "grapesjs-blocks-bootstrap4";
import grapesjsPluginExport from "grapesjs-plugin-export";
import grapesjsStyleBg from "grapesjs-style-bg";

import {
  addEditorCommand,
  deviceManager,
  layerManager,
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
{
  
}

      
      ]
    },
  
  
    styleManager: styleManager,
    layerManager: layerManager,
    // storageManager:StorageManager,
    traitManager: traitManager,
    selectorManager: selectorManager,
    panels: panels,
    deviceManager: deviceManager,
    assetManager: { assets: assets, upload: false },
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
    ],
    pluginsOpts: {
      tailwindComponent: {},
      gjsBlockBasic: {},
      swiperComponent: {},
      grapesjsBlockBootstrap: {},
      grapesjsPluginExport: {},
      grapesjsStyleBg: {},
    },
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
