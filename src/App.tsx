/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  ArrowDown,
  Menu,
  X,
  Facebook,
  Home,
  Key,
  FileText,
  ExternalLink,
} from "lucide-react";
import { ScrollReveal } from "./components/ScrollReveal";

interface OpeningDay {
  day: string;
  hours: string;
  isClosed: boolean;
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track page scroll to toggle solid background of the navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const days: OpeningDay[] = [
    { day: "Poniedziałek", hours: "09:00 – 16:00", isClosed: false },
    { day: "Wtorek", hours: "09:00 – 16:00", isClosed: false },
    { day: "Środa", hours: "09:00 – 16:00", isClosed: false },
    { day: "Czwartek", hours: "09:00 – 16:00", isClosed: false },
    { day: "Piątek", hours: "09:00 – 16:00", isClosed: false },
    { day: "Sobota", hours: "ZAMKNIĘTE", isClosed: true },
    { day: "Niedziela", hours: "ZAMKNIĘTE", isClosed: true },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      setIsMobileMenuOpen(false);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="sg-app" className="min-h-screen bg-white text-brand-black flex flex-col font-sans">
      
      {/* ==================== NAVBAR ==================== */}
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-brand-border py-4 shadow-[0_4px_30px_rgba(0,0,0,0.02)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo element */}
          <a
            id="nav-logo"
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "hero")}
            className="flex flex-col group"
          >
            <span
              className={`font-serif text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-colors duration-300 ${
                isScrolled ? "text-brand-black" : "text-white"
              }`}
            >
              SG Nieruchomości
            </span>
            <span
              className={`text-[9px] uppercase tracking-[0.3em] font-light transition-colors duration-300 ${
                isScrolled ? "text-brand-gray" : "text-white/70"
              }`}
            >
              Wrocław · Stara Grabina
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div id="desktop-nav-links" className="hidden md:flex items-center space-x-10">
            <a
              id="link-onas"
              href="#o-nas"
              onClick={(e) => handleSmoothScroll(e, "o-nas")}
              className={`text-xs tracking-[0.25em] uppercase font-light hover:opacity-100 transition-opacity duration-300 ${
                isScrolled ? "text-brand-black/80 opacity-80" : "text-white/80 opacity-80 hover:text-white"
              }`}
            >
              O nas
            </a>
            <a
              id="link-godziny"
              href="#godziny"
              onClick={(e) => handleSmoothScroll(e, "godziny")}
              className={`text-xs tracking-[0.25em] uppercase font-light hover:opacity-100 transition-opacity duration-300 ${
                isScrolled ? "text-brand-black/80 opacity-80" : "text-white/80 opacity-80 hover:text-white"
              }`}
            >
              Godziny
            </a>
            <a
              id="link-kontakt"
              href="#kontakt"
              onClick={(e) => handleSmoothScroll(e, "kontakt")}
              className={`text-xs tracking-[0.25em] uppercase font-light hover:opacity-100 transition-opacity duration-300 ${
                isScrolled ? "text-brand-black/80 opacity-80" : "text-white/80 opacity-80 hover:text-white"
              }`}
            >
              Kontakt
            </a>
          </div>

          {/* Call CTA button */}
          <div id="nav-cta" className="hidden md:block">
            <a
              id="nav-phone-btn"
              href="tel:603999999"
              className={`inline-flex items-center gap-2 px-5 py-2.5 border rounded-none text-[11px] uppercase tracking-[0.25em] font-light transition-all duration-300 ${
                isScrolled
                  ? "border-brand-black bg-brand-black text-white hover:bg-white hover:text-brand-black"
                  : "border-white bg-transparent text-white hover:bg-white hover:text-brand-black"
              }`}
            >
              <Phone className="w-3 h-3" />
              Zadzwoń
            </a>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center p-2 focus:outline-none focus:ring-0"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-brand-black" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-brand-black" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Fullscreen Overlay Menu */}
        <div
          id="mobile-nav-panel"
          className={`fixed inset-x-0 top-[65px] md:hidden bg-white border-b border-brand-border h-screen flex flex-col pt-8 px-8 space-y-6 transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <a
            id="mobile-link-onas"
            href="#o-nas"
            onClick={(e) => handleSmoothScroll(e, "o-nas")}
            className="text-2xl font-serif text-brand-black tracking-widest uppercase py-2 border-b border-brand-border/40"
          >
            O nas
          </a>
          <a
            id="mobile-link-godziny"
            href="#godziny"
            onClick={(e) => handleSmoothScroll(e, "godziny")}
            className="text-2xl font-serif text-brand-black tracking-widest uppercase py-2 border-b border-brand-border/40"
          >
            Godziny pracy
          </a>
          <a
            id="mobile-link-kontakt"
            href="#kontakt"
            onClick={(e) => handleSmoothScroll(e, "kontakt")}
            className="text-2xl font-serif text-brand-black tracking-widest uppercase py-2 border-b border-brand-border/40"
          >
            Kontakt
          </a>

          <div id="mobile-cta-section" className="pt-8 flex flex-col gap-4">
            <a
              id="mobile-phone-btn"
              href="tel:603999999"
              className="flex items-center justify-center gap-3 w-full py-4 bg-brand-black text-white hover:bg-brand-dark transition-colors duration-300 text-sm uppercase tracking-widest font-medium"
            >
              <Phone className="w-4 h-4" />
              Zadzwoń: 603 999 999
            </a>
            <a
              id="mobile-facebook-btn"
              href="https://www.facebook.com/profile.php?id=61572016958201"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 border border-brand-border bg-brand-light text-brand-black hover:bg-brand-border/45 transition-colors duration-300 text-sm uppercase tracking-widest font-medium"
            >
              <Facebook className="w-4 h-4" />
              Obserwuj na Facebooku
            </a>
          </div>

          <div id="mobile-menu-footer" className="pt-12 text-center">
            <p className="text-xs text-brand-gray tracking-wider">
              SG Nieruchomości • Wrocław
            </p>
          </div>
        </div>
      </nav>

      {/* ==================== 1. HERO SECTION ==================== */}
      <section
        id="hero"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.35) 100%), url('https://i.ibb.co/nMvQ6s61/673469942-3944861852478172-7605770332152756008-n.jpg')`,
        }}
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white px-6 md:px-12 flex-shrink-0"
      >
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        <div className="max-w-4xl w-full text-center z-10 flex flex-col items-center">
          {/* Label banner */}
          <span className="block text-xs md:text-sm font-light tracking-[0.5em] uppercase text-white/90 mb-4 md:mb-6 animate-fade-in">
            WROCŁAW · STARA GRABINA
          </span>

          {/* Heading Title */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl font-light tracking-wide mb-6 leading-tight animate-slide-up">
            SG Nieruchomości
          </h1>

          {/* Tagline Subtitle */}
          <p className="text-base sm:text-lg md:text-2xl font-light tracking-wide max-w-2xl text-white/85 mb-10 leading-relaxed animate-slide-up animation-delay-200">
            Obsługa nieruchomości na Starej Grabinie we Wrocławiu. Profesjonalizm i pełne zaangażowanie każdego dnia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto animate-slide-up animation-delay-400">
            <a
              id="hero-cta-kontakt"
              href="#kontakt"
              onClick={(e) => handleSmoothScroll(e, "kontakt")}
              className="px-8 py-4 bg-white text-brand-black hover:bg-brand-black hover:text-white hover:border-brand-black border border-white text-xs uppercase tracking-[0.25em] font-light transition-all duration-300 text-center"
            >
              Skontaktuj się
            </a>
            <a
              id="hero-cta-hours"
              href="#godziny"
              onClick={(e) => handleSmoothScroll(e, "godziny")}
              className="px-8 py-4 border border-white/60 bg-transparent text-white hover:bg-white hover:text-brand-black hover:border-white text-xs uppercase tracking-[0.25em] font-light transition-all duration-300 text-center"
            >
              Sprawdź godziny
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-scroll-bounce hover:text-white transition-colors duration-300">
          <span className="text-[9px] uppercase tracking-[0.3em] font-medium">Przejdź niżej</span>
          <a
            id="hero-scroll-btn"
            href="#o-nas"
            onClick={(e) => handleSmoothScroll(e, "o-nas")}
            aria-label="Scroll down to O Nas section"
          >
            <ArrowDown className="w-5 h-5 pointer-events-none" />
          </a>
        </div>
      </section>

      {/* ==================== 2. O NAS SECTION ==================== */}
      <section
        id="o-nas"
        className="py-32 md:py-48 px-6 md:px-12 bg-white bg-noise border-y border-brand-border/60 scroll-mt-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">
            {/* Left Column: Context Copy */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <ScrollReveal direction="up">
                <span className="block text-xs font-light tracking-[0.5em] text-brand-gray mb-4">
                  PRESTIŻ · DOŚWIADCZENIE
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-thin tracking-wide text-brand-black mb-10 leading-tight">
                  Lokalni eksperci <br />
                  <span className="italic font-normal">nieruchomości</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={150}>
                <div className="space-y-8 text-brand-dark/85 font-light text-base md:text-lg leading-relaxed tracking-wide">
                  <p>
                    SG Nieruchomości to autorskie biuro obsługi rynku premium, dedykowane najbardziej wymagającym klientom poszukującym nieruchomości na terenie wrocławskiej <strong className="font-normal text-brand-black">Starej Grabiny</strong> oraz jej malowniczych okolic.
                  </p>
                  <p>
                    Nasza misja wykracza poza standardowe pośrednictwo. Definiujemy na nowo standardy obsługi poprzez unikalną synergię dogłębnej wiedzy rynkowej, absolutnej dyskrecji oraz precyzyjnemu dopasowaniu do osobistych oczekiwań osób powierzających nam swoje kapitały.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Premium Monospace/Serif Typographic Element */}
            <div className="lg:col-span-5 hidden lg:block">
              <ScrollReveal direction="left" delay={300} className="h-full">
                <div className="relative flex items-center justify-center p-12 border border-brand-border bg-[#fafafa] h-full shadow-[inset_0_0_80px_rgba(0,0,0,0.015)] select-none">
                  <span className="font-serif text-[20rem] text-brand-border/20 font-extralight leading-none tracking-tighter">
                    SG
                  </span>
                  <div className="absolute inset-x-8 bottom-16 text-center px-6">
                    <div className="mx-auto w-16 h-[1px] bg-brand-gray/30 mb-8" />
                    <p className="font-serif italic text-brand-dark/70 font-light text-xl leading-relaxed">
                      "Głęboka znajomość lokalnego rynku oraz wyczucie estetyki przestrzeni są gwarantem Twojego bezpieczeństwa."
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>


          {/* Service Grid Pillars */}
          <div id="uslugi" className="mt-32">
            <ScrollReveal direction="up" className="text-center mb-20">
              <div className="w-20 h-[1px] bg-brand-border mx-auto mb-8" />
              <span className="block text-xs font-light tracking-[0.4em] text-brand-gray mb-3 uppercase">
                NASZ ZAKRES
              </span>
              <h3 className="font-serif text-3xl md:text-5xl font-thin tracking-wide text-brand-black">
                Filary naszej działalności
              </h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
              {/* Column 1: Sprzedaż */}
              <ScrollReveal direction="up" delay={100} className="flex">
                <div className="flex-1 flex flex-col justify-between group">
                  <div>
                    <div className="w-8 h-8 flex items-center justify-start mb-6 text-brand-black">
                      <Home className="w-5 h-5 stroke-[1.25]" />
                    </div>
                    <h4 className="font-serif text-xl font-light tracking-wider text-brand-black mb-4">
                      Sprzedaż
                    </h4>
                    <p className="text-sm font-light text-brand-dark/75 leading-relaxed tracking-wide">
                      Kompleksowo przeprowadzamy proces sprzedaży domów, mieszkań i działek budowlanych we Wrocławiu. Wykorzystujemy sprawdzone narzędzia marketingowe, gwarantując sprawne przeprowadzenie transakcji i uzyskanie optymalnej wartości finansowej.
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-brand-border flex items-center text-[10px] tracking-[0.25em] uppercase font-light text-brand-gray group-hover:text-brand-black transition-colors duration-300">
                    Sprawdź ofertę
                  </div>
                </div>
              </ScrollReveal>

              {/* Column 2: Wynajem */}
              <ScrollReveal direction="up" delay={200} className="flex">
                <div className="flex-1 flex flex-col justify-between group">
                  <div>
                    <div className="w-8 h-8 flex items-center justify-start mb-6 text-brand-black">
                      <Key className="w-5 h-5 stroke-[1.25]" />
                    </div>
                    <h4 className="font-serif text-xl font-light tracking-wider text-brand-black mb-4">
                      Wynajem
                    </h4>
                    <p className="text-sm font-light text-brand-dark/75 leading-relaxed tracking-wide">
                      Skutecznie pośredniczymy w bezpiecznym wynajmie krótko- i długoterminowym. Starannie weryfikujemy oraz dobieramy rzetelnych najemców, dbając o pełne i profesjonalne bezpieczeństwo prawne umów najmu dla właścicieli lokali.
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-brand-border flex items-center text-[10px] tracking-[0.25em] uppercase font-light text-brand-gray group-hover:text-brand-black transition-colors duration-300">
                    Zabezpiecz lokal
                  </div>
                </div>
              </ScrollReveal>

              {/* Column 3: Doradztwo */}
              <ScrollReveal direction="up" delay={300} className="flex">
                <div className="flex-1 flex flex-col justify-between group">
                  <div>
                    <div className="w-8 h-8 flex items-center justify-start mb-6 text-brand-black">
                      <FileText className="w-5 h-5 stroke-[1.25]" />
                    </div>
                    <h4 className="font-serif text-xl font-light tracking-wider text-brand-black mb-4">
                      Doradztwo
                    </h4>
                    <p className="text-sm font-light text-brand-dark/75 leading-relaxed tracking-wide">
                      Dokonujemy profesjonalnych wycen rynkowych, sporządzamy audyty prawne, analizujemy rentowność nieruchomości oraz doradzamy inwestorom w optymalnym lokowaniu kapitału na lokalnym rynku wrocławskim.
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-brand-border flex items-center text-[10px] tracking-[0.25em] uppercase font-light text-brand-gray group-hover:text-brand-black transition-colors duration-300">
                    Inwestuj mądrze
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. GODZINY OTWARCIA ==================== */}
      <section
        id="godziny"
        className="py-32 md:py-48 px-6 md:px-12 bg-brand-dark text-white scroll-mt-20 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto">
          
          <ScrollReveal direction="up" className="text-center mb-20">
            <span className="block text-xs font-light tracking-[0.5em] text-brand-gray mb-3">
              GODZINY PRACY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-thin tracking-wide text-white leading-tight">
              Kiedy nas znajdziesz
            </h2>
            <p className="text-sm font-light text-brand-gray/80 mt-6 max-w-lg mx-auto tracking-wide leading-relaxed">
              Zapraszamy na indywidualne, poufne spotkania w naszym biurze we Wrocławiu. W celu rezerwacji dogodnego dla Państwa terminu zachęcamy do kontaktu telefonicznego.
            </p>
          </ScrollReveal>

          {/* Days Grid - 7 custom animated rows */}
          <div id="schedule-container" className="border-t border-white/10">
            {days.map((item, index) => (
              <ScrollReveal
                key={item.day}
                direction="left"
                delay={index * 100}
                className={`py-6 border-b border-white/10 flex items-center justify-between transition-opacity duration-300 ${
                  item.isClosed ? "opacity-25 select-none" : "opacity-100"
                }`}
              >
                {/* Day name */}
                <span className="text-xs sm:text-sm font-light tracking-[0.25em] uppercase flex items-center gap-3">
                  <span className={`w-1 h-1 rounded-full ${item.isClosed ? "bg-brand-gray" : "bg-white"}`} />
                  {item.day}
                </span>

                {/* Day working hours with custom tag */}
                <div className="flex items-center gap-6">
                  <span
                    className={`font-mono text-xs sm:text-sm tracking-wider ${
                      item.isClosed ? "line-through text-brand-gray" : "text-white/90"
                    }`}
                  >
                    {item.hours}
                  </span>
                  {!item.isClosed && (
                    <span className="hidden sm:inline-block px-3 py-1 border border-white/10 text-[8px] uppercase tracking-[0.2em] text-[#a8a8a8] font-light">
                      Dostępni
                    </span>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Small quick action notice */}
          <ScrollReveal direction="up" delay={800} className="mt-16 text-center">
            <p className="text-xs text-brand-gray font-light tracking-wide leading-relaxed max-w-md mx-auto">
              Nasi doradcy pozostają do Państwa dyspozycji w terenie także poza standardowymi godzinami pracy biura, po wcześniejszym uzgodnieniu telefonicznym.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== 4. KONTAKT SECTION ==================== */}
      <section
        id="kontakt"
        className="py-32 md:py-48 px-6 md:px-12 bg-white bg-noise scroll-mt-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            
            {/* Left Column: Info & Action Buttons */}
            <div className="flex flex-col justify-center">
              <ScrollReveal direction="up">
                <span className="block text-xs font-light tracking-[0.5em] text-brand-gray mb-3">
                  KONTAKT
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-thin tracking-wide text-brand-black mb-10 leading-tight">
                  Nawiążmy <br /><span className="italic font-normal">relację</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={150}>
                {/* Contact data items with thin lines */}
                <div id="contact-data-list" className="space-y-6 mb-12">
                  <div className="flex items-start gap-4 pb-5 border-b border-brand-border">
                    <div className="p-3 border border-brand-border bg-brand-light">
                      <MapPin className="w-5 h-5 text-brand-black stroke-[1.25]" />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.25em] font-light text-brand-gray mb-1.5">
                        Siedziba Biura
                      </h4>
                      <p className="text-base text-brand-black font-light tracking-wide">
                        ul. Wielkopolska 72, Wrocław 54-027
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pb-5 border-b border-brand-border">
                    <div className="p-3 border border-brand-border bg-brand-light">
                      <Phone className="w-5 h-5 text-brand-black stroke-[1.25]" />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.25em] font-light text-brand-gray mb-1.5">
                        Telefon kontaktowy
                      </h4>
                      <a
                        href="tel:603999999"
                        className="text-lg text-brand-black font-light tracking-widest hover:opacity-75 transition-opacity duration-300"
                      >
                        603 999 999
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 border border-brand-border bg-brand-light">
                      <Clock className="w-5 h-5 text-brand-black stroke-[1.25]" />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.25em] font-light text-brand-gray mb-1.5">
                        Godziny spotkań
                      </h4>
                      <p className="text-base text-brand-black font-light tracking-wide">
                        Poniedziałek – Piątek • 09:00 – 16:00
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Desktop and Mobile Call Buttons */}
              <ScrollReveal direction="up" delay={300}>
                <div id="contact-actions" className="flex flex-col sm:flex-row gap-4">
                  {/* Call now button */}
                  <a
                    id="contact-call-btn"
                    href="tel:603999999"
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-brand-black text-white hover:bg-white hover:text-brand-black border border-brand-black text-xs uppercase tracking-[0.2em] font-light transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Zadzwoń teraz
                  </a>

                  {/* Facebook handle link */}
                  <a
                    id="contact-fb-btn"
                    href="https://www.facebook.com/profile.php?id=61572016958201"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-4 border border-brand-border bg-brand-light text-brand-black hover:bg-brand-black hover:text-white hover:border-brand-black text-xs uppercase tracking-[0.2em] font-light transition-all duration-300"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>

                  {/* Google Maps External router link */}
                  <a
                    id="contact-maps-btn"
                    href="https://maps.google.com/?q=Wielkopolska+72,+Wrocław"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-4 border border-brand-border bg-transparent text-brand-gray hover:text-brand-black hover:border-brand-black text-xs uppercase tracking-[0.2em] font-light transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Mapy Google
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Embedded Responsive Google Map */}
            <div id="contact-map-grid" className="flex items-center">
              <ScrollReveal direction="left" delay={450} className="w-full">
                <div className="relative w-full border border-brand-border p-2 bg-white">
                  {/* Map Responsive iframe container */}
                  <div
                    style={{ paddingBottom: "56.25%", position: "relative" }}
                    className="w-full overflow-hidden"
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1251.5429082410196!2d16.875364839101213!3d51.14376857566704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f955069f92b9f%3A0x43e4973c9c87b1ac!2sWielkopolska%2072%2C%2054-027%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1780308827907!5m2!1spl!2spl"
                      width="100%"
                      height="100%"
                      style={{
                        border: 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        filter: "grayscale(100%)",
                      }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Siedziba SG Nieruchomości we Wrocławiu"
                    ></iframe>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. FOOTER ==================== */}
      <footer id="footer" className="bg-brand-black text-white pt-20 pb-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
          
          <div id="footer-top" className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full pb-16 border-b border-brand-graphite/40">
            {/* Logo */}
            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <span className="font-serif text-2xl font-light tracking-[0.25em] uppercase mb-2">
                SG Nieruchomości
              </span>
              <p className="text-xs text-brand-gray max-w-xs font-light tracking-wide">
                Twoje zaufane biuro pośrednictwa nieruchomości na Starej Grabinie we Wrocławiu.
              </p>
            </div>

            {/* Address & Contacts */}
            <div className="flex flex-col justify-center items-center text-center">
              <span className="text-[10px] tracking-[0.25em] uppercase text-brand-gray mb-3 font-light">
                Siedziba
              </span>
              <p className="text-sm font-light tracking-widest text-white">
                Wielkopolska 72, Wrocław 54-027
              </p>
              <a
                href="tel:603999999"
                className="text-brand-gray hover:text-white text-sm font-light mt-1.5 transition-colors duration-300 tracking-wider"
              >
                tel: 603 999 999
              </a>
            </div>

            {/* Social Connection */}
            <div className="flex flex-col justify-center items-center md:items-end text-center md:text-right">
              <span className="text-[10px] tracking-[0.25em] uppercase text-brand-gray mb-4 font-light">
                Bądź na bieżąco
              </span>
              <a
                id="footer-fb-icon"
                href="https://www.facebook.com/profile.php?id=61572016958201"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-brand-graphite rounded-full flex items-center justify-center hover:bg-white hover:text-brand-black hover:border-white transition-all duration-300 text-white/80"
                aria-label="Visit SG Nieruchomości on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Copywrite rights */}
          <div id="footer-bottom" className="pt-8 text-center flex flex-col sm:flex-row items-center justify-between w-full gap-4 text-xs font-light text-brand-gray">
            <p>© 2026 SG Nieruchomości – Wrocław. Wszelkie prawa zastrzeżone.</p>
            <p className="text-[10px] uppercase tracking-wider text-brand-graphite">
              Kunszt • Tradycja • Rzetelność
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
