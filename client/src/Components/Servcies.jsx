import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const ServicesSection = () => {
  // 1. Update the data to include specific images for each service
  const services = [
    {
      id: 1,
      title: "Web Design & Development",
      description: "They may conduct initial consultations, perform audits and assessments, and develop customized strategies and solutions.",
      // Image for Web Design (Workspace/Code)
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Digital Marketing",
      description: "They may conduct initial consultations, perform audits and assessments, and develop customized strategies and solutions.",
      // Image for Digital Marketing (Analytics/Graphs)
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // 2. Create state to hold the current image (Default to the first service's image)
  const [activeImage, setActiveImage] = useState(services[0].image);

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-purple-500 selection:text-white overflow-hidden relative">
      
      {/* Shape Section */}
      <div className="bg-white w-full lg:w-[75%] rounded-br-[80px] lg:rounded-br-[200px] pt-16 pb-24 px-6 md:px-16 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block bg-purple-100 text-purple-700 font-semibold px-4 py-2 rounded-full text-sm mb-6">
            Our Best Service For You
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight tracking-tight">
            Provide The Best Service With
            Out Of The Box Ideas<span className="text-purple-600">!</span>
          </h1>
        </div>
      </div>

      {/* Button */}
      <div className="absolute top-12 right-6 md:top-28 md:right-16 z-20">
        <button className="group w-24 h-24 md:w-36 md:h-36 rounded-full border border-gray-600 text-white flex items-center justify-center text-center text-sm md:text-base hover:bg-purple-600 hover:border-purple-600 transition-all duration-300 cursor-pointer">
          <span className="group-hover:scale-110 transition-transform leading-tight">
            View <br /> All Services
          </span>
        </button>
      </div>

      {/* Bottom Content Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Service List */}
        <div className="space-y-6">
          {services.map((service) => (
            <div 
              key={service.id}
              // 3. WHEN HOVER STARTS: Update the activeImage state
              onMouseEnter={() => setActiveImage(service.image)}
              className="group border border-gray-800 rounded-3xl p-6 md:p-8 hover:border-gray-600 transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-white transition-colors">
                    {service.id}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center group-hover:bg-white group-hover:text-black text-gray-500 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed pl-14">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: Image Card */}
        <div className="relative mt-10 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md rotate-6 hover:rotate-0 transition-transform duration-500 ease-out">
            <div className="bg-gray-200 rounded-[2rem] overflow-hidden shadow-2xl">
              
              {/* 4. Use the 'activeImage' state here instead of a hardcoded URL */}
              <img 
                key={activeImage} // Adding key forces a small refresh animation
                src={activeImage} 
                alt="Service preview" 
                className="w-full h-[400px] object-cover animate-in fade-in duration-500"
              />
              
              <div className="absolute bottom-0 right-0 p-6 bg-white/90 backdrop-blur-sm w-full rounded-t-[2rem]">
                 <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-yellow-400" />
                    <div className="h-8 w-8 rounded-full bg-red-400 -ml-4" />
                    <div className="h-8 w-8 rounded-full bg-blue-400 -ml-4" />
                 </div>
                 <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                 <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesSection;