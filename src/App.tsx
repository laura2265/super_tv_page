
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './Components/layout/MainLoyaut'
import HomePage from './Pages/Home/HomePage'
import CoberturaPage from './Pages/Cobertura/CoberturaPage'
import PlanesPage from './Pages/Planes/PlanesPage'
import NosotrosPage from './Pages/Nosotros/NosotrosPage'
import ContactoPage from './Pages/Contacto/ContactoPage'


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
        </Route>
        <Route path='*' element={<div style={{padding:30}}>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
