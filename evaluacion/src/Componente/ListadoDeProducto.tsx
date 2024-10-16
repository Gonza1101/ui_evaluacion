import { ListaDeProductos } from "../Modelo/ListaProducto"
import { TarjetaProducto } from "./TarjetProducto";

 type ListadoP ={
    Productos: ListaDeProductos
 }

const ListadoDeProducto : React.FC<ListadoP > = ({Productos})=>{

  const productos = Productos;

/*
 <div class="container text-center">
        <div class="row">
*/
    return (
        <>
            <div className="container text-center">
                <div className="row">
                    {
                        productos.map((producto)=>
                            <TarjetaProducto key={producto.nombre} producto={producto}/>)
                    }
                </div>
            </div>
        </>
    )
}

export default ListadoDeProducto