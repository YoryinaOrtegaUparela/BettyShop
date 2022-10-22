const mongoose = require("mongoose");


//Creamos las entidades, con schema, especificamos como debe ser
const productosSchema = mongoose.Schema({
    nombre: {
        type: String,
        //Es requerido el valor, en caso de que no lo ponga arroja el msg ""
        required:[true, "Por favor registra el nombre del producto"],
        //Elimina caracteres blancos-vacios
        trim: true,
        maxLength:[120, "El nombre del producto no debe exceder los 120 caracteres."]
    },
    precio: {
        type: Number,
        required:[true, "Por favor registre el precio del producto"],
        maxLength:[8, "El precio del producto no puede estar por encima de 99'999.999."],
        default: 0.0
    },
    descripcion:{
        type: String,
        required: [true, "Por favor registre una descripción para el producto"]
    },
    calificacion:{
        type: Number,
        default: 0
    },
    imagen:[
        {
            public_id:{
                type: String,
                required: true
            },
            url:{
                type: String,
                required: true
            }
        }
    ],
    categoria:{
        type: String,
        required: [true, "Por favor seleccione la categoria del producto."],
        //Permite registrar una lista de cosas y las enumera de forma ordinal
        enum: {
            values: [
                "Alimento seco",
                "Alimento humedo",
                "Accesorios",
                "Productos de cuidado e higiene",
                "Medicamentos",
                "Snacks",
                "Juguetes"
            ]
        }
    },
    vendedor:{
        type: String,
        required: [true, "Por favor ingrese el nombre del vendedor del producto."]
    },
    inventario:{
        type: Number,
        required: [true, "Por favor ingrese el stock del producto."],
        maxLength: [5, "La cantidad máxima de productos no puede sobrepasar los 99999."],
        default: 0
    },
    numCalificaciones:{
        type: Number,
        default: 0
    },
    opiniones: [
        {
            nombreCliente:{
                type: String,
                required: true
            },
            rating:{
                type: Number,
                required: true,
            },
            comentario: {
                type: String,
                required: true
            }
        }
    ],
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("productos", productosSchema)