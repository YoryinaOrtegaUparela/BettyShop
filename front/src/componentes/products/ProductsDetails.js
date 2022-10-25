import React, { Fragment } from "react";
import MetaData from "../layaout/MetaData";

export const ProductDetails = () => {
    return (
        <Fragment>
            <p>estoy en el detalle</p>
            <MetaData title={"Agility Alimento blando para gatos"}></MetaData>
            <div className="row d-flex justify-content-araound">
                <div className="col-12 col-lg-5 img-fluid" id="imagen_producto">
                    <img src="../images/productos/Cat-Gatitos.png" alt="imagen del producto" height="450" width="450"></img>
                </div>
                <div className="col-12 lg-5 mt-5">
                    <h3>Alimento blando para gatos</h3>
                    <p id="product_id">Product #31688</p>
                </div>
            </div>
        </Fragment>
    )
}