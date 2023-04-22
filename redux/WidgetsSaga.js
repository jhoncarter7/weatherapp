import {call, put, takeEvery, all, select} from "redux-saga/effects"
import {widgetState} from "./WigetsSlice"
// import { useSelector } from "react-redux"

// const citylatlng = {
//     NewYork: "lat=40.7143&lon=-74.006",
//     london: "lat=40.7143&lon=-74.006",
//     // Dubai: "lat=25.2582&lon=55.3047",
//     // Mumbai: "lat=19.0144&lon=72.8479",
//     // Tokyo: "lat=35.6895&lon=139.6917",
//     // Moscow: "lat=55.7522&lon=37.6156",
//     // Toronto: "lat=443.700103&lon=-79.4163",

// }
// city: resWidget.location.name,
// country: resWidget.location.country,
// lat: resWidget.location.lat,
// lng: resWidget.location.lng,
// maxtemp: resWidget.forecast.forecastday.day.maxtemp_c,
// mintemp: resWidget.forecast.forecastday.day.mintemp_c,
// condition: resWidget.current.condition.text,
// wind: resWidget.current.wind_mph,
// cloud: resWidget.current.cloud,
// pressure: resWidget.current.pressure_mb,

// const citylatlng =[{city: "New York"}, {city: "london"} ]

// https://api.currencyapi.com/v3/latest?apikey=o0HtIYQhToLfxPUb7cWBOCvMoXA8olYWdq12eiWj&base_currency=USD&currencies=EUR%2CUSD%2CCAD

function* WorkgetWeatherFetch (){
    const citylatlng = yield select(state => state.widgets.citys)
console.log("sagacity", citylatlng)
    // const cities = Object.keys(citylatlng)
   if(citylatlng) {const widgets = yield  call(fetch, `https://api.weatherapi.com/v1/forecast.json?key=f5b2c47a0c784a14bf1135305231904&q=${citylatlng}&days=7`)
    const resWidget = yield widgets.json()
    yield put(widgetState.getWeatherData({resWidget}))
   
}else  return;
  
}

function* WorkgetCurrencyFetch () {
    const currency = yield select(state => state.widgets.currency)
    if(currency){
  const currenciesapi = yield call(fetch, `https://api.currencyapi.com/v3/latest?apikey=o0HtIYQhToLfxPUb7cWBOCvMoXA8olYWdq12eiWj&base_currency=${currency}&currencies=EUR%2CUSD%2CCAD`)
  const currenciesresp = yield currenciesapi.json()
  yield put(widgetState.getCurrencyData({currenciesresp}))
  console.log(currenciesapi)
  console.log("currencysaga")
} else return;

}

function* widgetSaga (){
    yield takeEvery('widgets/startSuccessCall', WorkgetWeatherFetch)
    yield takeEvery('widgets/startCurrencyCall', WorkgetCurrencyFetch)
}

export default widgetSaga







