import axios from "axios";

export const api = axios.create({
  baseURL: "https://sheltered-meadow-49957.herokuapp.com/api",
});
