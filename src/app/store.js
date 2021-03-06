import { configureStore } from "@reduxjs/toolkit";
import backgroundImageReducer from "../features/backgroundImage/backgroundImageSlice";
import journalReducer from "../features/journal/journalSlice";
import quoteReducer from "../features/quote/quoteSlice";
import weatherReducer from "../features/weather/weatherSlice";
import errorReducer from "../features/error/errorSlice";
import jokeReducer from "../features/joke/jokeSlice";
import fruitReducer from "../features/fruit/fruitSlice";
import catReducer from "../features/cat/catSlice";
import dogReducer from "../features/dog/dogSlice";
//import boredReducer from "../features/bored/boredSlice";
//import gaffynBlogReducer from "../features/gaffynBlog/gaffynBlogSlice";

export default configureStore({
  reducer: {
    backgroundImage: backgroundImageReducer,
    weather: weatherReducer,
    quote: quoteReducer,
    journal: journalReducer,
    error: errorReducer,
    joke: jokeReducer,
    fruit: fruitReducer,
    cat: catReducer,
    dog: dogReducer
  }
});
