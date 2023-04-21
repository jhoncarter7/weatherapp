import React, { Fragment } from "react";
import classes from "./Weather.module.css"
function Weather({ date, condition, avgTemp, minTem, maxTem,  maxWind}) {
  console.log(date);
  return (
    <Fragment>

<ul className={classes.weather_container}>
    <div className={classes.first_container}>
    <li>{condition} on </li>
    <li>{date}</li>
    </div>
    <div className={classes.sec_container}>
    <li>{avgTemp}*C Temperature from {minTem}  to {maxTem}*celsius, Wind {maxWind} kp/h</li>
    {/* <li>  </li> */}
    </div>
   
</ul>
<hr/>
</Fragment>
  );
}

export default Weather;
