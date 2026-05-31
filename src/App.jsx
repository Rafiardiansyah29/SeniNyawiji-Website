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
  const [theme, setTheme] = useState("dark");
  const copy = getCopy(lang);

  useEffect(() => {
    document.documentElement.lang = lang === "id" ? "id" : "en";
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <>
      <Header lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} copy={copy} />
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
