import React from "react";
import classes from "./Widget.module.css";
import { useSelector } from "react-redux";
import Weather from "./Weather";

function Widgets() {
  const weatherData = useSelector((state) => state.widgets.weather);
  const currencyData = useSelector((state) => state.widgets.fetchCurrency);
   const cityCurrency = useSelector((state) => state.widgets.currency)
  // console.log("store", cityName);
  // console.log("store", Object.keys(currencyData));
  // const somevalue = [currencyData.currenciesresp]
  console.log(currencyData)
   
  return (
    <main className={classes.weatherCurrency}>
 {/* Weather data Table */}
      {weatherData &&
        weatherData.map((details) => (
          <div className={classes.main_component} key={details.localtime_epoch}>
            <div
              style={{
                position: "absolute",
                top: "16%",
                display: "flex",
                gap: "1rem",
              }}
            >
              <p>{details.name}</p>
              <p>{details.country}</p>
            </div>
            <div className={classes.weather}>
              <h2>Weather</h2>
              <hr />
              {details.forecastday.map((eachday) => (
                <Weather
                  key={eachday.date}
                  date={eachday.date}
                  avgTemp={eachday.day.avgtemp_c}
                  minTem={eachday.day.mintemp_c}
                  maxTem={eachday.day.maxtemp_c}
                  maxWind={eachday.day.maxwind_kph}
                  condition={eachday.day.condition.text}
                />
              ))}
            </div>
          </div>
        ))}

{/* currency data Table */}
      {currencyData? currencyData.map((currencys) => (
          <div className={classes.main_component} key={cityCurrency}>
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
                <li>On {currencys.currenciesresp.meta.last_updated_at} {cityCurrency} rate is</li>
                <li> </li>
                </div>
                <div className={classes.sec_container}>
                <li>{currencys.currenciesresp.data.CAD.code}: {currencys.currenciesresp.data.CAD.value}, {currencys.currenciesresp.data.EUR.code}: {currencys.currenciesresp.data.EUR.value}, {currencys.currenciesresp.data.USD.code}: {currencys.currenciesresp.data.USD.value}</li>
                </div> 
              </ul>
              <hr />
              <ul>
              <div className={classes.first_container}>
                <li>On {currencys.currenciesresp.meta.last_updated_at} {cityCurrency} rate is</li>
                <li> </li>
                </div>
                <div className={classes.sec_container}>
                <li>{currencys.currenciesresp.data.CAD.code}: {currencys.currenciesresp.data.CAD.value}, {currencys.currenciesresp.data.EUR.code}: {currencys.currenciesresp.data.EUR.value}, {currencys.currenciesresp.data.USD.code}: {currencys.currenciesresp.data.USD.value}</li>
                </div> 
              </ul>
              <hr />
              
              <ul>
              <div className={classes.first_container}>
                <li>On {currencys.currenciesresp.meta.last_updated_at} {cityCurrency} rate is</li>
                <li> </li>
                </div>
                <div className={classes.sec_container}>
                <li>{currencys.currenciesresp.data.CAD.code}: {currencys.currenciesresp.data.CAD.value}, {currencys.currenciesresp.data.EUR.code}: {currencys.currenciesresp.data.EUR.value}, {currencys.currenciesresp.data.USD.code}: {currencys.currenciesresp.data.USD.value}</li>
                </div> 
              </ul>
              <hr />


              <ul>
              <div className={classes.first_container}>
                <li>On {currencys.currenciesresp.meta.last_updated_at} {cityCurrency} rate is</li>
                <li> </li>
                </div>
                <div className={classes.sec_container}>
                <li>{currencys.currenciesresp.data.CAD.code}: {currencys.currenciesresp.data.CAD.value}, {currencys.currenciesresp.data.EUR.code}: {currencys.currenciesresp.data.EUR.value}, {currencys.currenciesresp.data.USD.code}: {currencys.currenciesresp.data.USD.value}</li>
                </div> 
              </ul>
              <hr />


              <ul>
              <div className={classes.first_container}>
                <li>On {currencys.currenciesresp.meta.last_updated_at} {cityCurrency} rate is</li>
                <li> </li>
                </div>
                <div className={classes.sec_container}>
                <li>{currencys.currenciesresp.data.CAD.code}: {currencys.currenciesresp.data.CAD.value}, {currencys.currenciesresp.data.EUR.code}: {currencys.currenciesresp.data.EUR.value}, {currencys.currenciesresp.data.USD.code}: {currencys.currenciesresp.data.USD.value}</li>
                </div> 
              </ul>
              <hr />

              <ul>
              <div className={classes.first_container}>
                <li>On {currencys.currenciesresp.meta.last_updated_at} {cityCurrency} rate is</li>
                <li> </li>
                </div>
                <div className={classes.sec_container}>
                <li>{currencys.currenciesresp.data.CAD.code}: {currencys.currenciesresp.data.CAD.value}, {currencys.currenciesresp.data.EUR.code}: {currencys.currenciesresp.data.EUR.value}, {currencys.currenciesresp.data.USD.code}: {currencys.currenciesresp.data.USD.value}</li>
                </div> 
              </ul>
              <hr />

              <ul>
              <div className={classes.first_container}>
                <li>On {currencys.currenciesresp.meta.last_updated_at} {cityCurrency} rate is</li>
                <li> </li>
                </div>
                <div className={classes.sec_container}>
                <li>{currencys.currenciesresp.data.CAD.code}: {currencys.currenciesresp.data.CAD.value}, {currencys.currenciesresp.data.EUR.code}: {currencys.currenciesresp.data.EUR.value}, {currencys.currenciesresp.data.USD.code}: {currencys.currenciesresp.data.USD.value}</li>
                </div> 
              </ul>
              <hr />


            </div>
          </div>
        )): <p>no currency</p>}
    </main>
  );
}

export default Widgets;

