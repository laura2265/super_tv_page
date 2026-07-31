import "../../assets/css/pages/test_velocidad.css";
import imggFondo from "../../assets/Img/test/test.jpeg"
function TestPage() {
  return (
    <>
      <section className="test-hero">
         <div className="planes-promo__bg">
                <img id="heroBg" className="planes-promo__img" src={imggFondo} alt="Fibra óptica"/>
                <div className="planes-promo__overlay"></div>
              </div>
        <div className="test-hero__inner">
          <div className="test-hero__left">
            <h1>Test de velocidad</h1>
            <p>
              Esta herramienta mide la velocidad real de tu conexión para ayudarte a
              confirmar la calidad del servicio y detectar si tu experiencia de internet
              está por debajo de lo esperado.
            </p>
          </div>
        </div>
        <div className="test-page">
          <div className="test-page__hero">
            <div className="test-page__content">
              <span className="test-page__eyebrow">Servicio de soporte</span>
              <h1>¿Dudas?</h1>
              <p className="test-page__lead">
                Comprueba la velocidad real de tu conexión de internet en unos segundos y
                verifica si tu experiencia de navegación y streaming está funcionando como
                debería.
              </p>

              <p className="test-page__support-copy">
                Si tu conexión presenta fallos, esta herramienta te ayuda a validar el
                rendimiento de tu servicio y a identificar si necesitas atención adicional.
              </p>

              <div className="test-page__actions">
                <a
                  className="test-page__button"
                  href="https://www.speedtest.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Iniciar test de velocidad
                </a>
              </div>
            </div>

            <div className="test-page__card">
              <h2>¿Cómo usarlo?</h2>
              <ul>
                <li>Haz clic en el botón "Iniciar test de velocidad".</li>
                <li>Ejecuta la prueba en tu conexión actual.</li>
                <li>Revisa resultados de descarga, subida y latencia.</li>
                <li>Deberían ser similares a lo que contrataste con nosotros.</li>
              </ul>

              <div className="test-page__metrics">
                <article className="metric-card">
                  <span className="metric-card__label">Descarga media</span>
                  <strong>30–50 Mbps</strong>
                </article>
                <article className="metric-card">
                  <span className="metric-card__label">Subida media</span>
                  <strong>10–20 Mbps</strong>
                </article>
                <article className="metric-card">
                  <span className="metric-card__label">Latencia sugerida</span>
                  <strong>≤ 30 ms</strong>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestPage;