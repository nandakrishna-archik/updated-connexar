import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./header.css";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="container">
            <NavLink to="/" className="navbar-brand">
              <img src={logo} className="d-inline-block align-top" alt="" />
            </NavLink>
            <nav className="my-auto">
              <button className="hm-btn1">
                <span> Open Live Account</span>
              </button>
              <button className="hm-btn">
                <span>Open Demo Account</span>
              </button>
            </nav>
          </div>
        </nav>
        <div className="down_nav">
          <ul className="fst_sub">
            <li>
              <NavLink to="/">Account types</NavLink>
              <ul className="submenu">
                <li>
                  <a href="index.html">MT5 Account Types</a>
                </li>
                <li>
                  <a href="index-v2.html">Tradable Instruments</a>
                </li>
                <li>
                  <a href="index-v3.html">Spread Details</a>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/">Funding</NavLink>
            </li>
            <li>
              <NavLink to="/">Trading platforms</NavLink>
            </li>
            <li>
              <NavLink to="/">Partnerships</NavLink>
            </li>
            <li>
              <NavLink to="/">Bonus</NavLink>
            </li>
            <li>
              <NavLink to="/">Forex Tools</NavLink>
            </li>
            <li>
              <NavLink to="/">Client Support</NavLink>
            </li>
            <li>
              <button className="login-btn btn1">Login</button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
