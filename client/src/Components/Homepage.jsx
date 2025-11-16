// Homepage.jsx
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";

import Homebannerimage1 from "../assets/banners/home1.png";
import HomeBackgroundImage from "../assets/banners/hero_bg_8.jpg";
import Slide2Image from "../assets/banners/ctbanner.jpg"; // your screenshot

const SLIDES = [
  {
    id: 1,
    type: "split", // left text + right image
    title: (
      <>
        Zero Upfront
        <br />
        <span className="flex items-center mt-2">100% Confidence</span>
      </>
    ),
    description:
      "350+ successful placements. AI-powered matching. Pay nothing until your hire joins — and thrives.",
    cta: "Brochure",
    image: Homebannerimage1,
  },
  {
    id: 2,
    type: "full", // image as background, text centered
    title: <>48 Hours to Your Next Hire.</>,
    description:
      "AI matches, human-verified professionals — delivered fast. No cost until they start.",
    trust: "Trusted by 25+ Tamil Nadu & Pondicherry businesses.",
    cta: "Start Hiring Now",
    image: Slide2Image,
  },
];

const Homepage = () => {
  // ---------- Carousel ----------
  const [slideIdx, setSlideIdx] = useState(0);
  const controls = useAnimation();

  // Auto‑play (7 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIdx((i) => (i + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // ---------- Text animation ----------
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };
  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  // ---------- Tilt image (only for slide 1) ----------
  const imgRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // ---------- Navigation ----------
  const goToSlide = (idx) => {
    setSlideIdx(idx);
    controls.start("visible");
  };

  const current = SLIDES[slideIdx];

  // -----------------------------------------------------------------
  //  Render based on slide type
  // -----------------------------------------------------------------
  if (current.type === "split") {
    // ---------- SLIDE 1: original split layout ----------
    return (
      <div
        className="relative min-h-[90vh] overflow-hidden pt-18 bg-cover bg-center"
        style={{ backgroundImage: `url(${HomeBackgroundImage})` }}
      >
        {/* blobs */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-200 to-orange-200 rounded-full opacity-30 blur-2xl z-0"></div>
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-500 rounded-full opacity-70 z-0 animate-move-horizontal"></div>
        <div className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-blue-400 rounded-full opacity-70 z-0 animate-move-horizontal"></div>

        <div className="container relative mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
          {/* LEFT TEXT */}
          <motion.div
            key={slideIdx}
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center p-8"
          >
            <motion.h1
              className="home-text-h1 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900"
              variants={textItemVariants}
            >
              {current.title}
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-gray-700 max-w-lg"
              variants={textItemVariants}
            >
              {current.description}
            </motion.p>

            <motion.div
              className="mt-5 flex items-center max-w-md"
              variants={textItemVariants}
            >
              <button className="wave-btn bg-[#ffc804] hover:bg-[#deb006] text-white font-semibold py-3 px-8 rounded-full mr-1.5 transition duration-300">
                {current.cta}
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE (tilt) */}
          <motion.div
            ref={imgRef}
            className="relative hidden md:flex items-center justify-center"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.img
              key={current.image}
              src={current.image}
              alt="Hero banner"
              className="w-auto h-auto max-h-[75vh] rounded-lg shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                transform: "translateZ(40px)",
              }}
            />
          </motion.div>
        </div>

        {/* Dots & arrows (shared) */}
        {renderNavigation()}
      </div>
    );
  }

  // ---------- SLIDE 2: full‑image background, centered text ----------
  return (
    <div
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${current.image})` }}
    >
      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="container relative mx-auto px-6 z-10 text-center">
        <motion.div
          key={slideIdx}
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Title */}
          <motion.h1
            className="home-text-h1 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg"
            variants={textItemVariants}
          >
            {current.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow"
            variants={textItemVariants}
          >
            {current.description}
            {current.trust && (
              <span className="block mt-3 text-base md:text-lg text-white/80">
                {current.trust}
              </span>
            )}
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-8 flex justify-center"
            variants={textItemVariants}
          >
            <button className="wave-btn bg-[#ffc804] hover:bg-[#deb006] text-white font-semibold py-3 px-10 rounded-full transition duration-300">
              {current.cta}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Dots & arrows (shared) */}
      {renderNavigation()}
    </div>
  );

  // -----------------------------------------------------------------
  //  Shared navigation component (dots + arrows)
  // -----------------------------------------------------------------
  function renderNavigation() {
    return (
      <>
        {/* DOTS */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === slideIdx ? "bg-[#ffc804] w-8" : "bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* LEFT ARROW */}
        <button
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-3 rounded-full z-20"
          onClick={() =>
            goToSlide((slideIdx - 1 + SLIDES.length) % SLIDES.length)
          }
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* RIGHT ARROW */}
        <button
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-3 rounded-full z-20"
          onClick={() => goToSlide((slideIdx + 1) % SLIDES.length)}
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </>
    );
  }
};

export default Homepage;