import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDog } from "./dogSlice";

const Dog = () => {
  const { dog } = useSelector((state) => state.dog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDog());
  }, [dispatch]);

  return (
    <div id="dog">
        <h2 className="header-text">Dawg... Woof Woof!</h2> 
        <img
          className="dog-icon"
          src={dog}
          alt=""
        />
    </div>
  );
};

export default Dog;
