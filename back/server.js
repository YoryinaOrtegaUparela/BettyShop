const app = require('./app');

//Setear el archivo de configuracion
const dotenv=require('dotenv');
dotenv.config({path:'back/config/config.env'})

//Declaramos que la constante server va a ser igual a lo que arroje el metodo
const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})
