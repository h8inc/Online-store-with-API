import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavigationMenu(props) {
  return (
    <div>
      <div className="font-bold py-3">Menu</div>

      <ul className="border-t py-3 items-left text-teal-500">
        <li className="border-b py-3 items-left">
          <Link
            to="/"
            className="text-green-700"
            p-3
            font-bold
            onClick={props.closeMenu}
          >
            Home
          </Link>
        </li>
        <li className="border-b py-3 items-left">
          <Link
            to="/about"
            className="text-green-700"
            p-3
            font-bold
            onClick={props.closeMenu}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
