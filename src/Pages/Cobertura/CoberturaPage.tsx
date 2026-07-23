import { useEffect } from "react";
import "../../assets/css/pages/cobertura.css"
import "../../assets/css/pages/mapa.css"
import { isHoliday } from "colombian-holidays/isHoliday";
import "leaflet/dist/leaflet.css"; 

function CoberturaPage(){
  useEffect(() => {
    function parseTimeToMinutes(value: string): number {
      const [hours, minutes] = value
        .split(":")
        .map(Number);

      return hours * 60 + minutes;
    }

    function formatTime(value: string): string {
      const [hours, minutes] = value
        .split(":")
        .map(Number);

      const date = new Date();
      date.setHours(hours, minutes, 0, 0);

      return new Intl.DateTimeFormat("es-CO", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(date);
    }

    function getBogotaDateInformation() {
      const formatter = new Intl.DateTimeFormat(
        "en-CA",
        {
          timeZone: "America/Bogota",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hourCycle: "h23",
        }
      );

      const parts = formatter
        .formatToParts(new Date())
        .reduce<Record<string, string>>(
          (result, part) => {
            result[part.type] = part.value;
            return result;
          },
          {}
        );

      const year = Number(parts.year);
      const month = Number(parts.month);
      const day = Number(parts.day);
      const hour = Number(parts.hour);
      const minute = Number(parts.minute);

      /*
       * La librería colombian-holidays compara fechas
       * en UTC, por eso construimos la fecha de esta forma.
       */
      const colombianDate = new Date(
        Date.UTC(year, month - 1, day)
      );

      return {
        colombianDate,
        dayOfWeek: colombianDate.getUTCDay(),
        currentMinutes: hour * 60 + minute,
      };
    }

    function updateOfficeStatuses() {
      const {
        colombianDate,
        dayOfWeek,
        currentMinutes,
      } = getBogotaDateInformation();

      const todayIsHoliday =
        isHoliday(colombianDate);

      const officeCards =
        document.querySelectorAll<HTMLElement>(
          ".office-card"
        );

      officeCards.forEach((card) => {
        const status =
          card.querySelector<HTMLElement>(
            ".office-status"
          );

        const statusText =
          card.querySelector<HTMLElement>(
            ".office-status-text"
          );

        const statusDetail =
          card.querySelector<HTMLElement>(
            ".office-hours-mini"
          );

        if (
          !status ||
          !statusText ||
          !statusDetail
        ) {
          return;
        }

        const setClosed = (
          message: string,
          detail = ""
        ) => {
          status.classList.remove("open");
          status.classList.add("close}");

          statusText.textContent = message;

          statusDetail.textContent = detail
            ? `• ${detail}`
            : "";
        };
        

        const setOpen = (
          closeTime: string
        ) => {
          status.classList.remove("close");
          status.classList.add("open");

          statusText.textContent = "Abierto ahora";
          statusDetail.textContent =
            `• Cierra ${formatTime(closeTime)}`;
        };

        const holidayClosed =
          card.dataset.holidayClosed === "true";

        if (todayIsHoliday && holidayClosed) {
          setClosed(
            "Cerrado por festivo",
            "No hay servicio hoy"
          );

          return;
        }

        let openTime: string | undefined;
        let closeTime: string | undefined;

        if (dayOfWeek === 0) {
          const sundayClosed =
            card.dataset.sundayClosed === "true";

          if (sundayClosed) {
            setClosed(
              "Cerrado hoy",
              "No hay servicio los domingos"
            );

            return;
          }

          openTime = card.dataset.sundayOpen;
          closeTime = card.dataset.sundayClose;
        } else {
          openTime = card.dataset.weekdayOpen;
          closeTime = card.dataset.weekdayClose;
        }

        if (!openTime || !closeTime) {
          setClosed(
            "Horario no disponible"
          );

          return;
        }

        const openingMinutes =
          parseTimeToMinutes(openTime);

        const closingMinutes =
          parseTimeToMinutes(closeTime);

        if (currentMinutes < openingMinutes) {
          setClosed(
            "Cerrado ahora",
            `Abre ${formatTime(openTime)}`
          );

          return;
        }

        if (currentMinutes >= closingMinutes) {
          setClosed(
            "Cerrado ahora",
            `Cerró a las ${formatTime(closeTime)}`
          );
        
          return;
        }

        setOpen(closeTime);
      });
    }

    updateOfficeStatuses();

    const intervalId = window.setInterval(
      updateOfficeStatuses,
      60_000
    );

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);
    return(
        <>
            <section className="coverage-hero">
              <div className="coverage-hero__inner">
                <div className="coverage-hero__left">
                  <h1>Cobertura</h1>
                  
                        
                </div>
              </div>
            </section>


            <section className="coverage-stage">
              <div className="coverage-wrap">
              <div className="coverage-grid">

                
                <iframe src="https://www.google.com/maps/d/embed?mid=1dls_2XjRUWcWzb66LDJPJPS663C3z6Q&ehbc=2E312F" width="1160" height="560"></iframe>
                
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
                    data-weekday-open="07:00" 
                    data-weekday-close="16:30"
                    data-sunhol-open="09:00"
                    data-sunhol-close="13:00"
                    data-holiday-open="09:00"
                    data-holiday-close="13:00"
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
                      <p className="office-address">Cra 20 #65-25, Bogotá</p>

                      <div className="office-status open">
                        
                        <span className="pulse"></span>
                        <div>
                          <span className="office-status-text">
                            Abierto ahora
                          </span>
                          <span className="office-hours-mini"> • Cargando...</span>
                        </div>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>7:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos</span>
                          <strong>9:00 - 13:00 </strong>
                        </div>
                        <div className="row">
                          <span>Festivos</span>
                          <strong>9:00 - 13:00 </strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <a target="_blank" href="https://maps.app.goo.gl/DeB4D5LBPRbsKxJU7?g_st=aw" className="btn-map">Ver en mapa →</a>
                      </div>
                    </div>
                  </article>

                  <article className="office-card" 
                    data-weekday-open="7:00" 
                    data-weekday-close="16:30"
                    data-sunhol-close="true"
                    data-holiday-close="true"
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
                      <p className="office-address">Cra. 19c #52-26, Bogotá</p>

                      <div className="office-status open">
                        
                        <span className="pulse"></span>
                        <div>
                          <span className="office-status-text">
                            Abierto ahora
                          </span>
                          <span className="office-hours-mini"> • Cargando...</span>
                        </div>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>7:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos</span>
                          <strong>No Hay Servicio</strong>
                        </div>
                        <div className="row">
                          <span>Festivos</span>
                          <strong>No Hay Servicio</strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <a target="_blank" href="https://maps.app.goo.gl/HYc3iHfnubstnp1D8?g_st=aw" className="btn-map">Ver en mapa →</a>
                      </div>
                    </div>
                  </article>

                  <article className="office-card" 
                    data-weekday-open="07:00" 
                    data-weekday-close="16:30"
                    data-sunhol-open="08:00"
                    data-sunhol-close="13:00"
                    data-holiday-close="true"
                    data-address="Cra. 19b # 61 SUR-85, Cdad. Bolívar, Bogotá, D.C., Bogotá, Bogotá, D.C."
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
                      <p className="office-address">Cra. 19b # 61 SUR-85</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        <div>
                          <span className="office-status-text">
                            Abierto ahora
                          </span>
                          <span className="office-hours-mini"> • Cargando...</span>
                        </div>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>7:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos</span>
                          <strong>8:00 - 13:00</strong>
                        </div>
                        <div className="row">
                          <span>Festivos</span>
                          <strong>No Hay Servicio</strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <a target="_blank" href="https://maps.app.goo.gl/yMnMJqxPba4tPi4FA?g_st=aw" className="btn-map">Ver en mapa →</a>
                      </div>
                    </div>
                  </article>

                  <article className="office-card" 
                    data-weekday-open="07:00" 
                    data-weekday-close="16:30"
                    data-sunday-open="08:00"
                    data-sunday-close="13:00"
                    data-holiday-open="08:00"
                    data-holiday-close="13:00"

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
                      <p className="office-address">Cl. 70a Bis Sur #17d-26, Bogotá</p>

                      <div className="office-status open">
                        
                        <span className="pulse"></span>
                        <div>
                          <span className="office-status-text">
                            Abierto ahora
                          </span>
                          <span className="office-hours-mini"> • Cargando...</span>
                        </div>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Sabado</span>
                          <strong>7:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos</span>
                          <strong>8:00 - 13:00</strong>
                        </div>
                        <div className="row">
                          <span>Festivos</span>
                          <strong>8:00 - 13:00</strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <a target="_blank" href="https://maps.app.goo.gl/YHVCaGCjpXMk95jaA?g_st=aw" className="btn-map">Ver en mapa →</a>
                      </div>
                    </div>
                  </article>

                  <article className="office-card" 
                    data-weekday-open="09:00" 
                    data-weekday-close="16:30"
                    data-sunhol-open="08:00"
                    data-sunhol-close="13:00"
                    data-holiday-close="true"
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
                      <p className="office-address">Cl. 76 Sur #18b-2 a 18b-48, Bogotá</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        <div>
                          <span className="office-status-text">
                            Abierto ahora
                          </span>
                          <span className="office-hours-mini"> • Cargando...</span>
                        </div>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>9:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos</span>
                          <strong>8:00 - 13:00</strong>
                        </div>
                        <div className="row">
                          <span>Festivos</span>
                          <strong>No Hay Servicio</strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <a target="_blank" href="https://maps.app.goo.gl/zhXyekgbrk4A75i68?g_st=aw" className="btn-map">Ver en mapa →</a>
                      </div>
                    </div>
                  </article>

                  <article className="office-card" 
                    data-weekday-open="09:00" 
                    data-weekday-close="16:30"
                    data-sunday-close="true"
                    data-holiday-close="true"

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

                      <h3 className="office-title">Oficina Tesoro</h3>
                      <p className="office-address">CRA 18I #79C-20 SUR</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        <div>
                          <span className="office-status-text">
                            Abierto ahora
                          </span>
                          <span className="office-hours-mini"> • Cargando...</span>
                        </div>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Sabado</span>
                          <strong>9:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos</span>
                          <strong>No Hay Servicio</strong>
                        </div>
                        <div className="row">
                          <span>Festivos</span>
                          <strong>No Hay Servicio</strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <a target="_blank" href="https://maps.app.goo.gl/p2M1Ykzs2LZk2Jep7" className="btn-map">Ver en mapa →</a>
                      </div>
                    </div>
                  </article>

                  <article className="office-card" 
                    data-weekday-open="9:00" 
                    data-weekday-close="16:30"
                    data-sunhol-close="true"
                    data-holiday-close="true"
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
                      <p className="office-address">Cl. 71p Sur #27f-10, Bogotá</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        <div>
                          <span className="office-status-text">
                            Abierto ahora
                          </span>
                          <span className="office-hours-mini"> • Cargando...</span>
                        </div>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>9:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos</span>
                          <strong>8:00 - 13:00</strong>
                        </div>
                        <div className="row">
                          <span>Festivos</span>
                          <strong>8:00 - 13:00</strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <a target="_blank" href="https://maps.app.goo.gl/Pt77uoeUDUaLxxuM6?g_st=aw" className="btn-map">Ver en mapa →</a>
                      </div>
                    </div>
                  </article>

                  <article className="office-card"
                    data-weekday-open="08:00"
                    data-weekday-close="16:00"
                    data-sunhol-close="true"
                    data-holiday-close="true"
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
                      <p className="office-address">Cl. 66A Sur #17d-21, Bogotá</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        <div>
                          <span className="office-status-text">
                            Abierto ahora
                          </span>
                          <span className="office-hours-mini"> • Cargando...</span>
                        </div>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Sabado</span>
                          <strong>8:00 – 16:00</strong>
                        </div>
                        <div className="row">
                          <span>Domingos</span>
                          <strong>No Hay Servicio</strong>
                        </div>
                        <div className="row">
                          <span>Festivos</span>
                          <strong>No Hay Servicio</strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <a target="_blank" href="https://maps.app.goo.gl/e6uXUf2hY7p8oHgn7?g_st=aw" className="btn-map">Ver en mapa →</a>
                      </div>
                    </div>
                  </article>
                  

                  <article className="office-card" 
                    data-weekday-open="9:00" 
                    data-weekday-close="16:30"
                    data-sunhol-close="true"
                    data-holiday-close="true"
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
                      <p className="office-address">CLL 19 #12C-15 SUR</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        <div>
                          <span className="office-status-text">
                            Abierto ahora
                          </span>
                          <span className="office-hours-mini"> • Cargando...</span>
                        </div>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>9:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos</span>
                          <strong>No Hay Servicio</strong>
                        </div>
                        <div className="row">
                          <span>Festivos</span>
                          <strong>No Hay Servicio</strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <a target="_blank" href="https://maps.app.goo.gl/ueX7ayQygfB59Y8u8" className="btn-map">Ver en mapa →</a>
                      </div>
                    </div>
                  </article>

                  <article className="office-card" 
                    data-weekday-open="9:00" 
                    data-weekday-close="16:30"
                    data-sunhol-close="true"
                    data-holiday-close="true"
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
                      <p className="office-address">CLL 41 #26-73 SUR</p>

                      <div className="office-status open">
                        
                        <span className="pulse"></span>
                        <div>
                          <span className="office-status-text">
                            Abierto ahora
                          </span>
                          <span className="office-hours-mini"> • Cargando...</span>
                        </div>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>9:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos</span>
                          <strong>No Hay Servicio</strong>
                        </div>
                        <div className="row">
                          <span>Festivos</span>
                          <strong>No Hay Servicio</strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <a target="_blank" href="https://maps.app.goo.gl/fd496wKQgaajkMjUA" className="btn-map">Ver en mapa →</a>
                      </div>
                    </div>
                  </article>

                  <article className="office-card" 
                    data-weekday-open="9:00" 
                    data-weekday-close="16:30"
                    data-sunhol-close="true"
                    data-holiday-close="true"
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
                      <p className="office-address">CLL 33 #23A-48 SUR</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        <div>
                          <span className="office-status-text">
                            Abierto ahora
                          </span>
                          <span className="office-hours-mini"> • Cargando...</span>
                        </div>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>9:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos</span>
                          <strong>No Hay Servicio</strong>
                        </div>
                        <div className="row">
                          <span>Festivos</span>
                          <strong>No Hay Servicio</strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <a target="_blank" href="https://maps.app.goo.gl/J251vK6jSEPJFMMP7" className="btn-map">Ver en mapa →</a>
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