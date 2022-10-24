import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const user = true;
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo" >DoniyorbekTursunov</NavLink>
      {user ? (
        <button className="navbtn">login</button>
      ) : (
        <button className="navbtn">exit</button>
      )}
    </nav>
  );
}
