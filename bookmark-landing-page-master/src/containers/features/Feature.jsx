import React, { useState } from "react";
import Button from "../../components/button/Button";
import tab1 from "../../assets/features-tab-1.svg";
import tab2 from "../../assets/features-tab-2.svg";
import tab3 from "../../assets/features-tab-3.svg";
import "./feature.css";

export default function Feature() {
  const [activeTab, setActiveTab] = useState({ tab1: true });

  return (
    <div className="bm__features flow" id="features">
      <div className="bm__features_container | text-center">
        <h2 className="bm__features_container-heading secondary-heading">
          Features
        </h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="bm__features_tabs">
        <div className="bm__features_tab-links">
          <span
            onClick={() => setActiveTab({ tab1: true })}
            className={`bm__features_tab-link ${
              activeTab.tab1 ? "link-active" : null
            }`}
          >
            Simple Bookmarking
          </span>
          <span
            onClick={() => setActiveTab({ tab2: true })}
            className={`bm__features_tab-link ${
              activeTab.tab2 ? "link-active" : null
            }`}
          >
            Speedy Searching
          </span>
          <span
            onClick={() => setActiveTab({ tab3: true })}
            className={`bm__features_tab-link ${
              activeTab.tab3 ? "link-active" : null
            }`}
          >
            Easy Sharing
          </span>
        </div>
        <div className="bm__features_tabs-content text-center-sm">
          {activeTab?.tab1 && (
            <div className="bm__features_tabs_tab | even-columns">
              <div className="bm__features_tabs_tab-image">
                <img src={tab1} alt="tab1-image" />
              </div>
              <div className="bm__features_tabs_tab-content">
                <h2 className="secondary-heading">Bookmark in one click</h2>
                <p>
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
                <Button text="More info" />
              </div>
            </div>
          )}

          {activeTab?.tab2 && (
            <div className="bm__features_tabs_tab | even-columns">
              <div className="bm__features_tabs_tab-image">
                <img src={tab2} alt="tab2-image" />
              </div>
              <div className="bm__features_tabs_tab-content">
                <h2 className="secondary-heading">Intelligent search</h2>
                <p>
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.
                </p>
                <Button text="More info" />
              </div>
            </div>
          )}

          {activeTab?.tab3 && (
            <div className="bm__features_tabs_tab | even-columns">
              <div className="bm__features_tabs_tab-image">
                <img src={tab3} alt="tab3-image" />
              </div>
              <div className="bm__features_tabs_tab-content">
                <h2 className="secondary-heading">Share your bookmarks</h2>
                <p>
                  Easily share your bookmarks and collections with others.
                  Create a shareable link that you can send at the click of a
                  button.
                </p>
                <Button text="More info" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
