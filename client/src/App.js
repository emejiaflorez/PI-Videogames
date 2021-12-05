import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from "./components/01_Landing/Landing.js";
import Home    from "./components/02_Home/Home.js";
import Video   from "./components/07_Video_Det/VideoDetail.js";
import Form    from "./components/10.Form/Form.js";

function App() {
  return (
    <BrowserRouter>
      <div className = "App">
         <Switch>
            <Route exact path = "/" component = { Landing }/>
            <Route exact path = "/home" component = { Home }/>
            <Route path = "/videos/:id" component = { Video }/>
            <Route path = "/videogame/add" component = { Form }/> 
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;




