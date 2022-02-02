require('dotenv').config();
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}&units=metric`;

export const getWeather = async (city, country) => {
  const response = await fetch(`${API_URL}&q=${city},${country}`);
  const json = await response.json();
  console.log(json.wind);
  const wind = Math.floor(json.wind.speed * 2.237);
  
  return {
    weatherMetadata: json.weather[0],
    temperature: json.main.temp,
    wind: wind
  };
};

const openWeatherMapApi = {
  getWeather
};

export default openWeatherMapApi;
