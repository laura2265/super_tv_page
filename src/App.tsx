
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './Components/layout/MainLoyaut'
import HomePage from './Pages/Home/HomePage'
import CoberturaPage from './Pages/Cobertura/CoberturaPage'
import PlanesPage from './Pages/Planes/PlanesPage'
import NosotrosPage from './Pages/Nosotros/NosotrosPage'
import ContactoPage from './Pages/Contacto/ContactoPage'
import ProteccionConsumidor from './Pages/Legal/Proteccion_consumidor'
import ProteccionDatos from './Pages/Legal/Proteccion_Datos'
import ProteccionInfantil from './Pages/Legal/Proteccion_infantil'
import ProteccionUsuario from './Pages/Legal/Proteccion_usuario'
import DondeDenunciar from './Pages/Legal/Donde_Denunciar'
import ErrorPage from './Pages/midleware/Error'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/cobertura' element={<CoberturaPage/>}/>
          <Route path='/planes' element={<PlanesPage/>}/>
          <Route path='/nosotros' element={<NosotrosPage/>}/>
          <Route path='/contacto' element={<ContactoPage/>}/>
         {/*Legal */}
          <Route path='/proteccion-al-consumidor' element={<ProteccionConsumidor/>}/>
          <Route path='/proteccion-de-datos' element={<ProteccionDatos/>}/>
          <Route path='/proteccion-infantil' element={<ProteccionInfantil/>}/>
          <Route path='/proteccion-al-usuario' element={<ProteccionUsuario/>}/>
          <Route path='/donde-denunciar' element={<DondeDenunciar/>}/>
        </Route>
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
