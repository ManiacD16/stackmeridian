import React from "react";
import Particles from "./Particles";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <Particles color="rgba(255, 255, 255, 0.8)" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00205B] to-blue-400 rounded-2xl transform rotate-6 scale-95 opacity-20 blur-2xl" />
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-[#00205B] mb-6">
                Why Choose Stack Meridian?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With years of experience in the IT industry, we bring expertise,
                innovation, and reliability to every project. Our team of
                skilled professionals is committed to delivering excellence and
                driving your business forward.
              </p>
              <ul className="space-y-4">
                {[
                  "Expert team of developers and consultants",
                  "Proven track record of successful projects",
                  "Cutting-edge technology solutions",
                  "Reliable support and maintenance",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-[#00205B] group-hover:scale-150 transition-transform" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video aspect-w-16 aspect-h-20 rounded-2xl bg-gradient-to-br from-[#00205B] to-blue-400 shadow-xl transform hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl rounded-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};
