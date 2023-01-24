import React from 'react'
import footerLogo from '../../assets/footer-logo.svg'
import fbLogo from '../../assets/fb-light.svg'
import twitterLogo from '../../assets/twitter-light.svg'
import './footer.css'

export default function Footer() {
  return (
    <div className="bm__footer">
      <div className="bm__footer_container | container">
          <ul className="bm__footer_nav">
          <img src={footerLogo} alt="footer-logo" />
            <li><a href="features">FEATURES</a></li>
            <li><a href="pricing">PRICING</a></li>
            <li><a href="contact">CONTACT</a></li>
          </ul>
          <div className="social-icons">
            <img src={fbLogo} alt="fb-logo" />
            <img src={twitterLogo} alt="twitter-logo" />
          </div>
      </div>
    </div>
  )
}
