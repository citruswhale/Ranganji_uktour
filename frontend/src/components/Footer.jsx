import React from "react";
import { ExternalLink } from "lucide-react";

const Footer = () => {

  return (
    <>
      {/* Main Footer with QR Codes */}
      <section className="relative bg-gradient-to-br from-rose-900 via-pink-800 to-amber-800 text-white py-16">
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {/* Ramayana Study Circles Section */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdQ6s6Wd7PWouPuJFMt9cDcwD85Pcl-4T_1vVTEWmQ7HATyhg/viewform?usp=send_form"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                aria-label="Open Ramayana Classes registration form"
              >
                <svg
                height="140"
                width="140"
                viewBox="0 0 29 29"
                role="img"
                aria-label="QR Code for Ramayana Classes"
                style={{ pointerEvents: "none" }}
              >
                <path
                  fill="#ffffff"
                  d="M0,0 h29v29H0z"
                  shapeRendering="crispEdges"
                ></path>
                <path
                  fill="#78350f"
                  d="M0 0h7v1H0zM9 0h1v1H9zM11 0h2v1H11zM15 0h2v1H15zM18 0h1v1H18zM20 0h1v1H20zM22,0 h7v1H22zM0 1h1v1H0zM6 1h1v1H6zM9 1h1v1H9zM12 1h1v1H12zM18 1h1v1H18zM22 1h1v1H22zM28,1 h1v1H28zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 2h3v1H8zM12 2h1v1H12zM14 2h1v1H14zM16 2h1v1H16zM22 2h1v1H22zM24 2h3v1H24zM28,2 h1v1H28zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM11 3h2v1H11zM20 3h1v1H20zM22 3h1v1H22zM24 3h3v1H24zM28,3 h1v1H28zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h4v1H8zM13 4h3v1H13zM20 4h1v1H20zM22 4h1v1H22zM24 4h3v1H24zM28,4 h1v1H28zM0 5h1v1H0zM6 5h1v1H6zM8 5h2v1H8zM12 5h6v1H12zM20 5h1v1H20zM22 5h1v1H22zM28,5 h1v1H28zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22,6 h7v1H22zM8 7h1v1H8zM10 7h1v1H10zM13 7h1v1H13zM16 7h1v1H16zM18 7h1v1H18zM20 7h1v1H20zM0 8h1v1H0zM2 8h5v1H2zM9 8h4v1H9zM14 8h5v1H14zM22 8h5v1H22zM1 9h2v1H1zM4 9h2v1H4zM8 9h1v1H8zM10 9h3v1H10zM17 9h1v1H17zM20 9h1v1H20zM22 9h3v1H22zM28,9 h1v1H28zM3 10h4v1H3zM8 10h1v1H8zM10 10h1v1H10zM15 10h1v1H15zM18 10h1v1H18zM20 10h2v1H20zM23 10h2v1H23zM1 11h4v1H1zM8 11h2v1H8zM12 11h1v1H12zM14 11h2v1H14zM22 11h2v1H22zM25 11h1v1H25zM27 11h1v1H27zM0 12h3v1H0zM4 12h7v1H4zM15 12h3v1H15zM21 12h1v1H21zM25 12h2v1H25zM0 13h3v1H0zM5 13h1v1H5zM11 13h4v1H11zM16 13h1v1H16zM18 13h7v1H18zM28,13 h1v1H28zM0 14h2v1H0zM5 14h7v1H5zM13 14h5v1H13zM22 14h1v1H22zM25 14h2v1H25zM0 15h1v1H0zM3 15h2v1H3zM7 15h1v1H7zM9 15h1v1H9zM13 15h1v1H13zM15 15h1v1H15zM19 15h4v1H19zM24 15h1v1H24zM27 15h1v1H27zM0 16h1v1H0zM4 16h1v1H4zM6 16h2v1H6zM9 16h1v1H9zM11 16h2v1H11zM14 16h1v1H14zM16 16h3v1H16zM23 16h1v1H23zM25 16h2v1H25zM0 17h1v1H0zM4 17h2v1H4zM7 17h1v1H7zM10 17h2v1H10zM16 17h2v1H16zM20 17h5v1H20zM26 17h1v1H26zM28,17 h1v1H28zM0 18h1v1H0zM3 18h1v1H3zM5 18h2v1H5zM8 18h2v1H8zM11 18h1v1H11zM15 18h2v1H15zM18 18h1v1H18zM20 18h1v1H20zM23 18h1v1H23zM26 18h1v1H26zM0 19h1v1H0zM2 19h1v1H2zM10 19h3v1H10zM14 19h1v1H14zM16 19h1v1H16zM18 19h3v1H18zM22 19h2v1H22zM27 19h1v1H27zM0 20h1v1H0zM2 20h3v1H2zM6 20h1v1H6zM8 20h2v1H8zM11 20h1v1H11zM15 20h2v1H15zM19 20h6v1H19zM26,20 h3v1H26zM8 21h1v1H8zM12 21h3v1H12zM20 21h1v1H20zM24,21 h5v1H24zM0 22h7v1H0zM10 22h1v1H10zM13 22h8v1H13zM22 22h1v1H22zM24 22h3v1H24zM0 23h1v1H0zM6 23h1v1H6zM8 23h1v1H8zM11 23h1v1H11zM13 23h1v1H13zM15 23h1v1H15zM18 23h1v1H18zM20 23h1v1H20zM24 23h1v1H24zM28,23 h1v1H28zM0 24h1v1H0zM2 24h3v1H2zM6 24h1v1H6zM8 24h3v1H8zM12 24h1v1H12zM14 24h1v1H14zM16 24h3v1H16zM20 24h5v1H20zM26 24h2v1H26zM0 25h1v1H0zM2 25h3v1H2zM6 25h1v1H6zM8 25h1v1H8zM10 25h2v1H10zM13 25h1v1H13zM16 25h1v1H16zM19 25h1v1H19zM25,25 h4v1H25zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM8 26h2v1H8zM11 26h1v1H11zM15 26h1v1H15zM19 26h1v1H19zM21 26h7v1H21zM0 27h1v1H0zM6 27h1v1H6zM9 27h4v1H9zM15 27h1v1H15zM18 27h1v1H18zM20 27h1v1H20zM22 27h1v1H22zM25 27h1v1H25zM27 27h1v1H27zM0 28h7v1H0zM8 28h1v1H8zM11 28h2v1H11zM14 28h1v1H14zM17 28h1v1H17zM19 28h1v1H19zM21 28h1v1H21zM23 28h2v1H23zM26 28h1v1H26z"
                  shapeRendering="crispEdges"
                ></path>
              </svg>
              <p className="text-center text-amber-800 text-[10px] mt-2 font-medium">
                Join Ramayana Classes
              </p>
            </a>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold mb-2">
                Join Ramayana Study Circles
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-3">
                Interested in joining weekly Ramayana classes conducted by
                WEBOLIM? Scan the QR code or click below to register your
                interest.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdQ6s6Wd7PWouPuJFMt9cDcwD85Pcl-4T_1vVTEWmQ7HATyhg/viewform?usp=send_form"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-100 text-amber-900 hover:bg-white px-4 py-2 rounded-lg transition-all font-semibold cursor-pointer"
                style={{ pointerEvents: "auto", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <ExternalLink className="w-4 h-4" style={{ pointerEvents: "none" }} />
                Register via Google Form
              </a>
            </div>
          </div>

          {/* Web of Life Makers Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6" style={{ marginTop: "2rem" }}>
            <a
              href="https://webolim.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Open WEBOLIM website"
            >
              <svg
                height="140"
                width="140"
                viewBox="0 0 25 25"
                role="img"
                aria-label="QR Code for WEBOLIM"
                style={{ pointerEvents: "none" }}
              >
                <path
                  fill="#ffffff"
                  d="M0,0 h25v25H0z"
                  shapeRendering="crispEdges"
                ></path>
                <path
                  fill="#78350f"
                  d="M0 0h7v1H0zM11 0h3v1H11zM18,0 h7v1H18zM0 1h1v1H0zM6 1h1v1H6zM8 1h1v1H8zM10 1h1v1H10zM14 1h1v1H14zM16 1h1v1H16zM18 1h1v1H18zM24,1 h1v1H24zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM11 2h1v1H11zM13 2h1v1H13zM18 2h1v1H18zM20 2h3v1H20zM24,2 h1v1H24zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM11 3h3v1H11zM15 3h2v1H15zM18 3h1v1H18zM20 3h3v1H20zM24,3 h1v1H24zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h1v1H8zM10 4h2v1H10zM14 4h1v1H14zM16 4h1v1H16zM18 4h1v1H18zM20 4h3v1H20zM24,4 h1v1H24zM0 5h1v1H0zM6 5h1v1H6zM10 5h1v1H10zM13 5h2v1H13zM16 5h1v1H16zM18 5h1v1H18zM24,5 h1v1H24zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18,6 h7v1H18zM8 7h4v1H8zM13 7h1v1H13zM15 7h2v1H15zM1 8h1v1H1zM3 8h4v1H3zM8 8h2v1H8zM11 8h1v1H11zM13 8h1v1H13zM16 8h3v1H16zM20 8h2v1H20zM23 8h1v1H23zM0 9h6v1H0zM9 9h8v1H9zM19 9h5v1H19zM0 10h3v1H0zM5 10h2v1H5zM8 10h1v1H8zM12 10h2v1H12zM15 10h2v1H15zM18 10h2v1H18zM21 10h1v1H21zM24,10 h1v1H24zM1 11h1v1H1zM4 11h2v1H4zM7 11h2v1H7zM10 11h1v1H10zM12 11h2v1H12zM18 11h2v1H18zM21,11 h4v1H21zM0 12h1v1H0zM2 12h2v1H2zM6 12h1v1H6zM9 12h1v1H9zM13 12h1v1H13zM16 12h1v1H16zM18 12h1v1H18zM24,12 h1v1H24zM0 13h1v1H0zM2 13h2v1H2zM5 13h1v1H5zM8 13h4v1H8zM13 13h4v1H13zM20 13h1v1H20zM23 13h1v1H23zM0 14h4v1H0zM6 14h2v1H6zM11 14h2v1H11zM14 14h2v1H14zM18 14h1v1H18zM20,14 h5v1H20zM0 15h1v1H0zM7 15h1v1H7zM10 15h1v1H10zM14 15h1v1H14zM16 15h1v1H16zM19 15h1v1H19zM21 15h2v1H21zM24,15 h1v1H24zM0 16h1v1H0zM3 16h2v1H3zM6 16h2v1H6zM10 16h1v1H10zM12 16h1v1H12zM14 16h1v1H14zM16 16h5v1H16zM22 16h2v1H22zM8 17h2v1H8zM12 17h1v1H12zM16 17h1v1H16zM20 17h1v1H20zM22 17h2v1H22zM0 18h7v1H0zM10 18h1v1H10zM13 18h2v1H13zM16 18h1v1H16zM18 18h1v1H18zM20 18h1v1H20zM24,18 h1v1H24zM0 19h1v1H0zM6 19h1v1H6zM8 19h2v1H8zM11 19h1v1H11zM15 19h2v1H15zM20 19h1v1H20zM23 19h1v1H23zM0 20h1v1H0zM2 20h3v1H2zM6 20h1v1H6zM8 20h5v1H8zM15 20h6v1H15zM24,20 h1v1H24zM0 21h1v1H0zM2 21h3v1H2zM6 21h1v1H6zM8 21h1v1H8zM11 21h4v1H11zM16 21h3v1H16zM23,21 h2v1H23zM0 22h1v1H0zM2 22h3v1H2zM6 22h1v1H6zM9 22h2v1H9zM13 22h2v1H13zM16 22h2v1H16zM20,22 h5v1H20zM0 23h1v1H0zM6 23h1v1H6zM8 23h1v1H8zM10 23h2v1H10zM13 23h1v1H13zM19 23h2v1H19zM22,23 h3v1H22zM0 24h7v1H0zM9 24h2v1H9zM13 24h2v1H13zM16 24h1v1H16zM21 24h1v1H21zM24,24 h1v1H24z"
                  shapeRendering="crispEdges"
                ></path>
              </svg>
              <p className="text-center text-amber-800 text-[10px] mt-2 font-medium">
                webolim.org
              </p>
            </a>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold mb-2">Web of Life Makers</h3>
              <p className="text-amber-200 text-sm mb-1">WEBOLIM</p>
              <p className="text-stone-300 text-sm leading-relaxed mb-3">
                Scan the QR code or visit the website to learn more about
                Ramayana study circles, workshops, and resources by Dr. R.
                Rangan Ji.
              </p>
              <a
                href="https://webolim.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-100 text-amber-900 hover:bg-white px-4 py-2 rounded-lg transition-all font-semibold cursor-pointer"
                style={{ pointerEvents: "auto", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <ExternalLink className="w-4 h-4" style={{ pointerEvents: "none" }} />
                webolim.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Tour Information Section */}
    <section className="relative bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 text-white py-8 border-t-4 border-amber-700">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Tour Details */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-1">Dr. R. Rangan Ji — UK Tour 2026</h4>
            <p className="text-amber-200 text-sm">June 4 – June 17 · Multiple Locations Across UK</p>
          </div>

          {/* Center: Tour Contact */}
          <div className="text-center">
             <div className="text-white text-base font-semibold">
              Tour Contact: 
            </div>
            <div className="text-amber-300 text-base font-semibold">
              Shwetha S — +44 78990 86630
            </div>
            <div className="text-amber-300 text-base font-semibold">
              Webolim Official — +91 93696 37283
            </div>
          </div>

          {/* Right: Website Info */}
          <div className="text-center md:text-right">
            <p className="text-white text-sm mb-2">Web of Life Makers (WEBOLIM)</p>
            <a href="https://webolim.org/" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-100 underline transition-colors font-semibold">webolim.org</a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Footer;
