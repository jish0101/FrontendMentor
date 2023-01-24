import React from "react";
import "./header.css";
import headerImage from '../../assets/hero.svg'
import Button from "../../components/button/Button";

export default function Header() {
  return (
    <header className="bm__header | even-columns">
      <div className="bm__header_container | text-center-sm">
        <h1 className="bm__header_title primary-heading">
          A Simple Bookmark Manager
        </h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div>
        <Button className="btn" text="Get it on Chrome" />
        <Button className="btn" dataType="light" text="Get it on Firefox" />
        </div>
      </div>
      <div className="bm__header_image">
        <img src={headerImage} alt="header-img" />
      </div>
    </header>
  );
}
