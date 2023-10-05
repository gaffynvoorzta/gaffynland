//const API_URL = `https://api.thecatapi.com/v1/images/search&limit=5&api_key=${process.env.REACT_APP_CAT_ACCESS_KEY}`;
const API_URL = `https://immense-dusk-80893.herokuapp.com/https://api.thecatapi.com/v1/images/search`;
//const API_URL2 = `https://calm-ravine-80567.herokuapp.com/https://aws.random.cat/meow?ref=apilist.fun`

export const getCat = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  console.log(json);
  console.log(json[0].url);
  const cat = json[0].url;

  return {
    cat: cat,
  }
};

const catApi = {
  getCat
};

export default catApi;
