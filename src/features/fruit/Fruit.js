import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFruit } from "./fruitSlice";

const Fruit = () => {
  const { fruit, genus, family, fruit2, genus2, family2,
fruit3, genus3, family3 } = useSelector((state) => state.fruit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFruit());
  }, [dispatch]);

  return (
    <div id="fruit">
      <h3> <abbr title="the prize is winning itself... (anyone else think they sound like
        Harry Potter spells when you read out the middle line?)">
        Rewardless Latin Fruit Machine</abbr> </h3>
      <p className="fruit-name">“{fruit} {fruit2} {fruit3}”</p>
      <p className="fruit-name">“{genus} {genus2} {genus3}”</p>
      <p className="fruit-name">“{family} {family2} {family3}”</p>
    </div>
  );
};

export default Fruit;