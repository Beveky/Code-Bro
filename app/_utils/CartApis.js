const { default: axiosClient } = require("./axiosClient");

const addToCart = (payload) =>
  axiosClient.post("https://codebro-backend.onrender.com/api/carts", payload);
const getUserCartItems = (email) =>
  axiosClient.get(
    `https://codebro-backend.onrender.com/api/carts?populate[products][populate]=banner&filters[email][$eq]=${email} `
  );
const deleteCartItem = (id) =>
  axiosClient.delete(`https://codebro-backend.onrender.com/api/carts/${id}`);

export default { addToCart, getUserCartItems, deleteCartItem };
