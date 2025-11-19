import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
// Keep the default import style for 'react-countup'
import CountUp from 'react-countup'; 
import OfficeTeamVideo from '../assets/vector/video-img.jpg'; 

// --- FIX: Safely resolve the CountUp component ---
// This handles different ways bundlers (like Vite/Webpack) might export modules.
// It tries to find the component under .CountUp, .default, or uses the import directly.
const FinalCountUp = CountUp.CountUp || CountUp.default || CountUp; 

// --- Custom CountUp Component ---
const AnimatedCount = ({ end, duration = 1.5, start = 0, suffix, textClass, staticText }) => {
  return (
    <p className={`text-6xl font-bold mb-2 ${textClass}`}>
      {/* Now using the resolved FinalCountUp component */}
      <FinalCountUp 
        end={end}
        duration={duration}
        start={start}
        // Use the suffix prop for the small '+' sign to ensure smooth counting
        suffix={suffix ? '' : ''} 
        separator=""
        useEasing={true}
      />
      {/* Custom suffix for the '+' sign styling */}
      <span className="text-4xl align-top">{suffix}</span>
      {/* Descriptive static text, e.g., "States & 6 Countries" */}
      {staticText && <span className="text-lg font-normal ml-2">{staticText}</span>}
    </p>
  );
};

// --- Main Section Component ---
const CompanyStatusSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); 

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 font-sans bg-white" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* --- Left Column: Image/Video Area --- */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={OfficeTeamVideo}
            alt="Team working in office"
            className="w-full h-full object-cover min-h-[400px]"
          />
        </motion.div>

        {/* --- Right Column: Title & Status Numbers (Animated) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Status Tag */}
          <motion.span className="inline-block px-3 py-1 text-sm font-medium rounded-full text-purple-700 bg-purple-100 mb-4" variants={itemVariants}>
            Company Status
          </motion.span>

          {/* Main Heading */}
          <motion.h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 leading-tight" variants={itemVariants}>
            Building Brands That Inspire A Better Tomorrow
          </motion.h2>

          {/* --- Status Numbers Grid --- */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">

            {/* 1. Corporate Clients */}
            <motion.div className="py-6 border-b border-gray-200" variants={itemVariants}>
              <AnimatedCount end={25} suffix="+" textClass="text-purple-600" />
              <p className="text-lg text-gray-600">Corporate Clients</p>
            </motion.div>

            {/* 2. Candidates Placed */}
            <motion.div className="py-6 border-b border-gray-200" variants={itemVariants}>
              <AnimatedCount end={350} suffix="+" textClass="text-green-600" />
              <p className="text-lg text-gray-600">Candidates Placed</p>
            </motion.div>

            {/* 3. Hour Hiring Cycle */}
            <motion.div className="py-6" variants={itemVariants}>
              <AnimatedCount end={48} suffix="+" textClass="text-yellow-600" />
              <p className="text-lg text-gray-600">Hour Hiring Cycle</p>
            </motion.div>

            {/* 4. States & Countries */}
            <motion.div className="py-6" variants={itemVariants}>
              <AnimatedCount end={18} suffix="+" textClass="text-blue-600" />
              <p className="text-lg text-gray-600">States & 6 Countries</p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default CompanyStatusSection;