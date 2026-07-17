import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useHomeEffect(){
    const location = useLocation();

    useEffect(() => {
      document.body.classList.remove("is-loading");
      document.body.classList.add("is-ready");
    
      const loader = document.getElementById("pageLoader");
      if (loader) loader.classList.add("is-hidden");
    }, [location.pathname]);

    //--------------Scrolled-----------------
    useEffect(() => {
        const header = document.querySelector(".header");
        const logo = document.querySelector(".logito2") as HTMLImageElement | null;
        if( !header || !logo) return;

        const logoTop = (logo.dataset.logoTop || "").trim();
        const logoScroll = (logo.dataset.logoScroll || "").trim();

        const handleScroll = () => {
            const scrolled = window.scrollY >50;
            header.classList.toggle("scrolled", scrolled);

            const nextSrc = scrolled? logoScroll : logoTop;
            if(logo.src !== nextSrc){
                logo.classList.add("is-fading");
                setTimeout(() => {

                    logo.src= nextSrc;
                    logo.classList.remove("is-fading")
                }, 180)
            }
        };
        
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => {
        window.removeEventListener("scroll", handleScroll);
    }
          
    },[]);

    useEffect(() => {
      const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
      if (!els.length) return;
        
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 }
      );
    
      els.forEach((el) => io.observe(el));
    
      return () => io.disconnect();
    }, []);

    //slider
    useEffect(()=>{
        const slider = document.querySelector("[data-slider]");
        if(!slider) return;

        const track = slider.querySelector(".slider__track") as HTMLElement;
        const slides = Array.from(slider.querySelectorAll(".slide"));
        const dots = Array.from(slider.querySelectorAll(".dot"));
        const btnPrev = slider.querySelector(".slider__btn.prev");
        const btnNext = slider.querySelector(".slider__btn.next");

        let index = 0;
        let timer:any=null;
        const AUTOPLAY_MS = 6500;

        function render(){
            if(track)track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((d, i)=> d.classList.toggle("is-active", i ===index));
        }

        function next(){
            index=(index+1)% slides.length;
            render();
        }

        function prev(){
            index = (index-1+slides.length)% slides.length;
            render();
        }

        function start(){
            stop();
            timer = setInterval(next, AUTOPLAY_MS);
        }
        function stop(){
            if(timer) clearInterval(timer);
        }

        btnNext?.addEventListener("click", next);
        btnPrev?.addEventListener("click", prev);
        render();
        start()

        return()=>{
            stop();
            btnNext?.removeEventListener("click", next);
            btnPrev?.removeEventListener("click", prev);
        }

    },[])


}

export default useHomeEffect