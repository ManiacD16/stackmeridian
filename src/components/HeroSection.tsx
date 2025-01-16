import React from "react";
import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
import Particles from "./Particles";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
      <Particles color="rgba(255, 255, 255, 0.8)" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-6"
          >
            <span className="text-[#00205B] font-medium">
              Innovate • Transform • Succeed
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00205B] to-blue-600">
              Building Tomorrow's
            </span>
            <br />
            Tech, Today
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
          >
            Stack Meridian helps businesses innovate and grow through
            cutting-edge technology solutions and expert consulting.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            {/* <button className="group bg-[#00205B] text-white px-6 py-3 rounded-lg hover:bg-[#003087] hover:scale-105 transition-all duration-300 flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border border-[#00205B] text-[#00205B] px-6 py-3 rounded-lg hover:bg-[#00205B] hover:text-white transition-all duration-300 flex items-center justify-center">
              Learn More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
