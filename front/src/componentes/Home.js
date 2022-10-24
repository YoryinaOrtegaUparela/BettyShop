import React, { Fragment, useEffect } from 'react';
import MetaData from './layaout/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productsAction'

export const Home = () => {

    const { productos } = useSelector(state => state.products)

    const dispacth = useDispatch();
    useEffect(() => {
        dispacth(getProducts());

    }, ([dispacth]))

    return (
        <Fragment>
            <MetaData title="Mascota"></MetaData>

            <h1 id='encabezado_productos'>Ultimos productos</h1>

            <section id='productos' className='container mt-5'>
                <div className='row'>

                    {productos && productos.map(producto => (
                    <div key={producto._id} className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src={producto.imagen[0].url} alt={producto.imagen[0].public_id}></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>{producto.nombre}</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='numero_opiniones'>5 reviews</span>
                                </div>

                                <p className='card-text'>${producto.precio}</p>
                                <a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>
                    ))}

                </div>
            </section>

        </Fragment>
    )
}

export default Home
