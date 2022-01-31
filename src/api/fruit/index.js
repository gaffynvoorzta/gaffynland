const fruits = [ "banana", "apple", "lemon", "strawberry", "raspberry",
"pineapple", "mango" ];
const randFruit = Math.floor(Math.random() * fruits.length);
const randFruit2 = Math.floor(Math.random() * fruits.length);
const randFruit3 = Math.floor(Math.random() * fruits.length);
const froot = fruits[randFruit];
const API_URL = `https://fruityvice.com/api/fruit/${froot}`;
const froot2 = fruits[randFruit2];
const API_URL2 = `https://fruityvice.com/api/fruit/${froot2}`;
const froot3 = fruits[randFruit3];
const API_URL3 = `https://fruityvice.com/api/fruit/${froot3}`;

export const getFruit = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  console.log(json);
  const res2 = await fetch(API_URL2);
  const res3 = await fetch(API_URL3);
  const json2 = await res2.json();
  const json3 = await res3.json();
  const fruit = json.name;
  const genus = json.genus;
  const family = json.family;
  const fruit2 = json2.name;
  const genus2 = json2.genus;
  const family2 = json2.family;
  const fruit3 = json3.name;
  const genus3 = json3.genus;
  const family3 = json3.family;
  //const order = json.order;
  return {
    fruit: fruit,
    genus: genus,
    family: family,
    fruit2: fruit2,
    genus2: genus2,
    family2: family2,
    fruit3: fruit3,
    genus3: genus3,
    family3: family3
  };
};
const fruitApi = {
  getFruit
};

export default fruitApi;