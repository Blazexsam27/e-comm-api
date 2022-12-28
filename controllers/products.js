const products = require("../allProducts");

const getAllProducts = (req, res) => {
  try {
    res.send(products);
  } catch (error) {
    res.status(500).send({ msg: "INTERNAL ERROR OCCURED" });
  }
};
const getProductById = () => {};

module.exports = { getAllProducts, getProductById };
