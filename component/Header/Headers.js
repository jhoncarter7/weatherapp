import React, { useState } from "react";
import classes from "./Header.module.css"
import Setting from "./Setting";

function Headers() {
  return (
 <header className={classes.header}> 
  <h1>weather</h1>
  <div className={classes.header_menu}>
    <p>Dasboard</p>
    <p>climate</p>
    <p>about Us</p>
  </div>

 <Setting/>

 </header>
    )
}

export default Headers;
