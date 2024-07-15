import React from "react";
import "../style/Contact.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Christmas from "./Christmas.js";
import Clever from "./Clever.js";

const Contact = () => {
  const christmasUrl = '/automation-app/What_Is_Christmas.pdf';
  const cleverTortoiseUrl = '/automation-app/The_Clever_Tortoise.pdf';
  return (
<div>
<Router>
      <div class="readLinks">
      <Link to="/Christmas" style={{ color: 'white' }}>What is Christmas?</Link>&nbsp;&nbsp;
      <Link to="/Clever" style={{ color: 'white' }}>Clever Tortoise</Link>&nbsp;&nbsp;
      </div>
        <Switch>
          <Route path="/Christmas"  exact component={Christmas} />
          <Route path="/Clever"  exact component={Clever} />
        </Switch>
      </Router> 
      </div>

)};
  
  export default Contact;
  
