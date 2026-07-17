import { NavLink } from "react-router-dom"
import"../../assets/css/pages/contacto.css"
import imgContacto from "../../assets/Img/Contacto/señor.png"
function ContactoPage(){
    return(
        <>
            <section className="planes-promo" aria-label="Promoción de planes">
              <div className="planes-promo__bg">
                <img id="heroBg" className="planes-promo__img" src={imgContacto}  alt="Fibra óptica"/>
                <div className="planes-promo__overlay"></div>
              </div>

              <div className="planes-promo__container">
                <div className="planes-promo__left">
                  <span className="planes-promo__badge">
                    <i className="bi bi-signal" style={{color: "rgb(253, 253, 253)"}}></i>
                     Estamos para ayudarte
                  </span>

                  <h2 className="planes-promo__title">
                    Estas a un mensaje de mejorar tu internet. <br/>
                  </h2>

                  <p className="planes-promo__subtitle">
                    Assesoría inmediata · Atención en Bogotá
                  </p>

                  <div className="planes-promo__cta">

                    <a className="planes-promo__btn planes-promo__btn--primary2" target="_blank"
                       href="https://wa.me/573014916832?text=Hola%20quiero%20información%20de%20planes%20desde%20%2440.000">
                      WhatsApp <i className="bi bi-whatsapp"></i>
                    </a>

                    <a className="planes-promo__btn planes-promo__btn--primary" href="#contacto">
                      Enviar mensaje <i className="bi bi-arrow-right"></i>
                    </a>

                  </div>

                </div>

                <div className="planes-promo__right">
                </div>
              </div>
            </section>


            <section className="section-contact" id="contacto">
              <div className="contact-container">
                <div className="contact-media">
                  <div className="grid-cards">
                    <NavLink className="info-card ventas" to="/planes" data-channel="ventas">
                      <div className="card-icon">
                        <svg viewBox="0 0 64 64" aria-hidden="true">
                          <path d="M8 18h48v10H8z" fill="currentColor" opacity=".18"/>
                          <path d="M14 28h36l-3 24H17z" fill="currentColor" opacity=".22"/>
                          <path d="M22 52a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm20 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="currentColor"/>
                          <path d="M18 18l-2-6H8" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/>
                        </svg>
                      </div>
                      <h3>Ventas</h3>
                      <p>Planes, instalación y cobertura.</p>
                      <span className="card-cta">Contactar →</span>
                    </NavLink>

                    <NavLink className="info-card pqrs" to="#" data-channel="pqrs">
                      <div className="card-icon">
                        <svg viewBox="0 0 64 64" aria-hidden="true">
                          <path d="M18 10h20l8 8v36H18z" fill="currentColor" opacity=".18"/>
                          <path d="M38 10v10h10" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
                          <path d="M24 30h16M24 38h16M24 46h10" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                          <path d="M44 52l8-6-8-6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                      <h3>PQRS</h3>
                      <p>Radica tu solicitud por correo.</p>
                      <span className="card-cta">Contactar →</span>
                    </NavLink>

                    <NavLink className="info-card cartera" to="#" data-channel="cartera">
                      <div className="card-icon">
                        <svg viewBox="0 0 64 64" aria-hidden="true">
                          <path d="M12 22h40a6 6 0 0 1 6 6v18a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6V28a6 6 0 0 1 6-6z" fill="currentColor" opacity=".18"/>
                          <path d="M6 30h52" stroke="currentColor" stroke-width="3" opacity=".8"/>
                          <path d="M40 40h12a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8z" fill="none" stroke="currentColor" stroke-width="3"/>
                          <circle cx="44" cy="36" r="1.8" fill="currentColor"/>
                        </svg>
                      </div>
                      <h3>Cartera</h3>
                      <p>Pagos, facturación y estado de cuenta.</p>
                      <span className="card-cta">Contactar →</span>
                    </NavLink>

                    <NavLink className="info-card soporte" to="#" data-channel="soporte">
                      <div className="card-icon">
                        <svg viewBox="0 0 64 64" aria-hidden="true">
                          <path d="M32 10c-10 0-18 8-18 18v6c0 3 2 6 6 6h2V28c0-6 4-10 10-10s10 4 10 10v12h2c4 0 6-3 6-6v-6c0-10-8-18-18-18z" fill="currentColor" opacity=".18"/>
                          <path d="M20 40h4v10h-4a6 6 0 0 1 0-12zm20 0h4a6 6 0 1 1 0 12h-4V40z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
                          <path d="M26 52c2 2 5 3 6 3s4-1 6-3" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                        </svg>
                      </div>
                      <h3>Soporte</h3>
                      <p>Ayuda técnica y fallas.</p>
                      <span className="card-cta">Contactar →</span>
                    </NavLink>

                  </div>
                    <div className="cm-strip">
                      <div className="contentubi">
                        <div className="infocontacto">
                          <i className="bi bi-geo-alt-fill"></i>
                          <h3>SUPER TV ELECTRONIC LTDA.</h3>
                        </div>
                        <p className="ubicacion">CL 19 C 52 SUR 26, Barrio San Carlos, Bogota - Colombia</p>
                      </div>
                    </div>
                  <div className="contact-chip">
                    <span className="dot"></span>
                    <a href="./Cobertura.html">Atención en Bogotá</a>
                  </div>

                </div>

                <div className="contact-card">
                  <h2>Envíanos un mensaje</h2>
                  <p className="contact-subtitle">Te respondemos lo más pronto posible.</p>

                  <form className="contact-form">
                    <div className="field">
                      <label>Nombre completo</label>
                      <input placeholder="Ingresa tu nombre" autoComplete="name"/>
                    </div>

                    <div className="field">
                      <label>Asunto</label>
                      <input placeholder="Escribe el asunto"/>
                    </div>

                    <div className="field">
                      <label>Correo</label>
                      <input type="email" placeholder="Escribe tu correo" autoComplete="email"/>
                    </div>

                    <div className="field">
                      <label>Descripción</label>
                      <textarea  placeholder="Cuéntanos tu solicitud..."></textarea>
                    </div>

                    <button type="submit" className="btn-primary">
                      Enviar mensaje
                      <span className="arrow">→</span>
                    </button>
                    <p className="form-message" id="formMessage"></p>
                  </form>
                </div>

              </div>
            </section>
        </>
    )
}

export default ContactoPage