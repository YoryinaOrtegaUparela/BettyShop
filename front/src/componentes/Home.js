import React, { Fragment } from 'react'

export const Home = () => {
    return (
        <Fragment>
            <h1 id='encabezado_productos'>Ultimos productos</h1>

            <section id='productos' className='container mt-5'>
                <div className='row'>

                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/croquetas.png' alt='croquetas'></img>
                        <div className='card-body d-flex flex-column'>
                                <h5  id="titulo_producto"><a href='#'>Croquetas gatos</a></h5>
                                <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='numero_opiniones'>5 reviews</span>
                            </div>

                            <p className='card-text'>$72000</p>
                            <a href='#' id="view_btn" className='btn btn-block'>
                                Ver detalle
                            </a>
                            </div>


                    </div>
                    </div>

                    {/* Producto 2 */}

                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/imagesgato.png' alt='gato'></img>
                        <div className='card-body d-flex flex-column'>
                                <h5  id="titulo_producto"><a href='#'>Comida gatos</a></h5>
                                <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='numero_opiniones'>2 reviews</span>
                            </div>

                            <p className='card-text'>$45000</p>

                            <a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalle
                            </a>
                            </div>


                    </div>
                    </div>


                    {/* Producto 3 */}

                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/felix.png' alt='Felix'></img>
                        <div className='card-body d-flex flex-column'>
                                <h5  id="titulo_producto"><a href='#'>Gatos felix</a></h5>
                                <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='numero_opiniones'>6 reviews</span>
                            </div>

                            <p className='card-text'>$42000</p>
                            <a href='http://localhost:3000' id="view_btn" className='btn btn-block'>Ver detalle</a>
                            </div>
                    </div>
                    </div>

{/* Producto 4 */}

                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/cat-Gatitos.png' alt='gatitos'></img>
                        <div className='card-body d-flex flex-column'>
                                <h5  id="titulo_producto"><a href='#'>BR for cats</a></h5>
                                <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='numero_opiniones'>3 reviews</span>
                            </div>

                            <p className='card-text'>$62000</p>
                            <a href='http://localhost:3000' id="view_btn" className='btn btn-block'>Ver detalle</a>
                            </div>
                    </div>
                    </div>

                </div>
            </section>

        </Fragment>
    )
}

export default Home
