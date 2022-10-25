
const producto1 = require("../models/products")

const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));

//registraremos toodos losc controladores de los productos
//El metodo puede que requiera algo, que responda algo o pedir que se ejecute una acción futura 

exports.getProducts = async(req, res, next) => {
    const productos = await producto1.find();
    if(!productos){
        return res.status(404).json({
            sucess: false,
            message: 'No encontramos producto',
            error: true
        })    
    }
    res.status(200).json({
        sucess: true,
        count: productos.length,
        productos
    })
}

//Ver producto por ID
exports.getProductById = async(req, res, next) => {
    const product = await producto1.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            sucess: false,
            message: "No encontramos ese producto"
        })
    }
    res.status(200).json({
        sucess: true,
        message: "Aquí se encuentra la información de su producto",
        product
    })
}

//Crear nuevo producto/api/productos
exports.newProduct = async(req, res, next) => {
    const product = await producto1.create(req.body);

    res.status(201).json({
        sucess: true,
        product
    })

}

//Update producto
exports.updateProduct = async(req, res, next) => {
    let product = await producto1.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            sucess: false,
            message: "No encontramos ese producto"
        })
    }
    product = await producto1.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })
    res.status(200).json({
        sucess: true,
        message: "Producto actualizado correctamente.",
        producto1
    })
}

//Delete producto
exports.deleteProduct = async(req, res, next) => {
    const product = await producto1.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            sucess: false,
            message: "No encontramos ese producto"
        })
    }
    await product.remove();
    res.status(200).json({
        sucess: true,
        message: "Producto eliminado correctamente"
    })
}

//Con fetch-  podemos pobrar en consola los metodos como en posdman
//Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err =>console.error(err))
}

//verProductos();

//Ver productos por id
function verProductosPorId(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err =>console.error(err))
}
