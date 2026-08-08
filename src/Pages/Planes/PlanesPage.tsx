import '../../assets/css/pages/planes.css'
import usePageEffect from '../../assets/hooks/usePageEffect'
import imgFibra from "../../assets/Img/Planes/fibraop.png"

function PlanesPage(){
    usePageEffect();
    return(
        <>
            <section className="planes-promo" aria-label="Promoción de planes">
              <div className="planes-promo__bg">
                <img id="heroBg" className="planes-promo__img" src={imgFibra} alt="Fibra óptica"/>
                <div className="planes-promo__overlay"></div>
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
                        <button className="tab" data-tab="internetstreaming">Internet + Streaming</button>
                        <button className="tab" data-tab="internettvstreaming">Internet + TV + Streaming</button>
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