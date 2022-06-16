import React from "react";
import ReactDOM from "react-dom";
import "grapesjs/dist/css/grapes.min.css";
import "bootstrap";
import App from "./App";
import "./styles/main.scss";
import reportWebVitals from "./reportWebVitals";
import DataProvider from "./redux/store";
import {UserProvider} from './component-ui/userContext'
import {LoginProvider} from './component-ui/loginContext'
ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
<LoginProvider>
        <App />
        </LoginProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
