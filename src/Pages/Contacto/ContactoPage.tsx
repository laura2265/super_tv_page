import { Link, NavLink } from "react-router-dom"
import"../../assets/css/pages/contacto.css"
import imgContacto from "../../assets/Img/Contacto/señor.png"
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

const CORREO_SUPER_TV =
  "contacto@supertv.com.co";

type channelId =
 |"pqrs"
 |"atencion_al_cliente"
 |"cartera"
 |"soporte_tecnico"

 type ContactChannel = {
  id: channelId,
  nombre: string,
  numbers: string[],
  messageInicial: string,
 }

 type ContactForm = {
  nombre: string,
  asunto: string,
  documento: string,
  descripcion: string
 }
function ContactoPage(){

  const CONTACTcHANNELS: ContactChannel[] = [
    {
      id: "pqrs",
      nombre: "PQRS",
      numbers: [
        "573123648971",
      ],
      messageInicial: "Hola, quiero presentar una petición, queja, reclamo o sugerencia."
    },
    {
      id: "atencion_al_cliente",
      nombre: "Atención al cliente",
      numbers:[
        "573006808935",
        "573103239398",
      ],
      messageInicial: "Hola, necesito orientación sobre mi servicio de SuperTV. A continuación comparto mis datos y el motivo de mi consulta."
    },
    {
      id: "cartera",
      nombre: "Cartera",
      numbers:[
        "573006808935"
      ],
      messageInicial: "Hola, necesito información sobre pagos, facturación o estado de cuenta."
    },
    {
      id: "soporte_tecnico",
      nombre: "Soporte Técnico",
      numbers:[
        "573015397647"
      ],
      messageInicial: "Hola, necesito reportar una falla técnica en mi servicio."
    }
  ]


  const handleEmailSubmit = (
  event: FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const nombre = String(
    formData.get("nombre") ?? ""
  ).trim();

  const asunto = String(
    formData.get("asunto") ?? ""
  ).trim();

  const correo = String(
    formData.get("email") ?? ""
  ).trim();

  const telefono = String(
    formData.get("telefono") ?? ""
  ).trim();

  const descripcion = String(
    formData.get("descripcion") ?? ""
  ).trim();

  const cuerpoMensaje = [
    "Nuevo mensaje desde la página web de SuperTV",
    "",
    `Nombre: ${nombre}`,
    `Correo del usuario: ${correo}`,
    `Teléfono: ${
      telefono || "No informado"
    }`,
    `Asunto: ${asunto}`,
    "",
    "Descripción:",
    descripcion,
  ].join("\n");

  const mailtoUrl =
    `mailto:${CORREO_SUPER_TV}` +
    `?subject=${encodeURIComponent(
      asunto || "Solicitud desde la página web"
    )}` +
    `&body=${encodeURIComponent(
      cuerpoMensaje
    )}`;

  window.location.href = mailtoUrl;
};
  const getContactNumber = (
    channel: ContactChannel
  ): string => {
    const validNumbers = channel.numbers.filter(
      (number) => number.trim() !== ""
    );

    if (validNumbers.length === 0) {
      throw new Error(
        `El canal ${channel.nombre} no tiene números configurados`
      );
    }

    if (validNumbers.length === 1) {
      return validNumbers[0];
    }
    if (channel.id !== "atencion_al_cliente") {
      return validNumbers[0];
    }

    const storageKey =
      "super-tv-last-sales-number";

    const lastIndex = Number(
      localStorage.getItem(storageKey) ?? "-1"
    );

    const nextIndex =
      (lastIndex + 1) % validNumbers.length;

    localStorage.setItem(
      storageKey,
      String(nextIndex)
    );

    return validNumbers[nextIndex];
  };

  const INITIAL_FORM: ContactForm = {
    nombre: "",
    asunto: "",
    documento: "",
    descripcion: "",
  };

  const [selectedChannel, setSelectedChannel] =
    useState<ContactChannel | null>(null);

  const [contactForm, setContactForm] =
    useState<ContactForm>(INITIAL_FORM);

  const openContactModal = (channelId: channelId) => {
    const channel = CONTACTcHANNELS.find(
      (item) => item.id === channelId
    );

    if (!channel) {
      return;
    }

    setSelectedChannel(channel);

  setContactForm({
      ...INITIAL_FORM,
      asunto: channel.nombre,
    });
  };

  const closeContactModal = () => {
    setSelectedChannel(null);
    setContactForm(INITIAL_FORM);
  };

  const handleFieldChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setContactForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const createWhatsAppLink = (
    phone: string,
    message: string
  ) => {
    return `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`;
  };

  const handleWhatsAppSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!selectedChannel) {
      return;
    }

    const message = [
      selectedChannel.messageInicial,
      "",
      `Tipo de solicitud: ${selectedChannel.nombre}`,
      `Nombre: ${contactForm.nombre.trim()}`,
      `Asunto: ${contactForm.asunto.trim()}`,
      `Correo: ${
        contactForm.documento.trim() || "No informado"
      }`,
      `Descripción: ${contactForm.descripcion.trim()}`,
    ].join("\n");

    const selectedNumber =
      getContactNumber(selectedChannel);

    const whatsappUrl = createWhatsAppLink(
      selectedNumber,
      message
    );

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    closeContactModal();
  };

  useEffect(() => {
    if (!selectedChannel) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeContactModal();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [selectedChannel]);
    return(
        <>
            <section className="planes-promo" aria-label="Promoción de planes">
              <div className="planes-promo__bg">
                <img id="heroBg" className="planes-promo__img" src={imgContacto}  alt="Fibra óptica"/>
                <div className="planes-promo__overlay"></div>
              </div>

              <div className="planes-promo__container">
                <div className="planes-promo__left">
                  <span className="planes-promo__badge">
                    <i className="bi bi-signal" style={{color: "rgb(253, 253, 253)"}}></i>
                     Estamos para ayudarte
                  </span>

                  <h2 className="planes-promo__title">
                    Estas a un mensaje de mejorar tu internet. <br/>
                  </h2>

                  <p className="planes-promo__subtitle">
                    Assesoría inmediata · Atención en Bogotá
                  </p>

                  <div className="planes-promo__cta">

                    <a className="planes-promo__btn planes-promo__btn--primary2" target="_blank"
                       href="https://wa.me/573006808935?text=Hola%20quiero%20información%20de%20planes%20desde%20%2440.000">
                      WhatsApp <i className="bi bi-whatsapp"></i>
                    </a>

                    <a className="planes-promo__btn planes-promo__btn--primary" href="#contacto">
                      Enviar mensaje <i className="bi bi-arrow-right"></i>
                    </a>

                  </div>

                </div>

                <div className="planes-promo__right">
                </div>
              </div>
            </section>


            <section className="section-contact" id="contacto">
              <div className="contact-container">
                <div className="contact-media">
                  <div className="grid-cards">
                    <NavLink className="info-card ventas" to="/planes" data-channel="ventas">
                      <div className="card-icon">
                        <svg viewBox="0 0 64 64" aria-hidden="true">
                          <path d="M8 18h48v10H8z" fill="currentColor" opacity=".18"/>
                          <path d="M14 28h36l-3 24H17z" fill="currentColor" opacity=".22"/>
                          <path d="M22 52a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm20 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="currentColor"/>
                          <path d="M18 18l-2-6H8" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/>
                        </svg>
                      </div>
                      <h3>Ventas</h3>
                      <p>Planes, instalación y cobertura.</p>
                      <span className="card-cta">Contactar →</span>
                    </NavLink>

                    <button className="info-card pqrs" data-channel="pqrs" onClick={() => openContactModal("pqrs")}>
                      <div className="card-icon">
                        <svg viewBox="0 0 64 64" aria-hidden="true">
                          <path d="M18 10h20l8 8v36H18z" fill="currentColor" opacity=".18"/>
                          <path d="M38 10v10h10" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
                          <path d="M24 30h16M24 38h16M24 46h10" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                          <path d="M44 52l8-6-8-6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                      <h3>PQRS</h3>
                      <p>Radica tu solicitud por WhatsApp.</p>
                      <span className="card-cta">Contactar →</span>
                      
                    </button>

                    <button className="info-card cartera" data-channel="cartera" onClick={() => openContactModal("cartera")}>
                      <div className="card-icon">
                        <svg viewBox="0 0 64 64" aria-hidden="true">
                          <path d="M12 22h40a6 6 0 0 1 6 6v18a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6V28a6 6 0 0 1 6-6z" fill="currentColor" opacity=".18"/>
                          <path d="M6 30h52" stroke="currentColor" stroke-width="3" opacity=".8"/>
                          <path d="M40 40h12a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8z" fill="none" stroke="currentColor" stroke-width="3"/>
                          <circle cx="44" cy="36" r="1.8" fill="currentColor"/>
                        </svg>
                      </div>
                      <h3>Cartera</h3>
                      <p>Ayuda técnica y fallas.</p>
                      <span className="card-cta">Contactar →</span>
                    </button>
                    <button className="info-card atencion_al_cliente" data-channel="atencion_al_cliente" onClick={() => openContactModal("atencion_al_cliente")}>
                      <div className="card-icon">
                        <svg viewBox="0 0 64 64" aria-hidden="true">
                          <path d="M32 10c-10 0-18 8-18 18v6c0 3 2 6 6 6h2V28c0-6 4-10 10-10s10 4 10 10v12h2c4 0 6-3 6-6v-6c0-10-8-18-18-18z" fill="currentColor" opacity=".18"/>
                          <path d="M20 40h4v10h-4a6 6 0 0 1 0-12zm20 0h4a6 6 0 1 1 0 12h-4V40z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
                          <path d="M26 52c2 2 5 3 6 3s4-1 6-3" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                        </svg>
                      </div>
                      <h3>Atención al cliente</h3>
                      <p>Ayuda técnica y fallas.</p>
                      <span className="card-cta">Contactar →</span>
                    </button>
                    <button
                      type="button"
                      className="info-card soporte"
                      data-channel="soporte_tecnico"
                      onClick={() =>
                        openContactModal("soporte_tecnico")
                      }
                    >
                      <div className="card-icon">
                        <i className="bi bi-router-fill" />
                      </div>
                    
                      <h3>Soporte técnico</h3>
                    
                      <p>
                        Fallas de internet, televisión o equipos.
                      </p>
                    
                      <span className="card-cta">
                        Reportar falla →
                      </span>
                    </button>

                  </div>
                    <div className="cm-strip">
                      <div className="contentubi">
                        <div className="infocontacto">
                          <i className="bi bi-geo-alt-fill"></i>
                          <h3>SUPER TV ELECTRONIC LTDA.</h3>
                        </div>
                        <p className="ubicacion">CL 19 C 52 SUR 26, Barrio San Carlos, Bogota - Colombia</p>
                      </div>
                    </div>
                  <div className="contact-chip">
                    <span className="dot"></span>
                    <Link to="/cobertura">Atención en Bogotá</Link>
                  </div>

                </div>

                <div className="contact-card">
                  <h2>Envíanos un mensaje</h2>
                  <p className="contact-subtitle">Te respondemos lo más pronto posible.</p>

                  <form className="contact-form"
                    onSubmit={handleEmailSubmit}
                  >
                    <div className="field">
                      <label htmlFor="contact-email-name">
                        Nombre completo
                      </label>
                                      
                      <input
                        id="contact-email-name"
                        name="nombre"
                        type="text"
                        placeholder="Ingresa tu nombre"
                        autoComplete="name"
                        required
                      />
                    </div>
                                      
                    <div className="field">
                      <label htmlFor="contact-email-subject">
                        Asunto
                      </label>
                                      
                      <input
                        id="contact-email-subject"
                        name="asunto"
                        type="text"
                        placeholder="Escribe el asunto"
                        required
                      />
                    </div>
                                      
                    <div className="field">
                      <label htmlFor="contact-email-address">
                        Correo
                      </label>
                                      
                      <input
                        id="contact-email-address"
                        name="email"
                        type="email"
                        placeholder="Escribe tu correo"
                        autoComplete="email"
                        required
                      />
                    </div>
                                      
                    <div className="field">
                      <label htmlFor="contact-email-phone">
                        Teléfono
                      </label>
                                      
                      <input
                        id="contact-email-phone"
                        name="telefono"
                        type="tel"
                        placeholder="Escribe tu teléfono"
                        autoComplete="tel"
                      />
                    </div>
                                      
                    <div className="field">
                      <label htmlFor="contact-email-description">
                        Descripción
                      </label>
                                      
                      <textarea
                        id="contact-email-description"
                        name="descripcion"
                        placeholder="Cuéntanos tu solicitud..."
                        rows={5}
                        required
                      />
                    </div>
                                      
                    <button
                      type="submit"
                      className="btn-primary"
                    >
                      Enviar por correo
                      <span className="arrow">→</span>
                    </button>
                  </form>
                </div>

              </div>
            </section>
            {selectedChannel && (
              <div
                className="contact-modal-overlay"
                role="presentation"
                onMouseDown={closeContactModal}
              >
                <div
                  className="contact-modal"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="contact-modal-title"
                  onMouseDown={(event) =>
                    event.stopPropagation()
                  }
                >
                  <div className="contact-modal__header">
                    <div>
                      <span className="contact-modal__category">
                        {selectedChannel.nombre}
                      </span>
                
                      <h2 id="contact-modal-title">
                        Cuéntanos cómo podemos ayudarte
                      </h2>
                
                      <p>
                        Completa la información y el mensaje se
                        enviará al WhatsApp de{" "}
                        {selectedChannel.nombre}.
                      </p>
                    </div>
                
                    <button
                      type="button"
                      className="contact-modal__close"
                      aria-label="Cerrar formulario"
                      onClick={closeContactModal}
                    >
                      ×
                    </button>
                  </div>
                
                  <form
                    className="contact-modal__form"
                    onSubmit={handleWhatsAppSubmit}
                  >
                    <div className="field">
                      <label htmlFor="modal-contact-name">
                        Nombre completo
                      </label>
                
                      <input
                        id="modal-contact-name"
                        name="nombre"
                        type="text"
                        placeholder="Ingresa tu nombre"
                        autoComplete="name"
                        value={contactForm.nombre}
                        onChange={handleFieldChange}
                        required
                      />
                    </div>
                
                    <div className="field">
                      <label htmlFor="modal-contact-subject">
                        Asunto
                      </label>
                
                      <input
                        id="modal-contact-subject"
                        name="asunto"
                        type="text"
                        placeholder="Escribe el asunto"
                        value={contactForm.asunto}
                        onChange={handleFieldChange}
                        required
                      />
                    </div>
                
                    <div className="field">
                      <label htmlFor="modal-contact-email">
                        Documento de titular
                      </label>
                
                      <input
                        id="modal-contact-documento"
                        name="documento"
                        type="text"
                        placeholder="Escribe tu documento"
                        autoComplete="documento"
                        value={contactForm.documento}
                        onChange={handleFieldChange}
                      />
                    </div>
                
                    <div className="field">
                      <label htmlFor="modal-contact-description">
                        Descripción
                      </label>
                
                      <textarea
                        id="modal-contact-description"
                        name="descripcion"
                        placeholder="Cuéntanos detalladamente tu solicitud..."
                        rows={5}
                        value={contactForm.descripcion}
                        onChange={handleFieldChange}
                        required
                      />
                    </div>
                
                    <div className="contact-modal__actions">
                      <button
                        type="button"
                        className="contact-modal__cancel"
                        onClick={closeContactModal}
                      >
                        Cancelar
                      </button>
                
                      <button
                        type="submit"
                        className="contact-modal__submit"
                      >
                        <i className="bi bi-whatsapp" />
                        Enviar por WhatsApp
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
        </>
    )
}

export default ContactoPage