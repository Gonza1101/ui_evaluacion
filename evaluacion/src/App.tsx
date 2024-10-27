import BarraDeMenu from './Componente/BarraDeMenu'
import './App.css'
import ListadoDeProducto from './Componente/ListadoDeProducto'

import { Productos} from './Modelo/ProductosListaDo'
import { useState } from 'react'

function App() {

  const [productos,setProductos]= useState(Productos)

  return (
    <>
      <BarraDeMenu/>
      <ListadoDeProducto Productos={productos}/>
    </>
  )
}

export default App
