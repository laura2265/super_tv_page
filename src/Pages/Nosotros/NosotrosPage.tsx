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
              <div className="pill">
                <span className="pill__icon">⚡</span>
                <span>Nuestra empresa</span>
              </div>

              <h1 className="about-hero__title">
                Nuestra <span>Historia</span>
              </h1>

              <p className="about-hero__subtitle">
                Desde 2010 conectamos hogares con internet estable y tecnología real.
              </p>

              <div className="about-hero__cta">
                <a className="btn btn--primary" href="#historia">Ver historia</a>
                <a className="btn planes-promo__btn--primary" href="#mision-vision">Misión y Visión</a>
              </div>

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
        
          <section className="about-section" id="historia">
            <div className="container">
              <div className="section-head">
                <h2>Cómo hemos crecido</h2>
                <p>Un recorrido rápido y claro por los momentos más importantes.</p>
              </div>

              <div className="timeline">
                <div className="timeline__line"></div>

                <article className="t-item reveal" data-side="left">
                  <div className="t-dot">
                    <span className="t-year">2010</span>
                  </div>
                  <div className="t-card">
                    <div className="t-card__icon">🏁</div>
                    <h3>Fundación</h3>
                    <p>Nace <strong>Super TV Electronic</strong> con el propósito de conectar hogares con un servicio estable y cercano.</p>
                    <div className="t-card__meta">Enfoque: comunidad + soporte</div>
                  </div>
                </article>

                <article className="t-item reveal" data-side="right">
                  <div className="t-dot">
                    <span className="t-year">2014</span>
                  </div>
                  <div className="t-card">
                    <div className="t-card__icon">📍</div>
                    <h3>Expansión</h3>
                    <p>Extendemos la cobertura a nuevos barrios, fortaleciendo la red y llegando a más familias.</p>
                    <div className="t-card__meta">Hito: más zonas conectadas</div>
                  </div>
                </article>

                <article className="t-item reveal" data-side="left">
                  <div className="t-dot">
                    <span className="t-year">2018</span>
                  </div>
                  <div className="t-card">
                    <div className="t-card__icon">🧵</div>
                    <h3>Fibra óptica</h3>
                    <p>Modernizamos infraestructura para ofrecer <strong>mayor velocidad</strong>, menor latencia y más estabilidad.</p>
                    <div className="t-card__meta">Upgrade: tecnología + rendimiento</div>
                  </div>
                </article>

                <article className="t-item reveal" data-side="right">
                  <div className="t-dot">
                    <span className="t-year">2022</span>
                  </div>
                  <div className="t-card">
                    <div className="t-card__icon">📶</div>
                    <h3>Nuevos planes</h3>
                    <p>Ampliamos capacidad y lanzamos nuevas opciones para diferentes necesidades del hogar.</p>
                    <div className="t-card__meta">Mejoras: planes + cobertura</div>
                  </div>
                </article>

                <article className="t-item reveal" data-side="left">
                  <div className="t-dot">
                    <span className="t-year">2025</span>
                  </div>
                  <div className="t-card">
                    <div className="t-card__icon">🚀</div>
                    <h3>Hasta 900Mbps</h3>
                    <p>Llevamos internet de alta velocidad para streaming, trabajo remoto y gaming, con mejor experiencia.</p>
                    <div className="t-card__meta">Tope: 900Mbps en hogares</div>
                  </div>
                </article>
              </div>
            </div>
          </section>
        
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