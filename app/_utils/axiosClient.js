const { default: axios } = require("axios");

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl = "https://codebro-backend.onrender.com/api";

const axiosClient = axios.create({
  baseURl: "https://codebro-backend.onrender.com/api",
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export default axiosClient;
