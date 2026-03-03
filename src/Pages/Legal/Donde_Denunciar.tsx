import "../../assets/css/pages/proteccion_usuario.css"

function DondeDenunciar(){
    return(
        <>
            <section className="info-section">
              <div className="container-info">
                <div className="accordion">
                
                  <div className="hero-text hero-text--denuncia">
                    <span className="hero-pill">
                      <span className="hero-dot"></span> Canales oficiales
                    </span>
                  
                    <h1>Dónde <span>denunciar</span></h1>
                  
                    <p className="hero-lead">
                      Si conoces situaciones relacionadas con explotación, abuso o delitos
                      contra menores en internet, estos son los canales oficiales en Colombia.
                    </p>
                  
                    <div className="quick-support">
                      <div className="quick-grid">
                      
                        <a className="quick-card" href="https://www.mintic.gov.co/portal/inicio/Sala-de-prensa/Noticias/720:Internet-Sano-una-estrategia-para-proteger-la-identidad-de-ninos-y-jovenes-en-la-red" target="_blank">
                          <div className="q-ic">🛡️</div>
                          <div className="q-tx">
                            <strong>Internet Sano</strong>
                            <span>Ministerio TIC</span>
                          </div>
                          <div className="q-go">→</div>
                        </a>
                      
                        <a className="quick-card quick-card--pqrs" href="https://adenunciar.policia.gov.co/Adenunciar/Login.aspx?ReturnUrl=%2fadenunciar%2ffrm_denuncia_di.aspx" target="_blank">
                          <div className="q-ic">👮</div>
                          <div className="q-tx">
                            <strong>Denuncia virtual</strong>
                            <span>Policía Nacional</span>
                          </div>
                          <div className="q-go">→</div>
                        </a>
                      
                        <a className="quick-card quick-card--fact" href="https://sicecon.fiscalia.gov.co/denuncia/LlenarFormulario" target="_blank">
                          <div className="q-ic">⚖️</div>
                          <div className="q-tx">
                            <strong>Fiscalía</strong>
                            <span>Formulario oficial</span>
                          </div>
                          <div className="q-go">→</div>
                        </a>
                      
                      </div>
                    </div>
                  </div>
                
                  <button className="acc-header acc-modern" type="button" aria-expanded="false">
                    <span className="acc-left">
                      <span className="acc-ic">🛡️</span>
                      <span className="acc-title">
                        <strong>Ministerio TIC – Internet Sano</strong>
                        <small>Línea gratuita y sitio web oficial</small>
                      </span>
                    </span>
                    <span className="chev">⌄</span>
                  </button>
                
                  <div className="acc-panel acc-panel--modern" role="region">
                    <div className="acc-legal-text">
                      <p><strong>Línea nacional:</strong> 01 8000 912667</p>
                      <p><strong>Sitio web:</strong>
                        <a href="https://www.mintic.gov.co/portal/inicio/Sala-de-prensa/Noticias/720:Internet-Sano-una-estrategia-para-proteger-la-identidad-de-ninos-y-jovenes-en-la-red" target="_blank">
                          Internet Sano
                        </a>
                      </p>
                    </div>
                  </div>
                
                  <button className="acc-header acc-modern" type="button" aria-expanded="false">
                    <span className="acc-left">
                      <span className="acc-ic">👮</span>
                      <span className="acc-title">
                        <strong>Policía Nacional – DIJIN</strong>
                        <small>Delitos informáticos</small>
                      </span>
                    </span>
                    <span className="chev">⌄</span>
                  </button>
                
                  <div className="acc-panel acc-panel--modern" role="region">
                    <div className="acc-legal-text">
                      <p><strong>Denuncia virtual:</strong> 
                        <a href="https://adenunciar.policia.gov.co" target="_blank">adenunciar.policia.gov.co</a>
                      </p>
                      <p><strong>CAI Virtual:</strong>
                        <a href="https://caivirtual.policia.gov.co" target="_blank">caivirtual.policia.gov.co</a>
                      </p>
                      <p><strong>Teléfono Bogotá:</strong> (601) 5159700</p>
                    </div>
                  </div>
                
                  <button className="acc-header acc-modern" type="button" aria-expanded="false">
                    <span className="acc-left">
                      <span className="acc-ic">⚖️</span>
                      <span className="acc-title">
                        <strong>Fiscalía General de la Nación</strong>
                        <small>Denuncia formal</small>
                      </span>
                    </span>
                    <span className="chev">⌄</span>
                  </button>
                
                  <div className="acc-panel acc-panel--modern" role="region">
                    <div className="acc-legal-text">
                      <p><strong>Línea:</strong> 018000919748</p>
                      <p><strong>Formulario:</strong>
                        <a href="https://sicecon.fiscalia.gov.co/denuncia/LlenarFormulario" target="_blank">
                          sicecon.fiscalia.gov.co
                        </a>
                      </p>
                    </div>
                  </div>
                
                  <button className="acc-header acc-modern" type="button" aria-expanded="false">
                    <span className="acc-left">
                      <span className="acc-ic">👨‍👩‍👧</span>
                      <span className="acc-title">
                        <strong>ICBF</strong>
                        <small>Protección a niños, niñas y adolescentes</small>
                      </span>
                    </span>
                    <span className="chev">⌄</span>
                  </button>
                
                  <div className="acc-panel acc-panel--modern" role="region">
                    <div className="acc-legal-text">
                      <p><strong>Línea 141:</strong> Atención 24 horas</p>
                      <p><strong>WhatsApp:</strong> 320 239 16 85</p>
                      <p><strong>Email:</strong> atencionalciudadano@icbf.gov.co</p>
                    </div>
                  </div>
                
                </div>
              </div>
            </section>
        </>
    )
}

export default DondeDenunciar