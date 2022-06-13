import React, { useEffect } from "react";
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
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    pageLoad()(dispatch);
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Home}></Route> */}
        <Route exact path="/" component={Home1}></Route> 
        <Route exact path="/login" component={Login}></Route> 
        <Route exact path="/create" component={CreateBtn}></Route> 
        <Route exact path="/Support" component={Support}></Route> 
       < Route exact path="/Signup" component={Signup}></Route> 
        {/* ****** Editor Route******** */}
        <Route exact path="/createPage" component={Home}></Route> 
        <Route exact path="/editor/:pageId" component={Editor}></Route>
      </Switch>
    </Router>
  );
}
// /:pageId
export default App;
