import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Logo/HeadingLogo.png";

const NavBar = () => {
  const navBarItems = (
    <React.Fragment>
      <li>
        <Link className="hover:text-secondary mr-3" to="/home">
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:text-secondary mr-3" to="/Explore">
          Explore
        </Link>
      </li>
      <li>
        <Link className="hover:text-secondary mr-3" to="/blogs">
          Blogs
        </Link>
      </li>
      <li>
        <Link className="hover:text-secondary mr-3" to="/about">
          About
        </Link>
      </li>
    </React.Fragment>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navBarItems}
          </ul>
        </div>
        <Link className="btn btn-ghost  normal-case text-xl">
          <img className="w-12 h-12 mr-4" src={logo} alt="" />
        </Link>
        <span className="uppercase text-secondary font-bold">
          Believe you can
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navBarItems}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-primary btn-outline btn-sm rounded-2xl">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
