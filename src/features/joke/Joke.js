import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJoke } from "./jokeSlice";

const Joke = () => {
  const { activity, axoltl } = useSelector((state) => state.joke);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJoke());
  }, [dispatch]);

  return (
    <div id="quote">
      <h3> <abbr title="If you're mental... Let a computer decide what you're
      gonna do for you!">Activity Suggestion Suggester Center</abbr></h3>
      <p className="quote-author">Bored...? Hey why not:</p>
      <p className="quote-joke">“{activity}”</p>
      <p className="quote-author">If you like that sort of thing. Oh I dunno.
      Go for a bloody walk then or summink!</p>
      <p></p>
      <h3> <abbr title="CaxtaFactolotl...">Cat or maybe Axolotl Factinator</abbr></h3>
      <p className="axolotl"> {axoltl}</p>
    </div>
  );
};

export default Joke;