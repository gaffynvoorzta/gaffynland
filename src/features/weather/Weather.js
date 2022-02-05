import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "./weatherSlice";

const Weather = () => {
  const { metadata, temperature, wind, city, country } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather({ city, country }));
  }, [dispatch, city, country]);

  return (
    <div className="weather">
      <div className="temperature-container">
        <img
          src={`https://openweathermap.org/img/wn/${metadata.icon}@2x.png`}
          alt=""
        />
        <div className="weather-text">
          <p className="weather-description">{city}, {country}</p>
          <p className="temperature">Yo temp: {temperature}°C</p>
          <p className="weather-description">Yo weather: {metadata.description}</p>
          <p className="weather-description">Yo wind: {wind} mph</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
