import React, { useState } from "react";
import Logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import "../style/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img width={250} height={90}  src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/about"> Addition </Link>
        </div>
      </div>
      <div className="rightSide">
        
        <Link to="/"> Home </Link>
        <Link to="/about"> Addition </Link>
        
        <button class="togglebtn" onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
    </div>
  </div>
  );
}

export default Navbar;