import React from "react";
//import Nav from './Nav';
import BackgroundImage from "./features/backgroundImage/BackgroundImage";
import Weather from "./features/weather/Weather";
import Fruit from "./features/fruit/Fruit";
import Error from "./features/error/Error";
import Journal from "./features/journal/Journal";
import BackgroundImageLeftControl from "./features/backgroundImage/components/BackgroundImageLeftControl";
import BackgroundImageRightControl from "./features/backgroundImage/components/BackgroundImageRightControl";
import Joke from "./features/joke/Joke";
//import Bored from "./features/bored/Bored";
//import GaffynBlog from "./features/gaffynBlog/GaffynBlog";

function Home() {
  return (
    <div className="App">
      <BackgroundImage />
      <header>
        <Error />
      </header>
      <aside className="left-wallpaper-control wallpaper-control">
        <BackgroundImageLeftControl />
      </aside>
      <main>
        <Weather />
        <Journal />
        <Fruit />
        <Joke />
      </main>
      <aside className="right-wallpaper-control wallpaper-control">
        <BackgroundImageRightControl />
      </aside>
      <footer>
        <p>Work in Progress... Does this look like an inspirational homepage to you?</p>
        <p>Gaffyn Voorzta 2022... Refresh page to change stuff!</p>
        <p>Thanks to....  Unsplash, FruityVice, OpenWeather, AxoltlApi, CatFact, BoredApi, DogApi, CatApi...</p>
      </footer>
    </div>
  );
}

export default Home;
