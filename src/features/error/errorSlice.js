import { createSlice } from "@reduxjs/toolkit";
import { getBackgroundImage } from "../backgroundImage/backgroundImageSlice";
import { getQuote } from "../quote/quoteSlice";
import { getWeather } from "../weather/weatherSlice";
import { getFruit } from "../fruit/fruitSlice";
import { getJoke } from "../joke/jokeSlice";
import { getCat } from "../cat/catSlice";

export const errorSlice = createSlice({
  name: "errors",
  initialState: {
    errorMessage: "",
    retryHandler: null
  },
  reducers: {
    clearErrorMessage: (state) => {
      state.errorMessage = "";
      state.retryHandler = null;
    }
  },
  extraReducers: {
    [getBackgroundImage.rejected]: (state) => {
      state.errorMessage = "Getting image failed.";
      state.retryHandler = getBackgroundImage;
    },
    [getQuote.rejected]: (state) => {
      state.errorMessage = "Getting the quote failed.";
      state.retryHandler = getQuote;
    },
    [getWeather.rejected]: (state) => {
      state.errorMessage = "Getting the weather failed.";
      state.retryHandler = getWeather;
    },
    [getFruit.rejected]: (state) => {
      state.errorMessage = "Getting the fruit failed.";
      state.retryHandler = getFruit;
    },
    [getJoke.rejected]: (state) => {
      state.errorMessage = "Getting the joke failed.";
      state.retryHandler = getJoke;
    },
    [getCat.rejected]: (state) => {
      state.errorMessage = "Getting the cat failed.";
      state.retryHandler = getCat;
    }
  }
});

export const { clearErrorMessage } = errorSlice.actions;

export default errorSlice.reducer;
