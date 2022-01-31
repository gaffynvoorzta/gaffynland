//const API_URL = `https://api.thecatapi.com/v1/images/search&limit=5&api_key=${process.env.REACT_APP_CAT_ACCESS_KEY}`;
const API_URL = `https://api.thecatapi.com/v1/images/search`;

export const getImage = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  console.log(json);
  console.log(json[0].url);

  return json[0].url;
  //return json.results.map((result) => result.urls.full);
};

const catApi = {
  getImage
};

export default catApi;
