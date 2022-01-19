import React from "react";
import styles from "../Style/Footer.module.css";

function Footer() {
  return (
    <div className={styles.Container}>
      <div className={styles.Left}>
        <h3 className={styles.Title}>Company</h3>
        <ul className={styles.List}>
          <li className={styles.ListItem}>Home</li>
          <li className={styles.ListItem}>About Us</li>
          <li className={styles.ListItem}>Gallery</li>
          <li className={styles.ListItem}>Corses</li>
        </ul>
      </div>

      <div className={styles.Center}>
        <h3 className={styles.Title}>Services</h3>
        <ul className={styles.List}>
          <li className={styles.ListItem}>SSC batch</li>
          <li className={styles.ListItem}>8th and 9th</li>
          <li className={styles.ListItem}>Our Events</li>
          <li className={styles.ListItem}>Contact Us</li>
        </ul>
      </div>

      <div className={styles.Right}>
        <h3 className={styles.Title}>Get in touch</h3>
        <ul>
          <li className={styles.ListItem}>Contact Us</li>
          <li className={styles.ListItem}>Site Map</li>
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
