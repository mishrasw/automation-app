import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AddByThree from "./AddByThree";
import AddByFive from "./AddByFive";
import MinusUptoThree from "./MinusUptoThree"
import "../style/About.css"


const About = () => {
return (
  <div class="aboutBottom">
      <Router>
        <div class="mathlinks">
      <Link to="/addByThree" style={{ color: 'white' }}> ▢ Add By 3 ▢ </Link>
      <Link to="/addByFive" style={{ color: 'white' }}> ▢ Add By 5 ▢ </Link>
      <Link to="/MinusUptoThree" style={{ color: 'white' }}> ▢ Minus Upto 3 ▢ </Link>
      </div>
        <Switch>
          <Route path="/addByThree"  exact component={AddByThree} />
          <Route path="/addByFive"  exact component={AddByFive} />
          <Route path="/MinusUptoThree"  exact component={MinusUptoThree} />
        </Switch>
      </Router> 
      
  </div>
)};

export default About;
