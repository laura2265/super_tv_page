import { useEffect } from "react";
import img1 from "./../Img/Streaming/1.jpg";
import img2 from "./../Img/Streaming/2.jpg";
import img3 from "./../Img/Streaming/3.jpg";
import img4 from "./../Img/Streaming/4.jpg";
import img5 from "./../Img/Streaming/5.jpg";
import img6 from "./../Img/Streaming/6.jpg";
import img7 from "./../Img/Streaming/7.jpg";
import img8 from "./../Img/Streaming/8.jpg";
import img9 from "./../Img/Streaming/9.jpg";
import img10 from "./../Img/Streaming/10.jpg";
import img11 from "./../Img/Streaming/11.jpg";
import img12 from "./../Img/Streaming/12.jpg";
import img13 from "./../Img/Streaming/13.jpg";
import img14 from "./../Img/Streaming/14.jpg";
import img15 from "./../Img/Streaming/15.jpg";
import img16 from "./../Img/Streaming/16.jpg";
import img17 from "./../Img/Streaming/17.jpg";
import img18 from "./../Img/Streaming/18.jpg";

const SALES_NUMBERS = [
  "573006808935",
  "573103239398",
] as const;


type TabKey =
  | "internet"
  | "internettv"
  | "internetstreaming"
  | "internettvstreaming";

type StremingApp={
  name: string;
  image: string;
  requiresDgo?: boolean;
}

type Plan = {
  price: string;
  speed: string;
  type: string;
  featured: boolean;
  app?: StremingApp[];
};

type DataMap = Record<TabKey, Plan[]>;

const DATA: DataMap = {

  internet: [
    {
      price: "40.000",
      speed: "100 Megas",
      type: "Fibra FTTH",
      featured: false,
    },
    {
      price: "50.000",
      speed: "200 Megas",
      type: "Fibra FTTH",
      featured: false,
    },
    {
      price: "60.000",
      speed: "300 Megas",
      type: "Fibra FTTH",
      featured: true,
    },
    {
      price: "70.000",
      speed: "500 Megas",
      type: "Fibra FTTH",
      featured: false,
    },
    {
      price: "80.000",
      speed: "700 Megas",
      type: "Fibra FTTH",
      featured: false,
    },
    {
      price: "90.000",
      speed: "900 Megas",
      type: "Fibra FTTH",
      featured: false,
    },
  ],

  /*
   * Internet + TV
   */
  internettv: [
    {
      price: "40.000",
      speed: "50 Megas",
      type: "Internet + TV",
      featured: false,
    },
    {
      price: "50.000",
      speed: "100 Megas",
      type: "Internet + TV",
      featured: false,
    },
    {
      price: "60.000",
      speed: "200 Megas",
      type: "Internet + TV",
      featured: false,
    },
    {
      price: "70.000",
      speed: "300 Megas",
      type: "Internet + TV",
      featured: true,
    },
    {
      price: "80.000",
      speed: "500 Megas",
      type: "Internet + TV",
      featured: false,
      
    },
    {
      price: "90.000",
      speed: "700 Megas",
      type: "Internet + TV",
      featured: false,
      app: [
      ]
    },
    {
      price: "100.000",
      speed: "900 Megas",
      type: "Internet + TV",
      featured: false
    },
  ],

  /*
   * Internet + Streaming
   */
  internetstreaming: [
    {
      price: "70.000",
      speed: "400 Megas",
      type: "Internet + Streaming",
      featured: false,
      app: [
        {
          name: "K",
          image: img13
        },
        {
          name: "PK",
          image: img2
        },
        {
          name: "Indie",
          image: img14
        },
        {
          name: "Atresplayer",
          image: img4
        },
        {
          name: "Atresplayer",
          image: img11
        }
      ]
    },
    {
      price: "80.000",
      speed: "500 Megas",
      type: "Internet + Streaming",
      featured: true,
      app: [
        {
          name: "Disney +",
          image: img5
        },
        {
          name: "K",
          image: img13
        },
        {
          name: "DGO",
          image: img3
        },
        {
          name: "Alas",
          image: img12
        }
      ]
    },
    {
      price: "100.000",
      speed: "700 Megas",
      type: "Internet + Streaming",
      featured: false,
      app: [
        {
          name: "DGO",
          image: img15,
          requiresDgo: true,
        },
        {
          name: "DGO",
          image: img16,
          requiresDgo: true,
        },
        {
          name: "Q",
          image: img8
        },
        {
          name: "Amazon Prime",
          image: img17,
          requiresDgo: true,
        },
        {
          name: "HotGO",
          image: img6
        },
        {
          name: "Zen",
          image: img9
        },
        {
          name: "Disney +",
          image: img5
        }
      ]
    },
    {
      price: "120.000",
      speed: "900 Megas",
      type: "Internet + Streaming",
      featured: false,
      app: [
        {
          name: "K",
          image: img13,
        },
        {
          name: "EXITLOG",
          image: img10,
        },
        {
          name: "DGO",
          image: img15,
          requiresDgo: true,
        },
        {
          name: "DGO Flex",
          image: img16,
          requiresDgo: true,
        },
        {
          name: "Netflix",
          image: img1,
        },
        {
          name: "Disney+",
          image: img11,
        },
        {
          name: "Amazon Prime Video",
          image: img17,
          requiresDgo: true,
        },
        {
          name: "WINPLAY",
          image: img7
        },
        {
          name: "WINfutbol",
          image: img18,
          requiresDgo: true,
        },
      ]
    },
  ],

  /*
   * Internet + TV + Streaming
   */
  internettvstreaming: [
    {
      price: "80.000",
      speed: "400 Megas",
      type: "Internet + TV + Streaming",
      featured: false,
      app: [
        {
          name: "K",
          image: img13
        },
        {
          name: "PK",
          image: img2
        },
        {
          name: "Indie",
          image: img14
        },
        {
          name: "Atresplayer",
          image: img4
        },
        {
          name: "WINLITE",
          image: img11
        }
      ]
    },
    {
      price: "90.000",
      speed: "500 Megas",
      type: "Internet + TV + Streaming",
      featured: true,
      app: [
        {
          name: "DISNEY +",
          image: img5
        },
        {
          name: "K",
          image: img13
        },
        {
          name: "DGO",
          image: img3
        },
        {
          name: "Alas",
          image: img12
        }
      ]
    },
    {
      price: "105.000",
      speed: "700 Megas",
      type: "Internet + TV + Streaming",
      featured: false,
      app: [
        {
          name: "DGO",
          image: img15,
          requiresDgo: true,
        },
        {
          name: "DGO",
          image: img16,
          requiresDgo: true,
        },
        {
          name: "Q",
          image: img8
        },
        {
          name: "Amazon Prime",
          image: img17,
          requiresDgo: true,
        },
        {
          name: "HotGO",
          image: img6
        },
        {
          name: "Zen",
          image: img9
        },
        {
          name: "Disney +",
          image: img5
        }
      ]
    },
    {
      price: "125.000",
      speed: "900 Megas",
      type: "Internet + TV + Streaming",
      featured: false,
      app: [
        {
          name: "K",
          image: img13,
        },
        {
          name: "EXITLAG",
          image: img10,
        },
        {
          name: "DGO",
          image: img15,
          requiresDgo: true,
        },
        {
          name: "DGO",
          image: img16,
          requiresDgo: true,
        },
        {
          name: "NETFLIX",
          image: img1
        },
        {
          name: "Amazon Prime",
          image: img17,
          requiresDgo: true,
        },
        {
          name: "WIN PLAY",
          image: img7
        },
        {
          name: "WIN FUTBOL",
          image: img18
        },
        {
          name: "Disney +",
          image: img5
        }
      ]
    },
  ],
};

export default function usePageEffect() {
  useEffect(() => {
    const plansGrid =
      document.getElementById("plansGrid");

    const tabButtons = Array.from(
      document.querySelectorAll<HTMLButtonElement>(
        ".tabs .tab"
      )
    );

    if (!plansGrid) {
      return;
    }

    let activeTab: TabKey = "internet";
    let observer: IntersectionObserver | null = null;

    const getRandomSalesNumber = (): string => {
      const randomIndex = Math.floor(
        Math.random() * SALES_NUMBERS.length
      );
    
      return SALES_NUMBERS[randomIndex];
    };

    const createWhatsAppLink = (
      phone: string,
      message: string
    ): string => {
      return `https://wa.me/${phone}?text=${encodeURIComponent(
        message
      )}`;
    };

    const setupReveal = () => {
      observer?.disconnect();

      const cards =
        plansGrid.querySelectorAll<HTMLElement>(
          ".pricing-card.reveal"
        );

      if (!("IntersectionObserver" in window)) {
        cards.forEach((card) => {
          card.classList.add("in-view");
        });

        return;
      }

      observer = new IntersectionObserver(
        (entries, currentObserver) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add("in-view");
            currentObserver.unobserve(entry.target);
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -4% 0px",
        }
      );

      cards.forEach((card) => {
        observer?.observe(card);
      });
    };

    const cardHTML = (
      plan: Plan,
      index: number
    ) => {

 

      const validApps =
        plan.app?.filter(
          (app) =>
            app.name.trim() !== "" &&
            app.image.trim() !== ""
        ) ?? [];
      
      const includedApps = validApps.filter(
        (app) => !app.requiresDgo
      );

      const dgoRequiredApps = validApps.filter(
        (app) => app.requiresDgo
      );

      const streamingClass =
        validApps.length > 0
          ? "has-streaming"
          : "";


      const renderAppLogo = (
        app: StremingApp
      ) => `
        <div
          class="pc-streaming__logo"
          title="${app.name}"
        >
          <img
            src="${app.image}"
            alt="${app.name}"
            loading="lazy"
          />
        </div>
      `;
      const appsHTML =
        validApps.length > 0
          ? `
            <div class="pc-streaming">
              <span class="pc-streaming__title">
                Apps incluidas
              </span>

              ${
                includedApps.length > 0
                  ? `
                    <div class="pc-streaming__logos">
                      ${includedApps
                        .map(renderAppLogo)
                        .join("")}
                    </div>
                  `
                  : ""
              }
            
              ${
                dgoRequiredApps.length > 0
                  ? `
                    <div class="pc-dgo-condition">
                      <div class="pc-dgo-condition__text">
                        <i class="bi bi-info-circle-fill"></i>
              
                        <span>
                          Disponibles al adquirir DGO
                        </span>
                      </div>
              
                      <div class="pc-dgo-condition__logos">
                        ${dgoRequiredApps
                          .map(
                            (app) => `
                              <div
                                class="pc-dgo-condition__logo"
                                title="${app.name} requiere DGO"
                              >
                                <img
                                  src="${app.image}"
                                  alt="${app.name}"
                                  loading="lazy"
                                />
                              </div>
                            `
                          )
                          .join("")}
                      </div>
                    </div>
                  `
                  : ""
              }
            </div>
          `
          : "";

      const featuredClass = plan.featured
        ? "is-featured featured"
        : "";

        const conditionalAppsText = dgoRequiredApps.length > 0 
          ? dgoRequiredApps
              .map((app)=> app.name)
              .join("")
          : "";

      const message = [
        "Hola, quiero información sobre el siguiente plan:",
        "",
        `Velocidad: ${plan.speed}`,
        `Precio: $${plan.price} mensuales`,
        `Tipo: ${plan.type}`,
        includedApps.length > 0
         ? `Apps incluidas: ${includedApps
          .map((app)=> app.name)
          .join("")
         } `: 
         "",
         conditionalAppsText?
         `Apps disponibles al adquirir DGO: ${conditionalAppsText}`
         :"",
         "",
        "¿Me pueden confirmar cobertura e instalación?",
      ].filter(Boolean).join("\n");

      const benefits = [
        "Instalación rápida",
        "Soporte por WhatsApp",
        "Conexión estable",
        "Ideal para streaming y trabajo",
      ];

      const badge = plan.featured
        ? `
          <div class="pc-badge">
            MÁS SOLICITADO
          </div>
        `
        : "";

      return `
        <article
          class="pricing-card reveal ${featuredClass} ${streamingClass}"
          style="
            --d:${index * 60}ms;
            --card-start:#0d3275;
            --card-end:#298daf;
          "
        >
          ${badge}

          <div class="pc-price">
            <strong>$${plan.price}</strong>
            <span>POR MES</span>
          </div>

          <div class="pc-divider"></div>
          ${appsHTML}

          <ul class="pc-list">
            <li>
              <i class="bi bi-check2-circle"></i>
              ${plan.speed}
            </li>

            <li>
              <i class="bi bi-check2-circle"></i>
              ${plan.type}
            </li>

            ${benefits
              .map(
                (benefit) => `
                  <li>
                    <i class="bi bi-check2-circle"></i>
                    ${benefit}
                  </li>
                `
              )
              .join("")}
          </ul>

          <button
            type="button"
            class="pc-btn js-plan-whatsapp"
            data-message="${encodeURIComponent(message)}"
          >
            Contratar
            <i class="bi bi-whatsapp"></i>
          </button>
        </article>
      `;
    };

    
    const handlePlanWhatsAppClick = (
      event: MouseEvent
    ) => {
      const target = event.target as HTMLElement;
    
      const button =
        target.closest<HTMLButtonElement>(
          ".js-plan-whatsapp"
        );
      
      if (
        !button ||
        !plansGrid.contains(button)
      ) {
        return;
      }
    
      const encodedMessage =
        button.dataset.message;
    
      if (!encodedMessage) {
        console.error(
          "El plan no tiene un mensaje configurado"
        );
      
        return;
      }
    
      const message =
        decodeURIComponent(encodedMessage);
    
      const selectedPhone =
        getRandomSalesNumber();
    
      const whatsappUrl =
        createWhatsAppLink(
          selectedPhone,
          message
        );
      
      console.log(
        "WhatsApp seleccionado:",
        selectedPhone
      );
    
      window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer"
      );
    };

    plansGrid.addEventListener(
      "click",
      handlePlanWhatsAppClick
    );

    const renderPlans = () => {
      const plans = DATA[activeTab];

      plansGrid.innerHTML = plans
        .map(cardHTML)
        .join("");

      plansGrid.dataset.activeTab = activeTab;

      setupReveal();
    };

    const handleTabClick = (
      event: Event
    ) => {
      const selectedButton =
        event.currentTarget as HTMLButtonElement;

      const selectedTab =
        selectedButton.dataset.tab;

      if (
        !selectedTab ||
        !(selectedTab in DATA)
      ) {
        console.error(
          "Pestaña de planes no válida:",
          selectedTab
        );

        return;
      }

      activeTab = selectedTab as TabKey;

      tabButtons.forEach((button) => {
        const isActive =
          button.dataset.tab === activeTab;

        button.classList.toggle(
          "is-active",
          isActive
        );

        button.setAttribute(
          "aria-selected",
          String(isActive)
        );
      });
      plansGrid.addEventListener(
          "click",
          handlePlanWhatsAppClick
        );

      renderPlans();
    };

    tabButtons.forEach((button) => {
      button.addEventListener(
        "click",
        handleTabClick
      );
    });

    plansGrid.addEventListener(
      "click",
      handlePlanWhatsAppClick
    );

    renderPlans();

    return () => {
      observer?.disconnect();
    
      tabButtons.forEach((button) => {
        button.removeEventListener(
          "click",
          handleTabClick
        );
      });
    
      plansGrid.removeEventListener(
        "click",
        handlePlanWhatsAppClick
      );
    };
  }, []);

  useEffect(() => {
    const element =
      document.getElementById("promoPrice");

    if (!element) {
      return;
    }

    const target = Number(
      element.dataset.value || "40000"
    );

    const duration = 800;
    const start = 0;
    const initialTime = performance.now();

    let animationFrameId = 0;

    const formatCOP = (value: number) =>
      value.toLocaleString("es-CO");

    const animatePrice = (
      currentTime: number
    ) => {
      const progress = Math.min(
        1,
        (currentTime - initialTime) / duration
      );

      const currentValue = Math.floor(
        start +
          (target - start) *
            (1 - Math.pow(1 - progress, 3))
      );

      element.textContent =
        formatCOP(currentValue);

      if (progress < 1) {
        animationFrameId =
          requestAnimationFrame(animatePrice);
      }
    };

    animationFrameId =
      requestAnimationFrame(animatePrice);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
}