import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <section className="ft-main">
        <div className="ft-main-item">
          <h2 className="ft-title">Abstract</h2>
          <ul>
            <li>
              <a href="#">Branches</a>
            </li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Resources</h2>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Release Notes</a>
            </li>
            <li>
              <a href="#">Status</a>
            </li>
          </ul>
        </div>
        <div classNameName="ft-main-item">
          <h2 className="ft-title id1">Community</h2>
          <ul>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Dribbble</a>
            </li>
            <li>
              <a href="#">Podcast</a>
            </li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Company</h2>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
            <br />
            <li>
              <a className="cont" href="#">
                Contact Us
              </a>
              <p>info@abstract.com</p>
            </li>
          </ul>
        </div>
        <div className="ft-main-item css">
          <h2 className="ft-title">Contact Us</h2>
          <p>&#169; copyright 2022</p>
          <p>Abstract Studio Design, Inc.</p>
          <p>All rights reserved</p>
        </div>
      </section>
    </div>
  );
}
