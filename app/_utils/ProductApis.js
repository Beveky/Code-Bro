const { default: axiosClient } = require("./axiosClient");

const getLatestProducts = () =>
  axiosClient.get(
    "https://codebro-backend.onrender.com/api/products?populate=*"
  );

const getProductById = (id) =>
  axiosClient.get(
    `https://codebro-backend.onrender.com/api/products/${id}?populate=*`
  );

const getProductByCategory = (category) =>
  axiosClient.get(
    `https://codebro-backend.onrender.com/api/products?filters[category][$eq]=${category}&populate=*`
  );

export default { getLatestProducts, getProductById, getProductByCategory };
