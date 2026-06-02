import React, { useState, useEffect } from "react";
import { X, ChevronLeft, Share2 } from "lucide-react";
import { events } from "../data/events";

// Import all gallery images
import poster1 from "../assets/gallery/5_June_Leadership_in_Ramayana.jpeg";
import poster2 from "../assets/gallery/10_June_Sudhama_Charithram.jpeg";
import poster3 from "../assets/gallery/12_June_Hanuman_Chalisa.jpeg";
import poster4 from "../assets/gallery/13_June_Sundara_Kandam.jpeg";
import poster5 from "../assets/gallery/13_June_Bharatha's_Bakthi_&_Rama's_Dharma.jpeg";
import poster6 from "../assets/gallery/14_June_Women_power_in_Sanatan_Dharma.jpeg";
import poster7 from "../assets/gallery/15_June_Navavidha_Bakthi.jpeg";
import poster8 from "../assets/gallery/4-5_June_Sundarakanda_Parayanam.jpeg";
import poster9 from "../assets/gallery/4_June_Ramayana's_Relevance_in_the_Modern_World.jpeg";
import poster10 from "../assets/gallery/6_June_Sita_Kalyanam.jpeg";

const posterImages = [
  poster1,
  poster2,
  poster3,
  poster4,
  poster5,
  poster6,
  poster7,
  poster8,
  poster9,
  poster10,
];

// Poster to Event Mapping - maps poster index to event ID
// Matched by filename date + topic to events.js entries
const posterMetadata = [
  { eventId: 4 },   // poster1: 5_June_Leadership_in_Ramayana → Event 4 (5 Jun, Leadership)
  { eventId: 12 },  // poster2: 10_June_Sudhama_Charithram → Event 12 (10 Jun, Sudhama Charithram)
  { eventId: 14 },  // poster3: 12_June_Hanuman_Chalisa → Event 14 (12 Jun, Hanuman Chalisa)
  { eventId: 15 },  // poster4: 13_June_Sundara_Kandam → Event 15 (13 Jun, Sundara Kandam)
  { eventId: 16 },  // poster5: 13_June_Bharatha's_Bakthi_&_Rama's_Dharma → Event 16 (13 Jun, Bharatha's Bakthi & Rama's Dharma)
  { eventId: 17 },  // poster6: 14_June_Women_power_in_Sanatan_Dharma → Event 17 (14 Jun, Women power in Sanatan Dharma)
  { eventId: 19 },  // poster7: 15_June_Navavidha_Bakthi → Event 19 (15 Jun, Navavidha Bakthi)
  { eventId: 1 },   // poster8: 4-5_June_Sundarakanda_Parayanam → Event 1 (4 Jun, Sundarakanda Parayanam)
  { eventId: 2 },   // poster9: 4_June_Ramayana's_Relevance_in_the_Modern_World → Event 2 (4 Jun, Ramayana's Relevance in the Modern World)
  { eventId: 7 },   // poster10: 6_June_Sita_Kalyanam → Event 7 (6 Jun, Sita Kalyanam)
];

const generateShareMessage = (posterIndex) => {
  const metadata = posterMetadata[posterIndex];
  if (!metadata) return "Dr. Ranganji's UK Tour 2026 - Stories that inspire, values that transform\n\nMore info: https://ranganji-uktour.vercel.app/";
  
  const event = events.find(e => e.id === metadata.eventId);
  if (!event) return "Dr. Ranganji's UK Tour 2026 - Stories that inspire, values that transform\n\nMore info: https://ranganji-uktour.vercel.app/";

  let message = `Dr. Ranganji's UK Tour 2026 - Stories that inspire, values that transform\n\n`;
  message += `Topic: ${event.topic}\n\n`;
  message += `Date: ${event.date}`;
  if (event.session) {
    message += ` (${event.session})`;
  }
  message += `\n`;
  message += `Time: ${event.time || "TBA"}\n`;
  message += `Venue: ${event.venueName}\n`;
  message += `Address: ${event.address}\n`;
  
  if (event.contactName) {
    message += `\nContact: ${event.contactName}`;
    if (event.contactPhone) {
      message += `, ${event.contactPhone}`;
    }
    message += `\n`;
  }
  
  message += `\nMore info: https://ranganji-uktour.vercel.app/`;
  
  return message;
};

const ShareButton = ({ image, posterIndex }) => {
  const handleShare = async () => {
    const text = generateShareMessage(posterIndex);

    // Try native share API first (mobile)
    if (navigator.share) {
      try {
        const response = await fetch(image);
        const blob = await response.blob();
        const file = new File([blob], `poster-${posterIndex}.jpg`, { type: "image/jpeg" });

        await navigator.share({
          title: "Dr. Ranganji's UK Tour 2026 Event",
          text: text,
          files: [file],
        });
      } catch (err) {
        console.log("Share cancelled or failed");
      }
    } else {
      // Fallback: WhatsApp Web link with text
      const whatsappText = encodeURIComponent(text);
      window.open(`https://wa.me/?text=${whatsappText}`, "_blank");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
      style={{
        background: "rgba(37, 211, 102, 0.9)",
        color: "white",
        border: "1px solid rgba(37, 211, 102, 0.8)",
        boxShadow: "0 2px 8px rgba(37, 211, 102, 0.3)",
      }}
      onMouseEnter={(e) => {
        e.target.style.background = "rgba(37, 211, 102, 1)";
        e.target.style.boxShadow = "0 4px 12px rgba(37, 211, 102, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.target.style.background = "rgba(37, 211, 102, 0.9)";
        e.target.style.boxShadow = "0 2px 8px rgba(37, 211, 102, 0.3)";
      }}
    >
      <Share2 size={16} />
      Share
    </button>
  );
};

const FullscreenModal = ({ image, onClose, onNavigate, totalPosters, currentIndex }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(-1);
      if (e.key === "ArrowRight") onNavigate(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNavigate]);

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + totalPosters) % totalPosters;
    onNavigate(newIndex - currentIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % totalPosters;
    onNavigate(newIndex - currentIndex);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 overflow-auto p-4"
      onClick={onClose}
    >
      <div className="flex min-h-full items-center justify-center">
        {/* Close button */}
        <button
          onClick={onClose}
          className="fixed top-6 right-6 p-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors z-50"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Main image */}
        <img
          src={image}
          alt="Event poster fullscreen"
          className="max-w-full max-h-[85vh] rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />

        {/* Navigation buttons */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
          className="fixed left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white text-black hover:bg-gray-200 transition-colors z-40"
          aria-label="Previous poster"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="fixed right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white text-black hover:bg-gray-200 transition-colors z-40"
          aria-label="Next poster"
        >
          <ChevronLeft size={24} className="rotate-180" />
        </button>

        {/* Counter */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full text-black text-sm font-medium z-40">
          {currentIndex + 1} / {totalPosters}
        </div>

        {/* Share button */}
        <div className="fixed bottom-6 right-6 z-40">
          <ShareButton image={image} posterIndex={currentIndex} />
        </div>
      </div>
    </div>
  );
};

const GalleryModal = ({ onClose }) => {
  const [selectedPosterIndex, setSelectedPosterIndex] = useState(null);
  const [columnCount, setColumnCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumnCount(1);
      } else if (window.innerWidth < 1024) {
        setColumnCount(2);
      } else {
        setColumnCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBackFromFullscreen = () => {
    setSelectedPosterIndex(null);
  };

  const handleNavigate = (delta) => {
    setSelectedPosterIndex((prev) => {
      if (prev === null) return null;
      return (prev + delta + posterImages.length) % posterImages.length;
    });
  };

  if (selectedPosterIndex !== null) {
    return (
      <FullscreenModal
        image={posterImages[selectedPosterIndex]}
        onClose={handleBackFromFullscreen}
        onNavigate={handleNavigate}
        totalPosters={posterImages.length}
        currentIndex={selectedPosterIndex}
      />
    );
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 p-4"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between z-10 flex-shrink-0">
          <h2 className="font-display text-2xl" style={{ color: "var(--ink)" }}>
            Event Posters Gallery
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close gallery"
          >
            <X size={24} style={{ color: "var(--ink)" }} />
          </button>
        </div>

        {/* Gallery grid - Masonry style */}
        <div 
          className="p-6"
          style={{
            columnCount: columnCount,
            columnGap: "24px",
          }}
        >
          {posterImages.map((poster, index) => (
            <div
              key={index}
              className="group cursor-pointer relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all mb-6"
              style={{
                breakInside: "avoid",
              }}
              onClick={() => setSelectedPosterIndex(index)}
            >
              <img
                src={poster}
                alt={`Event poster ${index + 1}`}
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <p className="font-display text-lg font-semibold">Click to View</p>
                  <p className="text-sm">{index + 1} of {posterImages.length}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Gallery Trigger - Arrow button positioned above schedule */}
      <div className="flex flex-col items-center my-8">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-display text-lg font-semibold transition-all hover:scale-110 active:scale-95"
          style={{
            background: "var(--gold)",
            color: "white",
            boxShadow: "0 6px 20px rgba(168, 71, 15, 0.25)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 10px 28px rgba(168, 71, 15, 0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(168, 71, 15, 0.25)";
          }}
          aria-label="Open gallery"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-bounce"
            style={{ animationDelay: "0s" }}
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
          <span>View Event Posters</span>
        </button>
        <p className="text-xs italic mt-2" style={{ color: "var(--ink-mute)" }}>
          [click to open and share]
        </p>
      </div>

      {/* Gallery Modal */}
      {isOpen && <GalleryModal onClose={() => setIsOpen(false)} />}
    </>
  );
}
