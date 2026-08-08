import { NavLink } from 'react-router-dom'
import '../../assets/css/pages/nosotros.css'
import useNosotrosEffects from '../../assets/hooks/useNosotrosEffect'
function NosotrosPage() {
    useNosotrosEffects()
    return(
        <section className="about-page" id="nosotros">
          <header className="about-hero">
            <div className="about-hero__bg"></div>
            <div className="about-hero__glow"></div>
        
            <div className="container about-hero__content">
              <h1 className="about-hero__title">
                Nosotros 
              </h1>



              <div className="about-hero__stats">
                <div className="stat">
                  <div className="stat__num" data-count="3000">0</div>
                  <div className="stat__label">Hogares conectados</div>
                </div>
                <div className="stat">
                  <div className="stat__num" data-count="15">0</div>
                  <div className="stat__label">Zonas de cobertura</div>
                </div>
                <div className="stat">
                  <div className="stat__num" data-count="99">0</div>
                  <div className="stat__label">% Satisfacción</div>
                </div>
                <div className="stat">
                  <div className="stat__num"><span data-count="900">0</span><small>Mbps</small></div>
                  <div className="stat__label">Velocidad máxima</div>
                </div>
              </div>
            </div>
          </header>

        
          <section className="about-section about-section--soft" id="mision-vision">
            <div className="container">
              <div className="section-head">
                <h2>Misión y Visión</h2>
                <p>Lo que nos mueve hoy y hacia dónde vamos.</p>
              </div>

              <div className="mv-grid">
                <article className="mv-card reveal">
                  <div className="mv-card__icon">🎯</div>
                  <h3>Misión</h3>
                  <p>Brindar conectividad confiable y rápida, con atención cercana, mejorando la calidad de vida de nuestros usuarios.</p>
                </article>

                <article className="mv-card reveal">
                  <div className="mv-card__icon">🔭</div>
                  <h3>Visión</h3>
                  <p>Ser referentes regionales en conectividad, impulsando innovación y crecimiento continuo con infraestructura moderna.</p>
                </article>
              </div>
            </div>
          </section>
        
          <section className="about-section">
            <div className="container">
              <div className="section-head">
                <h2>Nuestros valores</h2>
                <p>La forma en la que trabajamos, día a día.</p>
              </div>

              <div className="values-grid">
                <article className="val-card reveal">
                  <div className="val-card__icon">🤝</div>
                  <h3>Cercanía</h3>
                  <p>Atención humana y acompañamiento real.</p>
                </article>

                <article className="val-card reveal">
                  <div className="val-card__icon">✅</div>
                  <h3>Calidad</h3>
                  <p>Servicio estable y mejora continua.</p>
                </article>

                <article className="val-card reveal">
                  <div className="val-card__icon">⚙️</div>
                  <h3>Innovación</h3>
                  <p>Tecnología y optimización de red.</p>
                </article>

                <article className="val-card reveal">
                  <div className="val-card__icon">🛡️</div>
                  <h3>Compromiso</h3>
                  <p>Responsabilidad con cada conexión.</p>
                </article>
              </div>

              <div className="about-cta reveal">
                <div>
                  <h3>¿Listo para conectarte con Super?</h3>
                  <p>Revisa planes y confirma cobertura en tu zona.</p>
                </div>
                <NavLink className="planes-promo__btn planes-promo__btn--primary" to="/planes">
                  Conoce nuestros planes <i className="bi bi-arrow-right"></i>
                </NavLink>
              </div>
            </div>
          </section>
        
        </section>
    )
}
export default NosotrosPage