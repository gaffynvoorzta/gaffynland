import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBored } from "./boredSlice";

const Bored = () => {
  const { activity } = useSelector((state) => state.activity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBored());
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
    </div>
  );
};

export default Bored;