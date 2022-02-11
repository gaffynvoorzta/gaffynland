import React from "react";
import BackgroundImage from "./features/backgroundImage/BackgroundImage";
import Error from "./features/error/Error";
import BackgroundImageLeftControl from "./features/backgroundImage/components/BackgroundImageLeftControl";
import BackgroundImageRightControl from "./features/backgroundImage/components/BackgroundImageRightControl";
import Nav from "./Nav";
import Cat from "./features/cat/Cat";

function About() {
  return (
    <div className="App">
      <BackgroundImage />
      <header>
        <Nav />
        <Error />
      </header>
      <aside className="left-wallpaper-control wallpaper-control">
        <BackgroundImageLeftControl />
      </aside>
      <main>
        <h1>Not a Dog</h1>
        <Cat />
      </main>
      <aside className="right-wallpaper-control wallpaper-control">
        <BackgroundImageRightControl />
      </aside>
      <footer>
      </footer>
    </div>
  );
}

export default About;
