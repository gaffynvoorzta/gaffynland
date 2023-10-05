//const API_URL = `https://calm-ravine-80567.herokuapp.com/https://gaffynblog.netlify.app/api/hello`;
const API_URL = `https://immense-dusk-80893-7d5edccb4ae5.herokuapp.com/https://gaffynblog.netlify.app/api/hello`;

export const getGaffynBlog = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  const blogapi = json.text;

  return {
    blogapi: blogapi  
  };
};
const gaffynBlogApi = {
  getGaffynBlog
};

export default gaffynBlogApi;
