import { useEffect } from "react";

export default function useNosotrosEffects() {
  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (reveals.length) {
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      reveals.forEach((el) => io.observe(el));
    }

    const stats = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    let statsStarted = false;

    const startCount = () => {
      if (statsStarted) return;
      statsStarted = true;

      stats.forEach((el) => {
        const raw = el.dataset.count ?? "0";
        const target = parseInt(raw, 10) || 0;

        const duration = 900;
        const start = performance.now();

        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const val = Math.floor(target * (0.15 + 0.85 * p));
          el.textContent = val.toLocaleString("es-CO");

          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = target.toLocaleString("es-CO");
        };

        requestAnimationFrame(tick);
      });
    };

    const heroStats = document.querySelector<HTMLElement>(".about-hero__stats");
    if (heroStats) {
      const ioStats = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              startCount();
              obs.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );

      ioStats.observe(heroStats);
    }
  }, []);
}