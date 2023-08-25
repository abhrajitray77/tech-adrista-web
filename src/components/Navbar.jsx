import React from "react";
import './../index.css'
import './../styles/Navbar.css'
const Navbar = () => {
  return (
    <nav class="navbar">
      <h1 class="logo">Elena Joy</h1>
        <ul class="nav-ul">
          <li class="nav-li">About</li>
          <li class="nav-li">Work</li>
          <li class="nav-li">Contact</li>
        </ul>
    </nav>
  );
};

export default Navbar;
