import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { events, buildMapsLink } from "../data/events.js";

const TBA = "To be announced soon";

const parayanamIds = [1, 3, 5];
const parayanamEvents = events.filter(e => parayanamIds.includes(e.id));
const discoursesEvents = events.filter(e => !parayanamIds.includes(e.id));

const VenueLink = ({ name, address, mapLink }) => {
  const query = address || name;
  const display = address && address !== name ? `${name}, ${address}` : name;
  return (
    <a
      href={mapLink || buildMapsLink(query)}
      target="_blank"
      rel="noopener noreferrer"
      className="map-link inline-flex items-start gap-1.5"
      data-testid="event-venue-link"
    >
      <MapPin
        size={15}
        className="mt-1 shrink-0"
        style={{ color: "var(--saffron)" }}
      />
      <span className="font-body">{display}</span>
    </a>
  );
};

/* ---------- Desktop / tablet table row ---------- */
const TableRow = ({ ev, idx }) => {
  const tint = idx % 2 === 0 ? "rgba(255,253,247,0.6)" : "rgba(244,234,217,0.35)";
  const hasPartialInfo = !ev.confirmed && (ev.venueName || ev.address);

  if (!ev.confirmed && !hasPartialInfo) {
    return (
      <tr style={{ background: tint }} data-testid={`event-row-${ev.id}`}>
        <td className="align-top px-5 py-5">
          <DateCell ev={ev} />
        </td>
        <td
          colSpan={2}
          className="align-middle px-5 py-5 font-body italic text-[0.95rem]"
          style={{ color: "var(--ink-mute)" }}
        >
          {TBA}
        </td>
      </tr>
    );
  }

  if (hasPartialInfo) {
    return (
      <tr style={{ background: tint }} data-testid={`event-row-${ev.id}`}>
        <td className="align-top px-5 py-5">
          <DateCell ev={ev} />
        </td>
        <td className="align-top px-5 py-5">
          <p
            className="font-body italic text-[0.95rem]"
            style={{ color: "var(--ink-mute)" }}
          >
            {TBA}
          </p>
          {ev.session && (
            <p
              className="font-body text-xs mt-1 tracking-wide uppercase"
              style={{ color: "var(--ink-mute)" }}
            >
              {ev.session}
            </p>
          )}
        </td>
        <td className="align-top px-5 py-5">
          <VenueLink name={ev.venueName} address={ev.address} mapLink={ev.mapLink} />
          <div
            className="flex items-center gap-1.5 mt-2 font-body text-sm italic"
            style={{ color: "var(--ink-mute)" }}
          >
            <Clock size={13} style={{ color: "var(--gold)" }} />
            <span>Timing to be announced</span>
          </div>
        </td>
      </tr>
    );
  }
  return (
    <tr style={{ background: tint }} data-testid={`event-row-${ev.id}`}>
      <td className="align-top px-5 py-5">
        <DateCell ev={ev} />
      </td>
      <td className="align-top px-5 py-5">
        <p
          className="font-display text-[1.05rem] leading-snug font-semibold"
          style={{ color: "var(--ink)" }}
        >
          {ev.topic}
        </p>
        {ev.session && (
          <p
            className="font-body text-xs mt-1 tracking-wide uppercase"
            style={{ color: "var(--ink-mute)" }}
          >
            {ev.session}
          </p>
        )}
        {(ev.contactName || ev.contactPhone) && (
          <div className="font-body text-sm mt-3" style={{ color: "var(--ink-soft)" }}>
            {ev.contactName && (
              <p className="font-medium" style={{ color: "var(--ink)" }}>
                {ev.contactName}
              </p>
            )}
            {ev.contactPhone && (
              <a
                href={`tel:${ev.contactPhone.replace(/\s/g, "")}`}
                className="map-link inline-flex items-center gap-1.5 mt-1"
              >
                <Phone size={12} />
                {ev.contactPhone}
              </a>
            )}
          </div>
        )}
      </td>
      <td className="align-top px-5 py-5">
        <VenueLink name={ev.venueName} address={ev.address} mapLink={ev.mapLink} />
        <div
          className="flex items-center gap-1.5 mt-2 font-body text-sm"
          style={{ color: "var(--ink-soft)" }}
        >
          <Clock size={13} style={{ color: "var(--gold)" }} />
          <span>{ev.time || TBA}</span>
        </div>
      </td>
    </tr>
  );
};

const DateCell = ({ ev }) => (
  <div className="flex flex-col items-start gap-1">
    <span className="date-pill text-sm">{ev.date}</span>
    <span
      className="font-body text-xs tracking-wide"
      style={{ color: "var(--ink-mute)" }}
    >
      {ev.day}
    </span>
  </div>
);

/* ---------- Mobile card ---------- */
const MobileCard = ({ ev }) => {
  const hasPartialInfo = !ev.confirmed && (ev.venueName || ev.address);
  return (
    <article
      data-testid={`event-card-${ev.id}`}
      className="rounded-2xl p-5 border"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,253,247,0.95) 0%, rgba(248,238,221,0.85) 100%)",
        borderColor: "var(--line)",
        boxShadow: "0 8px 22px -16px rgba(168,71,15,0.25)",
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="date-pill text-[13px]">{ev.date}</span>
        <span
          className="font-body text-[11px] tracking-[0.18em] uppercase"
          style={{ color: "var(--ink-mute)" }}
        >
          {ev.day}
        </span>
      </div>

      {!ev.confirmed && !hasPartialInfo ? (
        <p
          className="font-body italic text-[0.95rem]"
          style={{ color: "var(--ink-mute)" }}
        >
          {TBA}
        </p>
      ) : hasPartialInfo ? (
        <>
          {ev.session && (
            <p
              className="font-body text-[11px] tracking-[0.18em] uppercase mb-3"
              style={{ color: "var(--gold)" }}
            >
              {ev.session}
            </p>
          )}
          <div className="space-y-2.5">
            <div>
              <VenueLink name={ev.venueName} address={ev.address} mapLink={ev.mapLink} />
            </div>
            <div className="flex items-start gap-2">
              <Clock size={14} className="mt-1" style={{ color: "var(--gold)" }} />
              <span
                className="font-body text-sm italic"
                style={{ color: "var(--ink-mute)" }}
              >
                Timing to be announced
              </span>
            </div>
            <p
              className="font-body italic text-sm pt-1"
              style={{ color: "var(--ink-mute)" }}
            >
              Topic &amp; contact {TBA.toLowerCase()}
            </p>
          </div>
        </>
      ) : (
        <>
          <h4
            className="font-display text-lg leading-snug font-semibold mb-1"
            style={{ color: "var(--ink)" }}
          >
            {ev.topic}
          </h4>
          {ev.session && (
            <p
              className="font-body text-[11px] tracking-[0.18em] uppercase mb-3"
              style={{ color: "var(--gold)" }}
            >
              {ev.session}
            </p>
          )}

          <div className="space-y-2.5 mt-3">
            <div className="flex items-start gap-2">
              <Clock size={14} className="mt-1" style={{ color: "var(--gold)" }} />
              <span className="font-body text-sm" style={{ color: "var(--ink-soft)" }}>
                {ev.time || TBA}
              </span>
            </div>
            <div>
              <VenueLink name={ev.venueName} address={ev.address} mapLink={ev.mapLink} />
            </div>
            {(ev.contactName || ev.contactPhone) && (
              <div className="flex items-start gap-2 pt-1">
                <Phone size={13} className="mt-1" style={{ color: "var(--saffron)" }} />
                <div className="font-body text-sm" style={{ color: "var(--ink-soft)" }}>
                  {ev.contactName && (
                    <span style={{ color: "var(--ink)" }}>{ev.contactName}</span>
                  )}
                  {ev.contactName && ev.contactPhone && <span> · </span>}
                  {ev.contactPhone && (
                    <a
                      href={`tel:${ev.contactPhone.replace(/\s/g, "")}`}
                      className="map-link"
                    >
                      {ev.contactPhone}
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </article>
  );
};

const EventGroup = ({ title, eventsList }) => {
  if (eventsList.length === 0) return null;
  
  return (
    <div className="mb-12">
      <h3
        className="font-display text-2xl sm:text-3xl mb-5 font-semibold"
        style={{ color: "var(--ink)" }}
      >
        {title}
      </h3>
      {/* Desktop / tablet — table */}
      <div className="hidden md:block rounded-xl overflow-hidden border" style={{ borderColor: "var(--line)" }}>
        <table
          className="w-full border-collapse text-left"
          style={{ tableLayout: "fixed" }}
        >
          <colgroup>
            <col style={{ width: "20%" }} />
            <col style={{ width: "40%" }} />
            <col style={{ width: "40%" }} />
          </colgroup>
          <thead>
            <tr
              style={{
                background:
                  "linear-gradient(180deg, #f3e2c4 0%, #ead0a3 100%)",
                color: "var(--saffron-deep)",
              }}
            >
              <th className="px-5 py-4 font-display text-[12px] tracking-[0.22em] uppercase font-semibold">
                Date
              </th>
              <th className="px-5 py-4 font-display text-[12px] tracking-[0.22em] uppercase font-semibold">
                Topic
              </th>
              <th className="px-5 py-4 font-display text-[12px] tracking-[0.22em] uppercase font-semibold">
                Venue &amp; Timing
              </th>
            </tr>
          </thead>
          <tbody>
            {eventsList.map((ev, idx) => (
              <TableRow key={ev.id} ev={ev} idx={idx} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile — stacked cards */}
      <div className="md:hidden space-y-3">
        {eventsList.map((ev) => (
          <MobileCard key={ev.id} ev={ev} />
        ))}
      </div>
    </div>
  );
};

const EventsSchedule = () => {
  return (
    <section
      data-testid="events-schedule"
      className="surface-card relative overflow-hidden p-6 sm:p-10 lg:p-12 rise"
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at top, rgba(201, 90, 26, 0.08), transparent 60%)",
      }} />
      <div className="relative">
        <div
          className="text-[11px] sm:text-xs tracking-[0.32em] uppercase font-display mb-3"
          style={{ color: "var(--gold)" }}
        >
          Schedule
        </div>
        <h2
          className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] mb-3"
          style={{ color: "var(--ink)" }}
        >
          Events Schedule
        </h2>
        <p
          className="font-body text-sm sm:text-base italic mb-8"
          style={{ color: "var(--ink-mute)" }}
        >
          *Please note that event details are subject to change. Kindly check
          here for the updated schedule.
        </p>

        <EventGroup title="Parayanam" eventsList={parayanamEvents} />
        <EventGroup title="Discourses" eventsList={discoursesEvents} />

      </div>
    </section>
  );
};

export default EventsSchedule;

