const { default: axiosClient } = require("./axiosClient");

const createOrder = (data) =>
  axiosClient.post("https://codebro-backend.onrender.com/api/orders", data);

export default { createOrder };
