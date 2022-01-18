import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__icons">
        <a href="https://fb.com" target="_blank">
          <FacebookIcon />
        </a>
        <a href="https://instagram.com" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com" target="_blank">
          <TwitterIcon />
        </a>
        <a href="https://linkedin.com" target="_blank">
          <LinkedInIcon />
        </a>
        <a href="https://youtube.com" target="_blank">
          <YouTubeIcon />
        </a>
      </div>
      <div className="footer__options">
        <Link to="/markdown/getMoobeesApp">Get Moobees App</Link>
        <Link to="/markdown/help">Help</Link>
        <Link to="/markdown/faqs">FAQs</Link>
        <Link to="/markdown/mooobeesDeveloper">Moobees Developer</Link>
        <Link to="/markdown/rankingMethod">Ranking Method</Link>
        <Link to="/markdown/conditionsOfUse">Conditions of Use</Link>
        <Link to="/markdown/privacyPolicy">Privacy Policy</Link>
        <Link to="/markdown/feedback">Feedback</Link>
        <Link to="/markdown/moobeesAPI">Moobees API</Link>
      </div>
      <div className="footer__copyright">
        All Rights Reserved &copy; Rohan Dhimal
      </div>
    </div>
  );
}

export default Footer;
