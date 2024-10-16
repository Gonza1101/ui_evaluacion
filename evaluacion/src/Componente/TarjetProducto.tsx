import React from "react";
import { Producto } from "../Modelo/Producto";

type ProductoUnico ={
    producto : Producto
}
export const TarjetaProducto : React.FC<ProductoUnico> = ({producto}) => {

    return (
        <>
          <div className="col-3">
            <div className="card">
              <img src={producto.ubicacionImagen}  className="card-img-top" alt="Imagen del producto"/>
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">
                  <i className={producto.estadoMeGusta}></i>
                </p>
              </div>
            </div>
           </div>
        </>
    )
}