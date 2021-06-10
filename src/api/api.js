import axios from "axios";

export const getFetch = (data) => {
  return axios(`https://immense-sea-29580.herokuapp.com/${data}`, {
    method: "GET",
  });
};
