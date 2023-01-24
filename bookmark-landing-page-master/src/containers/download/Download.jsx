import React from "react";
import Card from "../../components/card/Card";
import './download.css'
import chrome from '../../assets/logo-chrome.svg'
import firefox from '../../assets/logo-firefox.svg'
import opera from '../../assets/logo-opera.svg'

export default function download() {
  return (
    <div className="bm__download">
      <div className="bm__download_container | text-center mx-auto">
        <h2 className="secondary-heading">Download the extension</h2>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className="bm__download_cards">
        <Card image={ chrome } heading="Add to Chrome" subHeading="Minimum version 62" />
        <Card image={ firefox } heading="Add to Firefox" subHeading="Minimum version 55" />
        <Card image={ opera } heading="Add to Opera" subHeading="Minimum version 46" />
      </div>
    </div>
  );
}
