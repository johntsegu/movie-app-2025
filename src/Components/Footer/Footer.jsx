import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer_outer_container}>
      <div className={styles.footer_inline_container}>
        <div className={styles.footer_icons}>
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className={styles.footer_data}>
          <div>
            <ul>
              <li>Audio Descripition</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help center </li>
              <li> Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms Of Uses</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className={styles.service_code}>
          <p>Service Code</p>
        </div>
        <div className={styles.copy_write}>
          
          &copy; 1997-2025 Netfilix, Inc.
        </div>
      </div>
    </div>
  );
};

export default Footer;
