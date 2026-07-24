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


type TabKey =
  | "internet"
  | "internettv"
  | "internetstreaming"
  | "internettvstreaming";

type StremingApp={
  name: string;
  image: string;
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
          image: ``
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
          image: img3
        },
        {
          name: "DGO",
          image: img3
        },
        {
          name: "Q",
          image: img8
        },
        {
          name: "Amazon Prime",
          image: img8
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
          image: img3
        },
        {
          name: "DGO",
          image: img3
        },
        {
          name: "DGO",
          image: img3
        },
        {
          name: "Win",
          image: img7
        },
        {
          name: "Win",
          image: img7
        },
        {
          name: "Netflix",
          image: img1
        },
        {
          name: "Amazon",
          image: img9
        },
        {
          name: "ExitLag",
          image: img10
        },
        {
          name: "Disney +",
          image: img5
        }
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
          name: "",
          image: ""
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
          name: "",
          image: ""
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
          name: "",
          image: ""
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
          name: "",
          image: ""
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

    const createWhatsAppLink = (
      message: string
    ) => {
      return `https://wa.me/573014916832?text=${encodeURIComponent(
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

const visibleApps = validApps.slice(0, 4);

const remainingApps =
  Math.max(0, validApps.length - visibleApps.length);

const streamingClass =
  validApps.length > 0
    ? "has-streaming"
    : "";

const appsHTML =
  validApps.length > 0
    ? `
      <div class="pc-streaming">
        <div class="pc-streaming__header">
          <span class="pc-streaming__title">
            Apps incluidas
          </span>

          <strong class="pc-streaming__total">
            ${validApps.length}
          </strong>
        </div>

        <div
          class="pc-streaming__stack"
          aria-label="${validApps.length} aplicaciones incluidas"
        >
          ${visibleApps
            .map(
              (app, appIndex) => `
                <div
                  class="pc-streaming__logo"
                  title="${app.name}"
                  style="--logo-index:${appIndex}"
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

          ${
            remainingApps > 0
              ? `
                <span
                  class="pc-streaming__remaining"
                  title="${remainingApps} aplicaciones adicionales"
                >
                  +${remainingApps}
                </span>
              `
              : ""
          }
        </div>

        <span class="pc-streaming__caption">
          ${validApps.length === 1
            ? "1 aplicación disponible"
            : `${validApps.length} aplicaciones disponibles`
          }
        </span>
      </div>
    `
    : "";

      const featuredClass = plan.featured
        ? "is-featured featured"
        : "";

      const message = [
        "Hola, quiero información sobre el siguiente plan:",
        "",
        `Velocidad: ${plan.speed}`,
        `Precio: $${plan.price} mensuales`,
        `Tipo: ${plan.type}`,
        "",
        "¿Me pueden confirmar cobertura e instalación?",
      ].join("\n");

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
          ${appHtml}

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

          <a
            class="pc-btn"
            target="_blank"
            rel="noopener noreferrer"
            href="${createWhatsAppLink(message)}"
          >
            Contratar

            <i class="bi bi-whatsapp"></i>
          </a>
        </article>
      `;
    };

    const renderPlans = () => {
      const plans = DATA[activeTab];

      plansGrid.innerHTML = plans
        .map(cardHTML)
        .join("");

      /*
       * Permite comprobar en el inspector
       * qué pestaña está renderizada.
       */
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

      renderPlans();
    };

    tabButtons.forEach((button) => {
      button.addEventListener(
        "click",
        handleTabClick
      );
    });

    renderPlans();

    return () => {
      observer?.disconnect();

      /*
       * Es fundamental quitar exactamente
       * el mismo manejador que se agregó.
       */
      tabButtons.forEach((button) => {
        button.removeEventListener(
          "click",
          handleTabClick
        );
      });
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