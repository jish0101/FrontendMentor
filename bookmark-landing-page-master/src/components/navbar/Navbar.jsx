import React, { useState } from "react";
import "./navbar.css";
import Button from "../button/Button";
import iconHamburger from '../../assets/icon-hamburger.svg'
import close from '../../assets/icon-close.svg'
import logoDark from "../../assets/logo-bookmark.svg";
import logoLight from "../../assets/logo-light.svg";
import fbLight from "../../assets/fb-light.svg";
import twitterLight from "../../assets/twitter-light.svg";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className="bm__navbar">
        <div className="bm__navbar-links">
          <div className="bm__navbar-links_logo">
            {!toggleMenu && <img src={logoDark} alt="logo" />}
            {toggleMenu && <img src={logoLight} alt="logo" />}
          </div>
          <div>
            <ul className="bm__navbar-links_container">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <Button text="LOGIN" dataType="red" />
            </ul>
          </div>
          {toggleMenu ? (
            <button id="toggle" onClick={() => setToggleMenu(false)}>
              <span><img src={close} alt="" /></span>
            </button>
          ) : (
            <button id="toggle" onClick={() => setToggleMenu(true)}>
              <img src={iconHamburger} alt="" />
            </button>
          )}
        </div>
        {toggleMenu && (
          <div className="bm__navbar-menu">
            <div className="bm__navbar-menu_links">
              <div>
                <ul className="bm__navbar-menu_links_container">
                  <li>
                    <a href="">Features</a>
                  </li>
                  <li>
                    <a href="">Pricing</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                </ul>
                <button className="btn">Login</button>
              </div>
              <div className="bm__navbar-menu_links_socials">
                <img src={fbLight} alt="fb-icon" />
                <img src={twitterLight} alt="twitter-icon" />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
