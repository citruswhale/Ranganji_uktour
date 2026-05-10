import React from "react";

/* ===========================================================
   Ornamental SVGs — elegant Mughal/Pichwai lotus motifs
   Designed in palette: gold frame, red lotus, coral inner,
   green leaves, soft coral dewdrops.
   =========================================================== */

/* The full ornate framed lotus — the hero motif (matches reference) */
export const LotusMotif = ({ className = "", ...props }) => (
  <svg viewBox="0 0 400 400" className={className} aria-hidden="true" {...props}>
    {/* ===== Outer cusped/ogee gold frame (double line) ===== */}
    <g fill="none" stroke="#B8893B" strokeLinecap="round" strokeLinejoin="round">
      <path
        strokeWidth="1.6"
        d="M 200 24
           C 232 28, 270 50, 282 100
           C 287 122, 304 134, 326 132
           C 342 152, 360 170, 376 200
           C 360 230, 342 248, 326 268
           C 304 266, 287 278, 282 300
           C 270 350, 232 372, 200 376
           C 168 372, 130 350, 118 300
           C 113 278, 96 266, 74 268
           C 58 248, 40 230, 24 200
           C 40 170, 58 152, 74 132
           C 96 134, 113 122, 118 100
           C 130 50, 168 28, 200 24 Z"
      />
      <path
        strokeWidth="0.9"
        opacity="0.65"
        d="M 200 38
           C 228 42, 262 62, 274 108
           C 278 128, 294 138, 314 136
           C 328 154, 344 170, 358 200
           C 344 230, 328 246, 314 264
           C 294 262, 278 272, 274 292
           C 262 338, 228 358, 200 362
           C 172 358, 138 338, 126 292
           C 122 272, 106 262, 86 264
           C 72 246, 56 230, 42 200
           C 56 170, 72 154, 86 136
           C 106 138, 122 128, 126 108
           C 138 62, 172 42, 200 38 Z"
      />
    </g>

    {/* ===== Lotus petals (red outlines) ===== */}
    <g
      fill="none"
      stroke="#B8423C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.4"
    >
      {/* Outermost-left wide petal */}
      <path d="M 150 245 C 108 235, 75 198, 88 158 C 122 178, 162 215, 195 232" />
      {/* Outermost-right wide petal */}
      <path d="M 250 245 C 292 235, 325 198, 312 158 C 278 178, 238 215, 205 232" />
      {/* Mid-left petal */}
      <path d="M 178 235 C 152 215, 142 145, 168 110 C 188 138, 198 200, 200 232" />
      {/* Mid-right petal */}
      <path d="M 222 235 C 248 215, 258 145, 232 110 C 212 138, 202 200, 200 232" />
      {/* Inner-left petal */}
      <path d="M 192 230 C 178 205, 174 130, 188 98 C 198 130, 200 200, 200 230" />
      {/* Inner-right petal */}
      <path d="M 208 230 C 222 205, 226 130, 212 98 C 202 130, 200 200, 200 230" />
      {/* Central tall flame petal */}
      <path d="M 200 76 C 184 100, 184 200, 200 226 C 216 200, 216 100, 200 76 Z" />
    </g>

    {/* ===== Coral inner stripes / highlights ===== */}
    <g fill="none" stroke="#E89B92" strokeLinecap="round" strokeWidth="1.1">
      <path d="M 200 92 L 200 220" />
      <path d="M 192 110 C 184 150, 184 200, 195 222" />
      <path d="M 208 110 C 216 150, 216 200, 205 222" />
      <path d="M 175 130 C 162 165, 168 210, 188 226" />
      <path d="M 225 130 C 238 165, 232 210, 212 226" />
      <path d="M 145 175 C 122 195, 110 220, 130 232" opacity="0.85" />
      <path d="M 255 175 C 278 195, 290 220, 270 232" opacity="0.85" />
    </g>

    {/* ===== Deep red core stripe ===== */}
    <g fill="#9E2E2A" stroke="none">
      <path d="M 197 96 L 200 90 L 203 96 L 203 218 L 200 222 L 197 218 Z" opacity="0.8" />
    </g>

    {/* ===== Green leaves & stem ===== */}
    <g
      fill="none"
      stroke="#5C8A3E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
    >
      {/* Left arching leaf */}
      <path d="M 195 250 C 152 255, 96 252, 56 270 C 102 282, 158 276, 200 258" />
      {/* Right arching leaf */}
      <path d="M 205 250 C 248 255, 304 252, 344 270 C 298 282, 242 276, 200 258" />
      {/* Stem */}
      <path d="M 200 252 L 200 322" strokeWidth="2.2" />
      {/* Stem leaves (V downward) */}
      <path d="M 200 290 C 180 296, 166 308, 162 322" />
      <path d="M 200 290 C 220 296, 234 308, 238 322" />
    </g>

    {/* ===== Coral dewdrop accents around the frame ===== */}
    <g fill="#D9756F">
      <path d="M 100 70 l 4 -10 l 4 10 z" />
      <path d="M 292 70 l 4 -10 l 4 10 z" />
      <path d="M 60 142 l 4 -10 l 4 10 z" />
      <path d="M 332 142 l 4 -10 l 4 10 z" />
      <path d="M 60 258 l 4 10 l 4 -10 z" />
      <path d="M 332 258 l 4 10 l 4 -10 z" />
      <path d="M 100 332 l 3 8 l 3 -8 z" />
      <path d="M 294 332 l 3 8 l 3 -8 z" />
      <path d="M 175 326 l 3 7 l 3 -7 z" />
      <path d="M 219 326 l 3 7 l 3 -7 z" />
      <path d="M 148 340 l 3 7 l 3 -7 z" />
      <path d="M 246 340 l 3 7 l 3 -7 z" />
      <path d="M 130 308 l 3 6 l 3 -6 z" opacity="0.75" />
      <path d="M 264 308 l 3 6 l 3 -6 z" opacity="0.75" />
    </g>
  </svg>
);

/* Lotus bloom only (no frame) — for inline use in section breaks */
export const LotusBloom = ({ className = "", ...props }) => (
  <svg viewBox="0 0 120 80" className={className} aria-hidden="true" {...props}>
    {/* outer petals */}
    <g
      fill="none"
      stroke="#B8423C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
    >
      <path d="M 38 60 C 22 56, 14 42, 22 28 C 36 36, 50 50, 58 58" />
      <path d="M 82 60 C 98 56, 106 42, 98 28 C 84 36, 70 50, 62 58" />
      <path d="M 50 58 C 42 50, 38 26, 50 12 C 58 24, 60 50, 60 58" />
      <path d="M 70 58 C 78 50, 82 26, 70 12 C 62 24, 60 50, 60 58" />
      <path d="M 60 6 C 52 22, 52 50, 60 60 C 68 50, 68 22, 60 6 Z" />
    </g>
    <g fill="none" stroke="#E89B92" strokeLinecap="round" strokeWidth="0.8">
      <path d="M 60 12 L 60 56" />
      <path d="M 52 24 C 48 38, 50 52, 58 58" />
      <path d="M 68 24 C 72 38, 70 52, 62 58" />
    </g>
    {/* leaves at base */}
    <g fill="none" stroke="#5C8A3E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6">
      <path d="M 56 64 C 40 66, 22 64, 10 70 C 24 74, 42 72, 60 66" />
      <path d="M 64 64 C 80 66, 98 64, 110 70 C 96 74, 78 72, 60 66" />
    </g>
  </svg>
);

/* Simple star divider — small star with hairline rules on either side */
export const SimpleStarDivider = ({ className = "", ...props }) => (
  <div className={`star-divider ${className}`} aria-hidden="true" {...props}>
    <span className="line" />
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
    <span className="line" />
  </div>
);

/* Tiny lotus glyph — used inside the logo placeholder */
export const Lotus = ({ className = "", ...props }) => (
  <svg
    viewBox="0 0 100 60"
    className={className}
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <g opacity="0.9">
      <path d="M50 6 C44 22 44 38 50 54 C56 38 56 22 50 6 Z" />
      <path d="M50 12 C36 22 30 38 30 54 C42 50 50 40 50 12 Z" opacity="0.7" />
      <path d="M50 12 C64 22 70 38 70 54 C58 50 50 40 50 12 Z" opacity="0.7" />
      <path d="M50 14 C24 24 12 42 8 54 C24 52 38 46 50 14 Z" opacity="0.5" />
      <path d="M50 14 C76 24 88 42 92 54 C76 52 62 46 50 14 Z" opacity="0.5" />
    </g>
  </svg>
);
