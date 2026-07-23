import { useEffect } from "react";

type TabKey = "internet" | "internettv" | "internettvstreaming";

type Plan = {
  price: string;
  speed: string;
  type: string;
  featured: boolean;
};

type DataMap = Record<TabKey, Plan[]>;

export default function usePageEffect() {
  useEffect(() => {
    const DATA: DataMap = {
      internet: [
        { price: "40.000", speed: "50 Megas", type: "Fibra FTTH", featured: false },
        { price: "50.000", speed: "100 Megas", type: "Fibra FTTH", featured: true },
        { price: "60.000", speed: "200 Megas", type: "Fibra FTTH", featured: false },
        { price: "70.000", speed: "300 Megas", type: "Fibra FTTH", featured: false },
        { price: "80.000", speed: "400 Megas", type: "Fibra FTTH", featured: false },
        { price: "90.000", speed: "500 Megas", type: "Fibra FTTH", featured: false },
        { price: "100.000", speed: "700 Megas", type: "Fibra FTTH", featured: false },
        { price: "140.000", speed: "900 Megas", type: "Fibra FTTH", featured: false },
      ],
      internettv: [
        { price: "40.000", speed: "25 Megas", type: "Internet + TV", featured: false },
        { price: "50.000", speed: "50 Megas", type: "Internet + TV", featured: false },
        { price: "60.000", speed: "100 Megas", type: "Internet + TV", featured: true },
        { price: "70.000", speed: "200 Megas", type: "Internet + TV", featured: false },
        { price: "80.000", speed: "300 Megas", type: "Internet + TV", featured: false },
        { price: "90.000", speed: "400 Megas", type: "Internet + TV", featured: false },
        { price: "100.000", speed: "500 Megas", type: "Internet + TV", featured: false },
        { price: "130.000", speed: "700 Megas", type: "Internet + TV", featured: false },
        { price: "160.000", speed: "900 Megas", type: "Internet + TV", featured: false },
      ],
      internettvstreaming: [
        { price: "40.000", speed: "25 Megas", type: "Internet + TV", featured: false },
        { price: "50.000", speed: "50 Megas", type: "Internet + TV", featured: false },
        { price: "60.000", speed: "100 Megas", type: "Internet + TV", featured: true },
        { price: "70.000", speed: "200 Megas", type: "Internet + TV", featured: false },
        { price: "80.000", speed: "300 Megas", type: "Internet + TV", featured: false },
        { price: "90.000", speed: "400 Megas", type: "Internet + TV", featured: false },
        { price: "100.000", speed: "500 Megas", type: "Internet + TV", featured: false },
        { price: "130.000", speed: "700 Megas", type: "Internet + TV", featured: false },
        { price: "160.000", speed: "900 Megas", type: "Internet + TV", featured: false },
      ],
    };

    const plansGrid = document.getElementById("plansGrid") as HTMLElement;
    const tabBtns = document.querySelectorAll<HTMLElement>(".tab");

    if (!plansGrid) return;

    let activeTab: TabKey = "internet";

    const waLink = (text: string) =>
      `https://wa.me/573014916832?text=${encodeURIComponent(text)}`;

    let io: IntersectionObserver | null = null;

    function setupReveal() {
      if (io) io.disconnect();

      const cards = document.querySelectorAll<HTMLElement>(".pricing-card.reveal");

      io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add("in-view");
              obs.unobserve(entry.target); 
            }
          });
        },
        {
          threshold: 0.18,
          rootMargin: "0px 0px -8% 0px",
        }
      );

      cards.forEach((c) => io!.observe(c));
    }

    const cardHTML = (p: Plan, i: number) => {
      const featuredClass = p.featured ? "is-featured featured" : "";
      const sideClass = p.featured ? "" : i % 2 === 0 ? "from-left" : "from-right";

      const msg =
        `Hola 👋 Quiero el plan ${p.speed}:\n` +
        `💰 Precio: $${p.price} / mes\n` +
        `⚡ Velocidad: ${p.speed}\n` +
        `📦 Tipo: ${p.type}\n\n` +
        `¿Me confirmas cobertura e instalación?`;

      const bullets = [
        "Instalación rápida",
        "Soporte por WhatsApp",
        "Conexión estable",
        "Ideal para streaming y trabajo",
      ];

      const badge = p.featured ? `<div class="pc-badge">MÁS SOLICITADO</div>` : "";

      return `
        <article class="pricing-card reveal ${sideClass} ${featuredClass}" style="--d:${i * 90}ms">
          ${badge}

          <div class="pc-price">
            <strong>$${p.price}</strong>
            <span>POR MES</span>
          </div>

          <div class="pc-divider"></div>

          <ul class="pc-list">
            <li><i class="bi bi-check2-circle"></i> ${p.speed}</li>
            <li><i class="bi bi-check2-circle"></i> ${p.type}</li>
            ${bullets.map((b) => `<li><i class="bi bi-check2-circle"></i> ${b}</li>`).join("")}
          </ul>

          <a class="pc-btn" target="_blank" rel="noopener" href="${waLink(msg)}">
            Contratar <i class="bi bi-whatsapp"></i>
          </a>
        </article>
      `;
    };

    function render() {
      const items: Plan[] = DATA[activeTab];
      plansGrid.innerHTML = items.map((p, i) => cardHTML(p, i)).join("");
      setupReveal();
    }

    // (Opcional) tabs: cambia activeTab leyendo data-tab="internet" | "internettv"
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
    
        const next = (btn as HTMLElement).dataset.tab as TabKey | undefined;
    
        if (!next) return;
    
        // 1️⃣ Cambia el estado
        activeTab = next;
    
        tabBtns.forEach((b) => b.classList.remove("is-active"));
    
        btn.classList.add("is-active");
    
        // 4️⃣ Renderiza
        render();
      });
    });

    render();

    return () => {
      // cleanup
      if (io) io.disconnect();
      tabBtns.forEach(() => {
      });
    };
  }, []);


  useEffect(()=>{
    const el = document.getElementById("promoPrice");
    if(el){
        const target = Number(el.dataset.value || "40000");
        const duration = 800;
        const start = 0;
        const t0 = performance.now();

        const formatCOP = (n:any) => n.toLocaleString("es-CO");
        const tick = (t:any) => {

            const p = Math.min (1,(t - t0)/ duration);
            const val = Math.floor(start +(target - start)*(1-Math.pow(1-p,3)));
            el.textContent = formatCOP(val);
            if(p<1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick)
    }
  })
}