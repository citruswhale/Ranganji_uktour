import React from "react";
import { SimpleStarDivider } from "./Ornaments";

const EventInfoCard = () => {
  return (
    <section
      data-testid="event-info-card"
      className="surface-card relative overflow-hidden p-6 sm:p-10 lg:p-12 rise"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(184, 137, 59, 0.10), transparent 55%)",
        }}
      />

      <div className="relative">
        <div
          className="text-[11px] sm:text-xs tracking-[0.32em] uppercase font-display mb-3"
          style={{ color: "var(--gold)" }}
        >
          Event Series
        </div>
        <h2
          className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] mb-6"
          style={{ color: "var(--ink)" }}
        >
          Sri Ramayana Sathsanga
        </h2>

        <p
          className="font-body text-base sm:text-lg leading-relaxed mb-4"
          style={{ color: "var(--ink-soft)" }}
        >
          Sri Rama’s journey offers timeless life lessons that transcend mental
          and physical boundaries. Sri Ramayana Satsang by Dr Ranganji will be a
          series of lectures and explorations across UK examining how this
          peerless epic stands alongside the world’s greatest literary works in
          conveying universal human values.
        </p>
        <p
          className="font-body text-base sm:text-lg leading-relaxed"
          style={{ color: "var(--ink-soft)" }}
        >
          These discourses will delve into the Ramayana, its characters, and its
          civilizational foundations, highlighting their enduring influence on
          spiritual growth and societal contribution, and the profound potential
          they hold for our collective future.
        </p>

        <div className="my-10" aria-hidden="true">
          <SimpleStarDivider className="max-w-[360px] mx-auto" />
        </div>

        <div data-testid="contact-donations">
          <h3
            className="font-display text-2xl sm:text-3xl mb-2"
            style={{ color: "var(--saffron-deep)" }}
          >
            Contact &amp; Donations
          </h3>
          <p
            className="font-body text-base sm:text-lg leading-relaxed mb-5"
            style={{ color: "var(--ink-soft)" }}
          >
            For donations towards Samsthan&rsquo;s Dharmic activities and for UK
            event information and schedule updates please contact:
          </p>

          <div className="font-body" style={{ color: "var(--ink)" }}>
            <p className="font-display text-lg sm:text-xl font-semibold mb-1">
              Swetha
            </p>
            <p className="text-base sm:text-lg" data-testid="contact-phone">
              <span style={{ color: "var(--ink-mute)" }}>
                WhatsApp / Mobile:&nbsp;
              </span>
              <a
                href="https://wa.me/447899086630"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                +44 7899 086630
              </a>
            </p>
            <p className="font-display text-lg sm:text-xl font-semibold mb-1">
              Webolim Official
            </p>
            <p className="text-base sm:text-lg" data-testid="contact-phone">
              <span style={{ color: "var(--ink-mute)" }}>
                WhatsApp / Mobile:&nbsp;
              </span>
              <a
                href="https://wa.me/919369637283"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                +91 93696 37283
              </a>
            </p>
            <p className="text-base sm:text-lg" data-testid="contact-email">
              <span style={{ color: "var(--ink-mute)" }}>Email:&nbsp;</span>
              <a href="mailto:webolimclasses@gmail.com" className="map-link">
                webolimclasses@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfoCard;
