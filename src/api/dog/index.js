const API_URL=`https://immense-dusk-80893-7d5edccb4ae5.herokuapp.com/https://dog.ceo/api/breeds/image/random`;

export const getDog = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  console.log(json);
  console.log(json.message);
  const dog = (json.message);

  return {
    dog: dog
  }
};

const dogApi = {
  getDog
};

export default dogApi;
