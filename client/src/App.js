import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from "./components/01_Landing/Landing.js";
import Home    from "./components/02_Home/Home.js";
import NavBar  from "./components/03_Navbar/Navbar.js";
// import Video   from "./components/07_Video_Det/Video.js";
// import Form    from "./components/10_Form/Form.js";

function App() {
  return (
    <BrowserRouter>
      <div className = "App">
         <Switch>
            <Route exact path = "/" component = { Landing }/>
            <Route exact path = "/home" component = { Home }/>
            <Route path = "/home" component = { NavBar }/>
            {/* <Route path = "/video/:id" component = { Video }/>
            <Route path = "/home/add" component = { Form }/>  */}
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;




