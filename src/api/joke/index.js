const API_URL = `https://www.boredapi.com/api/activity`;
const API_URL2 = `https://axoltlapi.herokuapp.com/`;
const API_URL3 = `https://catfact.ninja/fact`;


export const getJoke = async () => {
  const response = await fetch(API_URL, { mode: 'cors'});
  const json = await response.json();
  const activity = json.activity;
  //console.log(activity);
  const response3 = await fetch(API_URL3, { mode: 'cors'});
  const json3 = await response3.json();
  const joke = json3.fact;
  //console.log(json3);
  const response2 = await fetch(API_URL2, { mode: 'cors'});
  const json2 = await response2.json();
  var axoltl = json2.facts;
  if (Math.floor(Math.random() * 2) === 1) {
    axoltl = json3.fact;
  }
  //console.log(axoltl);
  return {
    joke: joke,
    axoltl: axoltl,
    activity: activity  
  };
};
const jokeApi = {
  getJoke
};

export default jokeApi;