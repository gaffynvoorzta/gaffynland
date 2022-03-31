const API_URL = `https://calm-ravine-80567.herokuapp.com/https://www.boredapi.com/api/activity`;

export const getBored = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  const activity = json.activity;
  //console.log(activity);
  return {
    activity: activity
  };
};
const boredApi = {
  getBored
};

export default boredApi;