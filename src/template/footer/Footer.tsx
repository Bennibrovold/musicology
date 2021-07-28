import React from "react";

import "./Footer.scss";
import PageCentre from "./../../components/PageCentre/PageCentre";

import Instagram from "../../assets/images/instagram.png";
import Facebook from "../../assets/images/facebook.png";
import Twitter from "../../assets/images/twitter.png";
import WhatsApp from "../../assets/images/whatsapp.png";

const Footer = () => {
  return (
    <footer>
      <PageCentre>
        <div className="section-group">
          <div className="section-item">
            <div className="title">Musicology</div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at
              dignissim enim.
            </div>
            <div className="socials">
                <div className="social-item"><img alt={"instagram"} src={Instagram} /></div>
                <div className="social-item"><img alt={"facebook"} src={Facebook} /></div>
                <div className="social-item"><img alt={"twitter"} src={Twitter} /></div>
                <div className="social-item"><img alt={"whatsapp"} src={WhatsApp} /></div>
            </div>
          </div>
          <div className="section-item">
            <div className="title">About</div>
            <ul>
              <li>History</li>
              <li>Our Team</li>
              <li>Brand Guidelines</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="section-item">
            <div className="title">Services</div>
            <ul>
              <li>How to Order</li>
              <li>Our Product</li>
              <li>Order Status</li>
              <li>Promo</li>
              <li>Payment Method</li>
            </ul>
          </div>
          <div className="section-item">
            <div className="title">Other</div>
            <ul>
              <li>Contact Us</li>
              <li>Help</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
      </PageCentre>
    </footer>
  );
};

export default Footer;
