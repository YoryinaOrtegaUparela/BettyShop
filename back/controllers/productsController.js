//registraremos toodos losc controladores de los productos
//El metodo puede que requiera algo, que responda algo o pedir que se ejecute una acción futura 
exports.getProducts = (req, res, next) => {
    res.status(200).json({
        sucess: true,
        message: "En esta ruta ud va a poder ver todos los productos"
    })
}