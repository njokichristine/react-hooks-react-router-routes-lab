import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const navStyle= {
    display: "grid",
    // backgroundColor: "green"
    // listStyleType: "circle"
  }
  return(
<div className='navbar'style={navStyle}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/movies'>Movies</NavLink>
      <NavLink to='/directors'>Directors</NavLink>
      <NavLink to='/actors'>Actors</NavLink>
    </div>
)}

export default NavBar;
