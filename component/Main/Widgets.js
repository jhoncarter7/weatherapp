import React from "react";
import classes from "./Widget.module.css";
import { useSelector } from "react-redux";
import Weather from "./Weather";
import Currency from "./Currency";
function Widgets() {
  const weatherData = useSelector((state) => state.widgets.weather);
  const currencyData = useSelector((state) => state.widgets.fetchCurrency);
   const cityCurrency = useSelector((state) => state.widgets.currency)

   
  return (
    <main className={classes.weatherCurrency}>
 {/* Weather data Table */}
      {weatherData ? weatherData.map((details) => (
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
        )) : <p>nothing</p>}

{/* currency data Table */}
      {currencyData ? currencyData.map((currencys) => (
        <Currency key={cityCurrency} updateDate={currencys.currenciesresp.meta.last_updated_at} CADkey={currencys.currenciesresp.data.CAD.code} CADvalue={currencys.currenciesresp.data.CAD.value} EURkey={currencys.currenciesresp.data.EUR.code} EURvalue={currencys.currenciesresp.data.EUR.value} USDkey={currencys.currenciesresp.data.USD.code} USDvalue={currencys.currenciesresp.data.USD.value}/>
      )) : <p>no currency</p>}
    </main>
  );
}

export default Widgets;

