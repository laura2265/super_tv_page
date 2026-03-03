import logoSuper from "../../assets/Img/Logo_Super_negativo1.png"
import logoSuper2 from "../../assets/Img/Logito-Empresa-Blanco.png"
import { NavLink } from "react-router-dom";


function Header(){
  const linkClass = ({ isActive }: { isActive: boolean }) =>
  `scroll ${isActive ? "activo" : ""}`;

    return(
        <header className="header">

        <div className="navbar-header">
            <a className="navbar-brand" href="index.html">
                <img 
                className="logito2" alt="logo" 
                src={logoSuper}
                data-logo-top={logoSuper} 
                data-logo-scroll={logoSuper2}
                />
            </a>
        </div>
        <button className="nav-toggle" type="button" aria-label="Abrir menú" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <div className="barraMenu">
            <ul className="nav navbar-nav">
              <li><NavLink className={linkClass}  to="/">Inicio</NavLink></li>
            	<li><NavLink className={linkClass}  to="/planes">Planes </NavLink></li>
            	<li><NavLink className={linkClass}  to="/nosotros">Nosotros</NavLink></li>
            	<li><NavLink className={linkClass}  to="/cobertura">Cobertura</NavLink></li>
            	<li><NavLink className={linkClass}  to="./contacto">Contacto</NavLink></li>
                <li className="scroll dropdown">
                  <a href="#" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                    Legalidad <i className="fa-solid fa-chevron-down" style={{fontSize: "12px", marginLeft: "6px",}}></i>
                  </a>

                  <ul className="dropdown-menu">
                    <li><NavLink className={({ isActive }) => (isActive ? "activo" : "")} to="/proteccion-al-consumidor">Protección al coonsumidor</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? "activo" : "")} to="/proteccion-infantil">Protección infantil</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? "activo" : "")} to="/proteccion-al-usuario">Protección al usuario</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? "activo" : "")} to="/proteccion-de-datos">Proteccion de datos</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? "activo" : "")} to="/donde-denunciar">Dónde denunciar</NavLink></li>
                  </ul>
                </li>

            </ul>
        </div>
        <div className="BotonPagarFactura">
          <a target="_blank" rel="noreferrer" href="https://clientes.portalinternet.net/saldo/super-tv/">Paga tu factura</a>
        </div>
    </header>
    )
}
export default Header