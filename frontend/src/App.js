import React from "react";
import SpeakerCard from "./components/SpeakerCard";
import EventInfoCard from "./components/EventInfoCard";
import Gallery from "./components/Gallery";
import EventsSchedule from "./components/EventsSchedule";
import Footer from "./components/Footer";
import {
  LotusBloom,
  SimpleStarDivider,
} from "./components/Ornaments";
import brandLogo from "./assets/Logo.png";
import "./App.css";

const SectionBreak = () => (
  <div
    data-testid="section-break"
    className="flex items-center justify-center gap-5 sm:gap-7 my-2 sm:my-4"
    aria-hidden="true"
  >
    <LotusBloom className="w-12 h-8 sm:w-14 sm:h-10 opacity-90" />
    <SimpleStarDivider className="w-32 sm:w-44" />
    <LotusBloom className="w-12 h-8 sm:w-14 sm:h-10 opacity-90" />
  </div>
);

function App() {
  return (
    <div className="App brochure-bg min-h-screen">
      {/* tiled lotus pattern (using user-provided image) */}
      <div className="lotus-tile" data-testid="lotus-tile" />
      <div className="grain absolute inset-0" />

      <main
        data-testid="brochure-main"
        className="relative max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 pb-24"
      >
        {/* ===================== HERO ===================== */}
        <header
          data-testid="brochure-header"
          className="relative mb-14 sm:mb-20 rise"
        >
          {/* Hero ornamental frame + glassmorphism backdrop */}
          <div className="hero-frame" aria-hidden="true">
            <span className="corner tl" />
            <span className="corner tr" />
            <span className="corner bl" />
            <span className="corner br" />
          </div>

          <div className="relative px-6 sm:px-12 lg:px-16 py-12 sm:py-16 text-center">
            <div
              className="text-[11px] sm:text-xs tracking-[0.42em] uppercase font-display mb-5"
              style={{ color: "var(--gold)" }}
            >
              United Kingdom · 2026
            </div>

            {/* title row with logo placeholder */}
            <div
              data-testid="title-row"
              className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 flex-wrap"
            >
              <h1
                data-testid="event-title"
                className="font-display text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] tracking-tight"
                style={{ color: "var(--ink)" }}
              >
                Sri Ramayana Sathsanga
              </h1>

              {/* Brand logo */}
              <img
                data-testid="brand-logo"
                src={brandLogo}
                alt="Web of Lifemakers"
                className="w-[88px] h-[88px] md:w-[100px] md:h-[100px] lg:w-[116px] lg:h-[116px] object-contain shrink-0"
                style={{
                  filter: "drop-shadow(0 6px 14px rgba(168, 71, 15, 0.18))",
                }}
              />
            </div>

            <SimpleStarDivider
              className="mt-7 mb-5 max-w-[360px] sm:max-w-[420px] mx-auto"
            />

            <p
              className="font-body text-base sm:text-lg italic max-w-xl mx-auto"
              style={{ color: "var(--ink-mute)" }}
            >
              All lectures will be in English · All are welcome
            </p>
          </div>
        </header>

        {/* ===================== SECTIONS ===================== */}
        <SpeakerCard />
        <SectionBreak />
        <EventInfoCard />
        <SectionBreak />
        <Gallery />
        <EventsSchedule />

        {/* ===================== FOOTER ===================== */}
        <footer
          data-testid="brochure-footer"
          className="text-center mt-20 sm:mt-24 relative"
        >
          <SectionBreak />
          <p
            className="font-display text-base tracking-[0.36em] uppercase mt-6"
            style={{ color: "var(--saffron-deep)" }}
          >
            ॥ Jai Sita Ram ॥
          </p>
          <p
            className="font-body text-xs italic mt-3"
            style={{ color: "var(--ink-mute)" }}
          >
            Sri Ramayana Sathsanga · 2026
          </p>
        </footer>
      </main>

      {/* Footer with QR codes */}
      <Footer />
    </div>
  );
}

export default App;