import fondoIndex from "../../assets/Img/fondoIndx.png"
import imagenPromo from "../../assets/Img/Promos/Promos.png"
import imgClabemas from "../../assets/Img/logo_cablemas.png"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from "react";
import useHomeEffect from "../../assets/hooks/useHomeEffects";
import { NavLink } from "react-router-dom";

function HomePage(){
  useHomeEffect();
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal-left"));
    elements.forEach((el, index) => {
      setTimeout(() => el.classList.add("active"), index * 150);
    });

    return () => {
      elements.forEach((el) => el.classList.remove("active"));
    };
  }, []);

    
    return(
        <>
                
            <section className="planes-promo" aria-label="Promoción de planes">
              <div className="planes-promo__bg">
                <img id="heroBg" className="planes-promo__img" src={fondoIndex} alt="Fibra óptica"/>
                <div className="planes-promo__overlay"></div>
              </div>
            
              <div className="planes-promo__container">
                <div className="planes-promo__left">
                  <span className="planes-promo__badge">
                    <i className="bi bi-lightning-charge-fill" style={{color: "#ff9500"}}></i>
                    Bienvenido a Super Tv
                  </span>
                
                  <h2 className="planes-promo__title">
                    Internet Fibra Real Hasta <span className="neon-red flicker-soft" >900Mbps</span> en tu hogar 
                  </h2>
                
                  <p className="planes-promo__subtitle">
                    Instalación rápida · Cobertura en tu zona
                  </p>
                
                  <div className="planes-promo__cta">
                    <NavLink className="planes-promo__btn planes-promo__btn--primary" to="/planes">
                      Ver planes <i className="bi bi-arrow-right"></i>
                    </NavLink>
                  
                    <a className="planes-promo__btn planes-promo__btn--ghost" target="_blank"
                       href="https://wa.me/573014916832?text=Hola%20quiero%20información%20de%20planes%20desde%20%2440.000">
                      WhatsApp <i className="bi bi-whatsapp"></i>
                    </a>
                  </div>
                
                </div>
            
                <div className="planes-promo__right">
                </div>
              </div>
            </section>
            
            
            <section className="quick-actions">
              <div className="container">   
            
                <div className="row quick-actions-grid">
            
                  <div className="col-sm-6 col-md-3  ">
                    <NavLink className="quick-card quick-card-primary reveal-left" to="/planes">
                      <div className="quick-icon">
                        <i className="bi bi-wifi"></i>
                      </div>
                      <div className="quick-content">
                        <h4>Planes</h4>
                        <p>Conoce Internet Hogar y Empresas.</p>
                        <span className="quick-link">Ver planes →</span>
                      </div>
                    </NavLink>
                  </div>
            
                  <div className="col-sm-6 col-md-3 " >
                    <NavLink className="quick-card reveal-left" to="/cobertura">
                      <div className="quick-icon">
                        <i className="bi bi-geo-alt-fill"></i>
                      </div>
                      <div className="quick-content">
                        <h4>Cobertura</h4>
                        <p>Consulta si llegamos a tu zona.</p>
                        <span className="quick-link">Consultar →</span>
                      </div>
                    </NavLink>
                  </div>
            
                  <div className="col-sm-6 col-md-3" >
                    <NavLink className="quick-card reveal-left" to="/contacto">
                      <div className="quick-icon">
                        <i className="bi bi-headset"></i>
                      </div>
                      <div className="quick-content">
                        <h4>Soporte</h4>
                        <p>Ayuda rápida y atención técnica.</p>
                        <span className="quick-link">Ir a soporte →</span>
                      </div>
                    </NavLink>
                  </div>
            
                  <div className="col-sm-6 col-md-3" >
                    <a className="quick-card  reveal-left" href="https://clientes.portalinternet.net/saldo/super-tv/">
                      <div className="quick-icon">
                        <i className="bi bi-receipt"></i>
                      </div>
                      <div className="quick-content">
                        <h4>Paga tu factura</h4>
                        <p>Haz tu pago en línea de forma segura.</p>
                        <span className="quick-link">Pagar ahora →</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="mosaicServices" id="servicios">
              <div className="mosaicServices__head">
                <h2>Nuestros Servicios</h2>
                <p>Conectamos tu mundo con tecnología confiable</p>
              </div>
            
              <div className="mosaicGrid">
            
                <article className="tile tile--slider reveal" aria-label="Promociones">
                  <div className="slider" data-slider>
            
                    <div className="slider-overlay"></div>
                  
                    <div className="slider__track">
                      <NavLink className="slide is-active" to="/planes">
                        <img src={imagenPromo} alt="Promo Internet + TV 100 Megas por 1 año" />
                      </NavLink>
                    
                      <NavLink className="slide is-active" to="/cobertura">
                        <img src={imagenPromo} alt="Promo Internet + TV 100 Megas por 1 año" />
                      </NavLink>
                    
                      <NavLink className="slide is-active" to="/contacto">
                        <img src={imagenPromo} alt="Promo Internet + TV 100 Megas por 1 año" />
                      </NavLink>
                    </div>
                  
                    <button className="slider__btn prev" type="button" aria-label="Anterior">‹</button>
                    <button className="slider__btn next" type="button" aria-label="Siguiente">›</button>
                  
                    <div className="slider__dots" aria-label="Indicadores">
                      <button className="dot is-active" type="button" aria-label="Ir a promo 1"></button>
                      <button className="dot" type="button" aria-label="Ir a promo 2"></button>
                      <button className="dot" type="button" aria-label="Ir a promo 3"></button>
                    </div>
                  
                  </div>
                </article>
            
                  <article className="service-card">
                    <div className="service-icon">
                      <i className="bi bi-wifi"></i>
                    </div>
                    <div className="contentTextInfo">
                      <h3>Internet</h3>
                      <p>Conoce planes hogar y empresas con fibra FTTH.</p>
                    </div>
            
                  </article>
                
                  <article className="service-card">
                    <div className="service-icon">
                      <i className="bi bi-tv"></i>
                    </div>
                    <div className="contentTextInfo">
                    <h3>Ip TV</h3>
                      <p>Canales y contenido para toda la familia.</p>
                    </div>
                  </article>
            
                  <article className="service-card">
                    <div className="service-icon">
                      <i className="bi bi-broadcast-pin"></i>
                    </div>
                    <div className="contentTextInfo">
                    <h3>OTT</h3>
                      <p>Streaming de TV bajo demanda en multiples dispositivos</p>
                    </div>
                  </article>
                  <article className="service-card">
                    <div className="service-icon">
                      <i className="bi bi-phone"></i>
                    </div>
                    <div className="contentTextInfo">
                    <h3>Wireless</h3>
                      <p>Conectividad inalámbrica para zonas donde no llega fibra.</p>
                    </div>
                  </article>
            
                  <article className="service-card">
                    <div className="service-icon">
                      <i className="bi bi-wifi"></i>
                    </div>
                    <div className="contentTextInfo">
                    <h3>Wireless</h3>
                      <p>Conectividad inalámbrica para zonas donde no llega fibra.</p>
                    </div>
                  </article>
              </div>
            </section>
            
            <section className="connectividad">
              <div className="connectividad__container">
            
                <div className="connectividad__head">
                  <h2>
                    SOLUCIONES EN <span>CONECTIVIDAD</span>
                  </h2>
                  <p>
                    Conectamos hogares y empresas con una red estable,
                    soporte cercano y planes que se ajustan a tu necesidad.
                  </p>
                </div>
            
                <div className="connectividad__cards">
                
                  <div className="con-card reveal">
                    <div className="con-icon">⚡</div>
                    <h3>Velocidad real</h3>
                    <p>Planes pensados para streaming, trabajo y juegos sin cortes.</p>
                  </div>
                
                  <div className="con-card reveal">
                    <div className="con-icon">🛡</div>
                    <h3>Estabilidad</h3>
                    <p>Infraestructura optimizada para mantener tu conexión activa.</p>
                  </div>
                
                  <div className="con-card reveal">
                    <div className="con-icon">🎧</div>
                    <h3>Soporte cercano</h3>
                    <p>Atención rápida y acompañamiento cuando lo necesites.</p>
                  </div>
                
                </div>
            
                <div className="connectividad__stats">
                
                  <div className="stat reveal">
                    <h4><span className="highlight" >99.9%</span></h4>
                    <p>Disponibilidad</p>
                  </div>
                
                  <div className="stat reveal">
                    <h4><span className="highlight">24/7</span></h4>
                    <p>Canales de atención</p>
                  </div>
                
                  <div className="stat reveal">
                    <h4><span className="highlight">FTTH</span></h4>
                    <p>Tecnología de red</p>
                  </div>
                
                </div>
            
              </div>
            </section>
            
            
            <section id="work-process" className="connectivity1">
              <div className="container1">
                <div className="section-header1">
                  <h2 className="contentTitleAliados">
                    Nuestros <b style={{color:"#2c8fb3"}}>Aliados</b>
                  </h2>
                </div>
            
                <div className="connectivity-cards1 ">
                  <div className="ticker">
                    <div className="ticker__track">
                      <div className="connectivity-card1"><img src={imgClabemas}/></div>
                      <div className="connectivity-card1"><img src={imgClabemas}/></div>
                      <div className="connectivity-card1"><img src={imgClabemas}/></div>
                      <div className="connectivity-card1"><img src={imgClabemas}/></div>
                      <div className="connectivity-card1"><img src={imgClabemas}/></div>
                      <div className="connectivity-card1"><img src={imgClabemas}/></div>
                      <div className="connectivity-card1"><img src={imgClabemas}/></div>
                      <div className="connectivity-card1"><img src={imgClabemas}/></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </>
    )
}

export default HomePage