import React, { HTMLAttributes, useRef, useState } from "react";
import { Producto } from "../Modelo/Producto";

type ProductoUnico ={
    producto : Producto,
}
export const TarjetaProducto : React.FC<ProductoUnico> = ({producto}) => {

    const [estado,setEstado]= useState(producto.estadoMeGusta)

    const handlerMeGusta=()=>{
      setEstado(!estado)
    }

    return (
        <>
          <div className="col-3">
            <div className="card">
              <img src={producto.ubicacionImagen}  className="card-img-top" alt="Imagen del producto"/>
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">
                  <i className={estado ? "bi bi-star-fill" : "bi bi-star"} 
                    onClick={handlerMeGusta}></i>
                </p>
              </div>
            </div>
           </div>
        </>
    )
}