import React from "react";

const Navbar = () => {
  return (
    <nav>
      <img src="images/logo.png" alt="" class="logo" />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <a href="#" class="btn">
        Hire Me
      </a>
    </nav>
  );
};

export default Navbar;
