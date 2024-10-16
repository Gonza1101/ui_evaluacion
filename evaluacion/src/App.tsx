import BarraDeMenu from './Componente/BarraDeMenu'
import './App.css'
import ListadoDeProducto from './Componente/ListadoDeProducto'

import { Productos} from './Modelo/ProductosListaDo'

function App() {

   const productos = Productos

  return (
    <>
      <BarraDeMenu/>
      <ListadoDeProducto Productos={productos} />
    </>
  )
}

export default App
