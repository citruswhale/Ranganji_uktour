import React from "react";
import annaPhoto from "../assets/Anna.jpeg";

const SpeakerCard = () => {
  return (
    <section
      data-testid="speaker-card"
      className="surface-card relative overflow-hidden p-6 sm:p-10 lg:p-12 rise"
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at top right, rgba(201, 90, 26, 0.10), transparent 55%)",
      }} />

      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr] gap-7 md:gap-10 items-center relative">
        {/* Speaker portrait — square photo with cohesive saffron/cream border */}
        <div className="mx-auto md:mx-0">
          <div
            data-testid="speaker-portrait"
            className="relative w-56 sm:w-60 md:w-[260px] lg:w-[300px] h-auto rounded-2xl overflow-hidden"
            style={{
              padding: "6px",
              background:
                "linear-gradient(160deg, #fdeec8 0%, #ead0a3 60%, #d9b375 100%)",
              boxShadow:
                "0 0 0 1px rgba(184, 137, 59, 0.55), 0 22px 48px -22px rgba(168, 71, 15, 0.4)",
            }}
          >
            <img
              src={annaPhoto}
              alt="Dr. R. Ranganji"
              className="w-full h-auto block object-cover rounded-xl"
              style={{
                boxShadow: "inset 0 0 0 1px rgba(255, 250, 235, 0.6)",
              }}
            />
          </div>
        </div>

        <div>
          <div
            className="text-[11px] sm:text-xs tracking-[0.32em] uppercase font-display mb-3"
            style={{ color: "var(--gold)" }}
          >
            About the Speaker
          </div>
          <h2
            data-testid="speaker-name"
            className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] mb-4"
            style={{ color: "var(--ink)" }}
          >
            Dr. R. Ranganji
          </h2>

          <p
            className="font-body text-base sm:text-lg leading-relaxed mb-4"
            style={{ color: "var(--ink-soft)" }}
          >
            A renowned Vedic scholar and Ramayana exponent, Dr. Rangan
            Ramakrishnan is the son and disciple of Shri Krishnapremi Swamigal,
            hailing from Srirangam. His lifelong mission is to make Sanatana
            Dharma and Hindu culture accessible to all without compromising its
            depth and grandeure. He has guided countless youngsters in weaving
            core Sanatanic values into their lives. A highly distinguished
            scholar, he is known for his monumental <b>10-volume spiritual
            commentary on the Rig Veda</b>, acclaimed and accepted across all
            traditional Mutts, and his <b>10-volume translation and research
            compendium of the Valmiki Ramayana</b>. He has also developed the Dharma
            Model, a pioneering framework that distills the essence of Dharmic
            living for the modern seeker.
          </p>
          <p
            className="font-body text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--ink-soft)" }}
          >
            As Founder President of WEBOLIM (Web of Life Makers) Trust, Dr. Ranganji has <b>established three educational institutes: Shruti Ram Gurukulam,  Sitalakshmi Gurukulam (upto higher secondary) and Valmiki College of Vedic Wisdom</b> in Bengaluru. Students in these institutes are taught Vedic education, Yoga, Sanskrit, and the Ramayana alongside secular studies. For his extraordinary contributions to literature, research, and spiritual education, he has been honored with a <b>Doctor of Literature (D.Litt)</b> from SVYASA Yoga University and conferred titles including <b>Rama Kathamrutha Varshi, Yoga Vidhya Varidhi, and Samanvayacharya</b>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpeakerCard;
