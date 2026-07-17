import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import logoSuper from "../../assets/Img/Logo_Super_negativo1.png";
import logoSuper2 from "../../assets/Img/Logito-Empresa-Blanco.png";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLegalOpen, setMobileLegalOpen] = useState(false);

  const location = useLocation();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `scroll ${isActive ? "activo" : ""}`;

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileLegalOpen(false);
  };

  /*
   * Cierra el menú después de cambiar de ruta.
   */
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  /*
   * Bloquea el scroll de la página mientras el menú esté abierto.
   */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  /*
   * Cierra el menú con la tecla Escape.
   */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
    <header
      className={`header ${
        mobileMenuOpen ? "mobile-menu-active" : ""
      }`}
    >
        <div className="navbar-header">
          <Link
            className="navbar-brand"
            to="/"
            aria-label="Ir al inicio"
          >
            <img
              className="logito2"
              alt="Super TV"
              src={logoSuper}
              data-logo-top={logoSuper}
              data-logo-scroll={logoSuper2}
            />
          </Link>
        </div>

        {/* Menú de escritorio */}
        <nav
          className="barraMenu desktop-navigation"
          aria-label="Navegación principal"
        >
          <ul className="nav navbar-nav">
            <li>
              <NavLink className={linkClass} to="/">
                Inicio
              </NavLink>
            </li>

            <li>
              <NavLink className={linkClass} to="/planes">
                Planes
              </NavLink>
            </li>

            <li>
              <NavLink className={linkClass} to="/nosotros">
                Nosotros
              </NavLink>
            </li>

            <li>
              <NavLink className={linkClass} to="/cobertura">
                Cobertura
              </NavLink>
            </li>

            <li>
              <NavLink className={linkClass} to="/contacto">
                Contacto
              </NavLink>
            </li>

            <li className="scroll dropdown">
              <button
                type="button"
                className="dropdown-toggle"
                aria-haspopup="true"
              >
                Legalidad

                <i
                  className="fa-solid fa-chevron-down"
                  aria-hidden="true"
                />
              </button>

              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/proteccion-al-consumidor">
                    Protección al consumidor
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/proteccion-infantil">
                    Protección infantil
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/proteccion-al-usuario">
                    Protección al usuario
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/proteccion-de-datos">
                    Protección de datos
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/donde-denunciar">
                    Dónde denunciar
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div className="BotonPagarFactura desktop-payment-button">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://clientes.portalinternet.net/saldo/super-tv/"
          >
            Paga tu factura
          </a>
        </div>

        {/* Botón exclusivamente móvil */}
        <button
          type="button"
          className={`mobile-menu-button ${
            mobileMenuOpen ? "is-open" : ""
          }`}
          aria-label={
            mobileMenuOpen
              ? "Cerrar menú"
              : "Abrir menú"
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-panel"
          onClick={() =>
            setMobileMenuOpen((current) => !current)
          }
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Fondo oscuro del menú móvil */}
      <div
        className={`mobile-menu-overlay ${
          mobileMenuOpen ? "is-open" : ""
        }`}
        aria-hidden={!mobileMenuOpen}
        onClick={closeMobileMenu}
      >
        {/* Panel lateral */}
        <aside
          id="mobile-navigation-panel"
          className={`mobile-menu-panel ${
            mobileMenuOpen ? "is-open" : ""
          }`}
          aria-label="Menú móvil"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mobile-menu-header">
            <img
              src={logoSuper}
              alt="Super TV"
              className="mobile-menu-logo"
            />
              
            <button
              type="button"
              className="mobile-menu-close"
              aria-label="Cerrar menú"
              onClick={closeMobileMenu}
            >
              <span className="mobile-close-icon" aria-hidden="true">
                X
              </span>
            </button>
          </div>

          <nav className="mobile-navigation">
            <NavLink
              className={({ isActive }) =>
                isActive ? "mobile-link active" : "mobile-link"
              }
              to="/"
              onClick={closeMobileMenu}
            >
              <span>Inicio</span>
              <i className="fa-solid fa-house" />
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "mobile-link active" : "mobile-link"
              }
              to="/planes"
              onClick={closeMobileMenu}
            >
              <span>Planes</span>
              <i className="fa-solid fa-wifi" />
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "mobile-link active" : "mobile-link"
              }
              to="/nosotros"
              onClick={closeMobileMenu}
            >
              <span>Nosotros</span>
              <i className="fa-solid fa-users" />
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "mobile-link active" : "mobile-link"
              }
              to="/cobertura"
              onClick={closeMobileMenu}
            >
              <span>Cobertura</span>
              <i className="fa-solid fa-location-dot" />
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "mobile-link active" : "mobile-link"
              }
              to="/contacto"
              onClick={closeMobileMenu}
            >
              <span>Contacto</span>
              <i className="fa-solid fa-envelope" />
            </NavLink>

            <div className="mobile-legal-section">
              <button
                type="button"
                className={`mobile-legal-button ${
                  mobileLegalOpen ? "is-open" : ""
                }`}
                aria-expanded={mobileLegalOpen}
                onClick={() =>
                  setMobileLegalOpen((current) => !current)
                }
              >
                <span>Legalidad</span>

                <i className="fa-solid fa-chevron-down" />
              </button>

              <div
                className={`mobile-legal-submenu ${
                  mobileLegalOpen ? "is-open" : ""
                }`}
              >
                <NavLink
                  to="/proteccion-al-consumidor"
                  onClick={closeMobileMenu}
                >
                  Protección al consumidor
                </NavLink>

                <NavLink
                  to="/proteccion-infantil"
                  onClick={closeMobileMenu}
                >
                  Protección infantil
                </NavLink>

                <NavLink
                  to="/proteccion-al-usuario"
                  onClick={closeMobileMenu}
                >
                  Protección al usuario
                </NavLink>

                <NavLink
                  to="/proteccion-de-datos"
                  onClick={closeMobileMenu}
                >
                  Protección de datos
                </NavLink>

                <NavLink
                  to="/donde-denunciar"
                  onClick={closeMobileMenu}
                >
                  Dónde denunciar
                </NavLink>
              </div>
            </div>
          </nav>

          <div className="mobile-menu-footer">
            <a
              className="mobile-payment-button"
              target="_blank"
              rel="noreferrer"
              href="https://clientes.portalinternet.net/saldo/super-tv/"
            >
              <i className="fa-solid fa-receipt" />

              <span>Paga tu factura</span>
            </a>
          </div>
        </aside>
      </div>  
    </>
  );
}

export default Header;