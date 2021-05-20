import axios from "axios";

export const getFetch = (data) => {
  return axios(`http://localhost:1337/${data}`, {
    method: "GET",
  });
};
