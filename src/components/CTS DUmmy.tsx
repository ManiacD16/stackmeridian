import React from "react";
import {
  ArrowRight,
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
} from "lucide-react";
import Particles from "./Particles";

const SocialIcon: React.FC<{ Icon: React.ElementType; href: string }> = ({
  Icon,
  href,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-blue-200 transition-colors duration-300"
  >
    <Icon size={24} />
  </a>
);

export const CTASection: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <Particles color="rgba(255, 255, 255, 0.8)" />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#00205B] to-blue-600 rounded-2xl p-12 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
          <h2 className="relative text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="relative text-blue-50 mb-8">
            Let's discuss how Stack Meridian can help you achieve your digital
            goals.
          </p>
          <a
            href="mailto:contact@stackmeridian.com"
            className="relative group inline-flex items-center justify-center bg-white text-[#00205B] px-6 py-3 rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 mb-8"
          >
            Contact Us Today
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="relative flex justify-center space-x-6 z-10">
            <SocialIcon
              Icon={Facebook}
              href="https://www.facebook.com/stackmeridian"
            />
            <SocialIcon
              Icon={Twitter}
              href="https://www.twitter.com/stackmeridian"
            />
            <SocialIcon
              Icon={LinkedIn}
              href="https://www.linkedin.com/company/stackmeridian"
            />
            <SocialIcon
              Icon={Instagram}
              href="https://www.instagram.com/stackmeridian"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
