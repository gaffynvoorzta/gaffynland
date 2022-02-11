import React from "react";
import BackgroundImage from "./features/backgroundImage/BackgroundImage";
import Error from "./features/error/Error";
import BackgroundImageLeftControl from "./features/backgroundImage/components/BackgroundImageLeftControl";
import BackgroundImageRightControl from "./features/backgroundImage/components/BackgroundImageRightControl";
import Nav from "./Nav";
import Dog from "./features/dog/Dog";

function Extra() {
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
        <h1>Not a Cat</h1>
        <Dog />
      </main>
      <aside className="right-wallpaper-control wallpaper-control">
        <BackgroundImageRightControl />
      </aside>
      <footer>
      </footer>
    </div>
  );
}

export default Extra;
