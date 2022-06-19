import React, { useEffect,useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./Home";
import Editor from "./Editor";
import { pageLoad } from "./redux/actions/pageAction";
import Home1 from "./component-ui/home1"
import Login from "./component-ui/login";
import CreateBtn from "./component-ui/createBtn";
import Support from "./component-ui/Support";
import Signup from "./component-ui/singup";
import NavBar from "./component-ui/navbar";
import DashBoard from './component-ui/DashBoard'
import UserData from "./dashComponents/userData";
import ProtectedRoute from "./ProtectedRoute";
import TemplatePage from './component-ui/templatePage'
import TemplateComponent from "./component-ui/templateComponent";
import {UserProvider} from './component-ui/userContext'
import { FALSE } from "sass";
function App() {


  
  const dispatch = useDispatch();

  useEffect(() => {
    pageLoad()(dispatch);
  }, [dispatch]);


  
  return (
    <Router>
      
      <Switch>
        {/* <Route exact path="/" component={Home}></Route> */}
        <Route exact path="/editor/:pageId" component={Editor}></Route>
        <>
        <UserProvider>
        <NavBar/>
        <Route exact path="/create" component={CreateBtn}></Route> 
        <Route exact path="/" component={Home1}></Route> 
        <Route exact path="/login" component={Login}></Route> 
        <Route exact path="/Support" component={Support}></Route> 
        < Route exact path="/Signup" component={Signup}></Route> 

        {/* ******** Protected React *********** */}
        {/* <ProtectedRoute path="/createPage" component={Home} auth={false} /> */}
        < Route exact path="/dashboard" component={DashBoard}></Route> 
        <Route exact path="/dashboard/profile" component={UserData}></Route> 
        <Route exact path="/createPage" component={Home}></Route> 
        <Route exact path="/create/byTemplate" component={TemplatePage}></Route> 
        </UserProvider>
        </>
      
      
     
      
        {/* ****** Editor Route******** */}
      
        
      </Switch>
    </Router>
  );
}
// /:pageId
export default App;
