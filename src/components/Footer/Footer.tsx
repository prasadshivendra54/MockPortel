import React from "react";
import logoWhite from '../../images/logoWhite.png'

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row  wow bounceInLeft" data-wow-delay="0.3s">
          <div className="col-sm-12">
            <img
              src={logoWhite}
              className="img-fluid footer_logo"
              alt=""
            />
          </div>
          <div className="col-sm-4">
            <h4 className="footer_title">Address</h4>
            <p>
              74 Crown Street, London
              <br /> Zip code: W1A9SG
            </p>
          </div>
          <div className="col-sm-4">
            <h4 className="footer_title">Contact</h4>
            <ul className="footer_list">
              <li className="mb-1">
                <img src="images/phoneWhite.png" className="img-fluid" alt="" />{" "}
                <a href="tel:9876443214569">9876443214569</a>,{" "}
                <a href="tel:9876443214569">9876443214569</a>
              </li>
              <li className="mb-1">
                <img src="images/mailWhite.png" className="img-fluid" alt="" />{" "}
                <a href="mailto:designer@help.com">designer@help.com</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h4 className="footer_title">Social Links</h4>
            <ul className="footer_list2">
              <li className="mb-1">
                <a href="https://www.facebook.com/">
                  <img
                    src="images/facebookWhite.png"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </li>
              <li className="mb-1">
                <a href="https://www/twitter.com">
                  <img src="images/twitterWhite.png" className="img-fluid" alt="" />
                </a>
              </li>
              <li className="mb-1">
                <a href="https://www.instagram.com">
                  <img src="images/instagram.png" className="img-fluid" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
