import logoSuper from "../../assets/Img/Logo_Super_negativo1.png"

function Header(){
    return(
        <header className="header">
      
        <div className="navbar-header">
            <a className="navbar-brand" href="index.html">
                <img 
                className="logito2" alt="logo" 
                src={logoSuper}
                data-logo-top="IMG/Logo_Super_negativo1.png" 
                data-logo-scroll="IMG/Logito-Empresa-Blanco.png"
                />
            </a>
        </div>
        <button className="nav-toggle" type="button" aria-label="Abrir menú" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <div className="barraMenu">
            <ul className="nav navbar-nav">
            	<li className="scroll activo"><a  href="#">Inicio</a></li>
            	<li className="scroll"><a href="./components/Planes.html">Planes </a></li>
            	<li className="scroll"><a href="./components/Nosotros.html">Nosotros</a></li>
            	<li className="scroll"><a href="./components/Cobertura.html">Cobertura</a></li>
            	<li className="scroll"><a href="./components/Contacto.html">Contacto</a></li>
                <li className="scroll dropdown">
                  <a href="#" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                    Legalidad <i className="fa-solid fa-chevron-down" style={{fontSize: "12px", marginLeft: "6px",}}></i>
                  </a>
              
                  <ul className="dropdown-menu">
                    <li><a href="./components/Proteccion_consumidor.html">Protección al coonsumidor</a></li>
                    <li><a href="./components/Proteccion_infantil.html">Protección infantil</a></li>
                    <li><a href="./components/Proteccion_usuario.html">Protección al usuario</a></li>
                    <li><a href="./components/protección_de_datos.html">Proteccion de datos</a></li>
                    <li><a href="./components/Donde_denunciar.html">Dónde denunciar</a></li>
                  </ul>
                </li>

            </ul>
        </div>
        <div className="BotonPagarFactura">
          <a href="https://clientes.portalinternet.net/saldo/super-tv/">Paga tu factura</a>
        </div>
    </header>
    )
}
export default Header