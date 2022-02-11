import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCat } from "./catSlice";

const Cat = () => {
  const { cat } = useSelector((state) => state.cat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCat());
  }, [dispatch]);

  return (
    <div id="cat">
        <h2 className="header-text">Aw lil kitties... Meeeow!</h2> 
        <img
          className="cat-icon"
          src={cat}
          alt=""
        />
    </div>
  );
};

export default Cat;
