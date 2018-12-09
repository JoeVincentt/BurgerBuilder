import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-by-eb.firebaseio.com/"
});

export default instance;
