const imgquery = [ "demons", "clowns", "pills", "vegetables", "worms", "riots" ];
const rand = Math.floor(Math.random() * imgquery.length);
console.log(imgquery.length);
console.log(rand);
const img = imgquery[rand];
console.log(img);
require('dotenv').config();
const API_URL = `https://api.unsplash.com/search/photos?query=${img}&page=1&per_page=5&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
console.log(API_URL);

export const getImage = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();

  return json.results.map((result) => result.urls.full);
};

const unsplashApi = {
  getImage
};

export default unsplashApi;
