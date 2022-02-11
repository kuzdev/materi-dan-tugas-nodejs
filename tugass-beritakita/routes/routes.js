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


// // Homepages
// Routes.get('/', (req, res) => { res.render('tester', { user: 'enricho' })})

// Routes.get('/product', ProductControllers.mainProduct)
// Routes.get('/product/detail', ProductControllers.detailProduct)
// // Routes.get('/product/api/all', ProductControllers.findAll)

// // FORM Page
// Routes.get('/form', FormControllers.formView)
// Routes.post('/form/post', FormControllers.create)

// // API Product
// Routes.get('/product/api/all', ProductAPIControllers.All)
// Routes.get('/product/api/findOne/:id', ProductAPIControllers.FindOne)
// Routes.post('/product/api/create', ProductAPIControllers.Create)
// Routes.post('/product/api/delete', ProductAPIControllers.Delete)

// Routes.post('/user/api/create', UserControllers.Create)
// Routes.post('/login', UserControllers.Login)

module.exports = routes;
