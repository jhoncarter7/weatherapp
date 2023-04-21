import React from 'react'
import classes from "./Setting.module.css"
import { useState } from 'react'
import { widgetState } from "@/redux/WigetsSlice";
import { useDispatch } from "react-redux";

function Setting() {
    const dispatch = useDispatch()
    const [weatherradio, setWeatherradio] = useState("")
    const [currencyradio, setCurrencyradio] = useState("")
    const [cityName, setCityName] = useState()
    const [countryCurrency, setCountryCurrency] = useState()


  const cityWeather = () => {
    dispatch(widgetState.startSuccessCall(cityName))
   
  }
 const dispatchCurrency = () => {
  dispatch(widgetState.startCurrencyCall(countryCurrency))

 }

  const radiofunc = () => {
    setWeatherradio(false)
    setCurrencyradio(false)
  }

  return (
    <div className={classes.container}>
    <div> Setting </div>
    <ul className={classes.dropdown}>
      <li>
        <input type="radio" name="country" id="option1"  onClick={()=> {radiofunc(false), setCityName("New York"), setCountryCurrency("USD")} }    />
        <label htmlFor="option1">U.S - New York</label>
      </li>
      <li>
        <input type="radio" name="country" id="option2"  onClick={()=> {radiofunc(false), setCityName("london"), setCountryCurrency("GBP")}}/>
        <label htmlFor="option2">U.K - London</label>
      </li>
      <li>
        <input type="radio" name="country" id="option3" onClick={()=> {radiofunc(false), setCityName("Dubai"), setCountryCurrency("AED")}}/>
        <label htmlFor="option3">UAE-Dubai</label>
      </li>
      <li>
        <input type="radio" name="country" id="option4"  onClick={()=>{ radiofunc(false), setCityName("Mumbai"), setCountryCurrency("INR")}} />
        <label htmlFor="option4">India- Mumbai</label>
      </li>
      <li>
        <input type="radio" name="country" id="option5" onClick={()=> {radiofunc(false), setCityName("Tokyo"), setCountryCurrency("JPY")}}/>
        <label htmlFor="option5">Japan- Tokyo</label>
      </li>
      <li>
        <input type="radio" name="country" id="option6" onClick={()=> {radiofunc(false), setCityName("Moscow"), setCountryCurrency("RUB")}}/>
        <label htmlFor="option6">Russia- Moscow</label>
      </li>
      <li>
        <input type="radio" name="country" id="option7" onClick={()=> {radiofunc(false), setCityName("Toronto"), setCountryCurrency("CAD")}}/>
        <label htmlFor="option7">Canada - Toronto</label>
      </li>
    </ul>
    <ul className={classes.dropdown_drop}>
      <li>
        <input type="radio" name="weather" id="weather" checked={weatherradio} onChange={()=>{}} onClick={() => {setWeatherradio(true), cityWeather()}}/>
        <label htmlFor="weather">weather</label>
      </li>
      <li>
        <input type="radio" name="currency" id="currency" checked={currencyradio} onChange={()=>{}} onClick={() => {setCurrencyradio(true), dispatchCurrency()}}/>
        <label htmlFor="currency">currency</label>
      </li>
    </ul>
    </div>

);
  
}

export default Setting