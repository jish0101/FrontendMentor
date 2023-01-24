import React from "react";
import Button from "../button/Button";
import seperator from '../../assets/bg-dots.svg'
import './card.css'

export default function Card(props) {
  return (
    <div className="bm__card">
          <img src={ props.image } alt="browser-image" />
          <span className="bm__card-heading">{props.heading}
          </span>
          <span className="bm__card-sub-heading">
              {props.subHeading}
          </span>
          <img src={seperator} alt="lines-svg" />
          <Button text="Add & install Extension" />
    </div>
  );
}
