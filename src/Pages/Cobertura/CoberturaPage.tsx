import "../../assets/css/pages/cobertura.css"
import "../../assets/css/pages/mapa.css"

function CoberturaPage(){
    return(
        <>
            <section className="coverage-hero">
              <div className="coverage-hero__inner">
                <div className="coverage-hero__left">
                  <h1>Cobertura</h1>
                  <p>Descubre si tenemos cobertura para ti.</p>

                    <div className="cov-search">
                      <div className="cov-row">
                        <div className="cov-field" id="covField">
                          <span className="cov-icon">📍</span>

                          <div className="cov-inputWrap">
                            <label className="cov-label">Dirección o barrio</label>
                            <input
                              id="coverageSearchInput"
                              type="text"
                              placeholder="Ej: Cra 7 # 72-41, Bogotá o Ciudad Jardín"
                              autoComplete="off"
                            />
                          </div>

                          <button id="btnClearSearch" className="cov-clear" type="button" aria-label="Limpiar">✕</button>

                          <div id="covDropdown" className="cov-dd" aria-hidden="true">
                            <div className="cov-ddItem" data-value="Cra 7 # 72-41, Bogotá">Cra 7 # 72-41, Bogotá</div>
                            <div className="cov-ddItem" data-value="Cra 13 # 93-31, Bogotá">Cra 13 # 93-31, Bogotá</div>
                            <div className="cov-ddItem" data-value="Cra 65 # 80A-34, Bogotá">Cra 65 # 80A-34, Bogotá</div>
                            <div className="cov-ddItem" data-value="Cra 6 # 25B-90, Bogotá">Cra 6 # 25B-90, Bogotá</div>

                            <div className="cov-ddFooter">
                              <span className="cov-ddHint">Sugerencias</span>
                            </div>
                          </div>
                        </div>

                        
                        <div className="cov-actions">
                          <button id="btnLocate" className="cov-btn cov-btnGhost" type="button">
                            <span className="ic">📍</span> Mi ubicación
                          </button>
                          <button id="btnSearch" className="planes-promo__btn planes-promo__btn--primary" type="button">
                            Consultar <span className="ic">→</span>
                          </button>
                        </div>
                      </div>

                      <div className="cov-chips">
                        <button className="cov-chip" type="button" data-fill="Ciudad Jardín, Bogotá">Ciudad Jardín</button>
                        <button className="cov-chip" type="button" data-fill="Paraíso, Bogotá">Paraíso</button>
                        <button className="cov-chip" type="button" data-fill="San Francisco, Bogotá">San Francisco</button>
                        <button className="cov-chip" type="button" data-fill="La Estrella, Bogotá">La Estrella</button>
                      </div>

                      <div className="cov-tip" id="coverageStatus">
                        <span className="cov-tipDot"></span>
                        <div className="cov-tipText">
                          <strong>Tip:</strong> escribe tu dirección completa para obtener mejores resultados.
                        </div>
                      </div>
                    </div>

                    </div>
            </div>
          </section>


            <section className="coverage-stage">
              <div className="coverage-wrap">
              <div className="coverage-grid">

                <aside className="coverage-panel" id="coverage-panel">
                  <div className="cov-head">
                    <div className="cov-head__icon">📍</div>
                    <div className="cov-text-panel"> 
                      <h3>Zonas de cobertura</h3>
                      <p>Selecciona una zona para verla en el mapa</p>
                    </div>
                  </div>

                  <div className="cov-list">

                    <div className="cov-group" data-group="CIUDAD_JARDIN">
                      <button className="cov-group__btn" type="button">
                        <span className="title">CIUDAD JARDÍN</span>
                        <span className="chev">▾</span>
                      </button>

                      <div className="cov-group__body">
                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="CIUDAD_JARDIN"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">CIUDAD JARDÍN</span>
                        </label>

                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="CLARET_2"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">CLARET 2</span>
                        </label>
                      </div>
                    </div>

                    <div className="cov-group" data-group="LA ESTRELLA">
                      <button className="cov-group__btn" type="button">
                        <span className="title">LA ESTRELLA</span>
                        <span className="chev">▾</span>
                      </button>

                      <div className="cov-group__body">
                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="ACAPULCO"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">ACAPULCO</span>
                        </label>

                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="JUAN_PABLO"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">JUAN PABLO</span>
                        </label>

                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="LA_ESTRELLA"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">LA ESTRELLA</span>
                        </label>


                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="LUCERO"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">LUCERO</span>
                        </label>

                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="MOCHUELO"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">MOCHUELO</span>
                        </label>

                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="MOCHUELO2"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">MOCHUELO 2</span>
                        </label>

                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="MOCHUELO3"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">MOCHUELO 3</span>
                        </label>

                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="MOCHUELO4"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">MOCHUELO 4</span>
                        </label>

                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="URP"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">URP</span>
                        </label>

                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="URP2"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">URP 2</span>
                        </label>

                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="VISTA_HERMOSA"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">VISTA HERMOSA</span>
                        </label>

                      </div>
                    </div>

                    <div className="cov-group" data-group="PARAISO">
                      <button className="cov-group__btn" type="button">
                        <span className="title">PARAISO</span>
                        <span className="chev">▾</span>
                      </button>

                      <div className="cov-group__body">
                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="PARAISO"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">PARAISO</span>
                        </label>

                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="PARAISO2"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">PARAISO 2</span>
                        </label>

                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="PARAISO3"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">PARAISO 3</span>
                        </label>

                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="PARAISO4"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">PARAISO 4</span>
                        </label>

                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="VISTA_HERMOSA2"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">VISTA HERMOSA 2</span>
                        </label>
                      </div>
                    </div>

                    <div className="cov-group" data-group="SAN_CARLOS">
                      <button className="cov-group__btn" type="button">
                        <span className="title">SAN CARLOS</span>
                        <span className="chev">▾</span>
                      </button>

                      <div className="cov-group__body">
                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="ACACIAS"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">ACACIAS</span>
                        </label>

                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="BRAVO_PAEZ"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">BRAVO_PAEZ</span>
                        </label>

                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="BRAVO_PAEZ2"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">BRAVO PAEZ 2</span>
                        </label>

                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="CLARET"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">CLARET</span>
                        </label>

                      </div>
                    </div>


                    <div className="cov-group" data-group="SAN_FRANCISCO">
                      <button className="cov-group__btn" type="button">
                        <span className="title">SAN FRANCISCO</span>
                        <span className="chev">▾</span>
                      </button>

                      <div className="cov-group__body">
                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="ACACIAS2"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">ACACIAS 2</span>
                        </label>

                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="CANDELARIA_LA_NUEVA"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">CANDELARIA LA NUEVA</span>
                        </label>

                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="JOSE_RENDON"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">JOSE RENDON</span>
                        </label>
                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="JOSE_RENDON2"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">JOSE RENDON 2</span>
                        </label>

                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="JUAN_PABLO2"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">JUAN PABLO 2</span>
                        </label>


                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="MEXICCO"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">MEXICCO</span>
                        </label>

                        <label className="cov-item">
                          <input type="checkbox" checked data-layer="SAN_FRANCISCO"/>
                          <span className="tick" data-focus="1"></span>
                          <span className="text" data-focus="1">SAN_FRANCISCO</span>
                        </label>

                      </div>
                    </div>
                  </div>

                  <div className="cov-footer">
                    <div className="cov-count">
                      <span className="dot"></span>
                      <strong id="covCount">0</strong>
                      <span>zonas con cobertura</span>
                    </div>
                  </div>
                </aside>

                <div className="cov-map">
                  <h2 className="cov-map__title">Mapa</h2>
                  <div id="map" className="coverage-map__canvas"></div>
                </div>

              </div>
              </div>
            </section>


            <section className="horarios">
              <div className="horarios__container">
                <h2 className="horarios__title">Horarios de Oficina</h2>
                <p className="horarios__subtitle">
                  Encuentra la oficina más cercana y sus horarios de atención.
                </p>

                <div className="horarios__grid">

                  <article className="office-card" 
                    data-weekday-open="08:00" 
                    data-weekday-close="16:30"
                    data-sunhol-open="09:00"
                    data-sunhol-close="13:00"

                    data-address="Cl. 70a Bis Sur #17d-26, Bogotá, Colombia"
                  >
                    <div className="office-card2">
                      <div className="office-top">
                        <div className="office-chip">
                          <span className="dot"></span>
                          Oficina de atención
                        </div>

                        <div className="office-tag">
                          📍 Consultas
                        </div>
                      </div>

                      <h3 className="office-title">Oficina Quintas</h3>
                      <p className="office-address">Cl. 70a Bis Sur #17d-26</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        Abierto ahora
                        <span className="office-hours-mini">• Cierra 4:30 pm</span>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Sabado</span>
                          <strong>8:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos y festivos</span>
                          <strong>9:00– 13:00</strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <button className="btn-map">Ver en mapa →</button>
                      </div>
                    </div>
                  </article>


                  <article className="office-card" 
                    data-weekday-open="08:00" 
                    data-weekday-close="16:30"
                    data-sunhol-open="09:00"
                    data-sunhol-close="13:00"
                    data-address="Cl. 76 Sur #18c-2 a 18c-76, Bogotá, Colombia"
                  >
                    <div className="office-card2">
                      <div className="office-top">
                        <div className="office-chip">
                          <span className="dot"></span>
                          Oficina de atención
                        </div>

                        <div className="office-tag">
                          📍 Consultas
                        </div>
                      </div>

                      <h3 className="office-title">Oficina Estrella</h3>
                      <p className="office-address">Cl. 76 Sur #18c-2 a 18c-76</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        Abierto ahora
                        <span className="office-hours-mini">• Cierra 4:30 pm</span>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>8:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos y festivos</span>
                          <strong>9:00 – 13:00</strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <button className="btn-map">Ver en mapa →</button>
                      </div>
                    </div>
                  </article>

                  <article className="office-card"
                    data-weekday-open="08:00"
                    data-weekday-close="16:30"
                    data-sunhol-closed="true"
                    data-address="Cl. 66A Sur #17d-21, Bogotá, Colombia"
                  >
                    <div className="office-card2">
                      <div className="office-top">
                        <div className="office-chip">
                          <span className="dot"></span>
                          Oficina de atención
                        </div>

                        <div className="office-tag">
                          📍 Consultas
                        </div>
                      </div>

                      <h3 className="office-title">Oficina Alameda</h3>
                      <p className="office-address">Cl. 66A Sur #17d-21</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        Abierto ahora
                        <span className="office-hours-mini">• Cierra 4:30 pm</span>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Sabado</span>
                          <strong>8:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos y festivos</span>
                          <strong>No Hay Servicio</strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <button className="btn-map">Ver en mapa →</button>
                      </div>
                    </div>

                  </article>

                  <article className="office-card" 
                    data-weekday-open="09:00" 
                    data-weekday-close="16:30"
                    data-sunhol-open="09:00"
                    data-sunhol-close="13:00"
                    data-address="CR 19 B 61 85 SUR, Bogotá, Colombia"
                  >
                    <div className="office-card2">
                      <div className="office-top">
                        <div className="office-chip">
                          <span className="dot"></span>
                          Oficina de atención
                        </div>

                        <div className="office-tag">
                          📍 Consultas
                        </div>
                      </div>

                      <h3 className="office-title">Oficina Acacias</h3>
                      <p className="office-address">CR 19 B 61 85 SUR</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        Abierto ahora
                        <span className="office-hours-mini">• Cierra 4:30 pm</span>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>9:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos y festivos</span>
                          <strong>9:00 - 13:00 </strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <button className="btn-map">Ver en mapa →</button>
                      </div>
                    </div>
                  </article>

                  <article className="office-card" 
                    data-weekday-open="08:00" 
                    data-weekday-close="16:30"
                    data-sunhol-open="09:00"
                    data-sunhol-close="13:00"
                    data-address="CR 20 65 25 SUR, Bogotá, Colombia"
                  >
                    <div className="office-card2">
                      <div className="office-top">
                        <div className="office-chip">
                          <span className="dot"></span>
                          Oficina de atención
                        </div>

                        <div className="office-tag">
                          📍 Consultas
                        </div>
                      </div>

                      <h3 className="office-title">Oficina San Francisco</h3>
                      <p className="office-address">CR 20 65 25 SUR</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        Abierto ahora
                        <span className="office-hours-mini">• Cierra 4:30 pm</span>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>8:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos y festivos</span>
                          <strong>9:00 - 13:00 </strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <button className="btn-map">Ver en mapa →</button>
                      </div>
                    </div>
                  </article>

                  <article className="office-card" 
                    data-weekday-open="10:00" 
                    data-weekday-close="16:30"
                    data-sunhol-open="09:00"
                    data-sunhol-close="13:00"
                    data-address="Cl. 71p Sur #27f-10, Bogotá, Colombia"
                  >
                    <div className="office-card2">
                      <div className="office-top">
                        <div className="office-chip">
                          <span className="dot"></span>
                          Oficina de atención
                        </div>

                        <div className="office-tag">
                          📍 Consultas
                        </div>
                      </div>

                      <h3 className="office-title">Oficina Paraiso</h3>
                      <p className="office-address">Cl. 71p Sur #27f-10</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        Abierto ahora
                        <span className="office-hours-mini">• Cierra 4:30 pm</span>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>10:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos y festivos</span>
                          <strong>9:00 - 13:00 </strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <button className="btn-map">Ver en mapa →</button>
                      </div>
                    </div>
                  </article>

                  <article className="office-card" 
                    data-weekday-open="8:00" 
                    data-weekday-close="16:30"
                    data-sunhol-closed="true"
                    data-address="CL 19 12C 15 SUR, Bogotá, Colombia"
                  >
                    <div className="office-card2">
                      <div className="office-top">
                        <div className="office-chip">
                          <span className="dot"></span>
                          Oficina de atención
                        </div>

                        <div className="office-tag">
                          📍 Consultas
                        </div>
                      </div>

                      <h3 className="office-title">Oficina Ciudad Jardin</h3>
                      <p className="office-address">CL 19 12C 15 SUR</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        Abierto ahora
                        <span className="office-hours-mini">• Cierra 4:30 pm</span>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>8:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos y festivos</span>
                          <strong>9:00 - 13:00 </strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <button className="btn-map">Ver en mapa →</button>
                      </div>
                    </div>
                  </article>

                  <article className="office-card" 
                    data-weekday-open="11:00" 
                    data-weekday-close="16:30"
                    data-sunhol-closed="true"
                    data-address="Cl. 41 Sur # 26-35, Bogotá, Colombia"
                  >
                    <div className="office-card2">
                      <div className="office-top">
                        <div className="office-chip">
                          <span className="dot"></span>
                          Oficina de atención
                        </div>

                        <div className="office-tag">
                          📍 Consultas
                        </div>
                      </div>

                      <h3 className="office-title">Oficina Ingles</h3>
                      <p className="office-address">Cl. 41 Sur # 26-35</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        Abierto ahora
                        <span className="office-hours-mini">• Cierra 4:30 pm</span>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>11:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos y festivos</span>
                          <strong>9:00 - 13:00</strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <button className="btn-map">Ver en mapa →</button>
                      </div>
                    </div>
                  </article>

                  <article className="office-card" 
                    data-weekday-open="8:00" 
                    data-weekday-close="16:30"
                    data-sunhol-closed="true"
                    data-address="Cl. 33 Sur #23, Bogotá, Colombia"
                  >
                    <div className="office-card2">
                      <div className="office-top">
                        <div className="office-chip">
                          <span className="dot"></span>
                          Oficina de atención
                        </div>

                        <div className="office-tag">
                          📍 Consultas
                        </div>
                      </div>

                      <h3 className="office-title">Oficina Quiroga</h3>
                      <p className="office-address">Cl. 33 Sur #23</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        Abierto ahora
                        <span className="office-hours-mini">• Cierra 4:30 pm</span>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>8:00 – 16:00</strong>
                        </div>
                        <div className="row">
                          <span>Domingos y festivos</span>
                          <strong>9:00 - 13:00  </strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <button className="btn-map">Ver en mapa →</button>
                      </div>
                    </div>
                  </article>

                  <article className="office-card" 
                    data-weekday-open="8:00" 
                    data-weekday-close="16:30"
                    data-sunhol-closed="true"
                    data-address="CL 19 C 52 SUR 26, Bogotá, Colombia"
                  >
                    <div className="office-card2">
                      <div className="office-top">
                        <div className="office-chip">
                          <span className="dot"></span>
                          Oficina de atención
                        </div>

                        <div className="office-tag">
                          📍 Consultas
                        </div>
                      </div>

                      <h3 className="office-title">Oficina San Carlos</h3>
                      <p className="office-address">CL 19 C 52 SUR 26</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        Abierto ahora
                        <span className="office-hours-mini">• Cierra 4:30 pm</span>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>8:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos y festivos</span>
                          <strong>9:00 - 13:00</strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <button className="btn-map">Ver en mapa →</button>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </section>
        </>
    )
}

export default CoberturaPage