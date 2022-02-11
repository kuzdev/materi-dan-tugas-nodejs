const express = require("express");
const routes = express.Router();

// Buat Memanggil file controller
const homeController = require("../controllers/index");
const productController = require("../controllers/products");
const detailController = require("../controllers/detail");

// Home index
routes.get("/", homeController.mainHome);
// Products
routes.get("/product", productController.mainProducts);
// Detail
routes.get("/detail", detailController.mainDetail);

module.exports = routes;
