const { allProducts, addProducts } = require("../controllers/productController");
const express = require("express");
const router = express.Router();

router.get("/", allProducts);
router.post("/add-product", addProducts);
module.exports = router;
