const express = require("express");
const { getProducts, newProduct, getProductById, updateProduct, deleteProduct } = require("../controllers/productsController");


//Traemos la respuesta json desde el controlador
const router = express.Router();

//Establecemos desde que ruta queremos ver los productos GET
router.route('/productos').get(getProducts);

//Ruta para crear nuevos productos POST
router.route('/producto/nuevo').post(newProduct);

//Con los : se indica que este id es un parametro
router.route('/producto/:id').get(getProductById);

router.route('/producto/:id').put(updateProduct);

router.route('/producto/:id').delete(deleteProduct);

module.exports = router;