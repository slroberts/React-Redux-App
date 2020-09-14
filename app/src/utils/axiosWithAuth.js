import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL:
      "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json",
  });
};
