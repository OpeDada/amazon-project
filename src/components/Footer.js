import React from "react";
import "../assets/stylesheets/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <p>Back to Top</p>
      </div>
      <div className="footer__links">
        <div className="footer__linkarea">
          <span>Link 1</span>
        </div>
        <div className="footer__linkarea">
          <span>Link 2</span>
        </div>
        <div className="footer__linkarea">
          <span>Link 3</span>
        </div>
        <div className="footer__linkarea">
          <span>Link 4</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
