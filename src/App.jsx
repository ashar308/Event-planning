import { useState } from 'react'

import './App.css'
import Navbar from "./parts/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Events from "./pages/Events.jsx"
import Footer from "./pages/Footer.jsx";
import About from "./pages/About.jsx";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contact from "./pages/Contact.jsx";

function App() {
  

  return (
    <div>
      <Router>
      < Navbar />
          <Switch>
            <Route path="/" exact component = {Home}/>
            <Route path="/events" exact component = {Events}/>
            <Route path="/about" exact component = {About}/>
            <Route path="/contact" exact component = {Contact}/>
           
            
          </Switch>
        <Footer/>
      </Router>
    </div>
    
  )
}

export default App;
