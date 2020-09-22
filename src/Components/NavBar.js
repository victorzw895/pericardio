import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const pages = ["Pericardio", "Contactanos", "Blog", "Servicios", "Productos"];

  return (
    <div id="navBar">
      <ul>
        {pages.map((page) => (
          <Link to={`/${page.toLowerCase()}`}>
            <li>
              <span>{page}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
