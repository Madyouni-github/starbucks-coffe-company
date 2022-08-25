import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
    <div className="divider" />
      <div className="footer-container">
        <div className="social">
          <a href="https://facebook.com">
            <img src="img/social-facebook.svg" alt="" />
          </a>
          <a href="https://instagram.com">
            <img src="img/social-instagram.svg" alt="" />
          </a>
          <a href="https://youtube.com">
            <img src="img/social-youtube.svg" alt="" />
          </a>
          <a href="https://twitter.com">
            <img src="img/social-twitter.svg" alt="" />
          </a>
        </div>
        <p>© 2022 Starbucks Coffee Company. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
