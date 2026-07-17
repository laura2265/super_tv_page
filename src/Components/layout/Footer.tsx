import { NavLink } from "react-router-dom"

function Footer(){
    return(
        <footer className="footer" id="footer" role="contentinfo">
            <div className="footer-wrap">
              <div className="footer-top">

                <div className="footer-col">
                  <h3>Contacto y servicios</h3>
                  <nav className="footer-links" aria-label="Contacto y servicios">
                    <NavLink to="/contacto">PQRs</NavLink>
                    <NavLink to="/planes">Planes</NavLink>
                    <NavLink to="/nosotros">Nosotros</NavLink>
                  </nav>

                  <NavLink className="footer-btn" to="/cobertura">Consulta cobertura</NavLink>
                </div>

                <div className="footer-col">
                  <h3>Términos y condiciones</h3>
                  <nav className="footer-links" aria-label="Legales">
                    <NavLink to="#">Políticas de privacidad</NavLink>
                    <NavLink to="#">Términos y condiciones del sitio web</NavLink>
                    <NavLink to="#">Términos y condiciones del servicio de internet prepago</NavLink>
                  </nav>
                </div>

                <div className="footer-col">
                  <h3>Redes sociales</h3>

                  <div className="footer-social" aria-label="Redes sociales">
                    <a className="social" href="https://www.whatsapp.com/channel/0029VZzZKxj002T4mnqPpj3V" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
                    <a className="social" href="https://www.facebook.com/Cablemasbogota" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                    <a className="social" href="https://www.instagram.com/cablemasbogota/" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                    <a className="social" href="#" aria-label="Telegram"><i className="bi bi-telegram"></i></a>
                  </div>

                  <p className="footer-note">Soporte y atención cercana para nuestros usuarios.</p>
                </div>

              </div>

              <div className="footer-divider"></div>

              <div className="footer-bottom">
                <div className="footer-brand">
                  <strong>SUPER TV ELECTRONIC S.A.S</strong>
                  <span>Conectando hogares desde 2010</span>
                </div>

                <p className="footer-copy">© Copyright - 2026 Colombia</p>
              </div>
            </div>
        </footer>
    )
}

export default Footer