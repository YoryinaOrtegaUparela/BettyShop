const express = require("express");

//Traemos la respuesta json desde el controlador
const { getProducts } = require("../controllers/productsController");
const router = express.Router();

//Establecemos desde que turta queremos ver los productos
router.route('/productos').get(getProducts)

module.exports = router;