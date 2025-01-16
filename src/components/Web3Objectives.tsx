import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useScrollDirection } from "../hooks/useScrollDirection";

const Card: React.FC<{
  title: string;
  description: string;
  imgSrc: string;
  gradient: string;
  index: number;
}> = ({ title, description, imgSrc, gradient, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const scrollDirection = useScrollDirection();

  React.useEffect(() => {
    if (inView && scrollDirection === "down") {
      controls.start("visible");
    } else if (!inView && scrollDirection === "up") {
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
        duration: 0.5,
        delay: index * 0.1,
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
      <img
        src={imgSrc || "/placeholder.svg"}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-all duration-700 group-hover:opacity-50`}
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-all duration-700">
        <div className="animate-pulse w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
      </div>
      <div className="absolute bottom-6 left-6 transform transition-all duration-500 group-hover:translate-y-0">
        <h3 className="text-white text-2xl font-bold mb-2 transition-opacity duration-700 group-hover:opacity-100">
          {title}
        </h3>
        <p className="text-white/80 max-w-sm text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export const Web3Objectives: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const scrollDirection = useScrollDirection();

  React.useEffect(() => {
    if (inView && scrollDirection === "down") {
      controls.start("visible");
    } else if (!inView && scrollDirection === "up") {
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
        staggerChildren: 0.1,
      },
    },
  };

  const cards = [
    {
      title: "BLOCKCHAIN",
      description:
        "Antier delivers breakthrough blockchain solutions to shape the next generation of enterprises to move smarter and faster.",
      imgSrc: "/placeholder.svg?height=450&width=300",
      gradient: "from-blue-700/90 to-blue-900/90",
    },
    {
      title: "METAVERSE",
      description:
        "Experience the next evolution of digital interaction in our immersive metaverse solutions for enterprise and entertainment.",
      imgSrc: "/placeholder.svg?height=450&width=300",
      gradient: "from-purple-800/90 to-indigo-900/90",
    },
    {
      title: "FINANCE SOLUTIONS",
      description:
        "Transforming financial services with innovative blockchain and DeFi solutions for the modern digital economy.",
      imgSrc: "/placeholder.svg?height=450&width=300",
      gradient: "from-blue-900/90 to-indigo-900/90",
    },
    {
      title: "ARTIFICIAL INTELLIGENCE",
      description:
        "Powering the future with advanced AI solutions that drive innovation and intelligent automation.",
      imgSrc: "/placeholder.svg?height=450&width=300",
      gradient: "from-indigo-900/90 to-blue-900/90",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900 via-black to-green-950 text-white font-robotoCondensed w-full bg-white py-12">
      <div className="max-w-full mx-auto px-4">
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-3xl md:text-4xl text-center mb-12 font-extrabold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent"
        >
          Delivering Web3 Strategic Objectives
        </motion.h1>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, index) => (
            <Card key={index} {...card} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
