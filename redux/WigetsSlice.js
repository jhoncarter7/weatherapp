import { createSlice } from "@reduxjs/toolkit";

const WidgetsSlice = createSlice({
  name: "widgets",
  initialState: {
    weather: [],
    currency: [],
    fetchCurrency: [],
    citys: [],
    isLoading: "false",
  },
  reducers: {
    startSuccessCall: (state, action) => {
        state.isLoading = "true"
        state.citys = action.payload
    },
    startCurrencyCall: (state, action) => {
    state.currency = action.payload
    },
    getWeatherData: (state, action) => {
      const weatherData = action.payload;
      if(weatherData){
        state.weather =  [{
            ...weatherData.resWidget.forecast,
            ...weatherData.resWidget.location,
        }]
        console.log(weatherData)
        console.log(weatherData.resWidget.forecast)
        
      }
      else return;

    },

    getCurrencyData: (state, action) => {
     const currencyData = action.payload;
     if(currencyData){
      state.fetchCurrency = [currencyData]
     } else return;
    },
 
  },
});

export const widgetState = WidgetsSlice.actions;

export default WidgetsSlice;
