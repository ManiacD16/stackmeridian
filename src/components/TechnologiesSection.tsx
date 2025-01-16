import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Wallet,
  FileCode2,
  Building2,
  Database,
  PaintBucket,
} from "lucide-react";
import Particles from "./Particles";

const TechCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  delay: number;
}> = ({ icon, title, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="w-16 h-16 bg-[#00205B]/10 rounded-full flex items-center justify-center mb-4"
      >
        {icon}
      </motion.div>
      <h3 className="text-lg font-semibold text-[#00205B] text-center group-hover:translate-y-1 transition-transform duration-300">
        {title}
      </h3>
    </motion.div>
  );
};

export const TechnologiesSection: React.FC = () => {
  return (
    <section id="technologies" className="py-20 relative overflow-hidden">
      <Particles color="rgba(255, 255, 255, 0.8)" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
            <span className="text-[#00205B] font-medium">Our Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#00205B] mb-4">
            Cutting-Edge Technologies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We specialize in delivering innovative solutions across a wide range
            of technologies
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <TechCard
            icon={<Cpu className="w-8 h-8 text-[#00205B]" />}
            title="Blockchain"
            delay={0}
          />
          <TechCard
            icon={<Wallet className="w-8 h-8 text-[#00205B]" />}
            title="Digital Wallets"
            delay={1}
          />
          <TechCard
            icon={<FileCode2 className="w-8 h-8 text-[#00205B]" />}
            title="Smart Contracts"
            delay={2}
          />
          <TechCard
            icon={<Building2 className="w-8 h-8 text-[#00205B]" />}
            title="DeFi"
            delay={3}
          />
          <TechCard
            icon={<Database className="w-8 h-8 text-[#00205B]" />}
            title="Crypto Banking"
            delay={4}
          />
          <TechCard
            icon={<PaintBucket className="w-8 h-8 text-[#00205B]" />}
            title="NFTs"
            delay={5}
          />
        </div>
      </div>
    </section>
  );
};
