import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import BackgroundImage from '../assets/other/map.png';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Mary Crispy",
    role: "Student History",
    text: "SEO agencies specialize in optimizing websites to improve their search engine rankings and drive organic traffic. They offer a range of services tailored to different needs, from small businesses to there are large enterprises.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Robert Fox",
    role: "Marketing Director",
    text: "The team provided comprehensive audits and a clear roadmap for growth. Within three months, our organic traffic doubled, and we started ranking for key terms we had struggled with for years. Truly exceptional service.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Eleanor Pena",
    role: "E-commerce Manager",
    text: "Their technical SEO expertise helped us fix critical site architecture issues that were holding us back. The reporting is transparent, and the results speak for themselves. Highly recommended for any serious business.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const SeoAgencyTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentData = TESTIMONIALS[currentIndex];

  return (
  <div className="w-full min-h-[700px] bg-white flex items-center justify-center p-6 md:p-16 font-sans text-slate-800 overflow-hidden relative">
      
      {/* --- BACKGROUND IMAGE WITH OPACITY --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* You can import your local image here if needed, e.g., src={BackgroundImage} */}
        <img 
            src={BackgroundImage}
            alt="Office Background"
            className="w-full h-full object-cover opacity-[0.04]" 
        />
      </div>      {/* Increased gap from lg:gap-20 to lg:gap-40 for significantly more space between columns */}
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-40 items-center">
        
        {/* --- LEFT COLUMN: IMAGE SECTION --- */}
        <div className="relative flex justify-center lg:justify-end px-4 lg:px-0">
          
          {/* The Image Container */}
          <div className="relative w-full max-w-[400px] aspect-[4/5] md:aspect-square lg:aspect-[4/4.5]">
            
            {/* Decorative Quote Marks (Top Left) - With Blend Mode */}
            <div className="absolute -top-8 -left-8 md:-top-10 md:-left-12 flex gap-2 z-0 mix-blend-multiply opacity-90">
               <div className="w-8 h-16 md:w-10 md:h-20 bg-indigo-200 skew-x-[-12deg] rounded-sm"></div>
               <div className="w-8 h-16 md:w-10 md:h-20 bg-indigo-200 skew-x-[-12deg] rounded-sm mt-4"></div>
            </div>

            {/* The Thin Blue Frame - Skewed & Blended */}
            <div className="absolute inset-0 rounded-[3rem] border-[2px] border-indigo-300 z-10 transform skew-x-[-6deg] mix-blend-multiply"></div>

            {/* Main Image - Upright (Not Skewed) */}
            <div className="absolute inset-4 rounded-[2.5rem] overflow-hidden z-20 bg-indigo-50">
               <img 
                 key={currentIndex}
                 src={currentData.image} 
                 alt={currentData.name} 
                 className="w-full h-full object-cover animate-scaleIn"
               />
               {/* Optional Blend Overlay for Image */}
               <div className="absolute inset-0 bg-indigo-500/5 mix-blend-overlay pointer-events-none"></div>
            </div>

            {/* Background Blob Decoration - With Blend Mode */}
            <div className="absolute bottom-4 left-4 w-3/4 h-3/4 bg-indigo-100 rounded-[3rem] -z-10 transform translate-y-4 -translate-x-4 mix-blend-multiply opacity-60"></div>
          </div>

        </div>

        {/* --- RIGHT COLUMN: CONTENT SECTION --- */}
        <div className="flex flex-col items-start space-y-8 ">
          
          {/* Pill Badge */}
          <div className="bg-indigo-50 text-indigo-600 px-6 py-2 rounded-full text-sm font-bold tracking-wide">
            Testimonials
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            What Our Customers Say About SEO Agency?
          </h2>

          {/* Quote Text */}
          <div className="relative min-h-[120px]">
            <p 
              key={currentIndex}
              className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium animate-fadeIn"
            >
              "{currentData.text}"
            </p>
          </div>

          {/* Author Info */}
          <div>
             <h3 key={currentIndex + 'name'} className="text-2xl font-bold text-slate-900 animate-fadeIn">
               {currentData.name}
             </h3>
             <p key={currentIndex + 'role'} className="text-slate-500 text-sm uppercase tracking-wide mt-1 animate-fadeIn">
               {currentData.role}
             </p>
          </div>

          {/* Navigation Buttons */}
          <div className="w-full flex justify-end gap-4 mt-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-700 transition-all duration-300 active:scale-95 group"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-700 transition-all duration-300 active:scale-95 group"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SeoAgencyTestimonial;