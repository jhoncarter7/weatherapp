/* eslint-disable react/no-unescaped-entities */
import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerchild}>
        <h1>Company</h1>
        <p>Home</p>
        <p>Our Offerings</p>
        <p>Our Team</p>
        <p>Contact Us</p>
      </div>
      <div className={classes.footerchild}>
        <h1>Useful Link</h1>
        <p>Blogs</p>
        <p>FAQ's</p>
      </div>
      <div className={classes.footerchild}>
        <h1>Email</h1>
        <p>suppor@gamil.com</p>
        <h1>Phone No.</h1>
        <p>99182011++</p>
      </div>
    </footer>
  );
}

export default Footer;
