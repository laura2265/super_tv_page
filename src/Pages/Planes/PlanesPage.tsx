import '../../assets/css/pages/planes.css'
import usePageEffect from '../../assets/hooks/usePageEffect'
import logoSuper from"../../assets/Img/Logo_Super_negativo1.png"
import imgFibra from "../../assets/Img/Planes/fibraop.jpg"
import Asesor from "../../assets/Img/Planes/hombretraje.webp"

function PlanesPage(){
    usePageEffect();
    return(
        <>
            <section className="planes-promo" aria-label="Promoción de planes">
              <div className="planes-promo__bg">
                <img id="heroBg" className="planes-promo__img" src={imgFibra} alt="Fibra óptica"/>
                <div className="planes-promo__overlay"></div>
              </div>

              <div className="planes-promo__container">
                <div className="planes-promo__left">
                  <span className="planes-promo__badge">
                    <i className="bi bi-lightning-charge-fill"></i>
                    Promo por tiempo limitado
                  </span>

                  <h2 className="planes-promo__title">
                    Internet fibra real para <span>streaming</span>, trabajo y juegos.
                  </h2>

                  <p className="planes-promo__subtitle">
                    Instalación rápida · Soporte cercano · Cobertura en tu zona
                  </p>

                  <div className="planes-promo__cta">
                    <a className="planes-promo__btn planes-promo__btn--primary" href="#planes">
                      Ver planes <i className="bi bi-arrow-right"></i>
                    </a>

                    <a className="planes-promo__btn planes-promo__btn--ghost" target="_blank"
                       href="https://wa.me/573014916832?text=Hola%20quiero%20información%20de%20planes%20desde%20%2440.000">
                      WhatsApp <i className="bi bi-whatsapp"></i>
                    </a>
                  </div>

                  <div className="planes-promo__bullets">
                    <div className="bullet"><i className="bi bi-shield-check"></i> 99.9% disponibilidad</div>
                    <div className="bullet"><i className="bi bi-router-fill"></i> FTTH (Fibra al hogar)</div>
                    <div className="bullet"><i className="bi bi-clock-history"></i> Instalación en 24h</div>
                  </div>
                </div>

                <div className="planes-promo__right">
                  <div className="price-card" role="group" aria-label="Precio desde">
                    <div className="price-card__top">
                      <img src={logoSuper} alt="Super TV" className="price-card__logo"/>
                      <span className="price-card__pill">Desde</span>
                    </div>

                    <div className="price-card__price">
                      <span className="price-card__currency">$</span>
                      <span className="price-card__amount" id="promoPrice" data-value="40000">40.000</span>
                      <span className="price-card__suffix">/ mes</span>
                    </div>

                    <div className="price-card__meta">
                      <span><i className="bi bi-check2-circle"></i> Sin letras pequeñas</span>
                      <span><i className="bi bi-check2-circle"></i> Planes desde 50 Mbps</span>
                    </div>

                    <a className="price-card__btn" href="#planes">
                      Elegir mi plan <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>

                  <div className="floating-person">
                    <img src={Asesor} alt="Asesor" />
                  </div>
                </div>
              </div>
            </section>


            <section id="planes" className="pricing-section">
              <div className="pricing-wrap">

                <header className="pricing-head">
                  <h2 className="pricing-title">Planes Hogar</h2>
                  <p className="pricing-subtitle">Elige el plan ideal para tu hogar o negocio.</p>

                  <div className="pricing-controls">
                    <div className="tabs" role="tablist" aria-label="Tipos de plan">
                        <button className="tab is-active" data-tab="internet">Internet</button>
                        <button className="tab" data-tab="internettv">Internet + TV</button>
                    </div>

                  </div>
                </header>

                <div className="grid grid--anim" id="plansGrid" aria-live="polite"></div>

                <p className="pricing-note">
                  * Precios sujetos a cobertura y disponibilidad. Escríbenos y confirmamos instalación y zona.
                </p>

              </div>
            </section>
        </>
    )
}
export default PlanesPage