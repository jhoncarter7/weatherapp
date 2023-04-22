import React from 'react'
import classes from "./Widget.module.css"
function Currency({currency, updateDate, CADkey, CADvalue, EURkey, EURvalue, USDkey, USDvalue}) {
  return (
    <div className={classes.main_component} key={currency}>
    <div
      style={{
        position: "absolute",
        top: "16%",
        display: "flex",
        gap: "1rem",
      }}>
      
    </div>

    <div className={classes.currency}>
      <h2>currency</h2>
      <hr />

      <ul>
      <div className={classes.first_container}>
        <li>On {updateDate} {currency} rate is</li>
        <li> </li>
        </div>
        <div className={classes.sec_container}>
        <li>{CADkey}: {CADvalue}, {EURkey}: {EURvalue}, {USDkey}: {USDvalue}</li>
        </div> 
      </ul>
      <hr />
      <ul>
      <div className={classes.first_container}>
        <li>On {updateDate} {currency} rate is</li>
        <li> </li>
        </div>
        <div className={classes.sec_container}>
        <li>{CADkey}: {CADvalue}, {EURkey}: {EURvalue}, {USDkey}: {USDvalue}</li>
        </div> 
      </ul>
      <hr />
      
      <ul>
      <div className={classes.first_container}>
        <li>On {updateDate} {currency} rate is</li>
        <li> </li>
        </div>
        <div className={classes.sec_container}>
        <li>{CADkey}: {CADvalue}, {EURkey}: {EURvalue}, {USDkey}: {USDvalue}</li>
        </div> 
      </ul>
      <hr />


      <ul>
      <div className={classes.first_container}>
        <li>On {updateDate} {currency} rate is</li>
        <li> </li>
        </div>
        <div className={classes.sec_container}>
        <li>{CADkey}: {CADvalue}, {EURkey}: {EURvalue}, {USDkey}: {USDvalue}</li>
        </div> 
      </ul>
      <hr />


      <ul>
      <div className={classes.first_container}>
        <li>On {updateDate} {currency} rate is</li>
        <li> </li>
        </div>
        <div className={classes.sec_container}>
        <li>{CADkey}: {CADvalue}, {EURkey}: {EURvalue}, {USDkey}: {USDvalue}</li>
        </div> 
      </ul>
      <hr />

      <ul>
      <div className={classes.first_container}>
        <li>On {updateDate} {currency} rate is</li>
        <li> </li>
        </div>
        <div className={classes.sec_container}>
        <li>{CADkey}: {CADvalue}, {EURkey}: {EURvalue}, {USDkey}: {USDvalue}</li>
        </div> 
      </ul>
      <hr />

      <ul>
      <div className={classes.first_container}>
        <li>On {updateDate} {currency} rate is</li>
        <li> </li>
        </div>
        <div className={classes.sec_container}>
        <li>{CADkey}: {CADvalue}, {EURkey}: {EURvalue}, {USDkey}: {USDvalue}</li>
        </div> 
      </ul>
      <hr />


    </div>
  </div>
  )
}

export default Currency