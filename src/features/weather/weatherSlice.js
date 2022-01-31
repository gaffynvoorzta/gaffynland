import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import openWeatherMapApi from "../../api/openWeatherMap";

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  ({ city, country }) => openWeatherMapApi.getWeather(city, country)
);

const cities = [["Aberdeen", "Uk"], ["Yakutsk", "Russia"], ["Timbuktu", "Mali"],
["Nuuk", "Greenland"], ["Hanga Roa", "Chile"], ["Medog", "China"], ["La Rinconada", "Peru"]];
const randCity = Math.floor(Math.random() * cities.length);
const randomCity = cities[randCity][0];
const randomCountry = cities[randCity][1];
export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    city: randomCity,
    country: randomCountry,
    metadata: {},
    temperature: "",
    wind: ""
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    }
  },
  extraReducers: {
    [getWeather.fulfilled]: (state, action) => {
      state.metadata = action.payload.weatherMetadata;
      state.temperature = action.payload.temperature;
      state.wind = action.payload.wind;
    }
  }
});

export const { setCity, setCountry } = weatherSlice.actions;

export default weatherSlice.reducer;
