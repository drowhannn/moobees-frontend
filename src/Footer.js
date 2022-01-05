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
        <Link>
          <FacebookIcon />
        </Link>
        <Link>
          <InstagramIcon />
        </Link>
        <Link>
          <TwitterIcon />
        </Link>
        <Link>
          <LinkedInIcon />
        </Link>
        <Link>
          <YouTubeIcon />
        </Link>
      </div>
      <div className="footer__options">
        <Link>Get Moobees App</Link>
        <Link>Help</Link>
        <Link>FAQs</Link>
        <Link>Moobees Developer</Link>
        <Link>Ranking Method</Link>
        <Link>Conditions of Use</Link>
        <Link>Privacy Policy</Link>
        <Link>Feedback</Link>
        <Link>Moobees API</Link>
      </div>
      <div className="footer__copyright">
        All Rights Reserved &copy; Rohan Dhimal
      </div>
    </div>
  );
}

export default Footer;
