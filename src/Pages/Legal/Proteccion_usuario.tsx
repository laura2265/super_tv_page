function ProteccionUsuario(){
    return(
        <>
            <section className="info-section">
              <div className="container-info">
                <div className="accordion">

                  <div className="hero-text hero-text--user">
                    <span className="hero-pill">
                      <span className="hero-dot"></span> Régimen de Protección al Usuario
                    </span>

                    <h1>Protección <span>al usuario</span></h1>

                    <p className="hero-lead">
                      Consulta información sobre <strong>derechos y deberes</strong>, <strong>PQRS</strong>,
                      <strong>calidad</strong>, <strong>compensaciones</strong>, facturación y canales de atención.
                    </p>

                    <div className="hero-chips">
                      <a className="chip">Derechos</a>
                      <a className="chip">Deberes</a>
                      <a className="chip">PQRS</a>
                      <a className="chip">Calidad</a>
                      <a className="chip chip-dd" >Compensaciones </a>
                    </div>

                    <div className="quick-support" id="u-acciones">
                      <h2 className="section-title">Atención rápida</h2>

                      <div className="quick-grid">
                        <a className="quick-card" href="https://wa.me/573014916832?text=Hola%20Super%20TV%2C%20necesito%20ayuda%20como%20usuario." target="_blank" rel="noopener noreferrer">
                          <div className="q-ic">💬</div>
                          <div className="q-tx">
                            <strong>WhatsApp soporte</strong>
                            <span>Asistencia inmediata</span>
                          </div>
                          <div className="q-go">→</div>
                        </a>

                        <a className="quick-card quick-card--pqrs" href="#u-pqrs">
                          <div className="q-ic">🧾</div>
                          <div className="q-tx">
                            <strong>Radicar PQRS</strong>
                            <span>Petición, queja o reclamo</span>
                          </div>
                          <div className="q-go">→</div>
                        </a>

                        <a className="quick-card quick-card--fact" href="https://clientes.portalinternet.net/saldo/super-tv/" target="_blank" rel="noopener noreferrer">
                          <div className="q-ic">💳</div>
                          <div className="q-tx">
                            <strong>Pagar factura</strong>
                            <span>Pagos y facturación</span>
                          </div>
                          <div className="q-go">→</div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="legal-block">
                    <h2 className="section-title">Información para usuarios</h2>

                    <details className="legal-details">
                      <summary className="acc-header acc-modern">
                        <span className="acc-left">
                          <span className="acc-ic">✅</span>
                          <span className="acc-title">
                            <strong>Derechos del usuario</strong>
                            <small>Acceso a información, atención, PQRS y no discriminación.</small>
                            <span className="acc-tags">
                              <em className="tag">Información</em>
                              <em className="tag">Atención</em>
                              <em className="tag">PQRS</em>
                            </span>
                          </span>
                        </span>
                        <span className="chev">⌄</span>
                      </summary>
                      <div className="acc-panel acc-panel--modern">
                        <div className="acc-legal-text">
                           <p>
                            En la Resolución 5050 de 2016, se deja en claro que de acuerdo con el anexo 2.1.11.1. el cual da una compensación por la falta de disponibilidad del servicio. <br/>
                            Teniendo en cuenta esto, cuando al usuario se le incuple con la prestación al servicio el se podra comunicar a los PQRS, en donde no se limitara al usuario de presentar cualquier tipo de queja  sobre la empresa o servicio adquirido. <br/><br/>
                            Frente a esta consulta, se aclara que, el régimen establece el alcance de las obligaciones de calidad para el servicio de acceso a Internet (artículo 5.1.2.1.) así como la prohibición de limitar el acceso a páginas Web o el uso de aplicaciones en la red (artículo 5.1.2.2.) sin consentimiento del usuario, salvo disposición legal. Así mismo, el artículo 5.1.4.2 establece que los indicadores a medir y reportar para el servicio de datos fijos corresponden a la velocidad de transmisión de datos alcanzada y al retardo en un sentido, cuyo procedimiento para medición y cálculo, así como los valores objetivo están consignados en la Parte 2 del ANEXO 5.1-B del título de anexos. Para el primero, se establece como valor objetivo las velocidades mínimas (más bajas) de carga y descarga relacionadas con la oferta comercial. Por su parte, para el indicador de retardo en un sentido se establece un valor objetivo de 50 milisegundos.
                           </p>
                          <ul>
                            <li>Más información <a href="La Comisión de Regulación de Comunicaciones, en adelante CRC, recibió su comunicación el día 25 de abril de 2022 con radicado 2022807076, mediante la cual se plantean unos interrogantes respecto de la Resolución CRC 5050 de 2016 en lo concerniente a la compensación automática por falta de disponibilidad de los servicios de comunicaciones, así como, respecto a los indicadores de calidad del servicio de Internet (fijo y móvil). Previo a dar respuesta a sus inquietudes, resulta pertinente mencionar que esta Comisión al rendir conceptos, lo hace de conformidad con lo dispuesto en el artículo 281 de la Ley 1755 del 2015 “Por medio de la cual se regula el Derecho Fundamental de petición y se sustituye un título del Código de Procedimiento Administrativo y de lo Contencioso Administrativo”. De este modo, el alcance del pronunciamiento solicitado tendrá los efectos que la normatividad le otorga a los conceptos rendidos por las autoridades administrativas, sobre lo que cabe recordar que en la medida en que los conceptos no pueden analizar situaciones de orden particular y concreto, los mismos deben hacer referencia de manera general y abstracta respecto de las materias sobre las que versa su consulta. ">aquí</a></li>
                          </ul>
                        </div>
                      </div>
                    </details>

                    <details className="legal-details">
                      <summary className="acc-header acc-modern">
                        <span className="acc-left">
                          <span className="acc-ic">🧩</span>
                          <span className="acc-title">
                            <strong>Deberes del usuario</strong>
                            <small>Pago oportuno, uso responsable y veracidad de información.</small>
                            <span className="acc-tags">
                              <em className="tag">Pago</em>
                              <em className="tag">Uso responsable</em>
                            </span>
                          </span>
                        </span>
                        <span className="chev">⌄</span>
                      </summary>
                      <div className="acc-panel acc-panel--modern" role="region" id="u-deberes">
                        <div className="acc-legal-text">
                          <p>ARTÍCULO 2.1.10.7. PREVENCIÓN DE FRAUDES. Los operadores tienen la obligación de hacer uso de herramientas tecnológicas adecuadas para prevenir que se cometan fraudes al interior de sus redes y debe hacer controles periódicos respecto a la efectividad de estos mecanismos. Cuando el usuario presente una PQR (petición, queja/reclamo o recurso) que pueda tener relación con un presunto fraude, el operador debe investigar sus causas; y en caso de que determine la no existencia de un fraude, le debe demostrar al usuario las razones por las cuales no procede su PQR (petición, queja/ reclamo o recurso). Sin embargo, si se demuestra que el usuario actuó diligentemente en el uso del servicio contratado, no habrá lugar al cobro de los consumos objeto de reclamación</p>
                          <ul>
                            <li>Pagar oportunamente los valores del servicio.</li>
                            <li>No usar el servicio para actividades ilícitas.</li>
                            <li>Mantener datos de contacto actualizados.</li>
                          </ul>
                        </div>
                      </div>
                    </details>

                    <details className="legal-details">
                      <summary className="acc-header acc-modern">
                        <span className="acc-left">
                          <span className="acc-ic">🧾</span>
                          <span className="acc-title">
                            <strong>PQRS</strong>
                            <small>Cómo radicar, soportes recomendados y tiempos de respuesta.</small>
                            <span className="acc-tags">
                              <em className="tag">Petición</em>
                              <em className="tag">Queja</em>
                              <em className="tag">Reclamo</em>
                            </span>
                          </span>
                        </span>
                        <span className="chev">⌄</span>
                      </summary>
                      <div className="acc-panel acc-panel--modern" role="region" id="u-pqrs">
                        <div className="acc-legal-text">
                          <p><strong>Aspectos clave de las PQR bajo la Resolución 5050 de 2016:</strong> </p>
                          <ul>
                            <li>Plazo de Respuesta: Los operadores tienen 15 días hábiles para dar respuesta a PQR y recursos (reposición y apelación).</li>
                            <li>Derechos del Usuario: Incluyen el derecho a recibir información clara, no recibir publicidad no autorizada, derecho a la portabilidad, y a la terminación unilateral del contrato.</li>
                            <li>Mantener datos de contacto actualizados.</li>
                          </ul>
                        </div>
                      </div>
                    </details>

                    <details className="legal-details">
                      <summary className="acc-header acc-modern">
                        <span className="acc-left">
                          <span className="acc-ic">📶</span>
                          <span className="acc-title">
                            <strong>Calidad del servicio</strong>
                            <small>Atención de fallas, tiempos y condiciones de prestación.</small>
                            <span className="acc-tags">
                              <em className="tag">Fallas</em>
                              <em className="tag">Soporte</em>
                              <em className="tag">Servicio</em>
                            </span>
                          </span>
                        </span>
                        <span className="chev">⌄</span>
                      </summary>
                      <div className="acc-panel acc-panel--modern" role="region" id="u-calidad">
                        <div className="acc-legal-text">

                          <p>La Resolución CRC 5050 de 2016 compiló el Régimen de Protección de los Derechos de los Usuarios de Servicios de Comunicaciones en Colombia. Establece principios como la calidad, continuidad, información clara y compensaciones automáticas ante fallas en internet, telefonía o TV, garantizando derechos de los usuarios y deberes de los proveedores</p>
                        </div>
                      </div>
                    </details>
                    
                    <details className="legal-details">
                      <summary className="acc-header acc-modern">
                        <span className="acc-left">
                        <span className="acc-ic">💰</span>
                          <span className="acc-title">
                            <strong>Compensaciones</strong>
                            <small>Interrupciones, descuentos y ajustes cuando proceda.</small>
                            <span className="acc-tags">
                              <em className="tag">Descuentos</em>
                              <em className="tag">Ajustes</em>
                            </span>
                          </span>
                        </span>
                        <span className="chev">⌄</span>
                      </summary>
                      <div className="acc-panel acc-panel--modern" role="region" id="u-comp">
                        <div className="acc-legal-text">
      
                          <p>En la Resolución 5050 de 2016, se deja en claro que de acuerdo con el anexo 2.1.11.1. el cual da una compensación por la falta de disponibilidad del servicio.
                          Teniendo en cuenta esto, cuando al usuario se le incuple con la prestación al servicio el se podra comunicar a los PQRS, en donde no se limitara al usuario de presentar cualquier tipo de queja sobre la empresa o servicio adquirido.</p>
                        </div>
                      </div>
                    </details>

                    <details className="legal-details">
                      <summary className="acc-header acc-modern">
                        <span className="acc-left">
                        <span className="acc-ic">⏸️</span>
                          <span className="acc-title">
                            <strong>Suspensión y terminación</strong>
                            <small>Causales, plazos y reactivación.</small>
                            <span className="acc-tags">
                              <em className="tag">Mora</em>
                              <em className="tag">Reactivación</em>
                            </span>
                          </span>
                        </span>
                        <span className="chev">⌄</span>
                      </summary>
                      <div className="acc-panel acc-panel--modern" role="region">
                        <div className="acc-legal-text">
                          <p>La Resolución CRC 5050 de 2016, compilada con las actualizaciones de la Resolución 5111 de 2017, establece el régimen de protección de usuarios. La suspensión procede por no pago (generalmente 2 meses), mientras que la terminación ocurre tras 3 meses de mora o 2 meses después de la suspensión, permitiendo la libre elección de operador y prohibiendo cláusulas de permanencia en servicios móviles. </p>
                        </div>
                      </div>
                    </details>

                    <details className="legal-details">
                      <summary className="acc-header acc-modern">
                        <span className="acc-left">
                        <span className="acc-ic">🧾</span>
                          <span className="acc-title">
                            <strong>Facturación</strong>
                            <small>Pagos, fechas, medios y aclaraciones.</small>
                            <span className="acc-tags">
                              <em className="tag">Pagos</em>
                              <em className="tag">Cartera</em>
                            </span>
                          </span>
                        </span>
                        <span className="chev">⌄</span>
                      </summary>
                      <div className="acc-panel acc-panel--modern" role="region">
                        <div className="acc-legal-text">
                          <p>La Resolución CRC 5050 de 2016, modificada por la Resolución 5111 de 2017, establece el régimen de protección de usuarios en Colombia. Garantiza derechos en facturación, como la discriminación de cobros por servicio, información clara de consumos, fecha de pago, y la opción de consultar consumos gratuitamente al menos dos veces al día (CRC).</p>
                        </div>
                      </div>
                    </details>

                    <details className="legal-details">
                      <summary className="acc-header acc-modern">
                        <span className="acc-left">
                        <span className="acc-ic">📍</span>
                          <span className="acc-title">
                            <strong>Canales de atención</strong>
                            <small>Horarios, medios de contacto y tiempos estimados.</small>
                            <span className="acc-tags">
                              <em className="tag">WhatsApp</em>
                              <em className="tag">Correo</em>
                              <em className="tag">Horario</em>
                            </span>
                          </span>
                        </span>
                        <span className="chev">⌄</span>
                      </summary>
                      <div className="acc-panel acc-panel--modern" role="region">
                        <div className="acc-legal-text">
                          <p><strong>WhatsApp:</strong> +57 XXXXXXXX</p>
                          <p><strong>Correo:</strong> soporte@tudominio.com</p>
                          <p><strong>Horario:</strong> Lun–Sáb 8:00 a.m – 6:00 p.m</p>
                        </div>
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </section>
        </>
    )
}

export default ProteccionUsuario