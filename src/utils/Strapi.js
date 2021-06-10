import Strapi from "strapi-sdk-javascript/build/main";

const apiUrl =
  process.env.API_URL || "https://immense-sea-29580.herokuapp.com/";
const strapi = new Strapi(apiUrl);

export default strapi;
export { apiUrl };
