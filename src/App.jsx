import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Organization from "./components/Organization";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { getCopy } from "./data/i18n";

export default function App() {
  const [lang, setLang] = useState("id");
  const copy = getCopy(lang);

  useEffect(() => {
    document.documentElement.lang = lang === "id" ? "id" : "en";
  }, [lang]);

  useEffect(() => {
    const revealTargets = Array.from(document.querySelectorAll(".section-shell, .card-reveal"));

    if (!("IntersectionObserver" in window)) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
      return undefined;
    }

    document.body.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    revealTargets.forEach((target) => {
      if (target.classList.contains("card-reveal") && target.style.animationDelay) {
        target.style.setProperty("--reveal-delay", target.style.animationDelay);
      }
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
      document.body.classList.remove("reveal-ready");
    };
  }, []);

  return (
    <>
      <Header lang={lang} setLang={setLang} copy={copy} />
      <main>
        <Hero copy={copy} />
        <Profile copy={copy} />
        <Organization copy={copy} />
        <Gallery copy={copy} />
        <Booking copy={copy} />
        <Contact copy={copy} />
      </main>
      <Footer copy={copy} />
    </>
  );
}
