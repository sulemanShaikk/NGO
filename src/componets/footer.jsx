import React from 'react';
import '../styles/Footer.css';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Empowering communities through sustainable initiatives.</p>
        </div>

        <div className="footer-section">
          <h3>Get Involved</h3>
          <p>Join our mission to make a positive impact.</p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; 2023 Shaik Suleman. All rights reserved.</p>
      </div>

      <div className="socials">
      <FaFacebook />
      <FaInstagram />
      <FaSquareXTwitter />
      <FaSnapchat />
      <SiGmail />
      <SiWhatsapp />
      <FcGoogle />
      </div>
    </footer>
  );
};

export default Footer;
