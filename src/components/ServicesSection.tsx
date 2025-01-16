"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useScrollDirection } from "../hooks/useScrollDirection";
// import Particles from "./Particles";

interface ServiceCardProps {
  title: string;
  description: string;
  imgSrc: string;
  gradient: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imgSrc,
  gradient,
  index,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const scrollDirection = useScrollDirection();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!inView && scrollDirection === "down") {
      controls.start("hidden");
    }
  }, [controls, inView, scrollDirection]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={cardVariants}
      className="relative h-[450px] group overflow-hidden rounded-lg shadow-lg transition-all duration-500"
    >
      {/* Background Image */}
      <img
        src={imgSrc || "/placeholder.svg"}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
      />

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-all duration-700 group-hover:opacity-50`}
      />

      {/* Floating Decorative Effects */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-all duration-700">
        <div className="animate-pulse w-96 h-96 rounded-full bg-[#00205B]/20 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6 transform transition-all duration-500 group-hover:translate-y-0">
        <h3 className="text-white text-2xl font-bold mb-2 transition-opacity duration-700 group-hover:opacity-100 text-left">
          {title}
        </h3>
        <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-left">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export const ServicesSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const scrollDirection = useScrollDirection();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!inView && scrollDirection === "down") {
      controls.start("hidden");
    }
  }, [controls, inView, scrollDirection]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const services = [
    {
      title: "BLOCKCHAIN",
      description:
        "Stack Meridian delivers breakthrough blockchain solutions to shape the next generation of enterprises to move smarter and faster.",
      imgSrc: "/new.webp",
      gradient: "from-[#00205B]/90 to-blue-900/90",
    },
    {
      title: "METAVERSE",
      description:
        "Experience the next evolution of digital interaction in our immersive metaverse solutions for enterprise and entertainment.",
      imgSrc: "/pic1.jpg",
      gradient: "from-[#00205B]/90 to-blue-800/90",
    },
    {
      title: "FINANCE SOLUTIONS",
      description:
        "Transforming financial services with innovative blockchain and DeFi solutions for the modern digital economy.",
      imgSrc: "/pic5.jpg",
      gradient: "from-[#00205B]/90 to-blue-700/90",
    },
    {
      title: "ARTIFICIAL INTELLIGENCE",
      description:
        "Powering the future with advanced AI solutions that drive innovation and intelligent automation.",
      imgSrc: "/ai.webp",
      gradient: "from-[#00205B]/90 to-blue-600/90",
    },
  ];

  return (
    <section
      id="services"
      className="bg-gradient-to-br from-[#4d7dd7] via-[#001845] to-[#003087] text-white font-robotoCondensed w-full py-24"
    >
      <div className="max-w-full mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center space-y-10"
        >
          <div>
            {/* <Particles color="rgba(255, 255, 255, 0.8)" count={50} /> */}
            <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
              <span className="text-[#00205B] font-medium">Our Services</span>
            </div>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
              className="text-3xl md:text-4xl text-center   font-extrabold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text py-2 text-transparent"
            >
              Comprehensive IT Solutions
            </motion.h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              We provide end-to-end technology solutions tailored to meet your
              business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
