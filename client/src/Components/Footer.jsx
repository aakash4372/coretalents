import React from 'react';
import { Facebook, Twitter, Linkedin, Phone, Send } from 'lucide-react';
import Footeriamge from "../assets/vector/footer.png"

const Footer = () => {
  // Data for the columns to keep the JSX clean
  const links = {
    Resources: ['Blog', 'Pricing', 'FAQ', 'Events', 'Ebook & Guide'],
    Services: ['Web Page Design', 'WordPress Theme', 'Web Application', 'iOS Application', 'UX Research'],
  };

  return (
    <footer className="bg-[#050505] text-[#8a8a9e] pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column (Takes up wider space on large screens) */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <img src={Footeriamge} alt="Sassa Logo" className=" w-72 object-contain" />
            </div>
            
            <p className="text-sm leading-relaxed mb-8 max-w-xs">
Core Talents – AI-powered recruitment with 48-hour delivery, 95% fit rate, and hire-first-pay-later model. Trusted by 25+ corporates across India & GCC. Scale smarter, risk-free.            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Phone size={18} />} /> {/* Using Phone as generic Whatsapp placeholder */}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 flex flex-col sm:flex-row sm:justify-start lg:justify-end gap-12 sm:gap-20">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-white font-semibold text-lg mb-6 relative inline-block group">
                  {category}
                  
                  {/* Animated Underline Decoration */}
                  {/* Main static line */}
                  <span className="absolute -bottom-2 left-0 w-6 h-[3px] bg-[#5D5FEF] rounded-full"></span>
                  
                  {/* Moving secondary line (The "moving inside" part) */}
                  <span className="absolute -bottom-2 left-8 w-2 h-[3px] bg-[#5D5FEF] rounded-full animate-move-line"></span>
                </h3>
                
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item}>
                      <a 
                        href="#" 
                        className="text-sm hover:text-[#5D5FEF] transition-colors duration-200 block transform hover:translate-x-1 transition-transform"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-[#8a8a9e]">
            Copyright © 2025 <span className="text-[#5D5FEF]">Sassa</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Helper component for Social Icons to ensure consistent styling
const SocialIcon = ({ icon }) => (
  <a 
    href="#" 
    className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-[#5D5FEF] hover:text-white transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;