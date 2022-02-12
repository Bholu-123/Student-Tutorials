import React from "react";
import styles from "../Style/Footer.module.css";
import { NavLink as Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.Container}>
      <div className={styles.Left}>
        <h3 className={styles.Title}>Institute</h3>
        <ul className={styles.List}>
          <Link to="/" className={styles.footerLink}>
            <li className={styles.ListItem}>Home</li>
          </Link>
          <Link to="/" className={styles.footerLink}>
            <li className={styles.ListItem}>About Us</li>
          </Link>
          <Link to="/gallery" className={styles.footerLink}>
            <li className={styles.ListItem}>Gallery</li>
          </Link>
          <Link to="/SSC" className={styles.footerLink}>
            <li className={styles.ListItem}>Courses</li>
          </Link>
        </ul>
      </div>

      <div className={styles.Center}>
        <h3 className={styles.Title}>Services</h3>
        <ul className={styles.List}>
          <Link to="/SSC" className={styles.footerLink}>
            <li className={styles.ListItem}>Courses</li>
          </Link>
          <Link to="/gallery" className={styles.footerLink}>
            <li className={styles.ListItem}>Our Events</li>
          </Link>
          <Link to="/contact" className={styles.footerLink}>
            <li className={styles.ListItem}>Contact Us</li>
          </Link>
        </ul>
      </div>

      <div className={styles.Right}>
        <h3 className={styles.Title}>Get in touch</h3>
        <ul>
          <Link to="/contact" className={styles.footerLink}>
            <li className={styles.ListItem}>Contact Us</li>
          </Link>
        </ul>
        <div className={styles.SocialContainer}>
          <div className={styles.SocialIcon}>
            <img src="./bxl-facebook.svg" className={styles.icon} />
          </div>
          <div className={styles.SocialIcon}>
            <img src="./bxl-google.svg" className={styles.icon} />
          </div>
          <div className={styles.SocialIcon}>
            <img src="./bxl-instagram.svg" className={styles.icon} />
          </div>
          <div className={styles.SocialIcon}>
            <img src="./bxl-twitter.svg" className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
