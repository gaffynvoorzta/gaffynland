const API_URL = `https://calm-ravine-80567.herokuapp.com/https://www.boredapi.com/api/activity`;
const API_URL2 = `https://calm-ravine-80567.herokuapp.com/https://axoltlapi.herokuapp.com/`;
const API_URL3 = `https://calm-ravine-80567.herokuapp.com/https://catfact.ninja/fact`;
const API_URL4 = `https://calm-ravine-80567.herokuapp.com/https://gaffynblog.netlify.app/api/hello`;

export const getJoke = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  const activity = json.activity;
  //console.log(activity);
  const response3 = await fetch(API_URL3);
  const json3 = await response3.json();
  const joke = json3.fact;
  //console.log(json3);
  const response2 = await fetch(API_URL2);
  const json2 = await response2.json();
  var axoltl = json2.facts;
  if (Math.floor(Math.random() * 2) === 1) {
    axoltl = json3.fact;
  }
  //console.log(axoltl);
  const response4 = await fetch(API_URL4);
  const json4 = await response4.json();
  const blogapi = json4.text;

  return {
    joke: joke,
    axoltl: axoltl,
    activity: activity,
    blogapi: blogapi  
  };
};
const jokeApi = {
  getJoke
};

export default jokeApi;