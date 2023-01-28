const axios = require("axios");

const axiosInstance = () => {
  axios.defaults.headers.common["x-api-key"] = process.env.CAT_TOKEN;
  return axios;
};

module.exports = axiosInstance;
